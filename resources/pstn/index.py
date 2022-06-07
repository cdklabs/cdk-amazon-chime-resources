import phonenumbers
import sipmediaapp
import siprule
import voiceconnectors


def handler(event, context):
    print(event)
    responseData = {}
    properties = event["ResourceProperties"]["properties"]
    uid = event["ResourceProperties"]["uid"]
    resource_type = event["ResourceProperties"]["resourceType"]
    if event["RequestType"] == "Create":
        if resource_type == "PhoneNumber":
            try:
                responseData["phoneNumber"] = phonenumbers.get_phone_number(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "VoiceConnector":
            try:
                responseData["voiceConnectorId"] = voiceconnectors.create_voice_connector(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "SMA":
            try:
                responseData["sipMediaAppId"] = sipmediaapp.create_sip_media_app(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "SMARule":
            try:
                responseData["sipRuleId"] = siprule.create_sip_rule(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    elif event["RequestType"] == "Delete":
        if resource_type == "PhoneNumber":
            try:
                responseData["phoneNumber"] = phonenumbers.delete_phone_number(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "VoiceConnector":
            try:
                responseData = voiceconnectors.delete_voice_connector(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "SMA":
            try:
                responseData["sipMediaAppId"] = sipmediaapp.delete_sip_media_app(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "SMARule":
            try:
                responseData["sipRuleId"] = siprule.delete_sip_rule(uid, **properties)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    else:
        responseData = {"Message": "Update is no-op. Returning success status."}
        return {"PhysicalResourceId": uid, "Data": responseData}
