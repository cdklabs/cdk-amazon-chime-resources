import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { kinesisVideoStreamPoolValidator } from './kinesisVideoStreamPoolValidator';
import { MediaPipelineResources } from './mediaPipelinesCustomResources';

export interface KinesisVideoStreamPoolTag {
  readonly key: string;
  readonly value: string;
}

export interface KinesisVideoStreamConfiguration {
  readonly dataRetentionInHours?: number;
  readonly region: string;
}

export interface KinesisVideoStreamPoolProps {
  readonly poolName?: string;
  readonly streamConfiguration: KinesisVideoStreamConfiguration;
  readonly tags?: Array<KinesisVideoStreamPoolTag>;
  readonly clientRequestToken?: string;
}

export class KinesisVideoStreamPool extends Construct {
  public readonly createdTimestamp: string;
  public readonly poolArn: string;
  public readonly poolId: string;
  public readonly poolName: string;
  // public readonly poolSize: number;
  public readonly poolStatus: string;
  // public readonly streamConfiguration: KinesisVideoStreamConfiguration;
  public readonly updatedTimestamp: string;

  constructor(
    scope: Construct,
    id: string,
    props: KinesisVideoStreamPoolProps,
  ) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { poolName, streamConfiguration, tags, clientRequestToken } = props;

    kinesisVideoStreamPoolValidator(props);

    const mediaPipelinesInsightRequest = new MediaPipelineResources(
      this,
      'mediaPipelinesInsightRequest',
      {
        resourceType: 'KinesisVideoStreamPool',
        uid: uid,
        properties: {
          poolName: poolName ?? uid,
          streamConfiguration: streamConfiguration,
          tags: tags,
          clientRequestToken: clientRequestToken,
        },
      },
    );

    this.createdTimestamp =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'CreatedTimestamp',
      );

    this.poolArn =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'PoolArn',
      );

    this.poolId =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'PoolId',
      );

    this.poolName =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'PoolName',
      );

    // this.poolSize = Number(
    //   mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
    //     'CreatedTimestamp',
    //   ),
    // );

    this.poolStatus =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'PoolStatus',
      );

    // this.streamConfiguration = JSON.parse(
    //   mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
    //     'CreatedTimestamp',
    //   ),
    // );

    this.updatedTimestamp =
      mediaPipelinesInsightRequest.mediaPipelineCustomResource.getAttString(
        'UpdatedTimestamp',
      );
  }
}
