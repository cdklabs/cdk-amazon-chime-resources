import { Protocol, VoiceConnectorProps } from './voiceConnector';

var ISO_3166_ALPHA_2 =
  /^A[^ABCHJKNPVY]|B[^CKPUX]|C[^BEJPQST]|D[EJKMOZ]|E[CEGHRST]|F[IJKMOR]|G[^CJKOVXZ]|H[KMNRTU]|I[DEL-OQ-T]|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKR-VY]|M[^BIJ]|N[ACEFGILOPRUZ]|OM|P[AE-HK-NRSTWY]|QA|R[EOSUW]|S[^FPQUW]|T[^ABEIPQSUXY]|U[AGMSYZ]|V[ACEGINU]|WF|WS|YE|YT|Z[AMW]$/;

var RFC_1918 =
  /(^192\.168\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^172\.([1][6-9]|[2][0-9]|[3][0-1])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)|(^10\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])$)/;

var IP_ADDRESS =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

var VALID_CIDR =
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(2[7-9])|(3[0-2])$/;

var RFC_1918_CIDR =
  /(^192\.168\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])(\/((2[7-9])|(3[0-2]))$))|(^172\.([1][6-9]|[2][0-9]|[3][0-1])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])(\/((2[7-9])|(3[0-2]))$)$)|(^10\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])\.([0-9]|[0-9][0-9]|[0-2][0-5][0-5])(\/((2[7-9])|(3[0-2]))$))/;

var FQDN =
  /^(?!.*?_.*?)(?!(?:[\w]+?\.)?\-[\w\.\-]*?)(?![\w]+?\-\.(?:[\w\.\-]+?))(?=[\w])(?=[\w\.\-]*?\.+[\w\.\-]*?)(?![\w\.\-]{254})(?!(?:\.?[\w\-\.]*?[\w\-]{64,}\.)+?)[\w\.\-]+?(?<![\w\-\.]*?\.[\d]+?)(?<=[\w\-]{2,})(?<![\w\-]{25})$/;

export function voiceConnectorValidator(props: VoiceConnectorProps) {
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

  if (props.termination && props.termination.cps !== undefined) {
    if (props.termination.cps < 1) {
      throw new Error('CPS must be between 1 and 256');
    }
    if (props.termination.cps > 256) {
      throw new Error('CPS must be between 1 and 256');
    }
  }

  if (props.termination && props.termination.callingRegions) {
    for (var country of props.termination.callingRegions) {
      if (!ISO_3166_ALPHA_2.test(country)) {
        throw new Error(`Invalid Country: ${country}`);
      }
    }
  }

  if (props.termination && props.termination.terminationCidrs) {
    for (var terminationCidr of props.termination.terminationCidrs) {
      if (terminationCidr.includes('Token')) {
      } else if (!VALID_CIDR.test(terminationCidr)) {
        throw new Error(
          'Termination CIDR must be a valid non-RFC1918 IPv4 CIDR block (/27-/32)',
        );
      }
    }
  }

  if (props.termination && props.termination.terminationCidrs) {
    for (var terminationCidr of props.termination.terminationCidrs) {
      if (RFC_1918_CIDR.test(terminationCidr)) {
        throw new Error(
          'Termination CIDR must not be RFC1918 CIDR block (/27-/32)',
        );
      }
    }
  }

  if (props.origination) {
    for (var route of props.origination) {
      if (route.host.includes('Token')) {
      } else if (IP_ADDRESS.test(route.host)) {
        if (RFC_1918.test(route.host)) {
          throw new Error('Origination IP must not be RFC1918 IP Address');
        }
      } else if (!FQDN.test(route.host)) {
        throw new Error(
          'Origination IP must be valid, non-RFC1918 IPv4 Address or FQDN',
        );
      }
    }
  }

  if (props.origination) {
    for (var route of props.origination) {
      if (route.port < 1 || route.port > 65535) {
        throw new Error('Port range must be valid: 1-65535');
      }
    }
  }

  if (props.origination && props.encryption) {
    for (var route of props.origination) {
      if (route.protocol === Protocol.UDP) {
        throw new Error('TCP must be used with Encryption enabled');
      }
    }
  }

  return true;
}
