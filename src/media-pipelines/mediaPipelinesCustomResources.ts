/* eslint-disable @typescript-eslint/indent */
import {
  Duration,
  CustomResource,
  ResourceProps,
  Stack,
  CustomResourceProvider,
  CustomResourceProviderRuntime,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { MediaPipelinesFunction } from '../resources/media-pipelines/media-pipelines-function';

export interface MediaPipelineResourceProps extends ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType: 'MediaPipelineInsights' | 'KinesisVideoStreamPool';
  readonly uid: string;
}

export class MediaPipelineResources extends Construct {
  public readonly mediaPipelineCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: MediaPipelineResourceProps) {
    super(scope, id);

    const mediaPipelineCustomResource =
      CustomResourceProvider.getOrCreateProvider(
        this,
        'Custom::MediaPipelineResources',
        {
          codeDirectory:
            'node_modules/cdk-amazon-chime-resources/assets/resources/media-pipelines',
          runtime: CustomResourceProviderRuntime.NODEJS_18_X,
          timeout: Duration.seconds(300),
          policyStatements: [
            {
              Action: [
                'chime:*MediaInsightsPipelineConfiguration',
                'chime:*MediaPipelineKinesisVideoStreamPool',
                'chime:ListVoiceConnectors',
                'chime:tagResource',
                's3:ListBucket',
                'kinesis:DescribeStream',
                'lambda:GetPolicy',
                'lambda:AddPermission',
                'chime:*',
              ],
              Resource: '*',
              Effect: 'Allow',
            },
            {
              Action: [
                'iam:PutRolePolicy',
                'iam:CreateServiceLinkedRole',
                'iam:PassRole',
              ],
              Resource: '*',
              Effect: 'Allow',
            },
            {
              Action: [
                'logs:DescribeLogGroups',
                'logs:CreateLogGroup',
                'logs:CreateLogStream',
                'logs:ListLogDeliveries',
                'logs:CreateLogDelivery',
                'logs:GetLogDelivery',
                'logs:DeleteLogDelivery',
              ],
              Resource: '*',
              Effect: 'Allow',
            },
            {
              Action: 'ssm:*Parameter*',
              Resource: `arn:aws:ssm:${Stack.of(this).region}:${
                Stack.of(this).account
              }:parameter/chime/*`,
              Effect: 'Allow',
            },
          ],
        },
      );

    if (props.resourceType === 'KinesisVideoStreamPool') {
      mediaPipelineCustomResource.addToRolePolicy({
        Action: ['kinesisvideo:ListStreams'],
        Resource: '*',
        Effect: 'Allow',
      });
      mediaPipelineCustomResource.addToRolePolicy({
        Action: ['kinesisvideo:DeleteStream'],
        Resource: `arn:aws:kinesisvideo:${Stack.of(this).region}:${
          Stack.of(this).account
        }:stream/ChimeMediaPipelines-${props.properties.poolName}*`,
        Effect: 'Allow',
      });
    }

    this.mediaPipelineCustomResource = new CustomResource(
      this,
      'mediaPipelineCustomResource',
      {
        serviceToken: mediaPipelineCustomResource.serviceToken,
        properties: { ...props },
      },
    );
  }
}
