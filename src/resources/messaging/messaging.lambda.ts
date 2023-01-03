import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';
import { CreateAppInstance, DeleteAppInstance } from './appInstance';
import { CreateChannelFlow, DeleteChannelFlow } from './channelFlow';
import { CreateDataRetention, DeleteDataRetention } from './dataRetention';
import {
  CreateAppInstanceAdmin,
  DeleteAppInstanceAdmin,
} from './instanceAdmin';
import { CreateAppInstanceUser, DeleteAppInstanceUser } from './instanceUser';
import {
  CreateStreamingConfig,
  DeleteStreamingConfig,
} from './streamingConfig';

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
          try {
            response.Data = await CreateAppInstance(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateAppInstance successful';
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
            await DeleteAppInstance(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteAppInstance successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'ChannelFlow':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateChannelFlow(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateChannelFlow successful';
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
            await DeleteChannelFlow(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteChannelFlow successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'DataRetention':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateDataRetention(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateDataRetention successful';
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
            await DeleteDataRetention(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteDataRetention successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'AppInstanceAdmin':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateAppInstanceAdmin(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateAppInstanceAdmin successful';
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
            await DeleteAppInstanceAdmin(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteAppInstanceAdmin successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'AppInstanceUser':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateAppInstanceUser(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateAppInstanceUser successful';
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
            await DeleteAppInstanceUser(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteAppInstanceUser successful';
          } catch (error) {
            if (error instanceof Error) {
              response.Status = 'FAILED';
              response.Reason = error.message;
            }
          }
          break;
      }
      break;

    case 'StreamingConfig':
      switch (requestType) {
        case 'Create':
          try {
            response.Data = await CreateStreamingConfig(
              resourcePropertiesUid,
              requestProperties,
            );
            response.Status = 'SUCCESS';
            response.Reason = 'CreateStreamingConfig successful';
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
            await DeleteStreamingConfig(resourcePropertiesUid);
            response.Status = 'SUCCESS';
            response.Reason = 'DeleteStreamingConfig successful';
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
