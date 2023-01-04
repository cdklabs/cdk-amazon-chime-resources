import * as cdk from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { PSTNResources } from './pstnCustomResources';
import {
  sipMediaApplicationValidator,
  loggingValidator,
  alexaSkillConfigurationValidator,
} from './sipMediaApplicationValidator';

/**
 * Props for `SipMediaApplication`.
 */
export interface SipMediaAppProps {
  /**
   * region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler
   *
   * @default - same region as stack deployment
   */
  readonly region?: string;

  /**
   * endpoint for SipMediaApplication(required)
   *
   * @default - none
   */
  readonly endpoint: Function['functionArn'];

  /**
   * name for SipMediaApplication (optional)
   *
   * @default - unique ID for resource
   */
  readonly name?: string;
}

/**
 * Props for `AppInstanceStreamingConfiguration`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_AppInstanceStreamingConfiguration.html
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * Enables message logging for the specified SIP media application.
   */
  readonly enableSipMediaApplicationMessageLogs: boolean;
}

export enum AlexaSkillStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface SipMediaApplicationAlexaSkillConfiguration {
  readonly alexaSkillIds: string[];
  readonly alexaSkillStatus: AlexaSkillStatus;
}

export class ChimeSipMediaApp extends Construct {
  public readonly sipMediaAppId: string;

  constructor(scope: Construct, id: string, props: SipMediaAppProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { name, endpoint, region } = props;

    sipMediaApplicationValidator(props);

    const sipMediaAppRequest = new PSTNResources(this, 'sipMediaAppRequest', {
      resourceType: 'SMA',
      uid: uid,
      properties: {
        region: region || cdk.Stack.of(this).region,
        name: name ?? uid,
        endpoint: endpoint,
      },
    });

    this.sipMediaAppId =
      sipMediaAppRequest.pstnCustomResource.getAttString('sipMediaAppId');
  }
  logging(
    sipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfiguration,
  ) {
    const uid: string = cdk.Names.uniqueId(this);
    loggingValidator(sipMediaApplicationLoggingConfiguration);
    const result = new PSTNResources(this, 'SMALogging', {
      resourceType: 'SMALogging',
      uid: uid,
      properties: {
        sipMediaApplicationLoggingConfiguration:
          sipMediaApplicationLoggingConfiguration,
        sipMediaAppId: this.sipMediaAppId,
      },
    });
    return result;
  }
  alexaSkill(
    sipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfiguration,
  ) {
    const uid: string = cdk.Names.uniqueId(this);

    alexaSkillConfigurationValidator(
      sipMediaApplicationAlexaSkillConfiguration,
    );
    const result = new PSTNResources(this, 'SMAAlexaSkill', {
      resourceType: 'SMAAlexaSkill',
      uid: uid,
      properties: {
        sipMediaAppId: this.sipMediaAppId,
        sipMediaApplicationAlexaSkillConfiguration:
          sipMediaApplicationAlexaSkillConfiguration,
      },
    });
    return result.pstnCustomResource.getAtt(
      'putSipMediaApplicationAlexaSkillConfiguration',
    );
  }
}
