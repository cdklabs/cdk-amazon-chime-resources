import {
  ChimeSDKVoiceClient,
  GetSipRuleCommand,
  CreateSipRuleCommand,
  UpdateSipRuleCommand,
  DeleteSipRuleCommand,
  CreateSipRuleCommandInput,
  CreateSipRuleCommandOutput,
  SipRuleTargetApplication,
  SipRuleTriggerType,
  ChimeSDKVoiceServiceException,
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

let createSipRuleParams: CreateSipRuleCommandInput;
let createSipRuleResponse: CreateSipRuleCommandOutput | undefined;
let getParameterCommandOutput: GetParameterCommandOutput;
let sipRuleToDelete: string;
let sipRuleTargetApplications: SipRuleTargetApplication[];

export interface CreateSIPRuleProps {
  name?: string;
  triggerType?: SipRuleTriggerType;
  triggerValue?: string;
  targetApplications?: [
    { region: string; priority: string; sipMediaApplicationId: string },
  ];
}

export const CreateSIPRule = async (uid: string, props: CreateSIPRuleProps) => {
  console.log(`Creating SIP media application rule: ${uid}`);
  console.log(
    `Create SIP media application rule props: ${JSON.stringify(props)}`,
  );
  sipRuleTargetApplications = [];
  props.targetApplications?.forEach((targetApplication) => {
    sipRuleTargetApplications.push({
      AwsRegion: targetApplication.region,
      SipMediaApplicationId: targetApplication.sipMediaApplicationId,
      Priority: parseInt(targetApplication.priority),
    });
  });
  createSipRuleParams = {
    Name: props.name,
    TriggerType: props.triggerType,
    TriggerValue: props.triggerValue,
    TargetApplications: sipRuleTargetApplications,
  };
  console.log(
    `Create SIP media application rule params: ${JSON.stringify(
      createSipRuleParams,
    )}`,
  );

  let attempt = 0;

  while (attempt < 10) {
    try {
      console.log(`Attempt ${attempt + 1}: Creating SIP rule`);
      createSipRuleResponse = await chimeSDKVoiceClient.send(
        new CreateSipRuleCommand(createSipRuleParams),
      );
      console.log(`SIP rule created: ${JSON.stringify(createSipRuleResponse)}`);
      break;
    } catch (error) {
      if (
        error instanceof ChimeSDKVoiceServiceException &&
        error.name === 'BadRequestException'
      ) {
        console.error('Bad Request Exception, retrying...', error);
        attempt++;
        await sleep(10000);
        continue;
      } else {
        console.error('An unexpected error occurred:', error);
        throw error;
      }
    }
  }

  if (!createSipRuleResponse) {
    throw new Error('Failed to create SIP rule after 3 attempts.');
  }

  try {
    await ssmClient.send(
      new PutParameterCommand({
        Name: '/chime/sipRule' + uid,
        Value: createSipRuleResponse.SipRule?.SipRuleId,
        Description: 'SIP Rule ID',
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
    sipRuleId: createSipRuleResponse.SipRule?.SipRuleId,
  };
};

export const DeleteSIPRule = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/sipRule' + uid }),
    );
    if (
      getParameterCommandOutput.Parameter &&
      getParameterCommandOutput.Parameter.Value
    ) {
      sipRuleToDelete = getParameterCommandOutput.Parameter.Value;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  try {
    await chimeSDKVoiceClient.send(
      new UpdateSipRuleCommand({
        SipRuleId: sipRuleToDelete,
        Name: uid,
        Disabled: true,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  let getSipRuleCommandCount = 0;
  while (
    !(await chimeSDKVoiceClient.send(
      new GetSipRuleCommand({ SipRuleId: sipRuleToDelete }),
    ))
  ) {
    getSipRuleCommandCount++;
    if (getSipRuleCommandCount > 15) {
      throw new Error('Could not disable SIP rule');
    }
    await sleep(5000);
  }

  try {
    await chimeSDKVoiceClient.send(
      new DeleteSipRuleCommand({
        SipRuleId: sipRuleToDelete,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/sipRule' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
