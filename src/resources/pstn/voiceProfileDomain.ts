/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKVoiceClient,
  CreateVoiceProfileDomainCommand,
  CreateVoiceProfileDomainCommandInput,
  CreateVoiceProfileDomainCommandOutput,
  UpdateVoiceProfileDomainCommand,
  UpdateVoiceProfileDomainCommandInput,
  UpdateVoiceProfileDomainCommandOutput,
  DeleteVoiceProfileDomainCommand,
  DeleteVoiceProfileDomainCommandOutput,
  Tag,
} from '@aws-sdk/client-chime-sdk-voice';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';
import { VoiceProfileDomainProps } from '../../pstn/voiceProfileDomain';

const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let formattedCreateVoiceProfileDomainParams: CreateVoiceProfileDomainCommandInput;
let createVoiceProfileDomainResponse: CreateVoiceProfileDomainCommandOutput;
let getParameterCommandOutput: GetParameterCommandOutput;
let voiceProfileDomainId: string;
let updateVoiceProfileDomainParams: UpdateVoiceProfileDomainCommandInput;
let updateVoiceProfileDomainResponse: UpdateVoiceProfileDomainCommandOutput;
let deleteVoiceProfileDomainResponse: DeleteVoiceProfileDomainCommandOutput;
let formattedTags: Tag[] = [];

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

const formatProps = (props: VoiceProfileDomainProps) => {
  console.info(`Formatting Props: ${JSON.stringify(props)}`);
  if (props.tags) {
    console.info(`Formatting Tags: ${JSON.stringify(props.tags)}`);
    props.tags.forEach((tag) => {
      formattedTags.push(capitalizeKeys(tag));
    });
    console.info(`Formatted Tags: ${JSON.stringify(formattedTags)}`);
  }

  formattedCreateVoiceProfileDomainParams = {
    Name: props.name,
    ...(props.tags && { Tags: formattedTags }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
    ...(props.description && { Description: props.description }),
    ...(props.serverSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: {
        KmsKeyArn: props.serverSideEncryptionConfiguration.kmsKeyArn,
      },
    }),
  };
  return formattedCreateVoiceProfileDomainParams;
};

export const CreateVoiceProfileDomain = async (
  uid: string,
  props: VoiceProfileDomainProps,
) => {
  console.log(`Creating Voice Profile Domain: ${uid}`);
  console.log(`Create Voice Profile DomainProps: ${JSON.stringify(props)}`);

  formattedCreateVoiceProfileDomainParams = formatProps(props);
  console.log(
    `Create Voice Profile Domain params: ${JSON.stringify(
      formattedCreateVoiceProfileDomainParams,
    )}`,
  );

  console.log(
    `createVoiceProfileDomainParams: ${JSON.stringify(
      formattedCreateVoiceProfileDomainParams,
    )}`,
  );

  try {
    createVoiceProfileDomainResponse = await chimeSDKVoiceClient.send(
      new CreateVoiceProfileDomainCommand(
        formattedCreateVoiceProfileDomainParams,
      ),
    );
    console.log(
      `createVoiceConnectorResponse: ${JSON.stringify(
        createVoiceProfileDomainResponse,
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
        Name: '/chime/voiceProfileDomain' + uid,
        Value:
          createVoiceProfileDomainResponse.VoiceProfileDomain!
            .VoiceProfileDomainId,
        Description: 'Voice Profile Domain ID',
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
    voiceProfileDomain: createVoiceProfileDomainResponse.VoiceProfileDomain,
  };
};

export const UpdateVoiceProfileDomain = async (
  uid: string,
  props: VoiceProfileDomainProps,
) => {
  console.log(`Updating Voice Profile Domain: ${uid}`);
  console.log(`Update Voice Profile DomainProps: ${JSON.stringify(props)}`);

  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/voiceProfileDomain' + uid }),
    );
    if (
      getParameterCommandOutput.Parameter &&
      getParameterCommandOutput.Parameter.Value
    ) {
      voiceProfileDomainId = getParameterCommandOutput.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  updateVoiceProfileDomainParams = {
    Name: props.name,
    Description: props.description,
    VoiceProfileDomainId: voiceProfileDomainId,
  };
  console.log(
    `updateVoiceConnectorParams: ${JSON.stringify(
      updateVoiceProfileDomainParams,
    )}`,
  );

  try {
    updateVoiceProfileDomainResponse = await chimeSDKVoiceClient.send(
      new UpdateVoiceProfileDomainCommand(updateVoiceProfileDomainParams),
    );
    console.log(
      `updateVoiceProfileDomainResponse: ${JSON.stringify(
        updateVoiceProfileDomainResponse,
      )}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  return {
    voiceProfileDomain: updateVoiceProfileDomainResponse.VoiceProfileDomain,
  };
};

export const DeleteVoiceProfileDomain = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/voiceProfileDomain' + uid }),
    );
    if (
      getParameterCommandOutput.Parameter &&
      getParameterCommandOutput.Parameter.Value
    ) {
      voiceProfileDomainId = getParameterCommandOutput.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  console.log(`Deleting voiceProfileDomainId: ${voiceProfileDomainId}`);

  try {
    deleteVoiceProfileDomainResponse = await chimeSDKVoiceClient.send(
      new DeleteVoiceProfileDomainCommand({
        VoiceProfileDomainId: voiceProfileDomainId,
      }),
    );
    console.log(
      `Delete Voice Profile Domain Response: ${deleteVoiceProfileDomainResponse}`,
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/voiceProfileDomain' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
