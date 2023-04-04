import * as cdk from 'aws-cdk-lib';
import {
  ElementsType,
  LanguageCode,
  MediaInsightsPipeline,
  RulesType,
  SpeakerSearchStatus,
  VoiceToneAnalysisStatus,
  SentimentType,
} from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicMediaInsightsPipeline', () => {
  new MediaInsightsPipeline(stack, 'BasicMediaInsightsPipeline', {
    resourceAccessRoleArn: 'resourceAccessRoleArnString',
    elements: [
      {
        type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
        amazonTranscribeProcessorConfiguration: {
          languageCode: LanguageCode.EN_US,
        },
      },
      {
        type: ElementsType.KINESIS_DATA_STREAM_SINK,
        kinesisDataStreamSinkConfiguration: {
          insightsTarget: 'arn:aws',
        },
      },
    ],
  });
});

test('BasicMediaInsightsPipelineWithName', () => {
  new MediaInsightsPipeline(stack, 'BasicMediaInsightsPipelineWithName', {
    resourceAccessRoleArn: 'resourceAccessRoleArnString',
    mediaInsightsPipelineConfigurationName:
      'mediaInsightsPipelineConfigurationName',
    elements: [
      {
        type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
        amazonTranscribeProcessorConfiguration: {
          languageCode: LanguageCode.EN_US,
        },
      },
      {
        type: ElementsType.KINESIS_DATA_STREAM_SINK,
        kinesisDataStreamSinkConfiguration: {
          insightsTarget: 'arn:aws',
        },
      },
    ],
  });
});

test('BasicMediaInsightsPipelineWithS3RecordingSink', () => {
  new MediaInsightsPipeline(
    stack,
    'BasicMediaInsightsPipelineWithS3RecordingSink',
    {
      resourceAccessRoleArn: 'resourceAccessRoleArnString',
      elements: [
        {
          type: ElementsType.S3_RECORDING_SINK,
          s3RecordingSinkConfiguration: {
            destination: 's3://my-bucket/my-prefix',
          },
        },
      ],
    },
  );
});

test('BasicMediaInsightsPipelineWithVoiceAnalyticsProcessor', () => {
  new MediaInsightsPipeline(
    stack,
    'BasicMediaInsightsPipelineWithVoiceAnalyticsProcessor',
    {
      resourceAccessRoleArn: 'resourceAccessRoleArnString',
      elements: [
        {
          type: ElementsType.VOICE_ANALYTICS_PROCESSOR,
          voiceAnalyticsProcessorConfiguration: {
            speakerSearchStatus: SpeakerSearchStatus.ENABLED,
            voiceToneAnalysisStatus: VoiceToneAnalysisStatus.DISABLED,
          },
        },
        {
          type: ElementsType.KINESIS_DATA_STREAM_SINK,
          kinesisDataStreamSinkConfiguration: {
            insightsTarget: 'arn:aws',
          },
        },
      ],
    },
  );
});

test('NoElement', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'NoElement', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [],
      }),
  ).toThrowError(
    'MediaInsightsPipeline elements must contain at least one of amazonTranscribeCallAnalyticsProcessorConfiguration, amazonTranscribeProcessorConfiguration, voiceAnalyticsProcessorConfiguration, or s3RecordingSinkConfiguration',
  );
});

test('BothTranscribeAndTranscribeCallAnalytics', () => {
  expect(
    () =>
      new MediaInsightsPipeline(
        stack,
        'BothTranscribeAndTranscribeCallAnalytics',
        {
          resourceAccessRoleArn: 'resourceAccessRoleArnString',
          elements: [
            {
              type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
              amazonTranscribeProcessorConfiguration: {
                languageCode: LanguageCode.EN_US,
              },
            },
            {
              type: ElementsType.AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS,
              amazonTranscribeCallAnalyticsProcessorConfiguration: {
                languageCode: LanguageCode.EN_US,
              },
            },
            {
              type: ElementsType.KINESIS_DATA_STREAM_SINK,
              kinesisDataStreamSinkConfiguration: {
                insightsTarget: 'arn:aws',
              },
            },
          ],
        },
      ),
  ).toThrowError(
    'Element may only contain amazonTranscribeCallAnalyticsProcessorConfiguration or amazonTranscribeProcessorConfiguration',
  );
});

