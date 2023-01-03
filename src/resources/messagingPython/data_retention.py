import boto3
import logging
import os
import time

logger = logging.getLogger()
try:
    log_level = os.environ["LogLevel"]
    if log_level not in ["INFO", "DEBUG"]:
        log_level = "INFO"
except:
    log_level = "INFO"
logger.setLevel(log_level)

chime = boto3.client("chime")


def add_data_retention_policy(
    uid,
    dataRetention=None,
    appInstanceArn=None,
    **kwargs,
):
    logger.info(f"Data Retention: {dataRetention}")
    params = {}
    params["AppInstanceRetentionSettings"] = {"ChannelRetentionSettings": {"RetentionDays": int(dataRetention)}}
    params["AppInstanceArn"] = appInstanceArn
    logger.info(f"Params to use: {params}")
    try:
        app_instance_streaming_configs = chime.put_app_instance_retention_settings(**params)[
            "AppInstanceRetentionSettings"
        ]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return app_instance_streaming_configs
