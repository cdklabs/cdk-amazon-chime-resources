import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PSTNResources } from './pstnCustomResources';
import { voiceConnectorValidator } from './voiceConnectorValidator';

export enum NotificationTargetType {
  EVENTBRIDGE = 'EventBridge',
  SNS = 'SNS',
  SQS = 'SQS',
}

export enum Protocol {
  TCP = 'TCP',
  UDP = 'UDP',
}

export interface Termination {
  /**
   * Calling Regions for VoiceConnector (optional)
   *
   * @default - ['US']
   */
  readonly callingRegions: Array<string>;
  /**
   * termination IP for VoiceConnector (optional)
   *
   * @default - none
   */
  readonly terminationCidrs: Array<string>;
}

export interface Routes {
  readonly host: string;
  readonly port: number;
  readonly protocol: Protocol;
  readonly priority: number;
  readonly weight: number;
}

export interface Streaming {
  readonly enabled: boolean;
  /**
   * Streaming data retention for VoiceConnector
   *
   * @default - 0
   */
  readonly dataRetention: number;

  /**
   * Streaming data retention for VoiceConnector
   *
   * @default - 0
   */
  readonly notificationTargets: Array<NotificationTargetType>;
}
/**
 * Props for `SipMediaApplication`.
 */
export interface VoiceConnectorProps {
  /**
   * region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler
   *
   * @default - same region as stack deployment
   */
  readonly region?: string;

  /**
   * name for VoiceConnector
   *
   * @default - unique ID for resource
   */
  readonly name?: string;

  /**
   * Encryption boolean for VoiceConnector
   *
   * @default - False
   */
  readonly encryption?: boolean;

  readonly termination?: Termination;
  readonly origination?: Array<Routes>;
  readonly streaming?: Streaming;
}

export class ChimeVoiceConnector extends Construct {
  public readonly voiceConnectorId: string;

  constructor(scope: Construct, id: string, props: VoiceConnectorProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { name, region, encryption, termination, origination, streaming } =
      props;

    voiceConnectorValidator(props);

    const voiceConnectorRequest = new PSTNResources(
      this,
      'voiceConnectorRequest',
      {
        resourceType: 'VoiceConnector',
        uid: uid,
        properties: {
          region: region || cdk.Stack.of(this).region,
          name: name ?? uid,
          encryption: encryption || false,
          termination: termination,
          origination: origination,
          streaming: streaming,
        },
      },
    );

    this.voiceConnectorId =
      voiceConnectorRequest.pstnCustomResource.getAttString('voiceConnectorId');
  }
}
