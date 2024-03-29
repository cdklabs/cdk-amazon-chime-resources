import {
  SipMediaAppProps,
  SipMediaApplicationLoggingConfiguration,
  SipMediaApplicationAlexaSkillConfiguration,
} from './sipMediaApplication';

var ALEXA_SKILL_IDS = /^(amzn1\.application-oa2-client\.[0-9a-fA-F]{32})$/;

export function sipMediaApplicationValidator(props: SipMediaAppProps) {
  if (props.region) {
    if (
      !(
        props.region.includes('Token[AWS.Region.') ||
        props.region === 'us-east-1' ||
        props.region === 'us-west-2' ||
        props.region === 'ap-northeast-1' ||
        props.region === 'ap-northeast-2' ||
        props.region === 'ap-southeast-1' ||
        props.region === 'ap-southeast-2' ||
        props.region === 'ca-central-1' ||
        props.region === 'eu-central-1' ||
        props.region === 'eu-west-1' ||
        props.region === 'eu-west-2'
      )
    ) {
      throw new Error(
        'Region must be a valid region: https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html#sdk-pstn-regions',
      );
    }
  }
  return true;
}

export function loggingValidator(
  _props: SipMediaApplicationLoggingConfiguration,
) {
  return true;
}

export function alexaSkillConfigurationValidator(
  props: SipMediaApplicationAlexaSkillConfiguration,
) {
  if (props.alexaSkillIds) {
    for (var skillId of props.alexaSkillIds) {
      if (!ALEXA_SKILL_IDS.test(skillId)) {
        throw new Error(
          'Invalid Alexa Skill Id.  Alexa Skill Id must match pattern: amzn1.application-oa2-client.[0-9a-fA-F]{32}',
        );
      }
    }
  }
  return true;
}
