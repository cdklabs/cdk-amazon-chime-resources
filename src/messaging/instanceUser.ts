import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { instanceUserValidator } from './instanceUserValidator';
import { MessagingResources } from './messagingCustomResources';

export interface InstanceUserTags {
  readonly key: string;
  readonly value: string;
}

/**
 * Props for `AppInstance`.
 */
export interface AppInstanceUserProps {
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
   * The name of the app instance.
   *
   * @default - None
   */
  readonly appInstanceUserId: string;
  /**
   * The tags for the creation request.
   *
   * @default - None
   */
  readonly tags?: Array<InstanceUserTags>;
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
}

export class MessagingAppInstanceUser extends Construct {
  public readonly appInstanceUserArn: string;

  constructor(scope: Construct, id: string, props: AppInstanceUserProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      name,
      metadata,
      clientRequestToken,
      appInstanceArn,
      appInstanceUserId,
      tags,
    } = props;

    instanceUserValidator(props);
    const appInstanceRequest = new MessagingResources(
      this,
      'MessagingAppInstance',
      {
        resourceType: 'AppInstanceUser',
        uid: uid,
        properties: {
          name: name || uid,
          metadata: metadata,
          clientRequestToken: clientRequestToken,
          appInstanceArn: appInstanceArn,
          appInstanceUserId: appInstanceUserId,
          tags: tags,
        },
      },
    );

    this.appInstanceUserArn =
      appInstanceRequest.messagingCustomResource.getAttString(
        'appInstanceUser',
      );
  }
}
