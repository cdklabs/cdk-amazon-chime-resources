/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKVoiceClient,
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
  DeleteSipMediaApplicationCommand,
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

let createSipMediaApplicationResponse: CreateSipMediaApplicationCommandOutput;
let createSipMediaApplicationParams: CreateSipMediaApplicationCommandInput;
let getParameterCommandOutput: GetParameterCommandOutput;

export interface CreateSIPMediaApplicationProps {
  name?: string;
  region?: string;
  endpoint?: string;
}

export const CreateSipMediaApplication = async (
  uid: string,
  props: CreateSIPMediaApplicationProps,
) => {
  console.log(`Creating SIP media application rule: ${uid}`);
  console.log(`Create SIP media application props: ${JSON.stringify(props)}`);

  createSipMediaApplicationParams = {
    Name: props.name,
    AwsRegion: props.region,
    Endpoints: [{ LambdaArn: props.endpoint }],
  };

  console.log(
    `Create SIP media application params: ${JSON.stringify(
      createSipMediaApplicationParams,
    )}`,
  );
  try {
    createSipMediaApplicationResponse = await chimeSDKVoiceClient.send(
      new CreateSipMediaApplicationCommand(createSipMediaApplicationParams),
    );
    console.log(
      `createSipMediaApplicationResponse: ${JSON.stringify(
        createSipMediaApplicationResponse,
      )}`,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    await ssmClient.send(
      new PutParameterCommand({
        Name: '/chime/sipMediaApp' + uid,
        Value:
          createSipMediaApplicationResponse.SipMediaApplication
            ?.SipMediaApplicationId,
        Description: 'SIP Media Application ID',
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
    sipMediaAppId:
      createSipMediaApplicationResponse.SipMediaApplication
        ?.SipMediaApplicationId,
  };
};

export const DeleteSipMediaApplication = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/sipMediaApp' + uid }),
    );
    if (
      getParameterCommandOutput.Parameter &&
      getParameterCommandOutput.Parameter.Value
    ) {
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    await chimeSDKVoiceClient.send(
      new DeleteSipMediaApplicationCommand({
        SipMediaApplicationId: getParameterCommandOutput.Parameter?.Value,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/sipRule' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
};
