/* eslint-disable import/no-extraneous-dependencies */
import {
  StreamingConfiguration,
  ChimeSDKMessagingClient,
  PutMessagingStreamingConfigurationsCommand,
  PutMessagingStreamingConfigurationsCommandInput,
  PutMessagingStreamingConfigurationsCommandOutput,
} from '@aws-sdk/client-chime-sdk-messaging';

const chimeClient = new ChimeSDKMessagingClient({
  region: process.env.AWS_REGION,
});

export enum AppInstanceDataType {
  CHANNEL = 'Channel',
  CHANNELMESSAGE = 'ChannelMessage',
}

interface StreamingConfigsProps {
  dataType: AppInstanceDataType;
  resourceArn: string;
}
interface DataRetentionProps {
  streamingConfigs?: StreamingConfigsProps[];
  appInstanceArn?: string;
}

let putStreamingConfigurationOutput: PutMessagingStreamingConfigurationsCommandOutput;
let putStreamingConfigurationInput: PutMessagingStreamingConfigurationsCommandInput;
let updatedConfiguration: StreamingConfiguration[];
export const PutStreamingConfiguration = async (props: DataRetentionProps) => {
  updatedConfiguration = [];

  props.streamingConfigs?.forEach((streamingConfig) => {
    updatedConfiguration.push({
      DataType: streamingConfig.dataType,
      ResourceArn: streamingConfig.resourceArn,
    });
  });

  putStreamingConfigurationInput = {
    AppInstanceArn: props.appInstanceArn,
    StreamingConfigurations: updatedConfiguration,
  };
  console.log('putStreamingConfigurationInput', putStreamingConfigurationInput);
  try {
    putStreamingConfigurationOutput = await chimeClient.send(
      new PutMessagingStreamingConfigurationsCommand(
        putStreamingConfigurationInput,
      ),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceStreamingConfiguration:
      putStreamingConfigurationOutput.StreamingConfigurations,
  };
};
