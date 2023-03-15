/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKVoiceClient,
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
  DeleteSipMediaApplicationCommand,
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
  PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
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
let putSipMediaApplicationAlexaSkillInput: PutSipMediaApplicationAlexaSkillConfigurationCommandInput;
let putSipMediaApplicationLoggingInput: PutSipMediaApplicationLoggingConfigurationCommandInput;
let putSipMediaApplicationAlexaSkillOutput: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput;
let putSipMediaApplicationLoggingOutput: PutSipMediaApplicationLoggingConfigurationCommandOutput;

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
      throw error;
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
      throw error;
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
      throw error;
    }
  }

  try {
    await chimeSDKVoiceClient.send(
      new DeleteSipMediaApplicationCommand({
        SipMediaApplicationId: getParameterCommandOutput.Parameter?.Value,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/sipMediaApp' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

export interface PutSipMediaApplicationLoggingProps {
  sipMediaAppId?: string;
  sipMediaApplicationLoggingConfiguration?: {
    sipMediaApplicationLoggingConfiguration: {
      enableSipMediaApplicationMessageLogs: boolean;
    };
  };
}

export const PutSipMediaApplicationLogging = async (
  props: PutSipMediaApplicationLoggingProps,
) => {
  console.log(
    `Put SIP media application logging configuration: ${JSON.stringify(props)}`,
  );

  putSipMediaApplicationLoggingInput = {
    SipMediaApplicationId: props.sipMediaAppId,
    SipMediaApplicationLoggingConfiguration: {
      EnableSipMediaApplicationMessageLogs:
        props.sipMediaApplicationLoggingConfiguration
          ?.sipMediaApplicationLoggingConfiguration
          ?.enableSipMediaApplicationMessageLogs,
    },
  };
  try {
    putSipMediaApplicationLoggingOutput = await chimeSDKVoiceClient.send(
      new PutSipMediaApplicationLoggingConfigurationCommand(
        putSipMediaApplicationLoggingInput,
      ),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  return {
    putSipMediaApplicationLoggingConfiguration:
      putSipMediaApplicationLoggingOutput.SipMediaApplicationLoggingConfiguration,
  };
};

enum AlexaSkillStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface PutSipMediaApplicationAlexaSkillProps {
  sipMediaApplicationAlexaSkillConfiguration?: {
    alexaSkillIds: string[];
    alexaSkillStatus: AlexaSkillStatus;
  };
  sipMediaAppId?: string;
}

export const PutSipMediaApplicationAlexaSkill = async (
  props: PutSipMediaApplicationAlexaSkillProps,
) => {
  console.log(
    `Put SIP media application Alexa skill configuration: ${JSON.stringify(
      props,
    )}`,
  );

  putSipMediaApplicationAlexaSkillInput = {
    SipMediaApplicationId: props.sipMediaAppId,
    SipMediaApplicationAlexaSkillConfiguration: {
      AlexaSkillIds:
        props.sipMediaApplicationAlexaSkillConfiguration?.alexaSkillIds,
      AlexaSkillStatus:
        props.sipMediaApplicationAlexaSkillConfiguration?.alexaSkillStatus,
    },
  };

  try {
    putSipMediaApplicationAlexaSkillOutput = await chimeSDKVoiceClient.send(
      new PutSipMediaApplicationAlexaSkillConfigurationCommand(
        putSipMediaApplicationAlexaSkillInput,
      ),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  return {
    putSipMediaApplicationAlexaSkillConfiguration:
      putSipMediaApplicationAlexaSkillOutput.SipMediaApplicationAlexaSkillConfiguration,
  };
};
