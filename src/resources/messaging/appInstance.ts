/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKIdentityClient,
  CreateAppInstanceCommand,
  CreateAppInstanceCommandInput,
  CreateAppInstanceCommandOutput,
  DeleteAppInstanceCommand,
  Tag,
} from '@aws-sdk/client-chime-sdk-identity';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeClient = new ChimeSDKIdentityClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let createAppInstanceCommandParams: CreateAppInstanceCommandInput;
let createAppInstanceCommandResponse: CreateAppInstanceCommandOutput;
let getParameterCommandOutput: GetParameterCommandOutput;
let updatedTags: Tag[];

interface Tags {
  key: string;
  value: string;
}

interface CreateAppInstanceProps {
  name?: string;
  metadata?: string;
  clientRequestToken?: string;
  tags?: Tags[];
}

export const CreateAppInstance = async (
  uid: string,
  props: CreateAppInstanceProps,
) => {
  updatedTags = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags.push({ Key: tag.key, Value: tag.value });
    });
  }

  createAppInstanceCommandParams = {
    Name: props.name,
    ...(props.metadata && { Metadata: props.metadata }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
    ...(updatedTags.length > 0 && { Tags: updatedTags }),
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
