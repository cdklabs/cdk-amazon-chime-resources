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

// src/resources/pstn/pstn.lambda.ts
var pstn_lambda_exports = {};
__export(pstn_lambda_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(pstn_lambda_exports);

// src/resources/pstn/phoneNumber.ts
var import_client_chime_sdk_voice = require("@aws-sdk/client-chime-sdk-voice");
var import_client_ssm = require("@aws-sdk/client-ssm");
var chimeSDKVoiceClient = new import_client_chime_sdk_voice.ChimeSDKVoiceClient({
  region: process.env.AWS_REGION
});
var ssmClient = new import_client_ssm.SSMClient({ region: process.env.AWS_REGION });
var searchAvailableNumbersParam;
var searchAvailablePhoneNumberResponse;
var createPhoneNumberOrderResponse;
var checkPhoneNumberOrderCount = 0;
var getParameterCommandOutput;
var getPhoneNumberResponse;
var CreatePhoneNumber = async (uid, props) => {
  searchAvailableNumbersParam = {
    ...props.phoneAreaCode && { AreaCode: props.phoneAreaCode },
    ...props.phoneState && { State: props.phoneState },
    ...props.phoneCity && { City: props.phoneCity },
    ...props.phoneCountry && { Country: props.phoneCountry },
    ...props.phoneNumberTollFreePrefix && {
      TollFreePrefix: props.phoneNumberTollFreePrefix
    }
  };
  console.info(
    `Search Available Numbers: ${JSON.stringify(searchAvailableNumbersParam)}`
  );
  try {
    searchAvailablePhoneNumberResponse = await chimeSDKVoiceClient.send(
      new import_client_chime_sdk_voice.SearchAvailablePhoneNumbersCommand(searchAvailableNumbersParam)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  if (searchAvailablePhoneNumberResponse && searchAvailablePhoneNumberResponse.E164PhoneNumbers && searchAvailablePhoneNumberResponse.E164PhoneNumbers.length === 0) {
    throw new Error(
      "No numbers were found with this search parameters.  Please try a different search."
    );
  }
  try {
    createPhoneNumberOrderResponse = await chimeSDKVoiceClient.send(
      new import_client_chime_sdk_voice.CreatePhoneNumberOrderCommand({
        ProductType: props.phoneProductType,
        E164PhoneNumbers: [
          searchAvailablePhoneNumberResponse.E164PhoneNumbers[0]
        ]
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  while (await checkPhoneNumber(
    createPhoneNumberOrderResponse.PhoneNumberOrder.PhoneNumberOrderId
  ) !== "Successful") {
    checkPhoneNumberOrderCount++;
    if (checkPhoneNumberOrderCount > 10) {
      throw new Error(
        "Could not get a valid phone number from Amazon Chime SDK"
      );
    }
    await sleep(1e4);
  }
  try {
    await ssmClient.send(
      new import_client_ssm.PutParameterCommand({
        Name: "/chime/phoneNumber" + uid,
        Value: searchAvailablePhoneNumberResponse.E164PhoneNumbers[0],
        Description: "Phone Number",
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
    phoneNumber: searchAvailablePhoneNumberResponse.E164PhoneNumbers[0]
  };
};
var DeletePhoneNumber = async (uid) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new import_client_ssm.GetParameterCommand({ Name: "/chime/phoneNumber" + uid })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    getPhoneNumberResponse = await chimeSDKVoiceClient.send(
      new import_client_chime_sdk_voice.GetPhoneNumberCommand({
        PhoneNumberId: getParameterCommandOutput.Parameter.Value
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    if (getPhoneNumberResponse.PhoneNumber.Status === "Assigned") {
      if (getPhoneNumberResponse.PhoneNumber.ProductType === "VoiceConnector") {
        await chimeSDKVoiceClient.send(
          new import_client_chime_sdk_voice.DisassociatePhoneNumbersFromVoiceConnectorCommand({
            E164PhoneNumbers: [
              getPhoneNumberResponse.PhoneNumber.E164PhoneNumber
            ],
            VoiceConnectorId: getPhoneNumberResponse.PhoneNumber.Associations[0].Value
          })
        );
      } else if (getPhoneNumberResponse.PhoneNumber.ProductType === "SipMediaApplication") {
        await chimeSDKVoiceClient.send(
          new import_client_chime_sdk_voice.UpdateSipRuleCommand({
            Name: getPhoneNumberResponse.PhoneNumber.E164PhoneNumber,
            SipRuleId: getPhoneNumberResponse.PhoneNumber.Associations[0].Value,
            Disabled: true
          })
        );
      } else {
        throw new Error("Could not disassociate number");
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  await sleep(1e4);
  try {
    await chimeSDKVoiceClient.send(
      new import_client_chime_sdk_voice.DeletePhoneNumberCommand({
        PhoneNumberId: getParameterCommandOutput.Parameter.Value
      })
    );
    await ssmClient.send(
      new import_client_ssm.DeleteParameterCommand({ Name: "/chime/phoneNumber" + uid })
    );
  } catch (error) {
  }
};
async function checkPhoneNumber(phoneOrderId) {
  try {
    const getPhoneNumberOrderResponse = await chimeSDKVoiceClient.send(
      new import_client_chime_sdk_voice.GetPhoneNumberOrderCommand({ PhoneNumberOrderId: phoneOrderId })
    );
    console.info(
      `Get Phone Number Order: ${JSON.stringify(getPhoneNumberOrderResponse)}`
    );
    return getPhoneNumberOrderResponse.PhoneNumberOrder?.Status;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
    return false;
  }
}
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// src/resources/pstn/sipMediaApp.ts
var import_client_chime_sdk_voice2 = require("@aws-sdk/client-chime-sdk-voice");
var import_client_ssm2 = require("@aws-sdk/client-ssm");
var chimeSDKVoiceClient2 = new import_client_chime_sdk_voice2.ChimeSDKVoiceClient({
  region: process.env.AWS_REGION
});
var ssmClient2 = new import_client_ssm2.SSMClient({ region: process.env.AWS_REGION });
var createSipMediaApplicationResponse;
var createSipMediaApplicationParams;
var getParameterCommandOutput2;
var putSipMediaApplicationAlexaSkillInput;
var putSipMediaApplicationLoggingInput;
var putSipMediaApplicationAlexaSkillOutput;
var putSipMediaApplicationLoggingOutput;
var CreateSipMediaApplication = async (uid, props) => {
  console.log(`Creating SIP media application rule: ${uid}`);
  console.log(`Create SIP media application props: ${JSON.stringify(props)}`);
  createSipMediaApplicationParams = {
    Name: props.name,
    AwsRegion: props.region,
    Endpoints: [{ LambdaArn: props.endpoint }]
  };
  console.log(
    `Create SIP media application params: ${JSON.stringify(
      createSipMediaApplicationParams
    )}`
  );
  try {
    createSipMediaApplicationResponse = await chimeSDKVoiceClient2.send(
      new import_client_chime_sdk_voice2.CreateSipMediaApplicationCommand(createSipMediaApplicationParams)
    );
    console.log(
      `createSipMediaApplicationResponse: ${JSON.stringify(
        createSipMediaApplicationResponse
      )}`
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
        Name: "/chime/sipMediaApp" + uid,
        Value: createSipMediaApplicationResponse.SipMediaApplication?.SipMediaApplicationId,
        Description: "SIP Media Application ID",
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
    sipMediaAppId: createSipMediaApplicationResponse.SipMediaApplication?.SipMediaApplicationId
  };
};
var DeleteSipMediaApplication = async (uid) => {
  try {
    getParameterCommandOutput2 = await ssmClient2.send(
      new import_client_ssm2.GetParameterCommand({ Name: "/chime/sipMediaApp" + uid })
    );
    if (getParameterCommandOutput2.Parameter && getParameterCommandOutput2.Parameter.Value) {
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await chimeSDKVoiceClient2.send(
      new import_client_chime_sdk_voice2.DeleteSipMediaApplicationCommand({
        SipMediaApplicationId: getParameterCommandOutput2.Parameter?.Value
      })
    );
    await ssmClient2.send(
      new import_client_ssm2.DeleteParameterCommand({ Name: "/chime/sipRule" + uid })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var PutSipMediaApplicationLogging = async (props) => {
  console.log(
    `Put SIP media application logging configuration: ${JSON.stringify(props)}`
  );
  putSipMediaApplicationLoggingInput = {
    SipMediaApplicationId: props.sipMediaAppId,
    SipMediaApplicationLoggingConfiguration: {
      EnableSipMediaApplicationMessageLogs: props.sipMediaApplicationLoggingConfiguration?.sipMediaApplicationLoggingConfiguration?.enableSipMediaApplicationMessageLogs
    }
  };
  try {
    putSipMediaApplicationLoggingOutput = await chimeSDKVoiceClient2.send(
      new import_client_chime_sdk_voice2.PutSipMediaApplicationLoggingConfigurationCommand(
        putSipMediaApplicationLoggingInput
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    putSipMediaApplicationLoggingConfiguration: putSipMediaApplicationLoggingOutput.SipMediaApplicationLoggingConfiguration
  };
};
var PutSipMediaApplicationAlexaSkill = async (props) => {
  console.log(
    `Put SIP media application Alexa skill configuration: ${JSON.stringify(
      props
    )}`
  );
  putSipMediaApplicationAlexaSkillInput = {
    SipMediaApplicationId: props.sipMediaAppId,
    SipMediaApplicationAlexaSkillConfiguration: {
      AlexaSkillIds: props.sipMediaApplicationAlexaSkillConfiguration?.alexaSkillIds,
      AlexaSkillStatus: props.sipMediaApplicationAlexaSkillConfiguration?.alexaSkillStatus
    }
  };
  try {
    putSipMediaApplicationAlexaSkillOutput = await chimeSDKVoiceClient2.send(
      new import_client_chime_sdk_voice2.PutSipMediaApplicationAlexaSkillConfigurationCommand(
        putSipMediaApplicationAlexaSkillInput
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    putSipMediaApplicationAlexaSkillConfiguration: putSipMediaApplicationAlexaSkillOutput.SipMediaApplicationAlexaSkillConfiguration
  };
};

// src/resources/pstn/sipRule.ts
var import_client_chime_sdk_voice3 = require("@aws-sdk/client-chime-sdk-voice");
var import_client_ssm3 = require("@aws-sdk/client-ssm");
var chimeSDKVoiceClient3 = new import_client_chime_sdk_voice3.ChimeSDKVoiceClient({
  region: process.env.AWS_REGION
});
var ssmClient3 = new import_client_ssm3.SSMClient({ region: process.env.AWS_REGION });
var createSipRuleParams;
var createSipRuleResponse;
var getParameterCommandOutput3;
var sipRuleToDelete;
var sipRuleTargetApplications;
var CreateSIPRule = async (uid, props) => {
  console.log(`Creating SIP media application rule: ${uid}`);
  console.log(
    `Create SIP media application rule props: ${JSON.stringify(props)}`
  );
  sipRuleTargetApplications = [];
  props.targetApplications?.forEach((targetApplication) => {
    sipRuleTargetApplications.push({
      AwsRegion: targetApplication.region,
      SipMediaApplicationId: targetApplication.sipMediaApplicationId,
      Priority: parseInt(targetApplication.priority)
    });
  });
  createSipRuleParams = {
    Name: props.name,
    TriggerType: props.triggerType,
    TriggerValue: props.triggerValue,
    TargetApplications: sipRuleTargetApplications
  };
  console.log(
    `Create SIP media application rule params: ${JSON.stringify(
      createSipRuleParams
    )}`
  );
  try {
    createSipRuleResponse = await chimeSDKVoiceClient3.send(
      new import_client_chime_sdk_voice3.CreateSipRuleCommand(createSipRuleParams)
    );
    console.log(createSipRuleResponse);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await ssmClient3.send(
      new import_client_ssm3.PutParameterCommand({
        Name: "/chime/sipRule" + uid,
        Value: createSipRuleResponse.SipRule?.SipRuleId,
        Description: "SIP Rule ID",
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
    sipRuleId: createSipRuleResponse.SipRule?.SipRuleId
  };
};
var DeleteSIPRule = async (uid) => {
  try {
    getParameterCommandOutput3 = await ssmClient3.send(
      new import_client_ssm3.GetParameterCommand({ Name: "/chime/sipRule" + uid })
    );
    if (getParameterCommandOutput3.Parameter && getParameterCommandOutput3.Parameter.Value) {
      sipRuleToDelete = getParameterCommandOutput3.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await chimeSDKVoiceClient3.send(
      new import_client_chime_sdk_voice3.UpdateSipRuleCommand({
        SipRuleId: sipRuleToDelete,
        Name: uid,
        Disabled: true
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  let getSipRuleCommandCount = 0;
  while (!await chimeSDKVoiceClient3.send(
    new import_client_chime_sdk_voice3.GetSipRuleCommand({ SipRuleId: sipRuleToDelete })
  )) {
    getSipRuleCommandCount++;
    if (getSipRuleCommandCount > 15) {
      throw new Error("Could not disable SIP rule");
    }
    await sleep2(5e3);
  }
  try {
    await chimeSDKVoiceClient3.send(
      new import_client_chime_sdk_voice3.DeleteSipRuleCommand({
        SipRuleId: sipRuleToDelete
      })
    );
    await ssmClient3.send(
      new import_client_ssm3.DeleteParameterCommand({ Name: "/chime/sipRule" + uid })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var sleep2 = (ms) => new Promise((r) => setTimeout(r, ms));

// src/resources/pstn/voiceConnector.ts
var import_client_chime_sdk_voice4 = require("@aws-sdk/client-chime-sdk-voice");
var import_client_ssm4 = require("@aws-sdk/client-ssm");
var chimeSDKVoiceClient4 = new import_client_chime_sdk_voice4.ChimeSDKVoiceClient({
  region: process.env.AWS_REGION
});
var ssmClient4 = new import_client_ssm4.SSMClient({ region: process.env.AWS_REGION });
var createVoiceConnectorResponse;
var createVoiceConnectorParams;
var getParameterCommandOutput4;
var voiceConnectorId;
var phoneNumbersToDisassociate;
var routes;
var terminationConfiguration;
var streamingConfiguration;
var loggingConfiguration;
var deleteVoiceConnectorResponse;
var CreateVoiceConnector = async (uid, props) => {
  console.log(`Creating Voice Connector: ${uid}`);
  console.log(`Create Voice Connector Props: ${JSON.stringify(props)}`);
  createVoiceConnectorParams = {
    Name: props.name,
    RequireEncryption: props.encryption,
    AwsRegion: props.region
  };
  console.log(
    `createVoiceConnectorParams: ${JSON.stringify(createVoiceConnectorParams)}`
  );
  try {
    createVoiceConnectorResponse = await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.CreateVoiceConnectorCommand(createVoiceConnectorParams)
    );
    console.log(
      `createVoiceConnectorResponse: ${JSON.stringify(
        createVoiceConnectorResponse
      )}`
    );
    if (createVoiceConnectorResponse.VoiceConnector && createVoiceConnectorResponse.VoiceConnector.VoiceConnectorId) {
      voiceConnectorId = createVoiceConnectorResponse.VoiceConnector?.VoiceConnectorId;
    } else {
      throw new Error("Voice Connector failed to create");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  console.log(`Voice Connector Created: ${voiceConnectorId}`);
  if (props.origination) {
    await putOrigination(voiceConnectorId, props.origination);
  }
  if (props.termination) {
    await putTermination(voiceConnectorId, props.termination);
  }
  if (props.streaming) {
    await putStreaming(voiceConnectorId, props.streaming);
  }
  if (props.logging) {
    await putLogging(voiceConnectorId, props.logging);
  }
  try {
    await ssmClient4.send(
      new import_client_ssm4.PutParameterCommand({
        Name: "/chime/voiceConnector" + uid,
        Value: voiceConnectorId,
        Description: "Voice Connector ID",
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
    voiceConnectorId
  };
};
var UpdateVoiceConnector = async (uid, props) => {
  console.log(`Creating Voice Connector: ${uid}`);
  console.log(`Create Voice Connector Props: ${JSON.stringify(props)}`);
  createVoiceConnectorParams = {
    Name: props.name,
    RequireEncryption: props.encryption,
    AwsRegion: props.region
  };
  console.log(
    `updateVoiceConnectorParams: ${JSON.stringify(createVoiceConnectorParams)}`
  );
  try {
    getParameterCommandOutput4 = await ssmClient4.send(
      new import_client_ssm4.GetParameterCommand({ Name: "/chime/voiceConnector" + uid })
    );
    if (getParameterCommandOutput4.Parameter && getParameterCommandOutput4.Parameter.Value) {
      voiceConnectorId = getParameterCommandOutput4.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  if (props.origination) {
    await putOrigination(voiceConnectorId, props.origination);
  }
  if (props.termination) {
    await putTermination(voiceConnectorId, props.termination);
  }
  if (props.streaming) {
    await putStreaming(voiceConnectorId, props.streaming);
  }
  if (props.logging) {
    await putLogging(voiceConnectorId, props.logging);
  }
};
var DeleteVoiceConnector = async (uid) => {
  try {
    getParameterCommandOutput4 = await ssmClient4.send(
      new import_client_ssm4.GetParameterCommand({ Name: "/chime/voiceConnector" + uid })
    );
    if (getParameterCommandOutput4.Parameter && getParameterCommandOutput4.Parameter.Value) {
      voiceConnectorId = getParameterCommandOutput4.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  console.log(`voiceConnectorId to delete: ${voiceConnectorId}`);
  try {
    const phoneNumbersAssociated = await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.ListPhoneNumbersCommand({
        FilterName: "VoiceConnectorId",
        FilterValue: voiceConnectorId
      })
    );
    console.log(
      `phoneNumbers to disassociate:  ${JSON.stringify(
        phoneNumbersAssociated
      )}`
    );
    if (phoneNumbersAssociated.PhoneNumbers && phoneNumbersAssociated.PhoneNumbers.length > 0) {
      phoneNumbersAssociated.PhoneNumbers.forEach(async (phoneNumber) => {
        phoneNumbersToDisassociate.push(phoneNumber.PhoneNumberId);
      });
      console.log(`Disassociate Phone Numbers: ${phoneNumbersToDisassociate}`);
      await chimeSDKVoiceClient4.send(
        new import_client_chime_sdk_voice4.DisassociatePhoneNumbersFromVoiceConnectorCommand({
          VoiceConnectorId: voiceConnectorId,
          E164PhoneNumbers: phoneNumbersToDisassociate
        })
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  console.log(`Deleting Voice Connector: ${voiceConnectorId}`);
  try {
    deleteVoiceConnectorResponse = await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.DeleteVoiceConnectorCommand({
        VoiceConnectorId: voiceConnectorId
      })
    );
    console.log(
      `Delete Voice Connector Response: ${deleteVoiceConnectorResponse}`
    );
    await ssmClient4.send(
      new import_client_ssm4.DeleteParameterCommand({ Name: "/chime/voiceConnector" + uid })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var putOrigination = async (originationVoiceConnectorId, originations) => {
  console.log(`originations:  ${JSON.stringify(originations)}`);
  routes = [];
  originations.forEach(async (origination) => {
    routes.push({
      Protocol: origination.protocol,
      Host: origination.host,
      Port: parseInt(origination.port),
      Priority: parseInt(origination.priority),
      Weight: parseInt(origination.weight)
    });
  });
  console.log(`routes:  ${JSON.stringify(routes)}`);
  try {
    await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.PutVoiceConnectorOriginationCommand({
        VoiceConnectorId: originationVoiceConnectorId,
        Origination: {
          Routes: routes,
          Disabled: false
        }
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var putTermination = async (terminationVoiceConnectorId, termination) => {
  console.log(`termination:  ${JSON.stringify(termination)}`);
  terminationConfiguration = {
    CallingRegions: termination.callingRegions,
    CidrAllowedList: termination.terminationCidrs,
    CpsLimit: parseInt(termination.cpsLimit)
  };
  console.log(
    `terminationConfiguration:  ${JSON.stringify(terminationConfiguration)}`
  );
  try {
    await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.PutVoiceConnectorTerminationCommand({
        VoiceConnectorId: terminationVoiceConnectorId,
        Termination: terminationConfiguration
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var putStreaming = async (streamingVoiceConnectorId, streaming) => {
  console.log(`streaming:  ${JSON.stringify(streaming)}`);
  streamingConfiguration = {
    StreamingNotificationTargets: streaming.notificationTarget,
    Disabled: false,
    DataRetentionInHours: parseInt(streaming.dataRetention)
  };
  console.log(
    `streamingConfiguration:  ${JSON.stringify(streamingConfiguration)}`
  );
  try {
    await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.PutVoiceConnectorStreamingConfigurationCommand({
        VoiceConnectorId: streamingVoiceConnectorId,
        StreamingConfiguration: streamingConfiguration
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
var putLogging = async (loggingVoiceConnectorId, logging) => {
  console.log(`logging:  ${JSON.stringify(logging)}`);
  loggingConfiguration = {
    ...logging.enableSIPLogs && { EnableSIPLogs: logging.enableSIPLogs },
    ...logging.enableMediaMetricLogs && {
      EnableMediaMetricLogs: logging.enableMediaMetricLogs
    }
  };
  console.log(`loggingConfiguration:  ${JSON.stringify(loggingConfiguration)}`);
  try {
    await chimeSDKVoiceClient4.send(
      new import_client_chime_sdk_voice4.PutVoiceConnectorLoggingConfigurationCommand({
        VoiceConnectorId: loggingVoiceConnectorId,
        LoggingConfiguration: loggingConfiguration
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

// src/resources/pstn/pstn.lambda.ts
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
    case "PhoneNumber":
      switch (requestType) {
        case "Create":
          response.Data = await CreatePhoneNumber(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreatePhoneNumber successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeletePhoneNumber(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeletePhoneNumber successful";
          break;
      }
      break;
    case "SMARule":
      switch (requestType) {
        case "Create":
          response.Data = await CreateSIPRule(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "CreateSMARule successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteSIPRule(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "DeleteSMARule successful";
          break;
      }
      break;
    case "SMA":
      switch (requestType) {
        case "Create":
          response.Data = await CreateSipMediaApplication(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "Create SMA successful";
          break;
        case "Update":
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteSipMediaApplication(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "Delete SMA successful";
          break;
      }
      break;
    case "SMALogging":
      switch (requestType) {
        case "Create":
          response.Data = await PutSipMediaApplicationLogging(
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationLogging successful";
          break;
        case "Update":
          response.Data = await PutSipMediaApplicationLogging(
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationLogging successful";
          break;
        case "Delete":
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationLogging Delete NoOP";
          break;
      }
      break;
    case "SMAAlexaSkill":
      switch (requestType) {
        case "Create":
          response.Data = await PutSipMediaApplicationAlexaSkill(
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationAlexaSkill successful";
          break;
        case "Update":
          response.Data = await PutSipMediaApplicationAlexaSkill(
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationAlexaSkill successful";
          break;
        case "Delete":
          response.Status = "SUCCESS";
          response.Reason = "PutSipMediaApplicationAlexaSkill Delete NoOP";
          break;
      }
      break;
    case "VoiceConnector":
      switch (requestType) {
        case "Create":
          response.Data = await CreateVoiceConnector(
            resourcePropertiesUid,
            requestProperties
          );
          response.Status = "SUCCESS";
          response.Reason = "Create VC successful";
          break;
        case "Update":
          await UpdateVoiceConnector(resourcePropertiesUid, requestProperties);
          response.Status = "SUCCESS";
          break;
        case "Delete":
          await DeleteVoiceConnector(resourcePropertiesUid);
          response.Status = "SUCCESS";
          response.Reason = "Delete VC successful";
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
