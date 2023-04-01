import {
  CreateMediaInsightsPipelineConfigurationCommand,
  CreateMediaInsightsPipelineConfigurationCommandInput,
  CreateMediaInsightsPipelineConfigurationCommandOutput,
  UpdateMediaInsightsPipelineConfigurationCommand,
  UpdateMediaInsightsPipelineConfigurationCommandInput,
  UpdateMediaInsightsPipelineConfigurationCommandOutput,
  DeleteMediaInsightsPipelineConfigurationCommand,
  ChimeSDKMediaPipelinesClient,
  MediaInsightsPipelineConfigurationElement,
  Tag,
  RealTimeAlertConfiguration,
} from '@aws-sdk/client-chime-sdk-media-pipelines';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

import {
  MediaInsightsPipelineProps,
  Elements,
} from '../../media-pipelines/mediaInsightsPipeline';

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

const chimeSDKMediaPipelineClient = new ChimeSDKMediaPipelinesClient({
  region: process.env.AWS_REGION,
});

function capitalizeKeys(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => capitalizeKeys(item));
  }

  const capitalizedObj: { [key: string]: any } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      capitalizedObj[capitalizedKey] = capitalizeKeys(obj[key]);
    }
  }

  return capitalizedObj;
}

function capitalizeElementsKeys(
  elements: Elements,
): MediaInsightsPipelineConfigurationElement {
  return capitalizeKeys(elements) as MediaInsightsPipelineConfigurationElement;
}

let formattedElements: MediaInsightsPipelineConfigurationElement[];
let formattedTags: Tag[];
let formattedRealTimeAlertConfiguration: RealTimeAlertConfiguration;
let createMediaInsightsPipelineConfigurationResponse: CreateMediaInsightsPipelineConfigurationCommandOutput;
let createMediaInsightsPipelineConfigurationParams: CreateMediaInsightsPipelineConfigurationCommandInput;
const formatProps = (props: MediaInsightsPipelineProps) => {
  if (props.elements) {
    props.elements.forEach((element) => {
      formattedElements.push(capitalizeElementsKeys(element));
    });
  }

  if (props.tags) {
    props.tags.forEach((tag) => {
      formattedTags.push(capitalizeKeys(tag));
    });
  }

  if (props.realTimeAlertConfiguration) {
    formattedRealTimeAlertConfiguration.Disabled =
      props.realTimeAlertConfiguration.disabled;
    props.realTimeAlertConfiguration.rules.forEach((rule) => {
      formattedRealTimeAlertConfiguration.Rules!.push(capitalizeKeys(rule));
    });
  }

  const mediaInsightsPipelineConfigurationParams = {
    ResourceAccessRoleArn: props.resourceAccessRoleArn,
    MediaInsightsPipelineConfigurationName:
      props.mediaInsightsPipelineConfigurationName,
    ...(props.tags && { Tags: formattedTags }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
    ...(props.elements && {
      Elements: formattedElements,
    }),
    ...(props.realTimeAlertConfiguration && {
      RealTimeAlertConfiguration: formattedRealTimeAlertConfiguration,
    }),
  };

  return mediaInsightsPipelineConfigurationParams;
};

export interface CreateMediaInsightsPipelineConfigurationProps {}
export const CreateMediaInsightsPipelineConfiguration = async (
  uid: string,
  props: MediaInsightsPipelineProps,
) => {
  console.log(`Creating Media Insights Pipeline Configuration: ${uid}`);
  console.log(
    `Create Media Insights Pipeline Configuration props: ${JSON.stringify(
      props,
    )}`,
  );
  createMediaInsightsPipelineConfigurationParams = formatProps(props);
  console.log(
    `Create Media Insights Pipeline Configuration params: ${JSON.stringify(
      createMediaInsightsPipelineConfigurationParams,
    )}`,
  );
  try {
    createMediaInsightsPipelineConfigurationResponse =
      await chimeSDKMediaPipelineClient.send(
        new CreateMediaInsightsPipelineConfigurationCommand(
          createMediaInsightsPipelineConfigurationParams,
        ),
      );
    console.log(
      `createMediaInsightsPipelineConfigurationResponse: ${JSON.stringify(
        createMediaInsightsPipelineConfigurationResponse,
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
        Name: '/chime/MediaInsightsPipelineConfigurationArn' + uid,
        Value:
          createMediaInsightsPipelineConfigurationResponse.MediaInsightsPipelineConfiguration!
            .MediaInsightsPipelineConfigurationArn,
        Description: 'Media Insight Pipeline Configuration ARN' + uid,
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
  return createMediaInsightsPipelineConfigurationResponse;
};

let updateMediaInsightsPipelineConfigurationParams: UpdateMediaInsightsPipelineConfigurationCommandInput;
let updateMediaInsightsPipelineConfigurationResponse: UpdateMediaInsightsPipelineConfigurationCommandOutput;
let updateMediaInsightsPipelineIdentifier: string;
let getParameterCommandOutput: GetParameterCommandOutput;

export const UpdateMediaInsightsPipelineConfiguration = async (
  uid: string,
  props: MediaInsightsPipelineProps,
) => {
  console.log(`Updating Media Insights Pipeline Configuration: ${uid}`);
  console.log(
    `Updating Media Insights Pipeline Configuration props: ${JSON.stringify(
      props,
    )}`,
  );

  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({
        Name: '/chime/MediaInsightsPipelineConfigurationArn' + uid,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  updateMediaInsightsPipelineIdentifier =
    getParameterCommandOutput.Parameter!.Value!;

  updateMediaInsightsPipelineConfigurationParams = {
    ...formatProps(props),
    Identifier: updateMediaInsightsPipelineIdentifier,
  };

  console.log(
    `Update Media Insights Pipeline Configuration params: ${JSON.stringify(
      updateMediaInsightsPipelineConfigurationParams,
    )}`,
  );
  try {
    updateMediaInsightsPipelineConfigurationResponse =
      await chimeSDKMediaPipelineClient.send(
        new UpdateMediaInsightsPipelineConfigurationCommand(
          updateMediaInsightsPipelineConfigurationParams,
        ),
      );
    console.log(
      `createMediaInsightsPipelineConfigurationResponse: ${JSON.stringify(
        createMediaInsightsPipelineConfigurationResponse,
      )}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return updateMediaInsightsPipelineConfigurationResponse;
};

export const DeleteMediaInsightsPipelineConfiguration = async (uid: string) => {
  console.log(`Deleting Media Insights Pipeline Configuration: ${uid}`);

  try {
    await ssmClient.send(
      new DeleteParameterCommand({
        Name: '/chime/MediaInsightsPipelineConfigurationArn' + uid,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  try {
    await chimeSDKMediaPipelineClient.send(
      new DeleteMediaInsightsPipelineConfigurationCommand({
        Identifier: updateMediaInsightsPipelineIdentifier,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return;
};
