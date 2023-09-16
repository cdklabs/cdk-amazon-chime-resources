/* eslint-disable @typescript-eslint/indent */
import {
  Duration,
  CustomResource,
  ResourceProps,
  Stack,
  CustomResourceProvider,
  CustomResourceProviderRuntime,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import { MessagingFunction } from '../resources/messaging/messaging-function';

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
  public readonly messagingCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: MessagingResourceProps) {
    super(scope, id);

    const messagingCustomResources = CustomResourceProvider.getOrCreateProvider(
      this,
      'Custom:MessagingResources',
      {
        codeDirectory:
          'node_modules/cdk-amazon-chime-resources/assets/resources/messaging',
        runtime: CustomResourceProviderRuntime.NODEJS_18_X,
        timeout: Duration.seconds(300),
        policyStatements: [
          {
            Action: [
              'chime:*ChannelFlow',
              'chime:*AppInstance*',
              'chime:*MessagingStreamingConfigurations',
              'chime:TagResource',
              'chime:UntagResource',
              'chime:ListTagsForResource',
              // 'lambda:GetPolicy',
              // 'lambda:AddPermission',
              'iam:PutRolePolicy',
              'iam:CreateServiceLinkedRole',
            ],
            Resource: '*',
            Effect: 'Allow',
          },
          {
            Action: ['kinesis:DescribeStream'],
            Resource: [
              `arn:aws:kinesis:${Stack.of(this).region}:${
                Stack.of(this).account
              }:stream/chime-messaging-*`,
            ],
            Effect: 'Allow',
          },
          {
            Action: 'ssm:*Parameter*',
            Resource: `arn:aws:ssm:${Stack.of(this).region}:${
              Stack.of(this).account
            }:parameter/chime/*`,
            Effect: 'Allow',
          },
        ],
      },
    );

    this.messagingCustomResource = new CustomResource(
      this,
      'messagingCustomResource',
      {
        serviceToken: messagingCustomResources.serviceToken,
        properties: { ...props },
      },
    );
  }
}
