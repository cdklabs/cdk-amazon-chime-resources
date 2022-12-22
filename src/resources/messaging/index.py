import app_instance
import channel_flow
import instance_admin
import instance_user
import streaming_config
import data_retention


def handler(event, context):
    print(event)
    responseData = {}
    properties = event["ResourceProperties"]["properties"]
    uid = event["ResourceProperties"]["uid"]
    resource_type = event["ResourceProperties"]["resourceType"]
    if event["RequestType"] == "Create":
        if resource_type == "AppInstance":
            try:
                responseData["appInstanceArn"] = app_instance.create_messaging_app_instance(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "ChannelFlow":
            try:
                responseData["channelFlowArn"] = channel_flow.create_channel_flow(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "AppInstanceUser":
            try:
                responseData["appInstanceUser"] = instance_user.create_app_instance_user(uid, **properties)
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "AppInstanceAdmin":
            try:
                app_instance_admin = instance_admin.create_app_instance_admin(uid, **properties)
                responseData["AppInstanceAdminArn"] = app_instance_admin["Arn"]
                responseData["AppInstanceAdminName"] = app_instance_admin["Name"]
                return {"PhysicalResourceId": uid, "Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "StreamingConfig":
            try:
                streaming_config.add_app_instance_streaming(uid, **properties)
                return {"PhysicalResourceId": uid}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "DataRetention":
            try:
                data_retention.add_data_retention_policy(uid, **properties)
                return {"PhysicalResourceId": uid}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    elif event["RequestType"] == "Update":
        if resource_type == "StreamingConfig":
            try:
                streaming_config.add_app_instance_streaming(uid, **properties)
                return {"PhysicalResourceId": uid}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "DataRetention":
            try:
                data_retention.add_data_retention_policy(uid, **properties)
                return {"PhysicalResourceId": uid}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    elif event["RequestType"] == "Delete":
        if resource_type == "AppInstance":
            try:
                responseData["appInstanceArn"] = app_instance.delete_messaging_app_instance(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "ChannelFlow":
            try:
                responseData["channelFlowArn"] = channel_flow.delete_channel_flow(uid)
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "AppInstanceUser":
            try:
                instance_user.delete_app_instance_user(uid)
                responseData["appInstanceUser"] = "Deleted"
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)
        if resource_type == "AppInstanceAdmin":
            try:
                instance_admin.delete_app_instance_admin(uid)
                responseData["appInstanceAdmin"] = "Deleted"
                return {"Data": responseData}
            except Exception as e:
                error = {"error": f"Exception thrown: {e}"}
                print(error)
                raise Exception(error)

    else:
        responseData = {"Message": "Update is no-op. Returning success status."}
        return {"PhysicalResourceId": uid, "Data": responseData}
