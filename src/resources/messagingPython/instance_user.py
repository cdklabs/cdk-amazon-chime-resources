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

chime = boto3.client("chime-sdk-identity")
ssm = boto3.client("ssm")


def create_app_instance_user(
    uid,
    name=None,
    metadata=None,
    clientRequestToken=None,
    appInstanceArn=None,
    appInstanceUserId=None,
    **kwargs,
):
    logger.info(f"Creating App Instance User: {uid}")
    params = {}
    params["Name"] = name
    params["AppInstanceArn"] = appInstanceArn
    params["AppInstanceUserId"] = appInstanceUserId
    if metadata:
        params["Metadata"] = metadata
    if clientRequestToken:
        params["ClientRequestToken"] = clientRequestToken
    logger.info(f"Params to use: {params}")
    try:
        app_instance_user_arn = chime.create_app_instance_user(**params)["AppInstanceUserArn"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    try:
        ssm.put_parameter(
            Name="/chime/appInstanceUserId/" + uid,
            Description="appInstanceUserId",
            Overwrite=True,
            Value=app_instance_user_arn,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return app_instance_user_arn


def delete_app_instance_user(uid):
    logger.info(f"Deleting an Amazon Chime SDK Messaging User: {uid}")
    try:
        app_instance_user_to_delete = ssm.get_parameter(Name="/chime/appInstanceUserId/" + str(uid),)[
            "Parameter"
        ]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    try:
        chime.delete_app_instance_user(AppInstanceUserArn=app_instance_user_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.delete_parameter(
            Name="/chime/appInstanceUserId/" + str(uid),
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
