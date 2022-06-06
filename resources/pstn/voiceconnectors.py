import boto3
import logging
import os

logger = logging.getLogger()
try:
    log_level = os.environ["LogLevel"]
    if log_level not in ["INFO", "DEBUG"]:
        log_level = "INFO"
except:
    log_level = "INFO"
logger.setLevel(log_level)

chime = boto3.client("chime")
ssm = boto3.client("ssm")


def build_voice_connector(uid, region, name, encryption):

    if encryption == "false":
        require_encryption = False
    else:
        require_encryption = True

    logger.info(f"Name: {name}")
    logger.info(f"AwsRegion: {region}")
    logger.info(f"RequireEncrpytion: {require_encryption}")

    try:
        voice_connector_id = chime.create_voice_connector(
            Name=name, AwsRegion=region, RequireEncryption=require_encryption
        )["VoiceConnector"]["VoiceConnectorId"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.put_parameter(
            Name="/chime/voiceConnector/" + uid,
            Description="Voice Connector Ordered",
            Overwrite=True,
            Value=voice_connector_id,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return voice_connector_id


def build_streaming(voice_connector_id, notificationTargets, dataRetention):
    streaming_notification_targets = []
    for notification_target in notificationTargets:
        streaming_notification_targets.append({"NotificationTarget": notification_target})

    logger.info(f"Streaming Notification Targets: {streaming_notification_targets}")
    try:
        chime.put_voice_connector_streaming_configuration(
            VoiceConnectorId=voice_connector_id,
            StreamingConfiguration={
                "DataRetentionInHours": int(dataRetention),
                "Disabled": False,
                "StreamingNotificationTargets": streaming_notification_targets,
            },
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    return True


def build_termination(voice_connector_id, callingRegions, terminationCidrs):
    try:
        chime.put_voice_connector_termination(
            VoiceConnectorId=voice_connector_id,
            Termination={
                "CallingRegions": callingRegions,
                "CidrAllowedList": terminationCidrs,
                "Disabled": False,
            },
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    return True


def build_origination(voice_connector_id, origination):
    routes = []
    for route in origination:
        transformed_route = {}
        for key in route:
            if key == "host" or key == "protocol":
                transformed_route[key.capitalize()] = route[key]
            else:
                transformed_route[key.capitalize()] = int(route[key])
        routes.append(transformed_route)

    logger.info(f"Routes: {routes}")

    try:
        chime.put_voice_connector_origination(
            VoiceConnectorId=voice_connector_id,
            Origination={
                "Routes": routes,
                "Disabled": False,
            },
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)


def create_voice_connector(
    uid,
    region=None,
    name=None,
    encryption=None,
    termination=None,
    origination=None,
    streaming=None,
    **kwargs,
):
    logger.info(f"Creating a new Voice Connector: {uid}")
    voice_connector_id = build_voice_connector(uid, region, name, encryption)
    logger.info(f"Voice Connector Id: {voice_connector_id}")

    if streaming:
        logger.info(f"Streaming: {streaming}")
        build_streaming(voice_connector_id, streaming["notificationTargets"], streaming["dataRetention"])

    if termination:
        logger.info(f"Termination CIDRs: {termination}")
        build_termination(voice_connector_id, termination["callingRegions"], termination["terminationCidrs"])

    if origination:
        logger.info(f"Origination IPs: {origination}")
        build_origination(voice_connector_id, origination)

    return voice_connector_id


def delete_voice_connector(uid):
    logger.info(f"Deleting Voice Connector: {uid}")
    try:
        voice_connector_to_delete = ssm.get_parameter(Name="/chime/voiceConnector/" + str(uid))["Parameter"]["Value"]
        logger.info(f"Voice Connector to Delete: {voice_connector_to_delete}")
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        associated_phone_numbers = chime.list_phone_numbers(
            FilterName="VoiceConnectorId", FilterValue=voice_connector_to_delete
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    logger.info(f"Associated Phone Numbers: {associated_phone_numbers}")

    if associated_phone_numbers["PhoneNumbers"]:
        phone_numbers_to_disassociate = []
        for phone_number in associated_phone_numbers["PhoneNumbers"]:
            phone_numbers_to_disassociate.append(phone_number["PhoneNumberId"])
        logger.info(f"Phone Numbers to Disassociate: {phone_numbers_to_disassociate}")
        try:
            chime.disassociate_phone_numbers_from_voice_connector(
                VoiceConnectorId=voice_connector_to_delete, E164PhoneNumbers=phone_numbers_to_disassociate
            )
        except Exception as e:
            error = {"error": f"Exception thrown: {e}"}
            logger.error(error)
            raise RuntimeError(error)

    try:
        chime.delete_voice_connector(VoiceConnectorId=voice_connector_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.delete_parameter(
            Name="/chime/voiceConnector/" + str(uid),
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return None
