import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as chime from 'cdk-amazon-chime-resources';

export class PSTNExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const phoneNumber = new chime.ChimePhoneNumber(this, 'phoneNumber', {
      phoneState: 'IL',
      phoneNumberType: chime.PhoneNumberType.LOCAL,
      phoneProductType: chime.PhoneProductType.SMA,
    });

    const smaHandler = new Function(this, 'smaHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'smaHandler.lambda_handler',
      code: Code.fromAsset('../src'),
    });

    const sipMediaApp = new chime.ChimeSipMediaApp(this, 'sipMediaApp', {
      region: this.region,
      endpoint: smaHandler.functionArn,
    });

    const sipRule = new chime.ChimeSipRule(this, 'sipRule', {
      triggerType: chime.TriggerType.TO_PHONE_NUMBER,
      triggerValue: phoneNumber.phoneNumber,
      targetApplications: [
        {
          region: this.region,
          priority: 1,
          sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        },
      ],
    });

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
      },
    );

    voiceConnectorPhone.associateWithVoiceConnector(voiceConnector);

    new CfnOutput(this, 'phoneNumberOutput', {
      value: phoneNumber.phoneNumber,
    });

    new CfnOutput(this, 'smaId', {
      value: sipMediaApp.sipMediaAppId,
    });

    new CfnOutput(this, 'sipRuleId', {
      value: sipRule.sipRuleId,
    });

    new CfnOutput(this, 'voiceConnectorPhoneNumberOutput', {
      value: voiceConnectorPhone.phoneNumber,
    });

    new CfnOutput(this, 'voiceConnectorId', {
      value: voiceConnector.voiceConnectorId,
    });
  }
}
