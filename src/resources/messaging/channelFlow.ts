/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKMessagingClient,
  CreateChannelFlowCommand,
  DeleteChannelFlowCommand,
  UpdateChannelFlowCommand,
} from '@aws-sdk/client-chime-sdk-messaging';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeSDKMessagingClient = new ChimeSDKMessagingClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

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
  try {
    const createChannelFlowCommandOutput = await chimeSDKMessagingClient.send(
      new CreateChannelFlowCommand({
        AppInstanceArn: props.appInstanceArn,
        Name: props.name,
        ClientRequestToken: props.clientRequestToken,
        Tags: getUpdatedTags(props.tags),
        Processors: getUpdatedProcessors(props.processors),
      }),
    );

    await saveChannelFlowArnToSsm(uid, createChannelFlowCommandOutput.ChannelFlowArn);

    return {
      channelFlowArn: createChannelFlowCommandOutput.ChannelFlowArn,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {};
};

export const UpdateChannelFlow = async (
  uid: string,
  props: CreateChannelFlowProps,
) => {
  try {
    const channelFlowArn = await getExistingChannelFlowArnFromSsm(uid);

    const updateChannelFlowCommandOutput = await chimeSDKMessagingClient.send(
      new UpdateChannelFlowCommand({
        ChannelFlowArn: channelFlowArn,
        Name: props.name,
        Processors: getUpdatedProcessors(props.processors),
      }),
    );

    return {
      channelFlowArn: updateChannelFlowCommandOutput.ChannelFlowArn,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const DeleteChannelFlow = async (uid: string) => {
  try {
    const channelFlowArn = await getExistingChannelFlowArnFromSsm(uid);

    await chimeSDKMessagingClient.send(
      new DeleteChannelFlowCommand({
        ChannelFlowArn: channelFlowArn,
      }),
    );

    await deleteChannelFlowArnFromSsm(uid);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const saveChannelFlowArnToSsm = async (uid: string, channelFlowArn?: string) => {
  return ssmClient.send(
    new PutParameterCommand({
      Name: `/chime/channelFlowArn/${uid}`,
      Description: 'channelFlowArn',
      Value: channelFlowArn,
      Overwrite: true,
      Type: 'String',
    }),
  );
};

const getExistingChannelFlowArnFromSsm = async (uid: string): Promise<string | undefined> => {
  const getParameterCommandOutput = await ssmClient.send(
    new GetParameterCommand({ Name: `/chime/channelFlowArn/${uid}` }),
  );
  return getParameterCommandOutput.Parameter?.Value;
};

const deleteChannelFlowArnFromSsm = async (uid: string) => {
  return ssmClient.send(
    new DeleteParameterCommand({ Name: `/chime/channelFlowArn/${uid}` }),
  );
};

const getUpdatedProcessors = (processors: ProcessorProps[] | undefined) => {
  return processors?.map(getUpdatedProcessor) || [];
};

const getUpdatedProcessor = (processor: ProcessorProps) => {
  return {
    Name: processor.name,
    ExecutionOrder: parseInt(processor.executionOrder),
    FallbackAction: processor.fallbackAction,
    Configuration: {
      Lambda: {
        ResourceArn: processor.configuration.lambda.resourceArn,
        InvocationType: processor.configuration.lambda.invocationType,
      },
    },
  };
};

const getUpdatedTags = (tags: Tags[] | undefined) => {
  return tags?.map(getUpdatedTag);
};

const getUpdatedTag = (tag: Tags) => {
  return { Key: tag.key, Value: tag.value };
};
