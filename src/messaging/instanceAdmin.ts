import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MessagingResources } from './messagingCustomResources';

/**
 * Props for `AppInstance`.
 */
export interface AppInstanceAdminProps {
  /**
   * The name of the app instance.
   *
   * @default - None
   */
  readonly appInstanceAdminArn: string;

  /**
   * The name of the app instance.
   *
   * @default - None
   */
  readonly appInstanceArn: string;
}

export class MessagingAppInstanceAdmin extends Construct {
  public readonly appInstanceAdminArn: string;
  public readonly appInstanceAdminName: string;

  constructor(scope: Construct, id: string, props: AppInstanceAdminProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const { appInstanceArn, appInstanceAdminArn } = props;

    const appInstanceRequest = new MessagingResources(
      this,
      'MessagingAppInstance',
      {
        resourceType: 'AppInstanceAdmin',
        uid: uid,
        properties: {
          appInstanceArn: appInstanceArn,
          appInstanceAdminArn: appInstanceAdminArn,
        },
      },
    );

    this.appInstanceAdminArn =
      appInstanceRequest.messagingCustomResource.getAttString(
        'AppInstanceAdminArn',
      );
    this.appInstanceAdminName =
      appInstanceRequest.messagingCustomResource.getAttString(
        'AppInstanceAdminName',
      );
  }
}
