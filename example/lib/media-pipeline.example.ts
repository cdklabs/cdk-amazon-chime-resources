import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MediaInsightPipeline } from 'cdk-amazon-chime-resources';

export class MediaPipeline extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const voiceConnectorPhone = new chime.ChimePhoneNumber(
      this,
      'voiceConnectorPhoneNumber',
      {
        phoneState: 'IL',
        phoneCountry: chime.PhoneCountry.US,
        phoneProductType: chime.PhoneProductType.VC,
        phoneNumberType: chime.PhoneNumberType.LOCAL,
      },
    );

    const voiceConnector = new chime.ChimeVoiceConnector(
      this,
      'voiceConnector',
      {
        encryption: false,
        region: 'us-east-1',
        termination: {
          terminationCidrs: ['198.51.100.0/27'],
          callingRegions: ['US'],
          cps: 1,
        },
        origination: [
          {
            host: '198.51.100.10',
            port: 5061,
            protocol: chime.Protocol.TCP,
            priority: 1,
            weight: 1,
          },
          {
            host: '198.51.100.11',
            port: 5061,
            protocol: chime.Protocol.TCP,
            priority: 2,
            weight: 1,
          },
        ],
        streaming: {
          enabled: true,
          dataRetention: 0,
          notificationTargets: [chime.NotificationTargetType.EVENTBRIDGE],
        },
        loggingConfiguration: {
          enableSIPLogs: true,
          enableMediaMetricLogs: true,
        },
      },
    );

    voiceConnectorPhone.associateWithVoiceConnector(voiceConnector);

    new CfnOutput(this, 'phoneNumber', {
      value: voiceConnectorPhone.phoneNumber,
    });

    new CfnOutput(this, 'voiceConnectorId', {
      value: voiceConnector.voiceConnectorId,
    });
  }
}
