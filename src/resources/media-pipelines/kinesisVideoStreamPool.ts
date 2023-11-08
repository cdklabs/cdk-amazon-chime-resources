/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKMediaPipelinesClient,
  CreateMediaPipelineKinesisVideoStreamPoolCommand,
  CreateMediaPipelineKinesisVideoStreamPoolCommandOutput,
  CreateMediaPipelineKinesisVideoStreamPoolCommandInput,
  Tag,
  UpdateMediaPipelineKinesisVideoStreamPoolCommandInput,
  UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput,
  UpdateMediaPipelineKinesisVideoStreamPoolCommand,
  DeleteMediaPipelineKinesisVideoStreamPoolCommand,
  GetMediaPipelineKinesisVideoStreamPoolCommand,
} from '@aws-sdk/client-chime-sdk-media-pipelines';

import {
  KinesisVideoClient,
  ListStreamsCommand,
  DeleteStreamCommand,
  ComparisonOperator,
} from '@aws-sdk/client-kinesis-video';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

import { KinesisVideoStreamPoolProps } from '../../media-pipelines/kinesisVideoStreamPool';

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

const chimeSDKMediaPipelineClient = new ChimeSDKMediaPipelinesClient({
  region: process.env.AWS_REGION,
});

const kinesisVideoClient = new KinesisVideoClient({
  region: process.env.AWS_REGION,
});

let getParameterCommandOutput: GetParameterCommandOutput;

function capitalizeKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => capitalizeKeys(item));
  }

  if (typeof obj === 'object') {
    const capitalizedObj: { [key: string]: any } = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        const value = obj[key];
        capitalizedObj[capitalizedKey] =
          typeof value === 'string' && !isNaN(parseFloat(value))
            ? parseFloat(value)
            : capitalizeKeys(value);
      }
    }
    return capitalizedObj;
  }

  return obj;
}

let createMediaPipelineKinesisVideoStreamPoolCommandOutput: CreateMediaPipelineKinesisVideoStreamPoolCommandOutput;
let createMediaPipelineKinesisVideoStreamPoolCommandInput: CreateMediaPipelineKinesisVideoStreamPoolCommandInput;

