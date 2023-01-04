import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { channelFlowValidator } from './channelFlowValidator';
import { MessagingResources } from './messagingCustomResources';

export enum InvocationType {
  ASYNC = 'ASYNC',
}

export enum FallbackAction {
  CONTINUE = 'CONTINUE',
  ABORT = 'ABORT',
}
/**
 * Props for `LambdaConfiguration`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_LambdaConfiguration.html
 */
export interface Lambda {
  /**
   * The ARN of the Lambda message processing function.
   *
   * @default - None
   */
  readonly resourceArn: string;
  /**
   * Controls how the Lambda function is invoked.
   *
   * @default - None
   */
  readonly invocationType: InvocationType;
}
/**
 * Props for `Configuration`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ProcessorConfiguration.html
 */
export interface Configuration {
  /**
   * Indicates that the processor is of type Lambda.
   *
   * @default - None
   */
  readonly lambda: Lambda;
}

/**
 * Props for `Processors`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Processor.html
 */
export interface Processors {
  /**
   * The name of the Channel Flow Processor
   *
   * @default - None
   */
  readonly name: string;
  /**
   * The information about the type of processor and its identifier.
   *
   * @default - None
   */
  readonly configuration: Configuration;
  /**
   * The sequence in which processors run. If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence. At this point, we support only 1 processor within a flow.
   *
   * @default - None
   */
  readonly executionOrder: number;
  /**
   * Determines whether to continue with message processing or stop it in cases where communication with a processor fails. If a processor has a fallback action of ABORT and communication with it fails, the processor sets the message status to FAILED and does not send the message to any recipients. Note that if the last processor in the channel flow sequence has a fallback action of CONTINUE and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.
   *
   * @default - None
   */
  readonly fallbackAction: FallbackAction;
}
export interface ChannelFlowTags {
  readonly key: string;
  readonly value: string;
}
/**
 * Props for `AppInstance`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html
 */
export interface ChannelFlowProps {
  /**
   * The ARN of the App Instance
   *
   * @default - None
   */
  readonly appInstanceArn: string;
  /**
   * Information about the processor Lambda functions.
   *
   * @default - None
   */
  readonly processors: Array<Processors>;
  /**
   * The tags for the creation request.
   *
   * @default - None
   */
  readonly tags?: Array<ChannelFlowTags>;
  /**
   * The name of the channel flow.
   *
   * @default - None
   */
  readonly name?: string;
  /**
   * The client token for the request. An Idempotency token.
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

    channelFlowValidator(props);
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
