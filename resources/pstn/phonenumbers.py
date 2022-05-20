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


def getPhoneNumber(
    uid,
    phoneState=None,
    phoneAreaCode=None,
    phoneCity=None,
    phoneCountry=None,
    phoneNumberTollFreePrefix=None,
    phoneProductType=None,
    **kwargs,
):

    logger.info(f"Getting a new phone number")
    params = {}
    params["MaxResults"] = 1
    if phoneAreaCode:
        params["AreaCode"] = phoneAreaCode
    if phoneState:
        params["State"] = phoneState
    if phoneCity:
        params["City"] = phoneCity
    if phoneCountry:
        params["Country"] = phoneCountry
    if phoneNumberTollFreePrefix:
        params["TollFreePrefix"] = phoneNumberTollFreePrefix
    logger.info(f"Params to use: {params}")
    try:
        search_response = chime.search_available_phone_numbers(**params)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    phone_number_to_order = search_response["E164PhoneNumbers"][0]
    logger.info(f"Phone number to order: {phone_number_to_order}")
    try:
        phone_order_id = chime.create_phone_number_order(
            ProductType=phoneProductType,
            E164PhoneNumbers=[
                phone_number_to_order,
            ],
        )["PhoneNumberOrder"]["PhoneNumberOrderId"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    time.sleep(10)
    order_status = chime.get_phone_number_order(PhoneNumberOrderId=phone_order_id)["PhoneNumberOrder"]["Status"]
    logger.info(f"Current status: {order_status}")
    timeout = 0
    while not order_status == "Successful":
        timeout += 1
        time.sleep(5)
        order_status = chime.get_phone_number_order(PhoneNumberOrderId=phone_order_id)["PhoneNumberOrder"]["Status"]
        logger.info(f"Current status: {order_status}")
        if timeout == 15:
            raise RuntimeError("Could not get phone number")
    try:
        ssm.put_parameter(
            Name="/chime/phoneNumber/" + uid,
            Description="Phone Number Ordered",
            Overwrite=True,
            Value=phone_number_to_order,
            Type="String",
        )

    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return phone_number_to_order


def deletePhoneNumber(uid):
    logger.info(f"Deleting number for uid: " + str(uid))
    try:
        phone_number_to_delete = ssm.get_parameter(Name="/chime/phoneNumber/" + str(uid),)[
            "Parameter"
        ]["Value"]
        logger.info(f"Phone Number to Delete: " + phone_number_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        phone_number_status = chime.get_phone_number(PhoneNumberId=phone_number_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    logger.info(f"Phone Number Status: " + str(phone_number_status))
    if phone_number_status["PhoneNumber"]["Status"] == "Assigned":
        phone_number_association = phone_number_status["PhoneNumber"]["Associations"][0]["Value"]
        phone_number_id = phone_number_status["PhoneNumber"]["E164PhoneNumber"]
        if phone_number_status["PhoneNumber"]["ProductType"] == "VoiceConnector":
            chime.disassociate_phone_numbers_from_voice_connector(
                VoiceConnectorId=phone_number_association,
                E164PhoneNumbers=phone_number_id,
            )
        elif phone_number_status["PhoneNumber"]["ProductType"] == "SipMediaApplicationDialIn":
            chime.update_sip_rule(
                SipRuleId=phone_number_association,
                Name=phone_number_id,
                Disabled=True,
            )
            time.sleep(10)
        else:
            raise RuntimeError("Phone number assigned but not disassociateable")

    try:
        response = chime.delete_phone_number(PhoneNumberId=phone_number_to_delete)
        ssm.delete_parameter(
            Name="/chime/phoneNumber/" + uid,
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return response
