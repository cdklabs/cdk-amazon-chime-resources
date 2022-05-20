import { SipRuleProps } from './sipRule';

var E164_NUMBER = /^\+[1-9]\d{10,14}$/;

var URI_HOSTNAME = /^[0-9a-z]{22}.voiceconnector.chime.aws$/;

var SMA_ID = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;

export function sipRuleValidator(props: SipRuleProps) {
  if (props.triggerType) {
    if (props.triggerValue.includes('Token')) {
    } else {
      if (
        props.triggerType === 'ToPhoneNumber' &&
        !E164_NUMBER.test(props.triggerValue)
      ) {
        throw new Error('Trigger Value must be must be valid E.164 number');
      }
      if (
        props.triggerType === 'RequestUriHostname' &&
        !URI_HOSTNAME.test(props.triggerValue)
      ) {
        throw new Error('Trigger Value must be valid Chime Voice Connector');
      }
    }
  }

  for (var target of props.targetApplications) {
    if (target.sipMediaApplicationId.includes('Token')) {
    } else {
      if (!SMA_ID.test(target.sipMediaApplicationId)) {
        throw new Error('sipMediaApplicationId must be valid');
      }
    }
  }

  for (var target of props.targetApplications) {
    if (target.priority < 1 || target.priority > 25) {
      throw new Error('Priority should be between 1 and 25');
    }
  }

  for (var target of props.targetApplications) {
    if (target.region) {
      if (
        !(
          target.region.includes('Token[AWS.Region.') ||
          target.region === 'us-east-1' ||
          target.region === 'us-west-2'
        )
      ) {
        throw new Error('Region must be us-east-1 or us-west-2');
      }
    }
  }

  return true;
}
