import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { mediaPipelinesInsightValidator } from './mediaInsightsPipelineValidator';
import { MediaPipelineResources } from './mediaPipelinesCustomResources';

export interface MediaPipelineInsightsTag {
  readonly key: string;
  readonly value: string;
}

export enum RulesType {
  KEYWORD_MATCH = 'KeywordMatch',
  SENTIMENT = 'Sentiment',
  ISSUE_DETECTION = 'IssueDetection',
}
export interface Rules {
  readonly type: RulesType;
  readonly keywordMatchConfiguration?: KeywordMatchConfiguration;
  readonly sentimentConfiguration?: SentimentConfiguration;
  readonly issueDetectionConfiguration?: IssueDetectionConfiguration;
}

export enum SentimentType {
  NEGATIVE = 'NEGATIVE',
}

export interface KeywordMatchConfiguration {
  readonly ruleName: string;
  readonly keywords: string[];
  readonly negate?: boolean;
}
export interface SentimentConfiguration {
  readonly ruleName: string;
  readonly sentimentType: SentimentType;
  readonly timePeriod: number;
}

export interface IssueDetectionConfiguration {
  readonly ruleName: string;
}

export enum ElementsType {
  AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS = 'AmazonTranscribeCallAnalyticsProcessor',
  VOICE_ANALYTICS_PROCESSOR = 'VoiceAnalyticsProcessor',
  AMAZON_TRANSCRIBE_PROCESSOR = 'AmazonTranscribeProcessor',
  KINESIS_DATA_STREAM_SINK = 'KinesisDataStreamSink',
  LAMBDA_FUNCTION_SINK = 'LambdaFunctionSink',
  SQS_QUEUE_SINK = 'SqsQueueSink',
  SNS_TOPICS_SINK = 'SnsTopicSink',
  S3_RECORDING_SINK = 'S3RecordingSink',
}

export enum LanguageCode {
  EN_US = 'en-US',
  EN_GB = 'en-GB',
  ES_US = 'es-US',
  FR_CA = 'fr-CA',
  FR_FR = 'fr-FR',
  EN_AU = 'en-AU',
  IT_IT = 'it-IT',
  DE_DE = 'de-DE',
  PT_BR = 'pt-BR',
}

export enum VocabularyFilterMethod {
  REMOVE = 'remove',
  MASK = 'mask',
  TAG = 'tag',
}

export enum PartialResultsStability {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export enum ContentIdentificationType {
  PII = 'PII',
}

export enum ContentRedactionType {
  PII = 'PII',
}

export enum ContentRedactionOutput {
  REDACTED = 'redacted',
  REDACTED_AND_UNREDACTED = 'redacted_and_unredacted',
}

export interface PostCallAnalyticsSettings {
  readonly outputLocation: string;
  readonly dataAccessRoleArn: string;
  readonly contentRedactionOutput?: ContentRedactionOutput;
  readonly outputEncryptionKMSKeyId?: string;
}
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  readonly languageCode: LanguageCode;
  readonly vocabularyName?: string;
  readonly vocabularyFilterName?: string;
  readonly vocabularyFilterMethod?: VocabularyFilterMethod;
  readonly languageModelName?: string;
  readonly enablePartialResultsStabilization?: boolean;
  readonly partialResultsStability?: PartialResultsStability;
  readonly contentIdentificationType?: ContentIdentificationType;
  readonly contentRedactionType?: ContentRedactionType;
  readonly piiEntityTypes?: string;
  readonly filterPartialResults?: boolean;
  readonly postCallAnalyticsSettings?: PostCallAnalyticsSettings;
  readonly callAnalyticsStreamCategories?: string[];
}

export interface AmazonTranscribeProcessorConfiguration {
  readonly languageCode: LanguageCode;
  readonly vocabularyName?: string;
  readonly vocabularyFilterName?: string;
  readonly vocabularyFilterMethod?: VocabularyFilterMethod;
  readonly showSpeakerLabel?: boolean;
  readonly enablePartialResultsStabilization?: boolean;
  readonly partialResultsStability?: PartialResultsStability;
  readonly contentIdentificationType?: ContentIdentificationType;
  readonly contentRedactionType?: ContentRedactionType;
  readonly piiEntityTypes?: string;
  readonly languageModelName?: string;
  readonly filterPartialResults?: boolean;
}

