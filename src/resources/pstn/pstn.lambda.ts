import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';

import { CreatePhoneNumber, DeletePhoneNumber } from './phoneNumber';
import {
  CreateSipMediaApplication,
  DeleteSipMediaApplication,
  PutSipMediaApplicationAlexaSkill,
  PutSipMediaApplicationLogging,
} from './sipMediaApp';
import { CreateSIPRule, DeleteSIPRule } from './sipRule';
import { CreateVoiceConnector, DeleteVoiceConnector } from './voiceConnector';

const response: CdkCustomResourceResponse = {};
let resourcePropertiesUid: string;
let requestProperties: {};

export const handler = async (
  event: CdkCustomResourceEvent,
  context: Context,
): Promise<CdkCustomResourceResponse> => {
  console.info('event: ', event);
  const resourceType = event.ResourceProperties.resourceType;
  const requestType = event.RequestType;
  resourcePropertiesUid = event.ResourceProperties.uid;
  requestProperties = event.ResourceProperties.properties;

  response.StackId = event.StackId;
  response.RequestId = event.RequestId;
  response.LogicalResourceId = event.LogicalResourceId;
  response.PhysicalResourceId = context.logGroupName;

  switch (resourceType) {
    case 'PhoneNumber':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreatePhoneNumber(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreatePhoneNumber successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          try {
            await DeletePhoneNumber(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeletePhoneNumber successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'SMARule':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateSIPRule(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateSMARule successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          try {
            await DeleteSIPRule(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteSMARule successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'SMA':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateSipMediaApplication(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'Create SMA successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          try {
            await DeleteSipMediaApplication(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'Delete SMA successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'SMALogging':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await PutSipMediaApplicationLogging(
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'PutSipMediaApplicationLogging successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          try {
            response.Data = await PutSipMediaApplicationLogging(
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'PutSipMediaApplicationLogging successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Delete':
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationLogging Delete NoOP';
          break;
      }
      break;

    case 'SMAAlexaSkill':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await PutSipMediaApplicationAlexaSkill(
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'PutSipMediaApplicationAlexaSkill successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          try {
            response.Data = await PutSipMediaApplicationAlexaSkill(
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'PutSipMediaApplicationAlexaSkill successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Delete':
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationAlexaSkill Delete NoOP';
          break;
      }
      break;

    case 'VoiceConnector':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateVoiceConnector(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'Create VC successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          try {
            await DeleteVoiceConnector(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'Delete VC successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
