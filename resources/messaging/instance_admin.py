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


def create_app_instance_admin(
    uid,
    appInstanceArn=None,
    appInstanceAdminArn=None,
    **kwargs,
):
    logger.info(f"Creating App Instance Admin: {uid}")
    params = {}
    params["AppInstanceAdminArn"] = appInstanceAdminArn
    params["AppInstanceArn"] = appInstanceArn
    logger.info(f"Params to use: {params}")
    try:
        app_instance_admin = chime.create_app_instance_admin(**params)["AppInstanceAdmin"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    try:
        ssm.put_parameter(
            Name="/chime/appInstanceAdminArn/" + uid,
            Description="appInstanceAdminArn",
            Overwrite=True,
            Value=app_instance_admin["Arn"],
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return app_instance_admin


def delete_app_instance_admin(uid):
    logger.info(f"Deleting an Amazon Chime SDK Messaging Admin: {uid}")

    try:
        ssm.delete_parameter(
            Name="/chime/appInstanceAdminArn/" + str(uid),
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
