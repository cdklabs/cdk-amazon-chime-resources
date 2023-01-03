/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKMessagingClient,
  CreateChannelFlowCommand,
  CreateChannelFlowCommandInput,
  CreateChannelFlowCommandOutput,
  DeleteChannelFlowCommand,
  Processor,
  Tag,
} from '@aws-sdk/client-chime-sdk-messaging';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeSDKMessagingClient = new ChimeSDKMessagingClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let createChannelFlowCommandInput: CreateChannelFlowCommandInput;
let createChannelFlowCommandOutput: CreateChannelFlowCommandOutput;
let getParameterCommandOutput: GetParameterCommandOutput;
let updatedProcessors: Processor[];
let updatedTags: Tag[];

export enum InvocationType {
  ASYNC = 'ASYNC',
}

export enum FallbackAction {
  CONTINUE = 'CONTINUE',
  ABORT = 'ABORT',
}

interface Tags {
  key: string;
  value: string;
}

interface ConfigurationProps {
  lambda: {
    resourceArn: string;
    invocationType: InvocationType;
  };
}

interface ProcessorProps {
  configuration: ConfigurationProps;
  executionOrder: string;
  fallbackAction: FallbackAction;
  name: string;
}

interface CreateChannelFlowProps {
  name?: string;
  clientRequestToken?: string;
  appInstanceArn?: string;
  tags?: Tags[];
  processors?: ProcessorProps[];
}

export const CreateChannelFlow = async (
  uid: string,
  props: CreateChannelFlowProps,
) => {
  updatedProcessors = [];
  if (props.processors) {
    props.processors.forEach((processor) => {
      updatedProcessors.push({
        Name: processor.name,
        ExecutionOrder: parseInt(processor.executionOrder),
        FallbackAction: processor.fallbackAction,
        Configuration: {
          Lambda: {
            ResourceArn: processor.configuration.lambda.resourceArn,
            InvocationType: processor.configuration.lambda.invocationType,
          },
        },
      });
    });
  }
  updatedTags = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags.push({ Key: tag.key, Value: tag.value });
    });
  }

  createChannelFlowCommandInput = {
    AppInstanceArn: props.appInstanceArn,
    Name: props.name,
    ClientRequestToken: props.clientRequestToken,
    ...(updatedTags.length > 0 && { Tags: updatedTags }),
    Processors: updatedProcessors,
  };

  try {
    createChannelFlowCommandOutput = await chimeSDKMessagingClient.send(
      new CreateChannelFlowCommand(createChannelFlowCommandInput),
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
        Name: `/chime/channelFlowArn/${uid}`,
        Description: 'channelFlowArn',
        Value: createChannelFlowCommandOutput.ChannelFlowArn,
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
    channelFlowArn: createChannelFlowCommandOutput.ChannelFlowArn,
  };
};

export const DeleteChannelFlow = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: `/chime/channelFlowArn/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  try {
    await chimeSDKMessagingClient.send(
      new DeleteChannelFlowCommand({
        ChannelFlowArn: getParameterCommandOutput.Parameter?.Value,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: `/chime/channelFlowArn/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
