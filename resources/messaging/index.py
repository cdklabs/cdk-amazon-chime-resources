import appinstance


def handler(event, context):
    print(event)
    responseData = {}
    properties = event["ResourceProperties"]["properties"]
    uid = event["ResourceProperties"]["uid"]
    resource_type = event["ResourceProperties"]["resourceType"]
    if event["RequestType"] == "Create":
        if resource_type == "AppInstance":
            try:
                responseData["appInstanceArn"] = appinstance.create_messaging_app_instance(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    elif event["RequestType"] == "Delete":
        if resource_type == "AppInstance":
            try:
                responseData["appInstanceArn"] = appinstance.delete_messaging_app_instance(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    else:
        responseData = {"Message": "Update is no-op. Returning success status."}
        return {"PhysicalResourceId": uid, "Data": responseData}
