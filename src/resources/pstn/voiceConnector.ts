import {
  CloudWatchLogsClient,
  PutResourcePolicyCommand,
} from '@aws-sdk/client-cloudwatch-logs';

import {
  MediaInsightsConfiguration,
  Protocol,
} from '../../pstn/voiceConnector';

import {
  ChimeSDKVoiceClient,
  CreateVoiceConnectorCommand,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorCommandOutput,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
  Termination,
  OriginationRoute,
  StreamingConfiguration,
  LoggingConfiguration,
  ListPhoneNumbersCommand,
  StreamingNotificationTarget,
} from '@aws-sdk/client-chime-sdk-voice';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

enum VoiceConnectorRegion {
  US_EAST_1 = 'us-east-1',
  US_WEST_2 = 'us-west-2',
  CA_CENTRAL_1 = 'ca-central-1',
  AP_NORTHEAST_1 = 'ap-northeast-1',
  AP_NORTHEAST_2 = 'ap-northeast-2',
  AP_SOUTHEAST_1 = 'ap-southeast-1',
  AP_SOUTHEAST_2 = 'ap-southeast-2',
  EU_WEST_1 = 'eu-west-1',
  EU_WEST_2 = 'eu-west-2',
  EU_CENTRAL_1 = 'eu-central-1',
}
const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });
const logClient = new CloudWatchLogsClient({ region: process.env.AWS_REGION });

let createVoiceConnectorResponse: CreateVoiceConnectorCommandOutput;
let createVoiceConnectorParams: CreateVoiceConnectorCommandInput;
let updateVoiceConnectorParams: CreateVoiceConnectorCommandInput;
let getParameterCommandOutput: GetParameterCommandOutput;
let voiceConnectorId: string;
let phoneNumbersToDisassociate: string[];
let routes: OriginationRoute[];
let terminationConfiguration: Termination;
let streamingConfiguration: StreamingConfiguration;
let loggingConfiguration: LoggingConfiguration;
let deleteVoiceConnectorResponse: DeleteVoiceConnectorCommandOutput;

interface Routes {
  protocol: Protocol;
  host: string;
  port: string;
  priority: string;
  weight: string;
}

interface TerminationProps {
  callingRegions: string[];
  terminationCidrs: string[];
  cpsLimit: string;
}

interface StreamingProps {
  enabled: boolean;
  dataRetention: string;
  notificationTarget: StreamingNotificationTarget[];
  mediaInsightsConfiguration: MediaInsightsConfiguration;
}

interface LoggingProps {
  enableSIPLogs: boolean;
  enableMediaMetricLogs: boolean;
}

export interface CreateVoiceConnectorProps {
  name?: string;
  region?: VoiceConnectorRegion;
  encryption?: boolean;
  termination?: TerminationProps;
  origination?: Routes[];
  logging?: LoggingProps;
  streaming?: StreamingProps;
}

export const CreateVoiceConnector = async (
  uid: string,
  props: CreateVoiceConnectorProps,
) => {
  console.log(`Creating Voice Connector: ${uid}`);
  console.log(`Create Voice Connector Props: ${JSON.stringify(props)}`);
  createVoiceConnectorParams = {
    Name: props.name,
    RequireEncryption: props.encryption,
    AwsRegion: props.region,
  };
  console.log(
    `createVoiceConnectorParams: ${JSON.stringify(createVoiceConnectorParams)}`,
  );

  try {
    createVoiceConnectorResponse = await chimeSDKVoiceClient.send(
      new CreateVoiceConnectorCommand(createVoiceConnectorParams),
    );
    console.log(
      `createVoiceConnectorResponse: ${JSON.stringify(
        createVoiceConnectorResponse,
      )}`,
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
      throw error;
    }
  }
  console.log(`Voice Connector Created: ${voiceConnectorId}`);

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
      throw error;
    }
  }

  return {
    voiceConnectorId: voiceConnectorId,
  };
};

export interface UpdateVoiceConnectorProps {
  name?: string;
  region?: VoiceConnectorRegion;
  encryption?: boolean;
  termination?: TerminationProps;
  origination?: Routes[];
  logging?: LoggingProps;
  streaming?: StreamingProps;
}

