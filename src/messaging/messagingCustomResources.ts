/* eslint-disable @typescript-eslint/indent */
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { CustomResource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface MessagingResourceProps extends cdk.ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType:
    | 'AppInstance'
    | 'ChannelFlow'
    | 'AppInstanceUser'
    | 'AppInstanceAdmin'
    | 'DataRetention'
    | 'StreamingConfig'
    | 'AppInstanceStreamingConfigurations';
  readonly uid: string;
}

export class MessagingResources extends Construct {
  public readonly lambda: lambda.IFunction;
  public readonly messagingCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: MessagingResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const MessagingResourceProvider = new cr.Provider(
      this,
      'MessagingResourceProvider',
      {
        onEventHandler: this.lambda,
      },
    );

    this.messagingCustomResource = new CustomResource(
      this,
      'messagingCustomResource',
      {
        serviceToken: MessagingResourceProvider.serviceToken,
        properties: { ...props },
      },
    );
  }

  private ensureLambda(): lambda.Function {
    const stack = cdk.Stack.of(this);
    const constructName = 'MessagingResources';
    const existing = stack.node.tryFindChild(constructName);
    if (existing) {
      return existing as lambda.Function;
    }

    const messagingCustomResourceRole = new iam.Role(
      this,
      'messagingCustomResourceRole',
      {
        description: 'Amazon Chime SDK Messaging Resources',
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        inlinePolicies: {
          ['chimePolicy']: new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                resources: ['*'],
                actions: [
                  'chime:CreateAppInstance',
                  'chime:CreateChannelFlow',
                  'chime:DeleteChannelFlow',
                  'chime:DescribeAppInstance',
                  'chime:ListAppInstances',
                  'chime:UpdateAppInstance',
                  'chime:DeleteAppInstance',
                  'chime:CreateAppInstanceUser',
                  'chime:DeleteAppInstanceUser',
                  'chime:ListAppInstanceUsers',
                  'chime:UpdateAppInstanceUser',
                  'chime:DescribeAppInstanceUser',
                  'chime:CreateAppInstanceAdmin',
                  'chime:DescribeAppInstanceAdmin',
                  'chime:ListAppInstanceAdmins',
                  'chime:DeleteAppInstanceAdmin',
                  'chime:PutAppInstanceRetentionSettings',
                  'chime:GetAppInstanceRetentionSettings',
                  'chime:PutAppInstanceStreamingConfigurations',
                  'chime:GetAppInstanceStreamingConfigurations',
                  'chime:DeleteAppInstanceStreamingConfigurations',
                  'chime:TagResource',
                  'chime:UntagResource',
                  'chime:ListTagsForResource',
                  'lambda:GetPolicy',
                  'lambda:AddPermission',
                  'iam:PutRolePolicy',
                  'iam:CreateServiceLinkedRole',
                ],
              }),
            ],
          }),
          ['kinesisPolicy']: new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                resources: [
                  `arn:aws:kinesis:${stack.region}:${stack.account}:stream/chime-messaging-*`,
                ],
                actions: ['kinesis:DescribeStream'],
              }),
            ],
          }),
          ['ssmPolicy']: new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                resources: [
                  `arn:aws:ssm:${stack.region}:${stack.account}:parameter/chime/*`,
                ],
                actions: [
                  'ssm:PutParameter',
                  'ssm:GetParameter',
                  'ssm:DeleteParameter',
                ],
              }),
            ],
          }),
        },
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSLambdaBasicExecutionRole',
          ),
        ],
      },
    );
    const fn = new lambda.Function(stack, constructName, {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(
        path.join(__dirname, '../../resources/messaging'),
      ),
      handler: 'index.handler',
      architecture: lambda.Architecture.ARM_64,
      role: messagingCustomResourceRole,
      timeout: cdk.Duration.minutes(1),
    });

    return fn;
  }
}