test('BasicMediaInsightsPipelineWithRealTimeAlerts', () => {
  new MediaInsightsPipeline(
    stack,
    'BasicMediaInsightsPipelineWithRealTimeAlerts',
    {
      resourceAccessRoleArn: 'resourceAccessRoleArnString',
      elements: [
        {
          type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
          amazonTranscribeProcessorConfiguration: {
            languageCode: LanguageCode.EN_US,
          },
        },
        {
          type: ElementsType.KINESIS_DATA_STREAM_SINK,
          kinesisDataStreamSinkConfiguration: {
            insightsTarget: 'arn:aws',
          },
        },
      ],
      realTimeAlertConfiguration: {
        disabled: false,
        rules: [
          {
            type: RulesType.KEYWORD_MATCH,
            keywordMatchConfiguration: {
              ruleName: 'ruleName',
              keywords: ['keyword'],
            },
          },
        ],
      },
    },
  );
});

test('TranscribeProcessWithSentimentAnalysis', () => {
  expect(
    () =>
      new MediaInsightsPipeline(
        stack,
        'TranscribeProcessWithSentimentAnalysis',
        {
          resourceAccessRoleArn: 'resourceAccessRoleArnString',
          elements: [
            {
              type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
              amazonTranscribeProcessorConfiguration: {
                languageCode: LanguageCode.EN_US,
              },
            },
            {
              type: ElementsType.KINESIS_DATA_STREAM_SINK,
              kinesisDataStreamSinkConfiguration: {
                insightsTarget: 'arn:aws',
              },
            },
          ],
          realTimeAlertConfiguration: {
            disabled: false,
            rules: [
              {
                type: RulesType.SENTIMENT,
                sentimentConfiguration: {
                  ruleName: 'ruleName',
                  sentimentType: SentimentType.NEGATIVE,
                  timePeriod: 60,
                },
              },
            ],
          },
        },
      ),
  ).toThrowError(
    'amazonTranscribeProcessorConfiguration cannot use realTimeAlertConfiguration sentimentConfiguration or issueDetectionConfiguration',
  );
});

test('S3SinkAndTranscribe', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'S3SinkAndTranscribe', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: 'arn:aws',
            },
          },
          {
            type: ElementsType.S3_RECORDING_SINK,
            s3RecordingSinkConfiguration: {
              destination: 's3://my-bucket/my-prefix',
            },
          },
        ],
      }),
  ).toThrowError(
    's3RecordingSinkConfiguration cannot be used with amazonTranscribeProcessorConfiguration, amazonTranscribeCallAnalyticsProcessorConfiguration, or voiceAnalyticsProcessorConfiguration',
  );
});

test('S3AndRealTimeAlerts', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'S3AndRealTimeAlerts', {
        resourceAccessRoleArn: 'S3AndRealTimeAlerts',
        elements: [
          {
            type: ElementsType.S3_RECORDING_SINK,
            s3RecordingSinkConfiguration: {
              destination: 's3://my-bucket/my-prefix',
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.SENTIMENT,
              sentimentConfiguration: {
                ruleName: 'ruleName',
                sentimentType: SentimentType.NEGATIVE,
                timePeriod: 60,
              },
            },
          ],
        },
      }),
  ).toThrowError(
    's3RecordingSinkConfiguration cannot be used with realTimeAlertConfiguration',
  );
});

test('TooManyRealTimeAlerts', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'TooManyRealTimeAlerts', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: 'arn:aws',
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.KEYWORD_MATCH,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
            {
              type: RulesType.KEYWORD_MATCH,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
            {
              type: RulesType.KEYWORD_MATCH,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
            {
              type: RulesType.KEYWORD_MATCH,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
          ],
        },
      }),
  ).toThrowError('A maximum of three realTimeAlert rules are allowed');
});

