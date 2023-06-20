import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';
import { CreateAppInstance, DeleteAppInstance } from './appInstance';
import { CreateChannelFlow, DeleteChannelFlow, UpdateChannelFlow } from './channelFlow';
import { PutDataRetention } from './dataRetention';
import {
  CreateAppInstanceAdmin,
  DeleteAppInstanceAdmin,
} from './instanceAdmin';
import { CreateAppInstanceBot, DeleteAppInstanceBot } from './instanceBot';
import { CreateAppInstanceUser, DeleteAppInstanceUser } from './instanceUser';
import { PutStreamingConfiguration } from './streamingConfig';

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
    case 'AppInstance':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateAppInstance(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateAppInstance successful';
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          await DeleteAppInstance(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteAppInstance successful';
          break;
      }
      break;

    case 'ChannelFlow':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateChannelFlow(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateChannelFlow successful';
          break;
        case 'Update':
          response.Data = await UpdateChannelFlow(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'UpdateChannelFlow successful';
          break;
        case 'Delete':
          await DeleteChannelFlow(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteChannelFlow successful';
          break;
      }
      break;

    case 'DataRetention':
      switch (requestType) {
        case 'Create':
          response.Data = await PutDataRetention(requestProperties);
          response.Status = 'SUCCESS';
          response.Reason = 'PutDataRetention successful';
          break;
        case 'Update':
          response.Data = await PutDataRetention(requestProperties);
          response.Status = 'SUCCESS';
          response.Reason = 'PutDataRetention successful';
          break;
      }
      break;

    case 'AppInstanceAdmin':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateAppInstanceAdmin(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateAppInstanceAdmin successful';
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          await DeleteAppInstanceAdmin(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteAppInstanceAdmin successful';
          break;
      }
      break;

    case 'AppInstanceUser':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateAppInstanceUser(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateAppInstanceUser successful';
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          await DeleteAppInstanceUser(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteAppInstanceUser successful';
          break;
      }
      break;

    case 'AppInstanceBot':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateAppInstanceBot(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateAppInstanceBot successful';
          break;
        case 'Update':
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          await DeleteAppInstanceBot(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteAppInstanceUser successful';
          break;
      }
      break;
    case 'StreamingConfig':
      switch (requestType) {
        case 'Create':
          response.Data = await PutStreamingConfiguration(requestProperties);
          response.Status = 'SUCCESS';
          response.Reason = 'PutStreamingConfiguration successful';
          break;
        case 'Update':
          response.Data = await PutStreamingConfiguration(requestProperties);
          response.Status = 'SUCCESS';
          response.Reason = 'PutStreamingConfiguration successful';
          break;
      }
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
