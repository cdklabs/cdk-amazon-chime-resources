import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import {
  TriggerType,
  ChimeSipRule,
  ChimeSipMediaApp,
  PhoneNumberType,
  PhoneProductType,
  ChimePhoneNumber,
  // AlexaSkillStatus,
} from 'cdk-amazon-chime-resources';

export class PSTNExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const phoneNumber = new ChimePhoneNumber(this, 'phoneNumber', {
      phoneState: 'IL',
      phoneNumberType: PhoneNumberType.LOCAL,
      phoneProductType: PhoneProductType.SMA,
    });

    const smaHandler = new Function(this, 'smaHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'smaHandler.lambda_handler',
      code: Code.fromAsset('../src'),
    });

    const sipMediaApp = new ChimeSipMediaApp(this, 'sipMediaApp', {
      region: this.region,
      endpoint: smaHandler.functionArn,
    });

    const sipRule = new ChimeSipRule(this, 'sipRule', {
      triggerType: TriggerType.TO_PHONE_NUMBER,
      triggerValue: phoneNumber.phoneNumber,
      targetApplications: [
        {
          region: this.region,
          priority: 1,
          sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        },
      ],
    });

    sipMediaApp.logging({ enableSipMediaApplicationMessageLogs: true });
    // sipMediaApp.alexaSkill({
    //   alexaSkillIds: [
    //     'amzn1.application-oa2-client.11223344556677889900112233445566',
    //   ],
    //   alexaSkillStatus: AlexaSkillStatus.ACTIVE,
    // });
    new CfnOutput(this, 'phoneNumberOutput', {
      value: phoneNumber.phoneNumber,
    });

    new CfnOutput(this, 'smaId', {
      value: sipMediaApp.sipMediaAppId,
    });

    new CfnOutput(this, 'sipRuleId', {
      value: sipRule.sipRuleId,
    });
  }
}
