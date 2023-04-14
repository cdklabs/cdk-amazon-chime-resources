import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  ChimeVoiceConnector,
  ChimePhoneNumber,
  PhoneCountry,
  PhoneProductType,
  PhoneNumberType,
  Protocol,
  NotificationTargetType,
  ChimeVoiceProfileDomain,
} from 'cdk-amazon-chime-resources';
import { Key, KeySpec } from 'aws-cdk-lib/aws-kms';

export class VoiceConnectorExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const voiceConnectorPhone = new ChimePhoneNumber(
      this,
      'voiceConnectorPhoneNumber',
      {
        phoneState: 'IL',
        phoneCountry: PhoneCountry.US,
        phoneProductType: PhoneProductType.VC,
        phoneNumberType: PhoneNumberType.LOCAL,
      },
    );

    const voiceConnector = new ChimeVoiceConnector(this, 'voiceConnector', {
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
          protocol: Protocol.TCP,
          priority: 1,
          weight: 1,
        },
        {
          host: '198.51.100.11',
          port: 5061,
          protocol: Protocol.TCP,
          priority: 2,
          weight: 1,
        },
      ],
      streaming: {
        enabled: true,
        dataRetention: 24,
        notificationTargets: [NotificationTargetType.EVENTBRIDGE],
      },
      loggingConfiguration: {
        enableSIPLogs: true,
        enableMediaMetricLogs: true,
      },
    });

    voiceConnectorPhone.associateWithVoiceConnector(voiceConnector);

    const voiceProfileDomainKey = new Key(this, 'voiceProfileDomainKey', {
      enableKeyRotation: true,
      keySpec: KeySpec.SYMMETRIC_DEFAULT,
      enabled: true,
    });

    const voiceProfileDomain = new ChimeVoiceProfileDomain(
      this,
      'voiceProfileDomain',
      {
        serverSideEncryptionConfiguration: {
          kmsKeyArn: voiceProfileDomainKey.keyArn,
        },
      },
    );

    new CfnOutput(this, 'voiceProfileDomainId', {
      value: voiceProfileDomain.voiceProfileDomainId!,
    });
    new CfnOutput(this, 'phoneNumber', {
      value: voiceConnectorPhone.phoneNumber,
    });
    new CfnOutput(this, 'voiceConnectorId', {
      value: voiceConnector.voiceConnectorId,
    });
  }
}
