/* eslint-disable import/no-extraneous-dependencies */
// import { ChimeSDKMessagingClient } from '@aws-sdk/client-chime-sdk-messaging';

// import {
//   SSMClient,
//   DeleteParameterCommand,
//   GetParameterCommand,
//   GetParameterCommandOutput,
//   PutParameterCommand,
// } from '@aws-sdk/client-ssm';

// const chimeSDKMessagingClient = new ChimeSDKMessagingClient({
//   region: process.env.AWS_REGION,
// });

// const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

interface StreamingConfigProps {}

export const CreateStreamingConfig = async (
  uid: string,
  props: StreamingConfigProps,
) => {
  console.log(uid);
  console.log(props);
  return {
    appInstanceArn: 'string',
  };
};

export const DeleteStreamingConfig = async (uid: string) => {
  console.log(uid);
};
