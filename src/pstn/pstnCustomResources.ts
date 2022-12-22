/* eslint-disable @typescript-eslint/indent */
import {
  Duration,
  CustomResource,
  ResourceProps,
  Stack,
  Names,
} from 'aws-cdk-lib';
import {
  ServicePrincipal,
  Role,
  ManagedPolicy,
  PolicyDocument,
  PolicyStatement,
} from 'aws-cdk-lib/aws-iam';
import { Architecture, IFunction, Function } from 'aws-cdk-lib/aws-lambda';
import * as cr from 'aws-cdk-lib/custom-resources';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { PstnFunction } from '../resources/pstn/pstn-function';

export interface PSTNResourceProps extends ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType:
    | 'PhoneNumber'
    | 'VoiceConnector'
    | 'SMA'
    | 'SMARule'
    | 'PhoneAssociation';
  readonly uid: string;
}

export class PSTNResources extends Construct {
  public readonly lambda: IFunction;
  public readonly pstnCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: PSTNResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const PSTNResourceProvider = new cr.Provider(this, 'PSTNResourceProvider', {
      onEventHandler: this.lambda,
    });

    this.pstnCustomResource = new CustomResource(this, 'pstnCustomResource', {
      serviceToken: PSTNResourceProvider.serviceToken,
      properties: { ...props },
    });
  }

  private ensureLambda(): Function {
    const stack = Stack.of(this);
    const constructName = 'PSTNResources';
    const existing = stack.node.tryFindChild(constructName);
    if (existing) {
      return existing as Function;
    }

    const pstnCustomResourceRole = new Role(this, 'pstnCustomResourceRole', {
      description: 'Amazon Chime PSTN Resources',
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      inlinePolicies: {
        ['chimePolicy']: new PolicyDocument({
          statements: [
            new PolicyStatement({
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
    });

    const fn = new PstnFunction(stack, constructName, {
      role: pstnCustomResourceRole,
      architecture: Architecture.ARM_64,
      timeout: Duration.seconds(60),
    });

    return fn;
  }
}

export interface PhoneAssociationProps extends ResourceProps {
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
          region: 'us-east-1',
          parameters: {
            E164PhoneNumbers: [props.e164PhoneNumber],
            VoiceConnectorId: props.voiceConnectorId,
            ForceAssociate: true,
          },
          physicalResourceId: PhysicalResourceId.of(Names.uniqueId(this)),
        },
        onDelete: {
          service: 'Chime',
          action: 'disassociatePhoneNumbersFromVoiceConnector',
          region: 'us-east-1',
          parameters: {
            E164PhoneNumbers: [props.e164PhoneNumber],
            VoiceConnectorId: props.voiceConnectorId,
          },
          physicalResourceId: PhysicalResourceId.of(Names.uniqueId(this)),
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      },
    );
  }
}
