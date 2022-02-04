# This Python Lambda is an example Chime SipMediaApplcation to demostrate the
# CallAndBridge action. Incoming calls are greeted with a welcome message,
# before being bridged to a PSTN destination. This sample uses a DynamoDB
# table to maintain mappings of dialed numbers to destination PSTN numbers.
# The app uses Lambda environment variables and a DynamoDB table that contains
# dialed_number & destination_number keys. The Lambda requires a role with
# permissions to Get* items from the required DynamoDB table. An environment
# variable "LoopGreetingWhileRinging" when set to True will loop the specified
# greeting while the Outbound is setup, if set to False will play the greeting
# in full before setting up the Outbound call.

import os
import json
import boto3
import logging
from botocore.client import Config

# Set LogLevel using environment variable, fallback to INFO if not present
logger = logging.getLogger()
try:
    log_level = os.environ["LogLevel"]
    if log_level not in ["INFO", "DEBUG"]:
        log_level = "INFO"
except:
    log_level = "INFO"
logger.setLevel(log_level)

# Load environment variables
forwarding_table_name = os.environ["CallForwardingTableName"]
wav_bucket = os.environ["WavBucketName"]
loop_flag = os.environ["LoopGreetingWhileRinging"]

# Setup DynamoDB interface client to query number mappings
client_config = Config(connect_timeout=2, read_timeout=2, retries={"max_attempts": 5})
dynamodb_client = boto3.client("dynamodb", config=client_config, region_name=os.environ["AWS_REGION"])


# This is the entry point for all incoming events from Chime SipMediaApplications
def lambda_handler(event, context):

    # Extract all the elements from the event that we will need for processing
    event_type = event["InvocationEventType"]
    participants = event["CallDetails"]["Participants"]
    call_id = participants[0]["CallId"]
    to_number = participants[0]["To"]
    from_number = participants[0]["From"]

    # For consistent and detail logging, set a prefix format that can be used by all functions
    global log_prefix
    log_prefix = "Call-ID:{} {} From:[{}] To:[{}]: ".format(call_id, event_type, from_number, to_number)

    if event_type == "NEW_INBOUND_CALL":
        logger.info("RECV {} {}".format(log_prefix, "New inbound call initiated"))
        return new_call_handler(call_id, to_number)

    elif event_type == "HANGUP":
        logger.info("RECV {} {}".format(log_prefix, "Hangup event received"))
        return hangup_handler(participants)

    elif event_type == "RINGING":
        logger.info("RECV {} {}".format(log_prefix, "Ringing event received"))
        return ()

    elif event_type == "ACTION_SUCCESSFUL":
        return action_success_handler(event)

    elif event_type == "ACTION_FAILED":
        logger.error(
            "RECV {} {} {} {}".format(
                log_prefix, event["ActionData"]["ErrorType"], event["ActionData"]["ErrorMessage"], json.dumps(event)
            )
        )
        return unable_to_connect(call_id)

    elif event_type == "INVALID_LAMBDA_RESPONSE":
        logger.error(
            "RECV {} : {} : {} : {}".format(log_prefix, event["ErrorType"], event["ErrorMessage"], json.dumps(event))
        )
        return unable_to_connect(call_id)

    else:
        logger.error("RECV {} [Unhandled event] {}".format(log_prefix, json.dumps(event)))
        return unable_to_connect(call_id)


def new_call_handler(call_id, dialed_number):
    destination_number = ddb_get_destination(dialed_number)
    if destination_number:

        if loop_flag == "True":
            # Loop Audio Greeting until Outbound call answers, cut greeting audio as soon as Outbound call answers
            logger.info("SEND {} {}".format(log_prefix, "Sending CallAndBridge action with greeting ringback"))
            return respond(
                call_and_bridge_to_pstn_with_greeting(
                    dialed_number, destination_number, "please_wait_while_we_try_to_connect_you.wav"
                )
            )

        else:
            # Play Audio Greeting fully and then bridge to Outbound PSTN
            logger.info("SEND {} {}".format(log_prefix, "Sending PlayAudio, CallAndBridge actions"))
            return respond(
                play_audio(call_id, "please_wait_while_we_try_to_connect_you.wav"),
                call_and_bridge_to_pstn(dialed_number, destination_number),
            )

    else:
        logger.info("NONE {} {}".format(log_prefix, "No entry found in database - sending hangup"))
        return unable_to_connect(call_id)


def hangup_handler(participants):
    # When we receive a hangup event, we make sure to tear down any calls still connected
    for call in participants:
        if call["Status"] == "Connected":
            return respond(hangup_action(call["CallId"]))
    logger.info("NONE {} All calls have been hungup".format(log_prefix))
    return respond()


# A DDB table keeps a mapping of dialed number (called/to number) to destination number (number to be bridged to).
# We query the destination number using the dialed number.
def ddb_get_destination(to_number):
    try:
        response = dynamodb_client.get_item(
            Key={
                "dialed_number": {
                    "S": str(to_number),
                },
            },
            TableName=forwarding_table_name,
        )
        if "Item" in response:
            return response["Item"]["destination_number"]["S"]
    except Exception as err:
        logger.error("DynamoDB Query error: failed to fetch data from table. Error: ", exc_info=err)
        return None


# If we receive an ACTION_SUCCESSFUL event we can take further actions,
# or default to responding with a NoOp (empty set of actions)
def action_success_handler(event):
    action = event["ActionData"]["Type"]
    if action == "Answer":
        return respond()
    elif action == "Hangup":
        return respond()
    elif action == "CallAndBridge":
        logger.info("RECV {} Connected to Outbound call".format(log_prefix))
        return respond()
    return respond()


# A wrapper for all responses back to the service
def respond(*actions):
    return {"SchemaVersion": "1.0", "Actions": [*actions]}


# SipResponseCode can be parameterized. Supported values: '480' - Unavailable, '486' - Busy, '0' - Terminated
# To read more on customizing the hangup action, see https://docs.aws.amazon.com/chime/latest/dg/hangup.html
def hangup_action(call_id):
    logger.info("SEND {} {} {}".format(log_prefix, "Sending HANGUP action to Call-ID", call_id))
    return {"Type": "Hangup", "Parameters": {"CallId": call_id, "SipResponseCode": "0"}}


# Used for playing audio greetings to callers - files should be stored in S3, with the bucket name as a Lambda environment variable
def play_audio(call_id, audio_file):
    return {
        "Type": "PlayAudio",
        "Parameters": {"CallId": call_id, "AudioSource": {"Type": "S3", "BucketName": wav_bucket, "Key": audio_file}},
    }


def call_and_bridge_to_pstn(caller_id, destination):
    return {
        "Type": "CallAndBridge",
        "Parameters": {
            "CallTimeoutSeconds": 30,
            "CallerIdNumber": caller_id,
            "Endpoints": [{"Uri": destination, "BridgeEndpointType": "PSTN"}],
        },
    }


def call_and_bridge_to_pstn_with_greeting(caller_id, destination, audio_file):
    return {
        "Type": "CallAndBridge",
        "Parameters": {
            "CallTimeoutSeconds": 30,
            "CallerIdNumber": caller_id,
            "RingbackTone": {"Type": "S3", "BucketName": os.environ["WavBucketName"], "Key": audio_file},
            "Endpoints": [{"Uri": destination, "BridgeEndpointType": "PSTN"}],
        },
    }


# A predefined set of actions that plays an error to the caller and then hangs up
def unable_to_connect(call_id):
    return respond(play_audio(call_id, "we_were_unable_to_connect_your_call.wav"), hangup_action(call_id))
