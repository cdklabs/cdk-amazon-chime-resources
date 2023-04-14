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
import { MediaPipelinesFunction } from '../resources/media-pipelines/media-pipelines-function';

export interface MediaPipelineResourceProps extends ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType: 'MediaPipelineInsights';
  readonly uid: string;
}

export class MediaPipelineResources extends Construct {
  public readonly lambda: IFunction;
  public readonly mediaPipelineCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: MediaPipelineResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const MediaPipelineResourceProvider = new Provider(
      this,
      'MediaPipelineResourceProvider',
      {
        onEventHandler: this.lambda,
      },
    );

    this.mediaPipelineCustomResource = new CustomResource(
      this,
      'mediaPipelineCustomResource',
      {
        serviceToken: MediaPipelineResourceProvider.serviceToken,
        properties: { ...props },
      },
    );
  }

  private ensureLambda(): Function {
    const stack = Stack.of(this);
    // const constructName = 'MediaPipelineResources';
    // const existing = stack.node.tryFindChild(constructName);
    // istanbul ignore next */
    // if (existing) {
    //   return existing as Function;
    // }

    const mediaPipelineCustomResourceRole = new Role(
      this,
      'mediaPipelineCustomResourceRole',
      {
        description: 'Amazon Chime SDK Media Pipeline Resources',
        assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
        inlinePolicies: {
          ['chimePolicy']: new PolicyDocument({
            statements: [
              new PolicyStatement({
                resources: ['*'],
                actions: [
                  'chime:*MediaInsightsPipelineConfiguration',
                  'chime:ListVoiceConnectors',
                  'chime:tagResource',
                  's3:ListBucket',
                  'kinesis:DescribeStream',
                  'logs:GetLogDelivery',
                  'logs:DeleteLogDelivery',
                  'logs:ListLogDeliveries',
                  'logs:CreateLogGroup',
                  'logs:DescribeResourcePolicies',
                  'logs:PutResourcePolicy',
                  'logs:DescribeLogGroups',
                  'logs:CreateLogDelivery',
                  'lambda:GetPolicy',
                  'lambda:AddPermission',
                  'iam:PutRolePolicy',
                  'iam:CreateServiceLinkedRole',
                  'iam:PassRole',
                ],
              }),
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

    const fn = new MediaPipelinesFunction(this, 'MediaPipelinesFunction', {
      role: mediaPipelineCustomResourceRole,
      timeout: Duration.seconds(60),
    });

    return fn as Function;
  }
}
