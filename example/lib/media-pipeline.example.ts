import { CfnOutput, Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
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
  LanguageCode,
  RulesType,
  SentimentType,
  ChimeVoiceConnector,
  NotificationTargetType,
} from 'cdk-amazon-chime-resources';
import { Function, Runtime, Architecture, Code } from 'aws-cdk-lib/aws-lambda';
import { Stream, StreamEncryption } from 'aws-cdk-lib/aws-kinesis';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Queue } from 'aws-cdk-lib/aws-sqs';

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

    const s3SinkBucket = new Bucket(this, 's3SinkBucket', {
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const snsTopicSink = new Topic(this, 'snsTopicSink', {});

    const sqsQueueSink = new Queue(this, 'sqsQueueSink', {});

    const kdsSinkPolicy = new PolicyDocument({
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
    });

    const s3SinkPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          resources: [s3SinkBucket.bucketArn],
          actions: ['s3:PutObject', 's3:PutObjectAcl', 's3:PutObjectTagging'],
        }),
        new PolicyStatement({
          resources: [
            `arn:aws:kinesisvideo:${Stack.of(this).region}:${
              Stack.of(this).account
            }:stream/*`,
          ],
          actions: [
            'kinesisvideo:GetDataEndpoint',
            'kinesisvideo:ListFragments',
            'kinesisvideo:GetMediaForFragmentList',
          ],
          conditions: {
            StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
          },
        }),
        new PolicyStatement({
          resources: [
            `arn:aws:kinesisvideo:${Stack.of(this).region}:${
              Stack.of(this).account
            }:stream/Chime*`,
          ],
          actions: [
            'kinesisvideo:ListFragments',
            'kinesisvideo:GetMediaForFragmentList',
          ],
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
    });

    const transcribeCallAnalyticsRole = new Role(
      this,
      'transcribeCallAnalyticsRole',
      {
        assumedBy: new PrincipalWithConditions(
          new ServicePrincipal('transcribe.streaming.amazonaws.com'),
          {
            StringEquals: {
              'aws:SourceAccount': Stack.of(this).account,
            },
            ArnLike: {
              'aws:SourceArn': `arn:aws:transcribe:*:${
                Stack.of(this).account
              }:*`,
            },
          },
        ),
        inlinePolicies: {
          ['s3OutputPolicy']: new PolicyDocument({
            statements: [
              new PolicyStatement({
                resources: [s3SinkBucket.bucketArn],
                actions: ['s3:PutObject'],
              }),
            ],
          }),
        },
      },
    );

    const amazonTranscribeCallAnalyticsProcessorPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          resources: [
            `arn:aws:iam::${Stack.of(this).account}:role/${
              transcribeCallAnalyticsRole.roleName
            }`,
          ],
          actions: ['iam:PassRole'],
          conditions: {
            StringEquals: {
              'iam:PassedToService': 'transcribe.streaming.amazonaws.com',
            },
          },
        }),
      ],
    });

    const lambdaSinkPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          actions: ['lambda:InvokeFunction', 'lambda:GetPolicy'],
          resources: [lambdaSink.functionArn],
        }),
      ],
    });

    const sqsSinkPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          actions: ['sqs:SendMessage', 'sqs:GetQueueAttributes'],
          resources: [sqsQueueSink.queueArn],
        }),
        new PolicyStatement({
          resources: [
            `arn:aws:kms:${Stack.of(this).region}:${
              Stack.of(this).account
            }:key/*`,
          ],
          actions: ['kms:GenerateDataKey', 'kms:Decrypt'],
          conditions: {
            StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
          },
        }),
      ],
    });

    const snsTopicSinkPolicy = new PolicyDocument({
      statements: [
        new PolicyStatement({
          actions: ['sns:Publish', 'sns:GetTopicAttributes'],
          resources: [snsTopicSink.topicArn],
        }),
        new PolicyStatement({
          resources: [
            `arn:aws:kms:${Stack.of(this).region}:${
              Stack.of(this).account
            }:key/*`,
          ],
          actions: ['kms:GenerateDataKey', 'kms:Decrypt'],
          conditions: {
            StringLike: { 'aws:ResourceTag/AWSServiceName': 'ChimeSDK' },
          },
        }),
      ],
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
        ['lambdaSinkPolicy']: lambdaSinkPolicy,
        ['sqsSinkPolicy']: sqsSinkPolicy,
        ['snsTopicSinkPolicy']: snsTopicSinkPolicy,
        ['amazonTranscribeCallAnalyticsProcessorPolicy']:
          amazonTranscribeCallAnalyticsProcessorPolicy,
        ['kinesisDataStreamSinkPolicy']: kdsSinkPolicy,
        ['s3RecordingSinkPolicy']: s3SinkPolicy,
      },
    });

    const voiceAnalyticsConfiguration = new MediaInsightsPipeline(
      this,
      'voiceAnalyticsConfiguration',
      {
        resourceAccessRoleArn: resourceAccessRole.roleArn,
        mediaInsightsPipelineConfigurationName: 'voiceAnalyticsConfiguration',
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
            type: ElementsType.SQS_QUEUE_SINK,
            sqsQueueSinkConfiguration: {
              insightsTarget: sqsQueueSink.queueArn,
            },
          },
          {
            type: ElementsType.SNS_TOPICS_SINK,
            snsTopicSinkConfiguration: {
              insightsTarget: snsTopicSink.topicArn,
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

    const transcribeCallAnalyticsConfiguration = new MediaInsightsPipeline(
      this,
      'transcribeCallAnalyticsConfiguration',
      {
        resourceAccessRoleArn: resourceAccessRole.roleArn,
        mediaInsightsPipelineConfigurationName:
          'transcribeCallAnalyticsConfiguration',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS,
            amazonTranscribeCallAnalyticsProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: kinesisDataStream.streamArn,
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.SENTIMENT,
              sentimentConfiguration: {
                ruleName: 'sentimentRuleName',
                sentimentType: SentimentType.NEGATIVE,
                timePeriod: 60,
              },
            },
            {
              type: RulesType.ISSUE_DETECTION,
              issueDetectionConfiguration: {
                ruleName: 'issueDetectionRuleName',
              },
            },
            {
              type: RulesType.KEYWORD_MATCH,
              keywordMatchConfiguration: {
                ruleName: 'keywordMatchRuleName',
                keywords: ['keyword'],
              },
            },
          ],
        },
      },
    );

    const s3RecordingSinkConfiguration = new MediaInsightsPipeline(
      this,
      's3RecordingSinkConfiguration',
      {
        resourceAccessRoleArn: resourceAccessRole.roleArn,
        mediaInsightsPipelineConfigurationName: 's3RecordingSinkConfiguration',
        elements: [
          {
            type: ElementsType.S3_RECORDING_SINK,
            s3RecordingSinkConfiguration: {
              destination: s3SinkBucket.bucketArn,
            },
          },
        ],
      },
    );

    new ChimeVoiceConnector(this, 'voiceConnector', {
      encryption: false,
      region: 'us-east-1',
      termination: {
        terminationCidrs: ['198.51.100.0/27'],
        callingRegions: ['US'],
        cps: 1,
      },
      streaming: {
        enabled: true,
        dataRetention: 24,
        notificationTargets: [NotificationTargetType.EVENTBRIDGE],
        mediaInsightsConfiguration: {
          configurationArn:
            voiceAnalyticsConfiguration.mediaInsightsPipelineConfigurationArn,
          disabled: false,
        },
      },
      loggingConfiguration: {
        enableSIPLogs: true,
        enableMediaMetricLogs: true,
      },
    });

    new CfnOutput(this, 'voiceAnalyticsMediaInsightsPipelineConfigurationArn', {
      value: voiceAnalyticsConfiguration.mediaInsightsPipelineConfigurationArn,
    });
    new CfnOutput(
      this,
      'transcribeCallAnalyticsMediaInsightsPipelineConfigurationArn',
      {
        value:
          transcribeCallAnalyticsConfiguration.mediaInsightsPipelineConfigurationArn,
      },
    );

    new CfnOutput(this, 's3RecordingSinkConfigurationArn', {
      value: s3RecordingSinkConfiguration.mediaInsightsPipelineConfigurationArn,
    });
  }
}
