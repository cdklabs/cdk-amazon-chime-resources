import { SipMediaAppProps } from './sipMediaApplication';

export function sipMediaApplicationValidator(props: SipMediaAppProps) {
  if (props.region) {
    if (
      !(
        props.region.includes('Token[AWS.Region.') ||
        props.region === 'us-east-1' ||
        props.region === 'us-west-2'
      )
    ) {
      throw new Error('Region must be us-east-1 or us-west-2');
    }
  }

  return true;
}
