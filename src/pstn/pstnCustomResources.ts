/* eslint-disable @typescript-eslint/indent */
import {
  Duration,
  CustomResource,
  ResourceProps,
  Stack,
  Names,
  CustomResourceProvider,
  CustomResourceProviderRuntime,
} from 'aws-cdk-lib';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

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
  public readonly pstnCustomResource: CustomResource;
  constructor(scope: Construct, id: string, props: PSTNResourceProps) {
    super(scope, id);

    const pstnCustomResource = CustomResourceProvider.getOrCreateProvider(
      this,
      'Custom::PSTNResources',
      {
        codeDirectory:
          'node_modules/cdk-amazon-chime-resources/assets/resources/pstn/pstn.lambda',
        runtime: CustomResourceProviderRuntime.NODEJS_18_X,
        timeout: Duration.seconds(300),
        policyStatements: [
          {
            Action: [
              'chime:CreatePhoneNumberOrder',
              'chime:CreateSipMediaApplication',
              'chime:CreateSipRule',
              'chime:CreateVoiceConnector',
              'chime:CreateVoiceProfileDomain',
              'chime:DeletePhoneNumber',
              'chime:DeleteSipMediaApplication',
              'chime:DeleteSipRule',
              'chime:DeleteVoiceConnector',
              'chime:DeleteVoiceProfileDomain',
              'chime:GetPhoneNumber',
              'chime:GetPhoneNumberOrder',
              'chime:GetSipRule',
              'chime:ListPhoneNumbers',
              'chime:PutSipMediaApplicationLoggingConfiguration',
              'chime:PutVoiceConnectorLoggingConfiguration',
              'chime:PutVoiceConnectorOrigination',
              'chime:PutVoiceConnectorStreamingConfiguration',
              'chime:PutVoiceConnectorTermination',
              'chime:*MediaInsightsPipelineConfiguration',
              'chime:SearchAvailablePhoneNumbers',
              'chime:UpdateSipRule',
            ],
            Resource: '*',
            Effect: 'Allow',
          },
          {
            Action: [
              'logs:DescribeLogGroups',
              'logs:CreateLogGroup',
              'logs:CreateLogStream',
              'logs:ListLogDeliveries',
              'logs:CreateLogDelivery',
              'logs:GetLogDelivery',
              'logs:DeleteLogDelivery',
            ],
            Resource: '*',
            Effect: 'Allow',
          },
          {
            Action: 'iam:CreateServiceLinkedRole',
            Resource: '*',
            Effect: 'Allow',
          },
          {
            Action: ['lambda:GetPolicy', 'lambda:AddPermission'],
            Resource: '*',
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

    if (
      props.resourceType === 'VoiceProfileDomain' &&
      props.properties.serverSideEncryptionConfiguration.kmsKeyArn
    ) {
      pstnCustomResource.addToRolePolicy({
        Action: 'kms:CreateGrant',
        Resource: props.properties.serverSideEncryptionConfiguration.kmsKeyArn,
        Effect: 'Allow',
      });
      pstnCustomResource.addToRolePolicy({
        Action: 'kms:DescribeKey',
        Resource: props.properties.serverSideEncryptionConfiguration.kmsKeyArn,
        Effect: 'Allow',
      });
    }

    // if (props.resourceType === 'SMA' && props.properties.endpoint) {
    //   pstnCustomResource.addToRolePolicy({
    //     Action: 'lambda:GetPolicy',
    //     Resource: props.properties.endpoint,
    //     Effect: 'Allow',
    //   });

    //   pstnCustomResource.addToRolePolicy({
    //     Action: 'lambda:AddPermission',
    //     Resource: props.properties.endpoint,
    //     Effect: 'Allow',
    //   });
    // }

    this.pstnCustomResource = new CustomResource(this, 'pstnCustomResource', {
      resourceType: 'Custom::PSTNResources',
      serviceToken: pstnCustomResource.serviceToken,
      properties: { ...props },
    });
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
        installLatestAwsSdk: false,
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      },
    );
  }
}
