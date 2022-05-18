import { ChannelFlowProps } from './channelFlow';
var NAME =
  /^[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*$/;

var CLIENTREQUESTTOKEN = /^[-_a-zA-Z0-9]*$/;

export function channelFlowValidator(props: ChannelFlowProps) {
  if (props.name) {
    if (props.name.length < 1 || props.name.length > 256) {
      throw new Error('Name length must be >1 and <256');
    }
    if (!NAME.test(props.name)) {
      throw new Error(
        'Invalid name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
      );
    }
  }

  if (props.clientRequestToken) {
    if (
      props.clientRequestToken.length < 2 ||
      props.clientRequestToken.length > 64
    ) {
      throw new Error('ClientRequestToken length must be >2 and <64');
    }
    if (!CLIENTREQUESTTOKEN.test(props.clientRequestToken)) {
      throw new Error(
        'Invlaid Client Request Token.  Must fit pattern: [-_a-zA-Z0-9]*',
      );
    }
  }

  if (props.processors) {
    if (
      Object.keys(props.processors).length < 1 ||
      Object.keys(props.processors).length > 3
    ) {
      throw new Error('Processor county must be between 1 and 3');
    }
  }

  return true;
}
