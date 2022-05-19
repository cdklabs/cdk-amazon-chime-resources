import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { phoneNumberValidator } from './phoneNumberValidator';
import { PSTNResources, PhoneAssociation } from './pstnCustomResources';
import { ChimeVoiceConnector } from './voiceConnector';

export enum PhoneNumberType {
  LOCAL = 'Local',
  TOLLFREE = 'TollFree',
}

export enum PhoneCountry {
  AU = 'AU',
  AT = 'AT',
  CA = 'CA',
  DK = 'DK',
  DE = 'DE',
  IE = 'IE',
  IT = 'IT',
  NZ = 'NZ',
  NG = 'NG',
  PR = 'PR',
  KR = 'KR',
  SE = 'SE',
  CH = 'CH',
  UK = 'UK',
  US = 'US',
}

export enum PhoneProductType {
  SMA = 'SipMediaApplicationDialIn',
  VC = 'VoiceConnector',
}

/**
 * Props for `PhoneNumber`.
 */
export interface PhoneNumberProps {
  /**
   * Area Code for phone number request (optional)  - Usable only with US Country
   *
   * @default - None
   */
  readonly phoneAreaCode?: number;

  /**
   * City for phone number request (optional) - Usable only with US Country
   *
   * @default - None
   */
  readonly phoneCity?: string;

  /**
   * State for phone number request (optional) - Usable only with US Country
   *
   * @default - None
   */
  readonly phoneState?: string;

  /**
   * Toll Free Prefix for phone number request (optional)
   *
   * @default - None
   */
  readonly phoneNumberTollFreePrefix?: number;

  /**
   * Phone Number Type for phone number request (optional) - Local or TollFree - Required with non-US country
   *
   * @default - None
   */
  readonly phoneNumberType?: PhoneNumberType;

  /**
   * Country for phone number request (optional) - See https://docs.aws.amazon.com/chime/latest/ag/phone-country-reqs.html for more details
   *
   * @default - US
   */
  readonly phoneCountry?: PhoneCountry;

  /**
   * Phone Product Type (required) - SipMediaApplicationDialIn or VoiceConnector
   *
   * @default - None
   */
  readonly phoneProductType: PhoneProductType;
}

export class ChimePhoneNumber extends Construct {
  public readonly phoneNumber: string;

  constructor(scope: Construct, id: string, props: PhoneNumberProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      phoneAreaCode,
      phoneCity,
      phoneState,
      phoneNumberTollFreePrefix,
      phoneNumberType,
      phoneCountry,
      phoneProductType,
    } = props;

    phoneNumberValidator(props);
    const phoneNumberRequest = new PSTNResources(this, 'ChimePhoneNumber', {
      resourceType: 'PhoneNumber',
      uid: uid,
      properties: {
        phoneAreaCode: phoneAreaCode,
        phoneCity: phoneCity,
        phoneState: phoneState,
        phoneNumberType: phoneNumberType,
        phoneNumberTollFreePrefix: phoneNumberTollFreePrefix,
        phoneCountry: phoneCountry || PhoneCountry.US,
        phoneProductType: phoneProductType,
      },
    });

    this.phoneNumber =
      phoneNumberRequest.pstnCustomResource.getAttString('phoneNumber');
  }

  associateWithVoiceConnector(voiceConnectorId: ChimeVoiceConnector) {
    return this.associateNumber(
      voiceConnectorId.voiceConnectorId,
      this.phoneNumber,
    );
  }

  private associateNumber(voiceConnectorId: string, e164PhoneNumber: string) {
    const result = new PhoneAssociation(this, 'phoneAssociation', {
      voiceConnectorId,
      e164PhoneNumber,
    });
    return result;
  }
}
