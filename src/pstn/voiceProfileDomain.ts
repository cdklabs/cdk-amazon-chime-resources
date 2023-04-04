// import { Termination } from '@aws-sdk/client-chime-sdk-voice';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PSTNResources } from './pstnCustomResources';

export interface ServerSideEncryptionConfiguration {
  readonly kmsKeyArn: string;
}

export interface VoiceProfileDomainTag {
  readonly key: string;
  readonly value: string;
}

export interface VoiceProfileDomainProps {
  readonly name?: string;
  readonly description?: string;
  readonly serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
  readonly clientRequestToken?: string;
  readonly tags?: Array<VoiceProfileDomainTag>;
}

export class ChimeVoiceProfileDomain extends Construct {
  public readonly voiceProfileDomainId: string;
  public readonly voiceProfileDomainArn: string;
  public readonly voiceProfileDomainName: string;

  constructor(scope: Construct, id: string, props: VoiceProfileDomainProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      name,
      description,
      serverSideEncryptionConfiguration,
      clientRequestToken,
      tags,
    } = props;

    const voiceProfileDomainRequest = new PSTNResources(
      this,
      'voiceConnectorRequest',
      {
        resourceType: 'VoiceProfileDomain',
        uid: uid,
        properties: {
          name: name ?? uid,
          description: description,
          serverSideEncryptionConfiguration: serverSideEncryptionConfiguration,
          clientRequestToken: clientRequestToken,
          tags: tags,
        },
      },
    );

    this.voiceProfileDomainId =
      voiceProfileDomainRequest.pstnCustomResource.getAttString(
        'voiceProfileDomainId',
      );
    this.voiceProfileDomainArn =
      voiceProfileDomainRequest.pstnCustomResource.getAttString(
        'voiceProfileDomainArn',
      );

    this.voiceProfileDomainName =
      voiceProfileDomainRequest.pstnCustomResource.getAttString(
        'voiceProfileDomainName',
      );
  }
}
