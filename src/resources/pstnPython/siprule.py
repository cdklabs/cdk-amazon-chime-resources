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


def check_sip_rule_status(sip_rule_id):
    delete_sip_rule_status = chime.get_sip_rule(SipRuleId=sip_rule_id)["SipRule"]["Disabled"]
    logger.info(f"Current SIP rule status : {delete_sip_rule_status}")

    return delete_sip_rule_status


def create_sip_rule(
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
                transformed_application["awsRegion"] = target_application[key]
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


def delete_sip_rule(
    uid,
    name=None,
    **kwargs,
):
    logger.info(f"Deleting SIP rule: {uid}")
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

    check_phone_number_order_count = 0
    while not check_sip_rule_status(sip_rule_to_delete):
        check_phone_number_order_count += 1
        if check_phone_number_order_count == 15:
            raise RuntimeError("Could not disable Sip rule")
        time.sleep(5)

    try:
        logger.info(f"Deleting Parameter: {uid}")
        ssm.delete_parameter(
            Name="/chime/sipRule/" + str(uid),
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        logger.info(f"Deleting SIP media application: {uid}")
        chime.delete_sip_rule(SipRuleId=sip_rule_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True
