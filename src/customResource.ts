/* eslint-disable @typescript-eslint/indent */
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { CustomResource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface ChimeResourceProps extends cdk.ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType:
    | 'PhoneNumber'
    | 'VoiceConnector'
    | 'SMA'
    | 'SMARule'
    | 'PhoneAssociation';
  readonly uid: string;
}

export class ChimeResources extends Construct {
  public readonly lambda: lambda.IFunction;
  public readonly chimeCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: ChimeResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const ChimeResourceProvider = new cr.Provider(
      this,
      'ChimeResourceProvider',
      {
        onEventHandler: this.lambda,
      },
    );

    this.chimeCustomResource = new CustomResource(this, 'ChimeCustomResource', {
      serviceToken: ChimeResourceProvider.serviceToken,
      properties: { ...props },
    });
  }

  private ensureLambda(): lambda.Function {
    const stack = cdk.Stack.of(this);
    const constructName = 'ChimeResources';
    const existing = stack.node.tryFindChild(constructName);
    if (existing) {
      return existing as lambda.Function;
    }

    const chimeCustomResourceRole = new iam.Role(this, 'ChimeResourcesRole', {
      description: 'Chime Resources',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        ['chimePolicy']: new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              resources: ['*'],
              actions: [
                'chime:CreateSipRule',
                'chime:DeleteSipRule',
                'chime:UpdateSipRule',
                'chime:GetSipRule',
                'chime:CreateSipMediaApplication',
                'chime:DeleteSipMediaApplication',
                'chime:GetPhoneNumberOrder',
                'chime:SearchAvailablePhoneNumbers',
                'chime:CreatePhoneNumberOrder',
                'chime:DeletePhoneNumber',
                'chime:GetPhoneNumber',
                'chime:CreateVoiceConnector',
                'chime:PutVoiceConnectorStreamingConfiguration',
                'chime:PutVoiceConnectorTermination',
                'chime:PutVoiceConnectorOrigination',
                'chime:ListPhoneNumbers',
                'chime:AssociatePhoneNumbersWithVoiceConnector',
                'chime:DisassociatePhoneNumbersFromVoiceConnector',
                'chime:DeleteVoiceConnector',
                'lambda:GetPolicy',
                'lambda:AddPermission',
                'iam:PutRolePolicy',
                'iam:CreateServiceLinkedRole',
              ],
            }),
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
    });
    const fn = new lambda.Function(stack, constructName, {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset(path.join(__dirname, '../resources')),
      handler: 'index.handler',
      architecture: lambda.Architecture.ARM_64,
      role: chimeCustomResourceRole,
      timeout: cdk.Duration.minutes(1),
    });

    return fn;
  }
}

export interface PhoneAssociationProps extends cdk.ResourceProps {
  readonly voiceConnectorId: string;
  readonly e164PhoneNumber: string;
}
export class PhoneAssociation extends Construct {
  public readonly phoneAssociationResource: AwsCustomResource;

  constructor(scope: Construct, id: string, props: PhoneAssociationProps) {
    super(scope, id);

    this.phoneAssociationResource = new AwsCustomResource(
      this,
      'phoneAssociation',
      {
        onCreate: {
          service: 'Chime',
          action: 'associatePhoneNumbersWithVoiceConnector',
          parameters: {
            E164PhoneNumbers: [props.e164PhoneNumber],
            VoiceConnectorId: props.voiceConnectorId,
            ForceAssociate: true,
          },
          physicalResourceId: PhysicalResourceId.of(cdk.Names.uniqueId(this)),
        },
        onDelete: {
          service: 'Chime',
          action: 'disassociatePhoneNumbersFromVoiceConnector',
          parameters: {
            E164PhoneNumbers: [props.e164PhoneNumber],
            VoiceConnectorId: props.voiceConnectorId,
          },
          physicalResourceId: PhysicalResourceId.of(cdk.Names.uniqueId(this)),
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      },
    );
  }
}
