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

interface AppInstanceUserProps {}

export const CreateAppInstanceUser = async (
  uid: string,
  props: AppInstanceUserProps,
) => {
  console.log(uid);
  console.log(props);
  return {
    appInstanceArn: 'string',
  };
};

export const DeleteAppInstanceUser = async (uid: string) => {
  console.log(uid);
};
