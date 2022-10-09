import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as chime from 'cdk-amazon-chime-resources';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import { v4 as uuidv4 } from 'uuid';

export class MessagingExample extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const appInstance = new chime.MessagingAppInstance(this, 'appInstance', {
      name: 'MessagingAppInstanceExample',
    });

    const appInstanceUser = new chime.MessagingAppInstanceUser(
      this,
      'appInstanceUser',
      {
        appInstanceArn: appInstance.appInstanceArn,
        appInstanceUserId: '1234',
      },
    );

    new chime.MessagingAppInstanceAdmin(this, 'appInstanceAdmin', {
      appInstanceAdminArn: appInstanceUser.appInstanceUserArn,
      appInstanceArn: appInstance.appInstanceArn,
    });

    const channelFlowLambdaRole = new iam.Role(this, 'channelFlowLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        ['chimePolicy']: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              resources: [
                `arn:aws:chime:${this.region}:${this.account}:app-instance/*`,
              ],
              actions: ['chime:ChannelFlowCallback'],
            }),
          ],
        }),
      },
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole',
        ),
      ],
    });

    const channelFlowHandler = new Function(this, 'channelFlowHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'channelFlowHandler.lambda_handler',
      code: Code.fromAsset('src'),
      role: channelFlowLambdaRole,
    });

    channelFlowHandler.addPermission('Chime Resource Policy', {
      principal: new iam.ServicePrincipal('chime.amazonaws.com'),
      sourceArn: `arn:aws:chime:${this.region}:${this.account}:app-instance/*`,
      sourceAccount: `${this.account}`,
    });

    new chime.ChannelFlow(this, 'channelFlow', {
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
      clientRequestToken: uuidv4(),
    });

    const kinesisStream = new kinesis.Stream(this, 'kinesisStream', {
      streamName: 'chime-messaging-channel-stream',
      shardCount: 2,
      encryption: kinesis.StreamEncryption.MANAGED,
    });

    // both of the following add streaming config, but will override each other, can use either
    new chime.AppInstanceStreamingConfigurations(this, 'streamingConfig',
      {
          appInstanceArn: appInstance.appInstanceArn,
          streamingConfigs: [{
          appInstanceDataType: chime.AppInstanceDataType.CHANNEL,
          resourceArn: kinesisStream.streamArn,
        }],
      }
    );

    // appInstance.streaming([
    //   {
    //     appInstanceDataType: chime.AppInstanceDataType.CHANNEL,
    //     resourceArn: kinesisStream.streamArn,
    //   },
    // ]);

    appInstance.retention(2);

    new CfnOutput(this, 'appInstanceArn', {
      value: `aws chime-sdk-identity describe-app-instance --app-instance-arn ${appInstance.appInstanceArn}`,
    });

    new CfnOutput(this, 'channelFlowArn', {
      value: `aws chime-sdk-messaging list-channel-flows --app-instance-arn ${appInstance.appInstanceArn}`,
    });

    new CfnOutput(this, 'appInstanceAdminArn', {
      value: `aws chime-sdk-identity list-app-instance-admins --app-instance-arn ${appInstance.appInstanceArn}`,
    });

    new CfnOutput(this, 'streamingConfiguration', {
      value: `aws chime get-app-instance-streaming-configurations --app-instance-arn ${appInstance.appInstanceArn}`,
    });

    new CfnOutput(this, 'dataRetentionConfig', {
      value: `aws chime get-app-instance-retention-settings --app-instance-arn ${appInstance.appInstanceArn}`,
    });
  }
}
