import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';

import {
  CreateKinesisVideoStreamPool,
  UpdateKinesisVideoStreamPool,
  DeleteKinesisVideoStreamPool,
} from './kinesisVideoStreamPool';
import {
  CreateMediaInsightsPipelineConfiguration,
  UpdateMediaInsightsPipelineConfiguration,
  DeleteMediaInsightsPipelineConfiguration,
} from './mediaInsightsPipeline';

import { KinesisVideoStreamPoolProps } from '../../media-pipelines/kinesisVideoStreamPool';
import { MediaInsightsPipelineProps } from '../../media-pipelines/mediaInsightsPipeline';

const response: CdkCustomResourceResponse = {};

let resourcePropertiesUid: string;
let requestProperties: {};

export const handler = async (
  event: CdkCustomResourceEvent,
  context: Context,
): Promise<CdkCustomResourceResponse> => {
  console.info('event: ', JSON.stringify(event));

  const resourceType = event.ResourceProperties.resourceType;
  const requestType = event.RequestType;
  resourcePropertiesUid = event.ResourceProperties.uid;
  requestProperties = event.ResourceProperties.properties;

  response.StackId = event.StackId;
  response.RequestId = event.RequestId;
  response.LogicalResourceId = event.LogicalResourceId;
  response.PhysicalResourceId = context.logGroupName;

  switch (resourceType) {
    case 'MediaPipelineInsights':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateMediaInsightsPipelineConfiguration(
            resourcePropertiesUid,
            requestProperties as MediaInsightsPipelineProps,
          );
          response.Status = 'SUCCESS';
          response.Reason =
            'CreateMediaInsightsPipelineConfiguration successful';
          break;
        case 'Update':
          response.Data = await UpdateMediaInsightsPipelineConfiguration(
            resourcePropertiesUid,
            requestProperties as MediaInsightsPipelineProps,
          );
          response.Status = 'SUCCESS';
          response.Reason =
            'UpdateMediaInsightsPipelineConfiguration successful';

          break;
        case 'Delete':
          await DeleteMediaInsightsPipelineConfiguration(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason =
            'DeleteMediaInsightsPipelineConfiguration successful';
          break;
      }
      break;
    case 'KinesisVideoStreamPool':
      switch (requestType) {
        case 'Create':
          response.Data = await CreateKinesisVideoStreamPool(
            resourcePropertiesUid,
            requestProperties as KinesisVideoStreamPoolProps,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateKinesisVideoStreamPool successful';
          break;
        case 'Update':
          response.Data = await UpdateKinesisVideoStreamPool(
            resourcePropertiesUid,
            requestProperties as KinesisVideoStreamPoolProps,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'UpdateKinesisVideoStreamPool successful';

          break;
        case 'Delete':
          await DeleteKinesisVideoStreamPool(
            resourcePropertiesUid,
            requestProperties as KinesisVideoStreamPoolProps,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteKinesisVideoStreamPool successful';
          break;
      }
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
