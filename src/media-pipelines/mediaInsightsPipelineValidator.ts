import { MediaInsightsPipelineProps } from './mediaInsightsPipeline';

export function mediaPipelinesInsightValidator(
  props: MediaInsightsPipelineProps,
) {
  if (props.elements) {
    if (
      !props.elements.some(
        (element) =>
          element.amazonTranscribeCallAnalyticsProcessorConfiguration ||
          element.amazonTranscribeProcessorConfiguration ||
          element.voiceAnalyticsProcessorConfiguration ||
          element.s3RecordingSinkConfiguration,
      )
    ) {
      throw new Error(
        'MediaInsightsPipeline elements must contain at least one of amazonTranscribeCallAnalyticsProcessorConfiguration, amazonTranscribeProcessorConfiguration, voiceAnalyticsProcessorConfiguration, or s3RecordingSinkConfiguration',
      );
    }

    if (
      props.elements.some(
        (element) =>
          element.amazonTranscribeCallAnalyticsProcessorConfiguration ||
          element.amazonTranscribeProcessorConfiguration ||
          element.voiceAnalyticsProcessorConfiguration,
      ) &&
      !props.elements.some(
        (element) => element.kinesisDataStreamSinkConfiguration,
      )
    ) {
      throw new Error(
        'A kinesisDataStreamSinkConfiguration is required if amazonTranscribeCallAnalyticsProcessorConfiguration, amazonTranscribeProcessorConfiguration, or voiceAnalyticsProcessorConfiguration are used',
      );
    }

    if (
      props.elements.some(
        (element) =>
          element.amazonTranscribeCallAnalyticsProcessorConfiguration,
      ) &&
      props.elements.some(
        (element) => element.amazonTranscribeProcessorConfiguration,
      )
    ) {
      throw new Error(
        'Element may only contain amazonTranscribeCallAnalyticsProcessorConfiguration or amazonTranscribeProcessorConfiguration',
      );
    }

    if (
      props.elements.some((element) => element.s3RecordingSinkConfiguration) &&
      props.elements.some(
        (element) =>
          element.amazonTranscribeProcessorConfiguration ||
          element.amazonTranscribeCallAnalyticsProcessorConfiguration ||
          element.voiceAnalyticsProcessorConfiguration,
      )
    ) {
      throw new Error(
        's3RecordingSinkConfiguration cannot be used with amazonTranscribeProcessorConfiguration, amazonTranscribeCallAnalyticsProcessorConfiguration, or voiceAnalyticsProcessorConfiguration',
      );
    }

    if (
      props.elements.some((element) => element.s3RecordingSinkConfiguration) &&
      props.realTimeAlertConfiguration
    ) {
      throw new Error(
        's3RecordingSinkConfiguration cannot be used with realTimeAlertConfiguration',
      );
    }
  }

  if (props.realTimeAlertConfiguration) {
    if (props.realTimeAlertConfiguration.rules.length > 3) {
      throw new Error('A maximum of three realTimeAlert rules are allowed');
    }

    props.realTimeAlertConfiguration.rules.forEach((rule) => {
      if (
        rule.type == 'KeywordMatch' &&
        !rule.keywordMatchConfiguration &&
        (rule.issueDetectionConfiguration || rule.sentimentConfiguration)
      ) {
        throw new Error('KeywordMatch type requires keywordMatchConfiguration');
      }
      if (
        rule.type == 'Sentiment' &&
        !rule.sentimentConfiguration &&
        (rule.issueDetectionConfiguration || rule.keywordMatchConfiguration)
      ) {
        throw new Error('Sentiment type requires sentimentConfiguration');
      }
      if (
        rule.type == 'IssueDetection' &&
        !rule.issueDetectionConfiguration &&
        (rule.sentimentConfiguration || rule.keywordMatchConfiguration)
      ) {
        throw new Error(
          'IssueDetection type requires issueDetectionConfiguration',
        );
      }
    });

    props.realTimeAlertConfiguration.rules.forEach((rule) => {
      if (
        (rule.type == 'KeywordMatch' ||
          rule.type == 'Sentiment' ||
          rule.type == 'IssueDetection') &&
        !(
          rule.issueDetectionConfiguration ||
          rule.keywordMatchConfiguration ||
          rule.sentimentConfiguration
        )
      ) {
        throw new Error('Rule type must contain configuration');
      }
    });

    if (
      props.elements.some(
        (element) =>
          element.amazonTranscribeProcessorConfiguration ||
          element.amazonTranscribeCallAnalyticsProcessorConfiguration,
      )
    ) {
      if (
        props.elements.some(
          (element) => element.amazonTranscribeProcessorConfiguration,
        ) &&
        (props.realTimeAlertConfiguration.rules.some(
          (rule) => rule.sentimentConfiguration,
        ) ||
          props.realTimeAlertConfiguration.rules.some(
            (rule) => rule.issueDetectionConfiguration,
          ))
      ) {
        throw new Error(
          'amazonTranscribeProcessorConfiguration cannot use realTimeAlertConfiguration sentimentConfiguration or issueDetectionConfiguration',
        );
      }
    } else {
      throw new Error(
        'realTimeAlertConfiguration requires amazonTranscribeProcessorConfiguration or amazonTranscribeCallAnalyticsProcessorConfiguration',
      );
    }
  }
  return true;
}