const formatProps = (props: KinesisVideoStreamPoolProps) => {
  let formattedTags: Tag[] = [];

  if (props.tags) {
    console.info(`Formatting Tags: ${JSON.stringify(props.tags)}`);
    props.tags.forEach((tag) => {
      formattedTags.push(capitalizeKeys(tag));
    });
    console.info(`Formatted Tags: ${JSON.stringify(formattedTags)}`);
  }
  console.log(`New formattedTags: ${formattedTags}`);

  createMediaPipelineKinesisVideoStreamPoolCommandInput = {
    PoolName: props.poolName,
    StreamConfiguration: capitalizeKeys(props.streamConfiguration),
    ...(props.tags && { Tags: formattedTags }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
  };

  console.info(
    `mediaInsightsPipelineConfigurationParams: ${JSON.stringify(
      createMediaPipelineKinesisVideoStreamPoolCommandInput,
    )}`,
  );

  return createMediaPipelineKinesisVideoStreamPoolCommandInput;
};

export interface CreateMediaInsightsPipelineConfigurationProps {}
export const CreateKinesisVideoStreamPool = async (
  uid: string,
  props: KinesisVideoStreamPoolProps,
) => {
  console.log(`Creating Kinesis Video Stream Pool: ${uid}`);
  console.log(`CreateKinesisVideoStreamPool props: ${JSON.stringify(props)}`);
  createMediaPipelineKinesisVideoStreamPoolCommandInput = formatProps(props);
  console.log(
    `CreateKinesisVideoStreamPool params: ${JSON.stringify(
      createMediaPipelineKinesisVideoStreamPoolCommandInput,
    )}`,
  );

  try {
    createMediaPipelineKinesisVideoStreamPoolCommandOutput =
      await chimeSDKMediaPipelineClient.send(
        new CreateMediaPipelineKinesisVideoStreamPoolCommand(
          createMediaPipelineKinesisVideoStreamPoolCommandInput,
        ),
      );
    console.log(
      `createMediaInsightsPipelineConfigurationResponse: ${JSON.stringify(
        createMediaPipelineKinesisVideoStreamPoolCommandOutput,
      )}`,
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
        Name: '/chime/KinesisVideoStreamPoolId' + uid,
        Value:
          createMediaPipelineKinesisVideoStreamPoolCommandOutput
            .KinesisVideoStreamPoolConfiguration?.PoolId,
        Description: 'KinesisVideoStreamPoolId' + uid,
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
  return createMediaPipelineKinesisVideoStreamPoolCommandOutput.KinesisVideoStreamPoolConfiguration;
};

let updateMediaPipelineKinesisVideoStreamPoolCommandInput: UpdateMediaPipelineKinesisVideoStreamPoolCommandInput;
let updateMediaPipelineKinesisVideoStreamPoolCommandOutput: UpdateMediaPipelineKinesisVideoStreamPoolCommandOutput;

export const UpdateKinesisVideoStreamPool = async (
  uid: string,
  props: KinesisVideoStreamPoolProps,
) => {
  console.log(`UpdateKinesisVideoStreamPool: ${uid}`);
  console.log(`UpdateKinesisVideoStreamPool props: ${JSON.stringify(props)}`);

  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({
        Name: '/chime/KinesisVideoStreamPoolId' + uid,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  updateMediaPipelineKinesisVideoStreamPoolCommandInput = {
    Identifier: getParameterCommandOutput.Parameter!.Value!,
    StreamConfiguration: {
      DataRetentionInHours: Number(
        props.streamConfiguration.dataRetentionInHours,
      ),
    },
  };

  console.log(
    `Update Media Insights Pipeline Configuration params: ${JSON.stringify(
      updateMediaPipelineKinesisVideoStreamPoolCommandInput,
    )}`,
  );

  try {
    updateMediaPipelineKinesisVideoStreamPoolCommandOutput =
      await chimeSDKMediaPipelineClient.send(
        new UpdateMediaPipelineKinesisVideoStreamPoolCommand(
          updateMediaPipelineKinesisVideoStreamPoolCommandInput,
        ),
      );
    console.log(
      `createMediaInsightsPipelineConfigurationResponse: ${JSON.stringify(
        updateMediaPipelineKinesisVideoStreamPoolCommandOutput,
      )}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return updateMediaPipelineKinesisVideoStreamPoolCommandOutput.KinesisVideoStreamPoolConfiguration;
};

export const DeleteKinesisVideoStreamPool = async (
  uid: string,
  props: KinesisVideoStreamPoolProps,
) => {
  console.log(`DeleteKinesisVideoStreamPool: ${uid}`);

  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({
        Name: '/chime/KinesisVideoStreamPoolId' + uid,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  try {
    await ssmClient.send(
      new DeleteParameterCommand({
        Name: '/chime/KinesisVideoStreamPoolId' + uid,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  console.info(`deleteMediaInsightsPipelineIdentifier: ${props.poolName}`);

  try {
    await chimeSDKMediaPipelineClient.send(
      new DeleteMediaPipelineKinesisVideoStreamPoolCommand({
        Identifier: props.poolName,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  await getMediaPipelineKinesisVideoStreamPool(props.poolName!, 18);

  const streamsToDelete = await listAllStreams(props.poolName!);
  await deleteAllStreams(streamsToDelete);
  return;
};

async function listAllStreams(prefix: string): Promise<string[]> {
  let nextToken: string | undefined;
  const streams: string[] = [];

  try {
    do {
      const input = {
        MaxResults: 100,
        NextToken: nextToken,
        StreamNameCondition: {
          ComparisonOperator: ComparisonOperator.BEGINS_WITH,
          ComparisonValue: 'ChimeMediaPipelines-' + prefix,
        },
      };

      const response = await kinesisVideoClient.send(
        new ListStreamsCommand(input),
      );
      if (response.StreamInfoList) {
        for (const streamInfo of response.StreamInfoList) {
          if (streamInfo.StreamARN) {
            streams.push(streamInfo.StreamARN);
          }
        }
      }
      nextToken = response.NextToken;
    } while (nextToken);
  } catch (error) {
    console.error('Error listing streams:', error);
    throw error; // Rethrow the error if you want to handle it further up the call stack
  }
  console.log('Streams to delete: ', streams);
  return streams;
}

async function deleteAllStreams(streamARNs: string[]): Promise<void> {
  try {
    for (const streamARN of streamARNs) {
      await kinesisVideoClient.send(
        new DeleteStreamCommand({ StreamARN: streamARN }),
      );
      console.log('Deleted: ', streamARN);
    }
  } catch (error) {
    console.error('Error listing streams:', error);
    throw error; // Rethrow the error if you want to handle it further up the call stack
  }
  console.log('All streams deleted');
}

async function getMediaPipelineKinesisVideoStreamPool(
  identifier: string,
  maxAttempts: number,
) {
  const input = {
    Identifier: identifier,
  };
  const command = new GetMediaPipelineKinesisVideoStreamPoolCommand(input);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await chimeSDKMediaPipelineClient.send(command);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        const typedError = error as {
          name: string;
          $metadata?: { httpStatusCode: number };
        };
        if (
          typedError.name === 'ResourceNotFoundException' ||
          typedError.$metadata?.httpStatusCode === 404
        ) {
          console.log(`Resource with identifier ${identifier} not found.`);
          return null;
        } else {
          console.error('Error:', error);
          await sleep(10000);
        }
      } else {
        console.error('An unexpected error occurred:', error);
        throw error;
      }
    }
  }
  throw new Error(
    `Failed to delete media pipeline after ${maxAttempts} attempts`,
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