test('WrongRulesConfigurationTypeKeyWordMatch', () => {
  expect(
    () =>
      new MediaInsightsPipeline(
        stack,
        'WrongRulesConfigurationTypeKeyWordMatch',
        {
          resourceAccessRoleArn: 'resourceAccessRoleArnString',
          elements: [
            {
              type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
              amazonTranscribeProcessorConfiguration: {
                languageCode: LanguageCode.EN_US,
              },
            },
            {
              type: ElementsType.KINESIS_DATA_STREAM_SINK,
              kinesisDataStreamSinkConfiguration: {
                insightsTarget: 'arn:aws',
              },
            },
          ],
          realTimeAlertConfiguration: {
            disabled: false,
            rules: [
              {
                type: RulesType.KEYWORD_MATCH,
                sentimentConfiguration: {
                  ruleName: 'ruleName',
                  sentimentType: SentimentType.NEGATIVE,
                  timePeriod: 60,
                },
              },
            ],
          },
        },
      ),
  ).toThrowError('KeywordMatch type requires keywordMatchConfiguration');
});

test('WrongRulesConfigurationTypeSentiment', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'WrongRulesConfigurationTypeSentiment', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: 'arn:aws',
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.SENTIMENT,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
          ],
        },
      }),
  ).toThrowError('Sentiment type requires sentimentConfiguration');
});

test('WrongRulesConfigurationTypeIssue', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'WrongRulesConfigurationTypeIssue', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: 'arn:aws',
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.ISSUE_DETECTION,
              keywordMatchConfiguration: {
                ruleName: 'ruleName',
                keywords: ['keyword'],
              },
            },
          ],
        },
      }),
  ).toThrowError('IssueDetection type requires issueDetectionConfiguration');
});

test('MissingRulesConfiguration', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'MissingRulesConfiguration', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
          {
            type: ElementsType.KINESIS_DATA_STREAM_SINK,
            kinesisDataStreamSinkConfiguration: {
              insightsTarget: 'arn:aws',
            },
          },
        ],
        realTimeAlertConfiguration: {
          disabled: false,
          rules: [
            {
              type: RulesType.ISSUE_DETECTION,
            },
          ],
        },
      }),
  ).toThrowError('Rule type must contain configuration');
});

test('RealTimeAlertWithoutTranscribeOrTranscribeCallAnalytics', () => {
  expect(
    () =>
      new MediaInsightsPipeline(
        stack,
        'RealTimeAlertWithoutTranscribeOrTranscribeCallAnalytics',
        {
          resourceAccessRoleArn: 'resourceAccessRoleArnString',
          elements: [
            {
              type: ElementsType.VOICE_ANALYTICS_PROCESSOR,
              voiceAnalyticsProcessorConfiguration: {
                speakerSearchStatus: SpeakerSearchStatus.ENABLED,
                voiceToneAnalysisStatus: VoiceToneAnalysisStatus.DISABLED,
              },
            },
            {
              type: ElementsType.KINESIS_DATA_STREAM_SINK,
              kinesisDataStreamSinkConfiguration: {
                insightsTarget: 'arn:aws',
              },
            },
          ],
          realTimeAlertConfiguration: {
            disabled: false,
            rules: [
              {
                type: RulesType.KEYWORD_MATCH,
                keywordMatchConfiguration: {
                  ruleName: 'ruleName',
                  keywords: ['keyword'],
                },
              },
            ],
          },
        },
      ),
  ).toThrowError(
    'realTimeAlertConfiguration requires amazonTranscribeProcessorConfiguration or amazonTranscribeCallAnalyticsProcessorConfiguration',
  );
});

test('MissingKDSSink', () => {
  expect(
    () =>
      new MediaInsightsPipeline(stack, 'MissingKDSSink', {
        resourceAccessRoleArn: 'resourceAccessRoleArnString',
        elements: [
          {
            type: ElementsType.AMAZON_TRANSCRIBE_PROCESSOR,
            amazonTranscribeProcessorConfiguration: {
              languageCode: LanguageCode.EN_US,
            },
          },
        ],
      }),
  ).toThrowError(
    'A kinesisDataStreamSinkConfiguration is required if amazonTranscribeCallAnalyticsProcessorConfiguration, amazonTranscribeProcessorConfiguration, or voiceAnalyticsProcessorConfiguration are used',
  );
});
