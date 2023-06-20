import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { instanceBotValidator } from './instanceBotValidator';
import { MessagingResources } from './messagingCustomResources';

export interface InstanceBotTags {
  readonly key: string;
  readonly value: string;
}

/**
 * Props for `Configuration` when Configuration is for Lex.
 */

export enum LexConfigurationRespondsTo {
  STANDARD_MESSAGES = 'STANDARD_MESSAGES',
}

/**
 * Configuration for AppInstanceBot with Lex.
 */
export interface AppInstanceBotLexConfiguration {

  /**
   * Setting for when Lex is invoked.
   */
  readonly respondsTo: LexConfigurationRespondsTo;

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

/**
 * Props for `Configuration`.
 */
export interface AppInstanceBotConfiguration {
  readonly lex: AppInstanceBotLexConfiguration;
}


/**
 * Props for `AppInstance`.
 */
export interface AppInstanceBotProps {
  /**
   * The name of the app instance.
   *
   * @default - None
   */
  readonly name?: string;

  /**
   * The name of the app instance.
   *
   * @default - None
   */
  readonly appInstanceArn: string;
  /**
   * The tags for the creation request.
   *
   * @default - None
   */
  readonly tags?: Array<InstanceBotTags>;
  /**
   * The metadata of the app instance. Limited to a 1KB string in UTF-8.
   *
   * @default - None
   */
  readonly metadata?: string;

  /**
   * The ClientRequestToken of the app instance.  This field is autopopulated if not provided.
   *
   * @default - None
   */
  readonly clientRequestToken?: string;

  /**
   * The configuration of the bot.  This field populates Lex settings.
   */
  readonly configuration: AppInstanceBotConfiguration;
}

export class MessagingAppInstanceBot extends Construct {
  public readonly appInstanceBotArn: string;

  constructor(scope: Construct, id: string, props: AppInstanceBotProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      name,
      metadata,
      clientRequestToken,
      appInstanceArn,
      tags,
      configuration,
    } = props;

    instanceBotValidator(props);
    const appInstanceRequest = new MessagingResources(
      this,
      'MessagingAppInstance',
      {
        resourceType: 'AppInstanceBot',
        uid: uid,
        properties: {
          name: name || uid,
          metadata: metadata,
          clientRequestToken: clientRequestToken,
          appInstanceArn: appInstanceArn,
          tags: tags,
          configuration: {
            lex: {
              lexBotAliasArn: configuration.lex.lexBotAliasArn,
              welcomeIntent: configuration.lex.welcomeIntent,
              localeId: configuration.lex.localeId,
              respondsTo: configuration.lex.respondsTo,
            },
          },
        },
      },
    );

    this.appInstanceBotArn =
      appInstanceRequest.messagingCustomResource.getAttString(
        'appInstanceBot',
      );
  }
}
