import { PhoneNumberProps } from '.';

var AREA_CODE = /^[^01][0-9]{2}$/;
var TOLL_FREE = /^8(33|44|55|66|77|88)$/;

export function phoneNumberValidator(props: PhoneNumberProps) {
  if (props.phoneCity && !props.phoneState) {
    throw new Error('State must be included with City search');
  }
  if (
    (props.phoneCountry === 'US' || !props.phoneCountry) &&
    !(
      props.phoneState ||
      props.phoneAreaCode ||
      props.phoneNumberTollFreePrefix
    )
  ) {
    throw new Error('Need a State, Area Code, or Toll Free Prefix');
  }

  if (
    props.phoneCountry &&
    !(props.phoneCountry === 'US') &&
    !props.phoneNumberType
  ) {
    throw new Error('Non US numbers must include Number Type');
  }

  if (
    props.phoneProductType === 'VoiceConnector' &&
    !(props.phoneCountry === 'US')
  ) {
    throw new Error('Non US numbers must be SipMediaApplicationDialIn');
  }

  if (props.phoneNumberTollFreePrefix) {
    if (!TOLL_FREE.test(props.phoneNumberTollFreePrefix.toString())) {
      throw new Error('Invalid Toll Free Prefix');
    }
  }
  if (props.phoneAreaCode) {
    if (!AREA_CODE.test(props.phoneAreaCode.toString())) {
      throw new Error('Invalid Area Code');
    }
  }

  return true;
}
