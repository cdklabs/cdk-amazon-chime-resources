import logging
import json
import os

# Set LOG_LEVEL using environment variable, fallback to INFO if not present
logger = logging.getLogger()
try:
    LOG_LEVEL = os.environ['LOG_LEVEL']
    if LOG_LEVEL not in ['INFO', 'DEBUG', 'WARN', 'ERROR']:
        LOG_LEVEL = 'INFO'
except BaseException:
    LOG_LEVEL = 'INFO'
logger.setLevel(LOG_LEVEL)


def handler(event, context):
    global LOG_PREFIX
    LOG_PREFIX = 'EventBridge Notification: '
    logger.info('%s %s', LOG_PREFIX, json.dumps(event, indent=4))