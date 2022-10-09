import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StreamingConfig } from './appInstance';
import { MessagingResources } from './messagingCustomResources';

/**
 * Props for `PutAppInstanceStreamingConfigurations`.
 * See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html
 */
export interface StreamingConfigurationProps {
  /**
   * The ARN of the App Instance
   *
   * @default - None
   */
  readonly appInstanceArn: string;

  /**
   * The AppInstanceStreamingConfigurations
   *
   * @default - None
   */
  readonly streamingConfigs: Array<StreamingConfig>;
}

export class AppInstanceStreamingConfigurations extends Construct {
  public readonly streamingConfigs: Array<StreamingConfig>;

  constructor(scope: Construct, id: string, props: StreamingConfigurationProps) {
    super(scope, id);

    const { streamingConfigs, appInstanceArn } = props;

    const uid: string = cdk.Names.uniqueId(this);
    new MessagingResources(
      this,
      'AppInstanceStreamingConfiguration',
      {
        resourceType: 'StreamingConfig',
        uid: uid,
        properties: {
          appInstanceArn: appInstanceArn,
          streamingConfigs: streamingConfigs,
        },
      },
    );

    this.streamingConfigs = streamingConfigs;
  }
}
