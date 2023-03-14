/* eslint-disable import/no-extraneous-dependencies */
import {
  AppInstanceStreamingConfiguration,
  ChimeClient,
  PutAppInstanceStreamingConfigurationsCommand,
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
} from '@aws-sdk/client-chime';

const chimeClient = new ChimeClient({
  region: process.env.AWS_REGION,
});

export enum AppInstanceDataType {
  CHANNEL = 'Channel',
  CHANNELMESSAGE = 'ChannelMessage',
}

interface StreamingConfigsProps {
  appInstanceDataType: AppInstanceDataType;
  resourceArn: string;
}
interface DataRetentionProps {
  streamingConfigs?: StreamingConfigsProps[];
  appInstanceArn?: string;
}

let putStreamingConfigurationOutput: PutAppInstanceStreamingConfigurationsCommandOutput;
let putStreamingConfigurationInput: PutAppInstanceStreamingConfigurationsCommandInput;
let updatedConfiguration: AppInstanceStreamingConfiguration[];
export const PutStreamingConfiguration = async (props: DataRetentionProps) => {
  updatedConfiguration = [];

  props.streamingConfigs?.forEach((streamingConfig) => {
    updatedConfiguration.push({
      AppInstanceDataType: streamingConfig.appInstanceDataType,
      ResourceArn: streamingConfig.resourceArn,
    });
  });

  putStreamingConfigurationInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceStreamingConfigurations: updatedConfiguration,
  };

  try {
    putStreamingConfigurationOutput = await chimeClient.send(
      new PutAppInstanceStreamingConfigurationsCommand(
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
      putStreamingConfigurationOutput.AppInstanceStreamingConfigurations,
  };
};
