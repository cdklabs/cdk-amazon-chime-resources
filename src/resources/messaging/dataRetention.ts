/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeClient,
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceRetentionSettingsCommandOutput,
  PutAppInstanceRetentionSettingsCommandInput,
} from '@aws-sdk/client-chime';

const chimeClient = new ChimeClient({
  region: process.env.AWS_REGION,
});

interface DataRetentionProps {
  dataRetention?: string;
  appInstanceArn?: string;
}

let putDataRetentionOutput: PutAppInstanceRetentionSettingsCommandOutput;
let putDataRetentionInput: PutAppInstanceRetentionSettingsCommandInput;

export const PutDataRetention = async (props: DataRetentionProps) => {
  putDataRetentionInput = {
    AppInstanceArn: props.appInstanceArn,
    AppInstanceRetentionSettings: {
      ChannelRetentionSettings: {
        RetentionDays: parseInt(props.dataRetention!),
      },
    },
  };

  try {
    putDataRetentionOutput = await chimeClient.send(
      new PutAppInstanceRetentionSettingsCommand(putDataRetentionInput),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
  return {
    appInstanceRetentionSettings:
      putDataRetentionOutput.AppInstanceRetentionSettings,
  };
};
