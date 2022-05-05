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


def create_messaging_app_instance(
    uid,
    name=None,
    metadata=None,
    client_request_token=None,
    **kwargs,
):
    logger.info(f"Creating a new Amazon Chime SDK Messaging App Instance")
    try:
        app_instance_arn = chime.create_app_instance(
            Name=name, Metadata=metadata, ClientRequestToken=client_request_token
        )["AppInstanceArn"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.put_parameter(
            Name="/chime/appInstanceArn/" + uid,
            Description="appInstanceArn",
            Overwrite=True,
            Value=app_instance_arn,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return app_instance_arn


def delete_messaging_app_instance(uid):
    logger.info(f"Deleting an Amazon Chime SDK Messaging App Instance")
    try:
        app_instance_to_delete = ssm.get_parameter(Name="/chime/appInstanceArn/" + str(uid),)[
            "Parameter"
        ]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    try:
        chime.delete_app_instance(AppInstanceArn=app_instance_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
