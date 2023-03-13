"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/resources/messaging/messaging.lambda.ts
var messaging_lambda_exports = {};
__export(messaging_lambda_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(messaging_lambda_exports);

// src/resources/messaging/appInstance.ts
var import_client_chime = require("@aws-sdk/client-chime");
var import_client_ssm = require("@aws-sdk/client-ssm");
var chimeClient = new import_client_chime.ChimeClient({
  region: process.env.AWS_REGION
});
var ssmClient = new import_client_ssm.SSMClient({ region: process.env.AWS_REGION });
var createAppInstanceCommandParams;
var createAppInstanceCommandResponse;
var getParameterCommandOutput;
var updatedTags;
var CreateAppInstance = async (uid, props) => {
  updatedTags = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags.push({ Key: tag.key, Value: tag.value });
    });
  }
  createAppInstanceCommandParams = {
    Name: props.name,
    ...props.metadata && { Metadata: props.metadata },
    ...props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken
    },
    ...updatedTags.length > 0 && { Tags: updatedTags }
  };
  try {
    createAppInstanceCommandResponse = await chimeClient.send(
      new import_client_chime.CreateAppInstanceCommand(createAppInstanceCommandParams)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await ssmClient.send(
      new import_client_ssm.PutParameterCommand({
        Name: `/chime/appInstanceArn/${uid}`,
        Description: "App Instance Arn",
        Value: createAppInstanceCommandResponse.AppInstanceArn,
        Overwrite: true,
        Type: "String"
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceArn: createAppInstanceCommandResponse.AppInstanceArn
  };
};
var DeleteAppInstance = async (uid) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new import_client_ssm.GetParameterCommand({ Name: `/chime/appInstanceArn/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await chimeClient.send(
      new import_client_chime.DeleteAppInstanceCommand({
        AppInstanceArn: getParameterCommandOutput.Parameter.Value
      })
    );
    await ssmClient.send(
      new import_client_ssm.DeleteParameterCommand({ Name: `/chime/appInstanceArn/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/messaging/channelFlow.ts
var import_client_chime_sdk_messaging = require("@aws-sdk/client-chime-sdk-messaging");
var import_client_ssm2 = require("@aws-sdk/client-ssm");
var chimeSDKMessagingClient = new import_client_chime_sdk_messaging.ChimeSDKMessagingClient({
  region: process.env.AWS_REGION
});
var ssmClient2 = new import_client_ssm2.SSMClient({ region: process.env.AWS_REGION });
var createChannelFlowCommandInput;
var createChannelFlowCommandOutput;
var getParameterCommandOutput2;
var updatedProcessors;
var updatedTags2;
var CreateChannelFlow = async (uid, props) => {
  updatedProcessors = [];
  if (props.processors) {
    props.processors.forEach((processor) => {
      updatedProcessors.push({
        Name: processor.name,
        ExecutionOrder: parseInt(processor.executionOrder),
        FallbackAction: processor.fallbackAction,
        Configuration: {
          Lambda: {
            ResourceArn: processor.configuration.lambda.resourceArn,
            InvocationType: processor.configuration.lambda.invocationType
          }
        }
      });
    });
  }
  updatedTags2 = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags2.push({ Key: tag.key, Value: tag.value });
    });
  }
  createChannelFlowCommandInput = {
    AppInstanceArn: props.appInstanceArn,
    Name: props.name,
    ClientRequestToken: props.clientRequestToken,
    ...updatedTags2.length > 0 && { Tags: updatedTags2 },
    Processors: updatedProcessors
  };
  try {
    createChannelFlowCommandOutput = await chimeSDKMessagingClient.send(
      new import_client_chime_sdk_messaging.CreateChannelFlowCommand(createChannelFlowCommandInput)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await ssmClient2.send(
      new import_client_ssm2.PutParameterCommand({
        Name: `/chime/channelFlowArn/${uid}`,
        Description: "channelFlowArn",
        Value: createChannelFlowCommandOutput.ChannelFlowArn,
        Overwrite: true,
        Type: "String"
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    channelFlowArn: createChannelFlowCommandOutput.ChannelFlowArn
  };
};
var DeleteChannelFlow = async (uid) => {
  try {
    getParameterCommandOutput2 = await ssmClient2.send(
      new import_client_ssm2.GetParameterCommand({ Name: `/chime/channelFlowArn/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await chimeSDKMessagingClient.send(
      new import_client_chime_sdk_messaging.DeleteChannelFlowCommand({
        ChannelFlowArn: getParameterCommandOutput2.Parameter?.Value
      })
    );
    await ssmClient2.send(
      new import_client_ssm2.DeleteParameterCommand({ Name: `/chime/channelFlowArn/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/messaging/dataRetention.ts
var import_client_chime2 = require("@aws-sdk/client-chime");
var chimeClient2 = new import_client_chime2.ChimeClient({
  region: process.env.AWS_REGION
});
var putDataRetentionOutput;
var putDataRetentionInput;
var PutDataRetention = async (props) => {
  putDataRetentionInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceRetentionSettings: {
      ChannelRetentionSettings: {
        RetentionDays: parseInt(props.dataRetention)
      }
    }
  };
  try {
    putDataRetentionOutput = await chimeClient2.send(
      new import_client_chime2.PutAppInstanceRetentionSettingsCommand(putDataRetentionInput)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceRetentionSettings: putDataRetentionOutput.AppInstanceRetentionSettings
  };
};

// src/resources/messaging/instanceAdmin.ts
var import_client_chime3 = require("@aws-sdk/client-chime");
var import_client_ssm3 = require("@aws-sdk/client-ssm");
var chimeClient3 = new import_client_chime3.ChimeClient({
  region: process.env.AWS_REGION
});
var ssmClient3 = new import_client_ssm3.SSMClient({ region: process.env.AWS_REGION });
var createAppInstanceAdminCommandInput;
var createAppInstanceAdminCommandOutput;
var CreateAppInstanceAdmin = async (uid, props) => {
  createAppInstanceAdminCommandInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceAdminArn: props.appInstanceAdminArn
  };
  try {
    createAppInstanceAdminCommandOutput = await chimeClient3.send(
      new import_client_chime3.CreateAppInstanceAdminCommand(createAppInstanceAdminCommandInput)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await ssmClient3.send(
      new import_client_ssm3.PutParameterCommand({
        Name: `/chime/appInstanceAdminArn/${uid}`,
        Description: "appInstanceAdminArn",
        Value: createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Arn,
        Overwrite: true,
        Type: "String"
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    AppInstanceAdminArn: createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Arn,
    AppInstanceAdminName: createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Name
  };
};
var DeleteAppInstanceAdmin = async (uid) => {
  try {
    await ssmClient3.send(
      new import_client_ssm3.DeleteParameterCommand({ Name: `/chime/appInstanceAdminArn/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/messaging/instanceUser.ts
var import_client_chime4 = require("@aws-sdk/client-chime");
var import_client_ssm4 = require("@aws-sdk/client-ssm");
var chimeClient4 = new import_client_chime4.ChimeClient({
  region: process.env.AWS_REGION
});
var ssmClient4 = new import_client_ssm4.SSMClient({ region: process.env.AWS_REGION });
var createAppInstanceUserCommandInput;
var createAppInstanceUserCommandOutput;
var updatedTags3;
var CreateAppInstanceUser = async (uid, props) => {
  updatedTags3 = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags3.push({ Key: tag.key, Value: tag.value });
    });
  }
  createAppInstanceUserCommandInput = {
    Name: props.name,
    AppInstanceArn: props.appInstanceArn,
    AppInstanceUserId: props.appInstanceUserId,
    ...props.metadata && { Metadata: props.metadata },
    ...props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken
    },
    ...updatedTags3.length > 0 && { Tags: updatedTags3 }
  };
  try {
    createAppInstanceUserCommandOutput = await chimeClient4.send(
      new import_client_chime4.CreateAppInstanceUserCommand(createAppInstanceUserCommandInput)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await ssmClient4.send(
      new import_client_ssm4.PutParameterCommand({
        Name: `/chime/appInstanceUserId/${uid}`,
        Description: "appInstanceUserId",
        Value: createAppInstanceUserCommandOutput.AppInstanceUserArn,
        Overwrite: true,
        Type: "String"
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceUser: createAppInstanceUserCommandOutput.AppInstanceUserArn
  };
};
var DeleteAppInstanceUser = async (uid) => {
  try {
    await ssmClient4.send(
      new import_client_ssm4.DeleteParameterCommand({ Name: `/chime/appInstanceUserId/${uid}` })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/messaging/streamingConfig.ts
var import_client_chime5 = require("@aws-sdk/client-chime");
var chimeClient5 = new import_client_chime5.ChimeClient({
  region: process.env.AWS_REGION
});
var putStreamingConfigurationOutput;
var putStreamingConfigurationInput;
var updatedConfiguration;
var PutStreamingConfiguration = async (props) => {
  updatedConfiguration = [];
  props.streamingConfigs?.forEach((streamingConfig) => {
    updatedConfiguration.push({
      AppInstanceDataType: streamingConfig.appInstanceDataType,
      ResourceArn: streamingConfig.resourceArn
    });
  });
  putStreamingConfigurationInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceStreamingConfigurations: updatedConfiguration
  };
  try {
    putStreamingConfigurationOutput = await chimeClient5.send(
      new import_client_chime5.PutAppInstanceStreamingConfigurationsCommand(
        putStreamingConfigurationInput
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceStreamingConfiguration: putStreamingConfigurationOutput.AppInstanceStreamingConfigurations
  };
};

// src/resources/messaging/messaging.lambda.ts
var response = {};
var resourcePropertiesUid;
var requestProperties;
var handler = async (event, context) => {
  console.info("event: ", event);
  const resourceType = event.ResourceProperties.resourceType;
  const requestType = event.RequestType;
  resourcePropertiesUid = event.ResourceProperties.uid;
  requestProperties = event.ResourceProperties.properties;
  response.StackId = event.StackId;
  response.RequestId = event.RequestId;
  response.LogicalResourceId = event.LogicalResourceId;
  response.PhysicalResourceId = context.logGroupName;
  switch (resourceType) {
    case "AppInstance":
      switch (requestType) {
        case "Create":
          response.Data = await CreateAppInstance(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreateAppInstance successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteAppInstance(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeleteAppInstance successful";
          break;
      }
      break;
    case "ChannelFlow":
      switch (requestType) {
        case "Create":
          response.Data = await CreateChannelFlow(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreateChannelFlow successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteChannelFlow(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeleteChannelFlow successful";
          break;
      }
      break;
    case "DataRetention":
      switch (requestType) {
        case "Create":
          response.Data = await PutDataRetention(requestProperties);
          response.Status = "SUCCESS";
          response.Reason = "PutDataRetention successful";
          break;
        case "Update":
          response.Data = await PutDataRetention(requestProperties);
          response.Status = "SUCCESS";
          response.Reason = "PutDataRetention successful";
          break;
      }
      break;
    case "AppInstanceAdmin":
      switch (requestType) {
        case "Create":
          response.Data = await CreateAppInstanceAdmin(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreateAppInstanceAdmin successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteAppInstanceAdmin(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeleteAppInstanceAdmin successful";
          break;
      }
      break;
    case "AppInstanceUser":
      switch (requestType) {
        case "Create":
          response.Data = await CreateAppInstanceUser(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreateAppInstanceUser successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteAppInstanceUser(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeleteAppInstanceUser successful";
          break;
      }
      break;
    case "StreamingConfig":
      switch (requestType) {
        case "Create":
          response.Data = await PutStreamingConfiguration(requestProperties);
          response.Status = "SUCCESS";
          response.Reason = "PutStreamingConfiguration successful";
          break;
        case "Update":
          response.Data = await PutStreamingConfiguration(requestProperties);
          response.Status = "SUCCESS";
          response.Reason = "PutStreamingConfiguration successful";
          break;
      }
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
