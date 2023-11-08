import { KinesisVideoStreamPoolProps } from './kinesisVideoStreamPool';

const POOL_NAME_PATTERN = /^[0-9a-zA-Z._-]{1,128}$/;
const CLIENT_REQUEST_TOKEN_PATTERN = /^[-_a-zA-Z0-9]{2,64}$/;
const REGION_PATTERN = /^([a-z]+-){2,}\d+$/;

export function kinesisVideoStreamPoolValidator(
  props: KinesisVideoStreamPoolProps,
) {
  if (props.poolName) {
    if (!POOL_NAME_PATTERN.test(props.poolName)) {
      throw new Error(
        'PoolName must be between 1 and 128 characters long and contain only alphanumeric characters, dots, underscores, or hyphens.',
      );
    }
  }

  if (props.clientRequestToken) {
    if (!CLIENT_REQUEST_TOKEN_PATTERN.test(props.clientRequestToken)) {
      throw new Error(
        'ClientRequestToken must be between 2 and 64 characters long and contain only alphanumeric characters, hyphens, or underscores.',
      );
    }
  }

  if (!REGION_PATTERN.test(props.streamConfiguration.region)) {
    throw new Error(
      'Region must be between 1 and 32 characters long and match the pattern ^([a-z]+-){2,}\\d+$',
    );
  }

  if (
    props.streamConfiguration.dataRetentionInHours !== undefined &&
    props.streamConfiguration.dataRetentionInHours < 0
  ) {
    throw new Error('DataRetentionInHours must be a non-negative integer.');
  }

  return true;
}
