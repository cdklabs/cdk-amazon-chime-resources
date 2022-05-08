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

chimemessaging = boto3.client("chime-sdk-messaging")
ssm = boto3.client("ssm")


def modify_processor(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_processor(v)
        else:
            # print(f"k: {k}")
            if k == "executionOrder":
                print(f"Converting {k}")
                v = int(v)
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            # print(f"{k}: {v}")
    return d


def create_channel_flow(
    uid,
    name=None,
    clientRequestToken=None,
    processors=None,
    tags=None,
    appInstanceArn=None,
    **kwargs,
):
    logger.info(f"Creating a new Amazon Chime SDK Messaging Channel Flow")

    # print(processors)

    # fixed_processors = dict((k[0].upper() + k[1:], v) for k, v in processors[0].items())
    fixed_proccessors = []

    for processor in processors:
        # print(processor)
        fixed_proccessors.append(modify_processor(processor))

    print(fixed_proccessors)
    params = {}
    params["Name"] = name
    params["AppInstanceArn"] = appInstanceArn
    params["Processors"] = fixed_proccessors
    params["ClientRequestToken"] = clientRequestToken
    if tags:
        params["Tags"] = tags
    logger.info(f"Params to use: {params}")
    try:
        channel_flow_arn = chimemessaging.create_channel_flow(**params)["ChannelFlowArn"]
        print(channel_flow_arn)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.put_parameter(
            Name="/chime/channelFlowArn/" + uid,
            Description="channelFlowArn",
            Overwrite=True,
            Value=channel_flow_arn,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return channel_flow_arn


def delete_channel_flow(uid):
    logger.info(f"Deleting an Amazon Chime SDK Messaging App Instance")
    try:
        channel_flow_to_delete = ssm.get_parameter(Name="/chime/channelFlowArn/" + str(uid),)[
            "Parameter"
        ]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    try:
        chimemessaging.delete_channel_flow(ChannelFlowArn=channel_flow_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
