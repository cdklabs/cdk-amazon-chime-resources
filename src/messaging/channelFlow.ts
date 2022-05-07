import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MessagingResources } from './messagingCustomResources';

export enum InvocationType {
  ASYNC = 'ASYNC',
}

export enum FallbackAction {
  CONTINUE = 'CONTINUE',
  ABORT = 'ABORT',
}
export interface Lambda {
  readonly resourceArn: string;
  readonly invocationType: InvocationType;
}
export interface Configuration {
  readonly lambda: Lambda;
}

export interface Processors {
  readonly name: string;
  readonly configuration: Configuration;
  readonly executionOrder: number;
  readonly fallbackAction: FallbackAction;
}
export interface Tags {
  readonly key: string;
  readonly value: string;
}
/**
 * Props for `AppInstance`.
 */
export interface ChannelFlowProps {
  readonly appInstanceArn: string;
  readonly processors: Array<Processors>;
  readonly tags?: Array<Tags>;
  /**
   * The name of the app instance.
   *
   * @default - None
   */
  readonly name?: string;

  /**
   * The ClientRequestToken of the app instance.  This field is autopopulated if not provided.
   *
   * @default - None
   */
  readonly clientRequestToken: string;
}

export class ChannelFlow extends Construct {
  public readonly channelFlowArn: string;

  constructor(scope: Construct, id: string, props: ChannelFlowProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { name, clientRequestToken, appInstanceArn, processors, tags } =
      props;

    // const fixed_configuration = {
    //   Lambda: {
    //     ResourceArn: processors[0].configuration.lambda.reasourceArn,
    //     InvocationType: processors[0].configuration.lambda.invocationType,
    //   },
    // };

    // const fixed_proccesors = [
    //   {
    //     Name: processors[0].name,
    //     Configuration: fixed_configuration,
    //     ExecutionOrder: processors[0].executionOrder,
    //     FallbackAction: processors[0].fallbackAction,
    //   },
    // ];

    const channelFlowRequest = new MessagingResources(
      this,
      'channelFlowRequest',
      {
        resourceType: 'ChannelFlow',
        uid: uid,
        properties: {
          name: name || uid,
          appInstanceArn: appInstanceArn,
          processors: processors,
          tags: tags,
          clientRequestToken: clientRequestToken,
        },
      },
    );

    this.channelFlowArn =
      channelFlowRequest.messagingCustomResource.getAttString('channelFlowArn');
  }
}
