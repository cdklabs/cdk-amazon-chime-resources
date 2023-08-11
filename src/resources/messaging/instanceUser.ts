/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKIdentityClient,
  CreateAppInstanceUserCommand,
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
  Tag,
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

interface Tags {
  key: string;
  value: string;
}

interface AppInstanceUserProps {
  name?: string;
  metadata?: string;
  clientRequestToken?: string;
  appInstanceArn?: string;
  appInstanceUserId?: string;
  tags?: Tags[];
}

let createAppInstanceUserCommandInput: CreateAppInstanceUserCommandInput;
let createAppInstanceUserCommandOutput: CreateAppInstanceUserCommandOutput;
let updatedTags: Tag[];

export const CreateAppInstanceUser = async (
  uid: string,
  props: AppInstanceUserProps,
) => {
  updatedTags = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags.push({ Key: tag.key, Value: tag.value });
    });
  }

  createAppInstanceUserCommandInput = {
    Name: props.name,
    AppInstanceArn: props.appInstanceArn,
    AppInstanceUserId: props.appInstanceUserId,
    ...(props.metadata && { Metadata: props.metadata }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
    ...(updatedTags.length > 0 && { Tags: updatedTags }),
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
