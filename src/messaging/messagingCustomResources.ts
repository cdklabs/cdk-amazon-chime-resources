/* eslint-disable @typescript-eslint/indent */
import { Duration, CustomResource, ResourceProps, Stack } from 'aws-cdk-lib';
import {
  ServicePrincipal,
  Role,
  ManagedPolicy,
  PolicyDocument,
  PolicyStatement,
} from 'aws-cdk-lib/aws-iam';
import { IFunction, Function } from 'aws-cdk-lib/aws-lambda';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { MessagingFunction } from '../resources/messaging/messaging-function';

export interface MessagingResourceProps extends ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType:
    | 'AppInstance'
    | 'ChannelFlow'
    | 'AppInstanceUser'
    | 'AppInstanceBot'
    | 'AppInstanceAdmin'
    | 'DataRetention'
    | 'StreamingConfig'
    | 'AppInstanceStreamingConfigurations';
  readonly uid: string;
}

export class MessagingResources extends Construct {
  public readonly lambda: IFunction;
  public readonly messagingCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: MessagingResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const MessagingResourceProvider = new Provider(
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

  private ensureLambda(): Function {
    const stack = Stack.of(this);
    const constructName = 'MessagingResources';
    const existing = stack.node.tryFindChild(constructName);
    /* istanbul ignore next */
    if (existing) {
      return existing as Function;
    }

    const messagingCustomResourceRole = new Role(
      this,
      'messagingCustomResourceRole',
      {
        description: 'Amazon Chime SDK Messaging Resources',
        assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        inlinePolicies: {
          ['chimePolicy']: new PolicyDocument({
            statements: [
              new PolicyStatement({
                resources: ['*'],
                actions: [
                  'chime:*ChannelFlow',
                  'chime:*AppInstance*',
                  'chime:*MessagingStreamingConfigurations',
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
          ['kinesisPolicy']: new PolicyDocument({
            statements: [
              new PolicyStatement({
                resources: [
                  `arn:aws:kinesis:${stack.region}:${stack.account}:stream/chime-messaging-*`,
                ],
                actions: ['kinesis:DescribeStream'],
              }),
            ],
          }),
          ['ssmPolicy']: new PolicyDocument({
            statements: [
              new PolicyStatement({
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
          ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSLambdaBasicExecutionRole',
          ),
        ],
      },
    );

    const fn = new MessagingFunction(this, 'messagingResourcesFunction', {
      role: messagingCustomResourceRole,
      timeout: Duration.seconds(60),
    });

    return fn;
  }
}