export interface KinesisDataStreamSinkConfiguration {
  readonly insightsTarget: string;
}
export interface S3RecordingSinkConfiguration {
  readonly destination: string;
}
export enum SpeakerSearchStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}
export enum VoiceToneAnalysisStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}
export interface VoiceAnalyticsProcessorConfiguration {
  readonly speakerSearchStatus: SpeakerSearchStatus;
  readonly voiceToneAnalysisStatus: VoiceToneAnalysisStatus;
}

export interface LambdaFunctionSinkConfiguration {
  readonly insightsTarget: string;
}

export interface SqsQueueSinkConfiguration {
  readonly insightsTarget: string;
}
export interface SnsTopicSinkConfiguration {
  readonly insightsTarget: string;
}
export interface Elements {
  readonly type: ElementsType;
  readonly amazonTranscribeCallAnalyticsProcessorConfiguration?: AmazonTranscribeCallAnalyticsProcessorConfiguration;
  readonly voiceAnalyticsProcessorConfiguration?: VoiceAnalyticsProcessorConfiguration;
  readonly amazonTranscribeProcessorConfiguration?: AmazonTranscribeProcessorConfiguration;
  readonly kinesisDataStreamSinkConfiguration?: KinesisDataStreamSinkConfiguration;
  readonly lambdaFunctionSinkConfiguration?: LambdaFunctionSinkConfiguration;
  readonly sqsQueueSinkConfiguration?: SqsQueueSinkConfiguration;
  readonly snsTopicSinkConfiguration?: SnsTopicSinkConfiguration;
  readonly s3RecordingSinkConfiguration?: S3RecordingSinkConfiguration;
}

export interface RealTimeAlertConfiguration {
  readonly disabled: boolean;
  readonly rules: Rules[];
}
export interface MediaInsightsPipelineProps {
  readonly mediaInsightsPipelineConfigurationName?: string;
  readonly realTimeAlertConfiguration?: RealTimeAlertConfiguration;
  readonly resourceAccessRoleArn: string;
  readonly elements: Elements[];
  readonly tags?: Array<MediaPipelineInsightsTag>;
  readonly clientRequestToken?: string;
}

export class MediaInsightsPipeline extends Construct {
  public readonly mediaInsightsPipelineConfigurationArn: string;
  public readonly mediaInsightsPipelineConfigurationId: string;
  public readonly mediaInsightsPipelineConfigurationName: string;
  constructor(scope: Construct, id: string, props: MediaInsightsPipelineProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      mediaInsightsPipelineConfigurationName,
      resourceAccessRoleArn,
      realTimeAlertConfiguration,
      elements,
      tags,
      clientRequestToken,
    } = props;

    mediaPipelinesInsightValidator(props);

    const mediaPipelinesInsightRequest = new MediaPipelineResources(
      this,
      'mediaPipelinesInsightRequest',
      {
        resourceType: 'MediaPipelineInsights',
        uid: uid,
        properties: {
          elements: elements,
          resourceAccessRoleArn: resourceAccessRoleArn,
          tags: tags,
          clientRequestToken: clientRequestToken,
          realTimeAlertConfiguration: realTimeAlertConfiguration,
          mediaInsightsPipelineConfigurationName:
            mediaInsightsPipelineConfigurationName ?? uid,
        },
      },
    );

    this.mediaInsightsPipelineConfigurationArn =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'MediaInsightsPipelineConfigurationArn',
      );
    this.mediaInsightsPipelineConfigurationId =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'MediaInsightsPipelineConfigurationId',
      );

    this.mediaInsightsPipelineConfigurationName =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'MediaInsightsPipelineConfigurationName',
      );
  }
}