export const UpdateVoiceConnector = async (
  uid: string,
  props: UpdateVoiceConnectorProps,
) => {
  console.log(`Updating Voice Connector: ${uid}`);
  console.log(`Updating Voice Connector Props: ${JSON.stringify(props)}`);
  updateVoiceConnectorParams = {
    Name: props.name,
    RequireEncryption: props.encryption,
    AwsRegion: props.region,
  };
  console.log(
    `updateVoiceConnectorParams: ${JSON.stringify(updateVoiceConnectorParams)}`,
  );

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
      throw error;
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
  return {
    voiceConnectorId: voiceConnectorId,
  };
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
      throw error;
    }
  }
  console.log(`voiceConnectorId to delete: ${voiceConnectorId}`);
  try {
    const phoneNumbersAssociated = await chimeSDKVoiceClient.send(
      new ListPhoneNumbersCommand({
        FilterName: 'VoiceConnectorId',
        FilterValue: voiceConnectorId,
      }),
    );
    console.log(
      `phoneNumbers to disassociate:  ${JSON.stringify(
        phoneNumbersAssociated,
      )}`,
    );
    if (
      phoneNumbersAssociated.PhoneNumbers &&
      phoneNumbersAssociated.PhoneNumbers.length > 0
    ) {
      phoneNumbersAssociated.PhoneNumbers.forEach(async (phoneNumber) => {
        phoneNumbersToDisassociate.push(phoneNumber.PhoneNumberId!);
      });
      console.log(`Disassociate Phone Numbers: ${phoneNumbersToDisassociate}`);
      await chimeSDKVoiceClient.send(
        new DisassociatePhoneNumbersFromVoiceConnectorCommand({
          VoiceConnectorId: voiceConnectorId,
          E164PhoneNumbers: phoneNumbersToDisassociate,
        }),
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  console.log(`Deleting Voice Connector: ${voiceConnectorId}`);
  try {
    deleteVoiceConnectorResponse = await chimeSDKVoiceClient.send(
      new DeleteVoiceConnectorCommand({
        VoiceConnectorId: voiceConnectorId,
      }),
    );
    console.log(
      `Delete Voice Connector Response: ${deleteVoiceConnectorResponse}`,
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/voiceConnector' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const putOrigination = async (
  originationVoiceConnectorId: string,
  originations: {
    protocol: Protocol;
    host: string;
    port: string;
    priority: string;
    weight: string;
  }[],
) => {
  console.log(`originations:  ${JSON.stringify(originations)}`);
  console.info(`voiceConnectorId: ${originationVoiceConnectorId}`);
  routes = [];
  originations.forEach(async (origination) => {
    routes.push({
      Protocol: origination.protocol,
      Host: origination.host,
      Port: parseInt(origination.port),
      Priority: parseInt(origination.priority),
      Weight: parseInt(origination.weight),
    });
  });
  console.log(`routes:  ${JSON.stringify(routes)}`);
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorOriginationCommand({
        VoiceConnectorId: originationVoiceConnectorId,
        Origination: {
          Routes: routes,
          Disabled: false,
        },
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const putTermination = async (
  terminationVoiceConnectorId: string,
  termination: {
    callingRegions: string[];
    terminationCidrs: string[];
    cpsLimit: string;
  },
) => {
  console.log(`termination:  ${JSON.stringify(termination)}`);
  console.info(`voiceConnectorId: ${terminationVoiceConnectorId}`);
  terminationConfiguration = {
    CallingRegions: termination.callingRegions,
    CidrAllowedList: termination.terminationCidrs,
    CpsLimit: parseInt(termination.cpsLimit),
  };
  console.log(
    `terminationConfiguration:  ${JSON.stringify(terminationConfiguration)}`,
  );
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorTerminationCommand({
        VoiceConnectorId: terminationVoiceConnectorId,
        Termination: terminationConfiguration,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const putStreaming = async (
  streamingVoiceConnectorId: string,
  streaming: StreamingProps,
) => {
  console.log(`streaming:  ${JSON.stringify(streaming)}`);
  console.info(`voiceConnectorId: ${streamingVoiceConnectorId}`);

  streamingConfiguration = {
    StreamingNotificationTargets: streaming.notificationTarget,
    Disabled: false,
    DataRetentionInHours: parseInt(streaming.dataRetention),
    ...(streaming.mediaInsightsConfiguration && {
      MediaInsightsConfiguration: {
        Disabled: streaming.mediaInsightsConfiguration.disabled,
        ConfigurationArn: streaming.mediaInsightsConfiguration.configurationArn,
      },
    }),
  };
  console.log(
    `streamingConfiguration:  ${JSON.stringify(streamingConfiguration)}`,
  );

  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorStreamingConfigurationCommand({
        VoiceConnectorId: streamingVoiceConnectorId,
        StreamingConfiguration: streamingConfiguration,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const putLogging = async (
  loggingVoiceConnectorId: string,
  logging: LoggingProps,
) => {
  console.log(`logging:  ${JSON.stringify(logging)}`);
  console.info(`voiceConnectorId: ${loggingVoiceConnectorId}`);

  try {
    console.log('Updating Resource Policy');
    const policyDocument = JSON.stringify({
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'AWSLogDeliveryWrite',
          Effect: 'Allow',
          Principal: { Service: 'delivery.logs.amazonaws.com' },
          Action: ['logs:CreateLogStream', 'logs:PutLogEvents'],
          Resource: ['*'],
        },
      ],
    });
    await logClient.send(
      new PutResourcePolicyCommand({
        policyName: 'msk',
        policyDocument: policyDocument,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  loggingConfiguration = {
    ...(logging.enableSIPLogs && { EnableSIPLogs: logging.enableSIPLogs }),
    ...(logging.enableMediaMetricLogs && {
      EnableMediaMetricLogs: logging.enableMediaMetricLogs,
    }),
  };
  console.log(`loggingConfiguration:  ${JSON.stringify(loggingConfiguration)}`);
  try {
    await chimeSDKVoiceClient.send(
      new PutVoiceConnectorLoggingConfigurationCommand({
        VoiceConnectorId: loggingVoiceConnectorId,
        LoggingConfiguration: loggingConfiguration,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
