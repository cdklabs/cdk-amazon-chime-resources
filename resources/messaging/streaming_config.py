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


def modify_config(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_config(v)
        else:
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


def add_app_instance_streaming(
    uid,
    streamingConfigs=None,
    appInstanceArn=None,
    **kwargs,
):
    logger.info(f"Streaming Config: {streamingConfigs}")
    fixed_streaming_config = []

    for streaming_config in streamingConfigs:
        fixed_streaming_config.append(modify_config(streaming_config))

    logger.info(f"Fixed Streaming Config: {fixed_streaming_config}")
    params = {}
    params["AppInstanceStreamingConfigurations"] = fixed_streaming_config
    params["AppInstanceArn"] = appInstanceArn
    logger.info(f"Params to use: {params}")
    time.sleep(25)
    try:
        app_instance_streaming_configs = chime.put_app_instance_streaming_configurations(**params)[
            "AppInstanceStreamingConfigurations"
        ]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return app_instance_streaming_configs
