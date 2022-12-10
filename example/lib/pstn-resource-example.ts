import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as chime from 'cdk-amazon-chime-resources';

export class PSTNExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const phoneNumber = new chime.ChimePhoneNumber(this, 'phoneNumber', {
      phoneState: 'IL',
      phoneNumberType: chime.PhoneNumberType.LOCAL,
      phoneProductType: chime.PhoneProductType.SMA,
    });

    // const smaHandler = new Function(this, 'smaHandler', {
    //   runtime: Runtime.PYTHON_3_9,
    //   handler: 'smaHandler.lambda_handler',
    //   code: Code.fromAsset('../src'),
    // });

    // const sipMediaApp = new chime.ChimeSipMediaApp(this, 'sipMediaApp', {
    //   region: this.region,
    //   endpoint: smaHandler.functionArn,
    // });

    // const sipRule = new chime.ChimeSipRule(this, 'sipRule', {
    //   triggerType: chime.TriggerType.TO_PHONE_NUMBER,
    //   triggerValue: phoneNumber.phoneNumber,
    //   targetApplications: [
    //     {
    //       region: this.region,
    //       priority: 1,
    //       sipMediaApplicationId: sipMediaApp.sipMediaAppId,
    //     },
    //   ],
    // });

    new CfnOutput(this, 'phoneNumberOutput', {
      value: phoneNumber.phoneNumber,
    });

    // new CfnOutput(this, 'smaId', {
    //   value: sipMediaApp.sipMediaAppId,
    // });

    // new CfnOutput(this, 'sipRuleId', {
    //   value: sipRule.sipRuleId,
    // });
  }
}
