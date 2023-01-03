/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeClient,
  CreateAppInstanceCommand,
  CreateAppInstanceCommandInput,
  CreateAppInstanceCommandOutput,
  DeleteAppInstanceCommand,
} from '@aws-sdk/client-chime';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeClient = new ChimeClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let createAppInstanceCommandParams: CreateAppInstanceCommandInput;
let createAppInstanceCommandResponse: CreateAppInstanceCommandOutput;
let getParameterCommandOutput: GetParameterCommandOutput;

interface CreateAppInstanceProps {
  name?: string;
  metadata?: string;
  clientRequestToken?: string;
}

export const CreateAppInstance = async (
  uid: string,
  props: CreateAppInstanceProps,
) => {
  console.log(uid);
  console.log(props);

  createAppInstanceCommandParams = {
    Name: props.name,
    ...(props.metadata && { Metadata: props.metadata }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
  };

  try {
    createAppInstanceCommandResponse = await chimeClient.send(
      new CreateAppInstanceCommand(createAppInstanceCommandParams),
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
        Name: `/chime/appInstanceArn/${uid}`,
        Description: 'App Instance Arn',
        Value: createAppInstanceCommandResponse.AppInstanceArn,
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
    appInstanceArn: createAppInstanceCommandResponse.AppInstanceArn,
  };
};

export const DeleteAppInstance = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: `/chime/appInstanceArn/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  try {
    await chimeClient.send(
      new DeleteAppInstanceCommand({
        AppInstanceArn: getParameterCommandOutput.Parameter!.Value,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: `/chime/appInstanceArn/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
