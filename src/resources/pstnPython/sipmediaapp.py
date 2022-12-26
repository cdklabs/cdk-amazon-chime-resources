import boto3
import logging
import os

logger = logging.getLogger()
try:
    log_level = os.environ["LogLevel"]
    if log_level not in ["INFO", "DEBUG"]:
        log_level = "INFO"
except BaseException:
    log_level = "INFO"
logger.setLevel(log_level)

chime = boto3.client("chime")
ssm = boto3.client("ssm")


def create_sip_media_app(uid, region=None, name=None, endpoint=None, **kwargs):

    logger.info(f"Creating SIP media application: {uid}")
    try:
        sip_media_app_id = chime.create_sip_media_application(
            awsRegion=region, Name=name, Endpoints=[{"LambdaArn": endpoint}]
        )["SipMediaApplication"]["SipMediaApplicationId"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.put_parameter(
            Name="/chime/sipMediaApp/" + uid,
            Description="sipMediaAppId",
            Overwrite=True,
            Value=sip_media_app_id,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return sip_media_app_id


def delete_sip_media_app(uid):
    logger.info(f"Deleting SIP media app: {uid}")
    try:
        sip_media_app_to_delete = ssm.get_parameter(Name="/chime/sipMediaApp/" + str(uid),)[
            "Parameter"
        ]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        logger.info(f"Deleting Parameter: {uid}")
        ssm.delete_parameter(
            Name="/chime/sipMediaApp/" + str(uid),
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        logger.info(f"Deleting SIP media application: {uid}")
        chime.delete_sip_media_application(SipMediaApplicationId=sip_media_app_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True


