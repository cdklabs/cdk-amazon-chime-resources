/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeClient,
  CreateAppInstanceUserCommand,
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from '@aws-sdk/client-chime';

import {
  SSMClient,
  DeleteParameterCommand,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeClient = new ChimeClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

interface AppInstanceUserProps {
  name?: string;
  metadata?: string;
  clientRequestToken?: string;
  appInstanceArn?: string;
  appInstanceUserId?: string;
}

let createAppInstanceUserCommandInput: CreateAppInstanceUserCommandInput;
let createAppInstanceUserCommandOutput: CreateAppInstanceUserCommandOutput;

export const CreateAppInstanceUser = async (
  uid: string,
  props: AppInstanceUserProps,
) => {
  createAppInstanceUserCommandInput = {
    Name: props.name,
    AppInstanceArn: props.appInstanceArn,
    AppInstanceUserId: props.appInstanceUserId,
    ...(props.metadata && { Metadata: props.metadata }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
  };

  try {
    createAppInstanceUserCommandOutput = await chimeClient.send(
      new CreateAppInstanceUserCommand(createAppInstanceUserCommandInput),
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
        Name: `/chime/appInstanceUserId/${uid}`,
        Description: 'appInstanceUserId',
        Value: createAppInstanceUserCommandOutput.AppInstanceUserArn,
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
    appInstanceUser: createAppInstanceUserCommandOutput.AppInstanceUserArn,
  };
};

export const DeleteAppInstanceUser = async (uid: string) => {
  try {
    await ssmClient.send(
      new DeleteParameterCommand({ Name: `/chime/appInstanceUserId/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
