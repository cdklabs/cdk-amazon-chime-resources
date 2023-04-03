import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  Role,
  ServicePrincipal,
  PolicyDocument,
  PolicyStatement,
  PrincipalWithConditions,
} from 'aws-cdk-lib/aws-iam';
import {
  ElementsType,
  MediaInsightsPipeline,
  SpeakerSearchStatus,
  VoiceToneAnalysisStatus,
} from 'cdk-amazon-chime-resources';
import { Function, Runtime, Architecture, Code } from 'aws-cdk-lib/aws-lambda';
import { Stream, StreamEncryption } from 'aws-cdk-lib/aws-kinesis';

export class MediaPipelineExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const kinesisDataStream = new Stream(this, 'kinesisDataStream', {
      encryption: StreamEncryption.UNENCRYPTED,
      streamName: 'ChimeSDK',
      shardCount: 4,
    });

    const lambdaSink = new Function(this, 'lambdaSink', {
      runtime: Runtime.PYTHON_3_9,
      code: Code.fromAsset('src/mediaInsightPipelineSink'),
      handler: 'index.handler',
      architecture: Architecture.ARM_64,
    });

    const resourceAccessRole = new Role(this, 'resourceAccessRole', {
      assumedBy: new PrincipalWithConditions(
        new ServicePrincipal('mediapipelines.chime.amazonaws.com'),
        {
          StringEquals: {
            'aws:SourceAccount': Stack.of(this).account,
          },
          ArnLike: {
            'aws:SourceArn': `arn:aws:chime:*:${Stack.of(this).account}:*`,
          },
        },
      ),
      inlinePolicies: {
        ['mediaInsightsPolicy']: new PolicyDocument({
          statements: [
            new PolicyStatement({
              resources: ['*'],
              actions: [
                'transcribe:StartCallAnalyticsStreamTranscription',
                'transcribe:StartStreamTranscription',
              ],
            }),
            new PolicyStatement({
              resources: [
                `arn:aws:kinesisvideo:${Stack.of(this).region}:${
                  Stack.of(this).account
                }:stream/Chime*`,
              ],
              actions: [
                'kinesisvideo:GetDataEndpoint',
                'kinesisvideo:GetMedia',
              ],
            }),
            new PolicyStatement({
              resources: [
                `arn:aws:kinesisvideo:${Stack.of(this).region}:${
                  Stack.of(this).account
                }:stream/*`,
              ],
              actions: [
                'kinesisvideo:GetDataEndpoint',
                'kinesisvideo:GetMedia',
              ],
              conditions: {
                StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
              },
            }),
            new PolicyStatement({
              resources: [
                `arn:aws:kms:${Stack.of(this).region}:${
                  Stack.of(this).account
                }:key/*`,
              ],
              actions: ['kms:Decrypt'],
              conditions: {
                StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
              },
            }),
          ],
        }),
        ['KinesisDataStreamPolicy']: new PolicyDocument({
          statements: [
            new PolicyStatement({
              resources: [
                `arn:aws:kinesis:${Stack.of(this).region}:${
                  Stack.of(this).account
                }:stream/${kinesisDataStream.streamName}`,
              ],
              actions: ['kinesis:PutRecord'],
            }),
            new PolicyStatement({
              resources: [
                `arn:aws:kms:${Stack.of(this).region}:${
                  Stack.of(this).account
                }:key/*`,
              ],
              actions: ['kms:GenerateDataKey'],
              conditions: {
                StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
              },
            }),
          ],
        }),
      },
    });

    const mediaInsightsPipeline = new MediaInsightsPipeline(
      this,
      'mediaInsightsPipeline',
      {
        resourceAccessRoleArn: resourceAccessRole.roleArn,
        elements: [
          {
            type: ElementsType.VOICE_ANALYTICS_PROCESSOR,
            voiceAnalyticsProcessorConfiguration: {
              speakerSearchStatus: SpeakerSearchStatus.ENABLED,
              voiceToneAnalysisStatus: VoiceToneAnalysisStatus.ENABLED,
            },
          },
          {
            type: ElementsType.LAMBDA_FUNCTION_SINK,
            lambdaFunctionSinkConfiguration: {
              insightsTarget: lambdaSink.functionArn,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: kinesisDataStream.streamArn,
            },
          },
        ],
      },
    );

    mediaInsightsPipeline.node.addDependency(kinesisDataStream);
    mediaInsightsPipeline.node.addDependency(resourceAccessRole);

    new CfnOutput(this, 'mediaInsightsPipelineConfigurationArn', {
      value: mediaInsightsPipeline.mediaInsightsPipelineConfigurationArn,
    });

    new CfnOutput(this, 'mediaInsightsPipelineConfigurationId', {
      value: mediaInsightsPipeline.mediaInsightsPipelineConfigurationId,
    });

    new CfnOutput(this, 'mediaInsightsPipelineConfigurationName', {
      value: mediaInsightsPipeline.mediaInsightsPipelineConfigurationName,
    });
  }
}
