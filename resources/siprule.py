import boto3
import time
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


def createSipRule(
    uid,
    name=None,
    triggerType=None,
    triggerValue=None,
    targetApplications=None,
    **kwargs,
):
    logger.info(f"Creating SIP media application rule: {uid}")
    target_applications = []
    for target_application in targetApplications:
        transformed_application = {}
        for key in target_application:
            if key == "sipMediaApplicationId":
                transformed_application["SipMediaApplicationId"] = target_application[key]
            elif key == "priority":
                transformed_application["Priority"] = int(target_application[key])
            elif key == "region":
                transformed_application["AwsRegion"] = target_application[key]
        target_applications.append(transformed_application)
    logger.info(f"target_applications: {target_applications}")

    try:
        sip_rule_id = chime.create_sip_rule(
            Name=name, TriggerType=triggerType, TriggerValue=triggerValue, TargetApplications=target_applications
        )["SipRule"]["SipRuleId"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.put_parameter(
            Name="/chime/sipRule/" + uid,
            Description="sipRuleId",
            Overwrite=True,
            Value=sip_rule_id,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return sip_rule_id


def deleteSipRule(
    uid,
    region=None,
    name=None,
    triggerType=None,
    triggerValue=None,
    sipMediaApplicationId=None,
    priority=None,
    **kwargs,
):

    logger.info(f"Deleting SIP media application: {uid}")
    try:
        sip_rule_to_delete = ssm.get_parameter(Name="/chime/sipRule/" + str(uid),)[
            "Parameter"
        ]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        chime.update_sip_rule(SipRuleId=sip_rule_to_delete, Name=name, Disabled=True)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    time.sleep(10)
    delete_sip_rule_status = chime.get_sip_rule(SipRuleId=sip_rule_to_delete)["SipRule"]["Disabled"]
    logger.info(f"Current status - Disabled: {delete_sip_rule_status}")
    timeout = 0
    while not delete_sip_rule_status:
        timeout += 1
        time.sleep(5)
        delete_sip_rule_status = chime.get_sip_rule(SipRuleId=sip_rule_to_delete)["SipRule"]["Disabled"]
        logger.info(f"Current status - Disabled: {delete_sip_rule_status}")
        if timeout == 15:
            raise RuntimeError("Could not disable Sip rule")

    try:
        chime.delete_sip_rule(SipRuleId=sip_rule_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
