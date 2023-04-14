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
import {
  // Architecture,
  // Runtime,
  IFunction,
  Function,
  // Code,
} from 'aws-cdk-lib/aws-lambda';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
  Provider,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { PstnFunction } from '../resources/pstn/pstn-function';

export interface PSTNResourceProps extends ResourceProps {
  readonly properties: { [propname: string]: any };
  readonly resourceType:
    | 'PhoneNumber'
    | 'VoiceConnector'
    | 'SMA'
    | 'SMALogging'
    | 'SMAAlexaSkill'
    | 'SMARule'
    | 'PhoneAssociation'
    | 'VoiceProfileDomain';
  readonly uid: string;
}

export class PSTNResources extends Construct {
  public readonly lambda: IFunction;
  public readonly pstnCustomResource: CustomResource;

  constructor(scope: Construct, id: string, props: PSTNResourceProps) {
    super(scope, id);
    this.lambda = this.ensureLambda();

    const PSTNResourceProvider = new Provider(this, 'PSTNResourceProvider', {
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
    /* istanbul ignore next */
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
                'chime:*VoiceProfileDomain*',
                'chime:*MediaInsightsPipelineConfiguration*',
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
                'chime:PutVoiceConnectorLoggingConfiguration',
                'chime:ListPhoneNumbers',
                'chime:AssociatePhoneNumbersWithVoiceConnector',
                'chime:DisassociatePhoneNumbersFromVoiceConnector',
                'chime:DeleteVoiceConnector',
                'chime:PutSipMediaApplicationAlexaSkillConfiguration',
                'chime:PutSipMediaApplicationLoggingConfiguration',
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
                'kms:CreateGrant',
                'kms:DescribeKey',
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

    const fn = new PstnFunction(this, 'pstnResourcesFunction', {
      role: pstnCustomResourceRole,
      timeout: Duration.seconds(60),
    });
    // const fn = new Function(this, 'pstnResourcesFunction', {
    //   runtime: Runtime.NODEJS_18_X,
    //   architecture: Architecture.ARM_64,
    //   role: pstnCustomResourceRole,
    //   timeout: Duration.seconds(60),
    //   handler: 'index.handler',
    //   code: Code.fromAsset(path.join(__dirname, '../../src/resources/pstn')),
    // });

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
