/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKVoiceClient,
  CreateVoiceConnectorCommand,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
  Termination,
  OriginationRoute,
  StreamingConfiguration,
  LoggingConfiguration,
  ListPhoneNumbersCommand,
} from '@aws-sdk/client-chime-sdk-voice';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let createVoiceConnectorResponse: CreateVoiceConnectorCommandOutput;
let createVoiceConnectorParams: CreateVoiceConnectorCommandInput;
let getParameterCommandOutput: GetParameterCommandOutput;
let voiceConnectorId: string;
let phoneNumbersToDisassociate: string[];

export interface CreateVoiceConnectorProps {
  name?: string;
  region?: string;
  encryption?: boolean;
  termination?: Termination;
  origination?: OriginationRoute[];
  logging?: LoggingConfiguration;
  streaming?: StreamingConfiguration;
}

export const CreateVoiceConnector = async (
  uid: string,
  props: CreateVoiceConnectorProps,
) => {
  console.log(`Creating Voice Connector: ${uid}`);

  createVoiceConnectorParams = {
    Name: uid,
    RequireEncryption: props.encryption,
    AwsRegion: props.region,
  };

  try {
    createVoiceConnectorResponse = await chimeSDKVoiceClient.send(
      new CreateVoiceConnectorCommand(createVoiceConnectorParams),
    );
    if (
      createVoiceConnectorResponse.VoiceConnector &&
      createVoiceConnectorResponse.VoiceConnector.VoiceConnectorId
    ) {
      voiceConnectorId =
        createVoiceConnectorResponse.VoiceConnector?.VoiceConnectorId;
    } else {
      throw new Error('Voice Connector failed to create');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  if (props.origination) {
    await putOrigination(voiceConnectorId, props.origination);
  }

  if (props.termination) {
    await putTermination(voiceConnectorId, props.termination);
  }

  if (props.streaming) {
    await putStreaming(voiceConnectorId, props.streaming);
  }

  if (props.logging) {
    await putLogging(voiceConnectorId, props.logging);
  }

  try {
    await ssmClient.send(
      new PutParameterCommand({
        Name: '/chime/voiceConnector' + uid,
        Value: voiceConnectorId,
        Description: 'Voice Connector ID',
        Overwrite: true,
        Type: 'String',
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  return {
    voiceConnectorId: voiceConnectorId,
  };
};

const putOrigination = async (
  originationVoiceConnectorId: string,
  origination: OriginationRoute[],
) => {
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorOriginationCommand({
        VoiceConnectorId: originationVoiceConnectorId,
        Origination: {
          Routes: origination,
          Disabled: false,
        },
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};

const putTermination = async (
  terminationVoiceConnectorId: string,
  termination: Termination,
) => {
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorTerminationCommand({
        VoiceConnectorId: terminationVoiceConnectorId,
        Termination: termination,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};

const putStreaming = async (
  streamingVoiceConnectorId: string,
  streaming: StreamingConfiguration,
) => {
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorStreamingConfigurationCommand({
        VoiceConnectorId: streamingVoiceConnectorId,
        StreamingConfiguration: streaming,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};

const putLogging = async (
  loggingVoiceConnectorId: string,
  logging: LoggingConfiguration,
) => {
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorLoggingConfigurationCommand({
        VoiceConnectorId: loggingVoiceConnectorId,
        LoggingConfiguration: logging,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};

export const DeleteVoiceConnector = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/voiceConnector' + uid }),
    );
    if (
      getParameterCommandOutput.Parameter &&
      getParameterCommandOutput.Parameter.Value
    ) {
      voiceConnectorId = getParameterCommandOutput.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    const phoneNumbersAssociated = await chimeSDKVoiceClient.send(
      new ListPhoneNumbersCommand({
        FilterName: 'VoiceConnectorId',
        FilterValue: voiceConnectorId,
      }),
    );
    if (
      phoneNumbersAssociated.PhoneNumbers &&
      phoneNumbersAssociated.PhoneNumbers.length > 0
    ) {
      phoneNumbersAssociated.PhoneNumbers.forEach(async (phoneNumber) => {
        phoneNumbersToDisassociate.push(phoneNumber.PhoneNumberId!);
      });
    }
    await chimeSDKVoiceClient.send(
      new DisassociatePhoneNumbersFromVoiceConnectorCommand({
        VoiceConnectorId: voiceConnectorId,
        E164PhoneNumbers: phoneNumbersToDisassociate,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    await chimeSDKVoiceClient.send(
      new DeleteVoiceConnectorCommand({
        VoiceConnectorId: voiceConnectorId,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/voiceConnector' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};
