import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PSTNResources } from './pstnCustomResources';
import { sipRuleValidator } from './sipRuleValidator';

export enum TriggerType {
  TO_PHONE_NUMBER = 'ToPhoneNumber',
  REQUEST_URI_HOSTNAME = 'RequestUriHostname',
}

export interface TargetApplications {
  /**
   * SipMediaApplicationId for SipRule (required)
   *
   * @default - none
   */
  readonly sipMediaApplicationId: string;
  /**
   * Priority for SipRule (required) - 1 to 25
   *
   * @default - none
   */
  readonly priority: number;
  /**
   * Region for SipRule (optional)
   *
   * @default - same region as stack deployment
   */
  readonly region?: string;
}
/**
 * Props for `SipRule`.
 */
export interface SipRuleProps {
  /**
   * Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME
   *
   * @default - none
   */
  readonly triggerType: TriggerType;

  /**
   * Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI
   *
   * @default - none
   */
  readonly triggerValue: string;

  /**
   * name for SipRule (optional)
   *
   * @default - unique ID for resource
   */
  readonly name?: string;
  readonly targetApplications: Array<TargetApplications>;
}

export class ChimeSipRule extends Construct {
  public readonly sipRuleId: string;

  constructor(scope: Construct, id: string, props: SipRuleProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { name, triggerType, triggerValue, targetApplications } = props;

    sipRuleValidator(props);
    const sipRuleRequest = new PSTNResources(this, 'sipRuleRequest', {
      resourceType: 'SMARule',
      uid: uid,
      properties: {
        name: name ?? uid,
        triggerType: triggerType,
        triggerValue: triggerValue,
        targetApplications: targetApplications,
      },
    });

    this.sipRuleId =
      sipRuleRequest.pstnCustomResource.getAttString('sipRuleId');
  }
}
