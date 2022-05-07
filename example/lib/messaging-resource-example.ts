import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as chime from 'cdk-amazon-chime-resources';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';

export class MessagingExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const appInstance = new chime.MessagingAppInstance(this, 'appInstance', {});

    const channelFlowHandler = new Function(this, 'channelFlowHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'channelFlowHandler.lambda_handler',
      code: Code.fromAsset('src'),
    });

    const channelFlow = new chime.ChannelFlow(this, 'channelFlow', {
      appInstanceArn: appInstance.appInstanceArn,
      processors: [
        {
          name: 'channelFlowName',
          configuration: {
            lambda: {
              resourceArn: channelFlowHandler.functionArn,
              invocationType: chime.InvocationType.ASYNC,
            },
          },
          executionOrder: 1,
          fallbackAction: chime.FallbackAction.ABORT,
        },
      ],
      clientRequestToken: 'clientRequestToken',
    });

    new CfnOutput(this, 'appInstanceArn', {
      value: appInstance.appInstanceArn,
    });

    new CfnOutput(this, 'channelFlowArn', {
      value: channelFlow.channelFlowArn,
    });
  }
}
