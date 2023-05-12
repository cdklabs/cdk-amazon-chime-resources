/* eslint-disable import/no-extraneous-dependencies */
import {
  ChimeSDKIdentityClient,
  CreateAppInstanceBotCommand,
  CreateAppInstanceBotCommandInput,
  CreateAppInstanceBotCommandOutput,
  Tag,
} from '@aws-sdk/client-chime-sdk-identity';

import {
  SSMClient,
  DeleteParameterCommand,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeClient = new ChimeSDKIdentityClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

interface Tags {
  key: string;
  value: string;
}

/**
 * Props for `Configuration`.
 */
export interface AppInstanceBotConfiguration {
  readonly lex: AppInstanceBotLexConfiguration;

}

/**
 * Configuration for AppInstanceBot with Lex.
 */
export interface AppInstanceBotLexConfiguration {

  /**
   * Setting for when Lex is invoked.
   */
  readonly respondsTo: string;

  /**
   * Lex `BotAliasArn` from setup Lex Bot.
   */
  readonly lexBotAliasArn: string;

  /**
   * LocaleId to use.  This needs to match one of the localIds that BotAliasArn is configured with.
   */
  readonly localeId: string;

  /**
   * An optional welcome intent to trigger when the Bot is added to the channel.
   */
  readonly welcomeIntent?: string;

}

interface AppInstanceBotProps {

  name?: string;
  metadata?: string;
  clientRequestToken?: string;
  appInstanceArn?: string;
  tags?: Tags[];

  configuration: AppInstanceBotLexConfiguration;
}

let createAppInstanceBotCommandInput: CreateAppInstanceBotCommandInput;
let createAppInstanceBotCommandOutput: CreateAppInstanceBotCommandOutput;
let updatedTags: Tag[];

export const CreateAppInstanceBot = async (
  uid: string,
  props: AppInstanceBotProps,
) => {
  updatedTags = [];
  if (props.tags) {
    props.tags.forEach((tag) => {
      updatedTags.push({ Key: tag.key, Value: tag.value });
    });
  }

  createAppInstanceBotCommandInput = {
    Configuration: {
      Lex: {
        LexBotAliasArn: props.configuration.lexBotAliasArn,
        LocaleId: props.configuration.localeId,
        RespondsTo: props.configuration.respondsTo,
        ...(props.configuration.welcomeIntent && {
          WelcomeIntent: props.configuration.welcomeIntent,
        }),
      },
    },
    Name: props.name,
    AppInstanceArn: props.appInstanceArn,
    ...(props.metadata && { Metadata: props.metadata }),
    ...(props.clientRequestToken && {
      ClientRequestToken: props.clientRequestToken,
    }),
    ...(updatedTags.length > 0 && { Tags: updatedTags }),
  };

  try {
    createAppInstanceBotCommandOutput = await chimeClient.send(
      new CreateAppInstanceBotCommand(createAppInstanceBotCommandInput),
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
        Name: `/chime/appInstanceBotId/${uid}`,
        Description: 'appInstanceBotId',
        Value: createAppInstanceBotCommandOutput.AppInstanceBotArn,
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
    appInstanceBot: createAppInstanceBotCommandOutput.AppInstanceBotArn,
  };
};

export const DeleteAppInstanceBot = async (uid: string) => {
  try {
    await ssmClient.send(
      new DeleteParameterCommand({ Name: `/chime/appInstanceBotId/${uid}` }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }
};
