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
  RealTimeAlertRule,
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

function capitalizeElementsKeys(
  elements: Elements,
): MediaInsightsPipelineConfigurationElement {
  return capitalizeKeys(elements) as MediaInsightsPipelineConfigurationElement;
}

let createMediaInsightsPipelineConfigurationResponse: CreateMediaInsightsPipelineConfigurationCommandOutput;
let createMediaInsightsPipelineConfigurationParams: CreateMediaInsightsPipelineConfigurationCommandInput;

const formatProps = (props: MediaInsightsPipelineProps) => {
  let formattedElements: MediaInsightsPipelineConfigurationElement[] = [];
  let formattedTags: Tag[] = [];
  let formattedRealTimeAlertConfiguration: RealTimeAlertConfiguration = {};
  let formattedRealTimeAlertRules: RealTimeAlertRule[] = [];

  console.info(`Formatting Props: ${JSON.stringify(props)}`);
  if (props.elements) {
    console.info(`Formatting Elements: ${JSON.stringify(props.elements)}`);
    console.log(`Current formattedElements: ${formattedElements}`);
    props.elements.forEach((element) => {
      formattedElements.push(capitalizeElementsKeys(element));
    });
    console.info(`Formatted Elements: ${JSON.stringify(formattedElements)}`);
  }
  console.log(`New formattedElements: ${formattedElements}`);
  console.log(`Current formattedTags: ${formattedTags}`);

  if (props.tags) {
    console.info(`Formatting Tags: ${JSON.stringify(props.tags)}`);
    props.tags.forEach((tag) => {
      formattedTags.push(capitalizeKeys(tag));
    });
    console.info(`Formatted Tags: ${JSON.stringify(formattedTags)}`);
  }
  console.log(`New formattedTags: ${formattedTags}`);
  if (props.realTimeAlertConfiguration) {
    console.info(
      `Formatting Real Time Alert Configuration: ${JSON.stringify(
        props.realTimeAlertConfiguration,
      )}`,
    );

    props.realTimeAlertConfiguration.rules.forEach((rule) => {
      formattedRealTimeAlertRules.push(capitalizeKeys(rule));
    });

    formattedRealTimeAlertConfiguration = {
      Disabled: props.realTimeAlertConfiguration.disabled,
      Rules: formattedRealTimeAlertRules,
    };

    console.info(
      `Formatted Real Time Alert Configuration: ${JSON.stringify(
        formattedRealTimeAlertConfiguration,
      )}`,
    );
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

  console.info(
    `mediaInsightsPipelineConfigurationParams: ${JSON.stringify(
      mediaInsightsPipelineConfigurationParams,
    )}`,
  );

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
  return createMediaInsightsPipelineConfigurationResponse.MediaInsightsPipelineConfiguration;
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
  return updateMediaInsightsPipelineConfigurationResponse.MediaInsightsPipelineConfiguration;
};

let deleteMediaInsightsPipelineIdentifier: string;

export const DeleteMediaInsightsPipelineConfiguration = async (uid: string) => {
  console.log(`Deleting Media Insights Pipeline Configuration: ${uid}`);

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

  deleteMediaInsightsPipelineIdentifier =
    getParameterCommandOutput.Parameter!.Value!;

  console.info(
    `deleteMediaInsightsPipelineIdentifier: ${deleteMediaInsightsPipelineIdentifier}`,
  );
  try {
    await chimeSDKMediaPipelineClient.send(
      new DeleteMediaInsightsPipelineConfigurationCommand({
        Identifier: deleteMediaInsightsPipelineIdentifier,
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
