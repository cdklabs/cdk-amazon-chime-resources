import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as chime from 'cdk-amazon-chime-resources';

export class MessagingExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const appInstance = new chime.MessagingAppInstance(this, 'appInstance', {});

    new CfnOutput(this, 'appInstanceArn', {
      value: appInstance.appInstanceArn,
    });
  }
}
