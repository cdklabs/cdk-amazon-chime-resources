/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKIdentityClient,
  CreateAppInstanceAdminCommand,
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from '@aws-sdk/client-chime-sdk-identity';

import {
  SSMClient,
  DeleteParameterCommand,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeClient = new ChimeSDKIdentityClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

interface AppInstanceAdminProps {
  appInstanceArn?: string;
  appInstanceAdminArn?: string;
}

let createAppInstanceAdminCommandInput: CreateAppInstanceAdminCommandInput;
let createAppInstanceAdminCommandOutput: CreateAppInstanceAdminCommandOutput;

export const CreateAppInstanceAdmin = async (
  uid: string,
  props: AppInstanceAdminProps,
) => {
  createAppInstanceAdminCommandInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceAdminArn: props.appInstanceAdminArn,
  };

  try {
    createAppInstanceAdminCommandOutput = await chimeClient.send(
      new CreateAppInstanceAdminCommand(createAppInstanceAdminCommandInput),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  try {
    await ssmClient.send(
      new PutParameterCommand({
        Name: `/chime/appInstanceAdminArn/${uid}`,
        Description: 'appInstanceAdminArn',
        Value: createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Arn,
        Overwrite: true,
        Type: 'String',
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  return {
    AppInstanceAdminArn:
      createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Arn,
    AppInstanceAdminName:
      createAppInstanceAdminCommandOutput.AppInstanceAdmin?.Name,
  };
};

export const DeleteAppInstanceAdmin = async (uid: string) => {
  try {
    await ssmClient.send(
      new DeleteParameterCommand({ Name: `/chime/appInstanceAdminArn/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
