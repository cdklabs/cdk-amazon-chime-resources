import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';
import { CreatePhoneNumber, DeletePhoneNumber } from './phoneNumber';

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

    case 'VoiceConnector':
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
