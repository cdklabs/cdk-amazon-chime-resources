## Amazon Chime SDK Messaging Resources

### Example

This example includes

- Amazon Chime SDK [App Instance](https://docs.aws.amazon.com/chime-sdk/latest/dg/create-app-instance.html)
- Amazon Chime SDK [Channel Flow](https://docs.aws.amazon.com/chime-sdk/latest/dg/using-channel-flows.html)
- Amazon Chime SDK [App Instance User](https://docs.aws.amazon.com/chime-sdk/latest/dg/create-app-instance-user.html)
- Amazon Chime SDK [App Instance Admin](https://docs.aws.amazon.com/chime-sdk/latest/dg/auth-by-role.html#appinstanceadmin)
- Amazon Chime SDK [Streaming Message Data](https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html)
- Amazon Chime SDK [Message Retention](https://docs.aws.amazon.com/chime-sdk/latest/dg/manage-retention.html)

## Amazon Chime SDK Messaging Resources

### Amazon Chime SDK Messaging App Instance

[API Reference](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_CreateAppInstance.html)

```typescript
const appInstance = new chime.MessagingAppInstance(this, 'appInstance', {
  name: 'MessagingAppInstanceExample',
});
```

This will create an Amazon Chime SDK Messaging App Instance and will return the `AppInstanceArn`.

### Amazon Chime SDK App Instance User

```typescript
const appInstanceUser = new chime.MessagingAppInstanceUser(
  this,
  'appInstanceUser',
  {
    appInstanceArn: appInstance.appInstanceArn,
    appInstanceUserId: '1234',
  },
);
```

This will create an App Instance User that is associated with the previously created Amazon Chime SDK Messaging App Instance. This User can then be promoted to an App Instance Admin.

### Amazon Chime SDK App Instance Admin

```typescript
new chime.MessagingAppInstanceAdmin(this, 'appInstanceAdmin', {
  appInstanceAdminArn: appInstanceUser.appInstanceUserArn,
  appInstanceArn: appInstance.appInstanceArn,
});
```

Using the previously created App Instance and the previously created App Instance User, an App Instance Admin can be created.

### Amazon Chime SDK Messaging Channel Flow

[API Reference](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html)

#### Preparing AWS Lambda for Channel Flow Processor

Take note of the [required permissions](https://docs.aws.amazon.com/chime-sdk/latest/dg/processor-setup.html) for the AWS Lambda in the example to allow the Amazon Chime SDK service to invoke the associated Lambda.

```typescript
const channelFlowLambdaRole = new iam.Role(this, 'channelFlowLambdaRole', {
  assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
  inlinePolicies: {
    ['chimePolicy']: new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          resources: [
            `arn:aws:chime:${this.region}:${this.account}:app-instance/*`,
          ],
          actions: ['chime:ChannelFlowCallback'],
        }),
      ],
    }),
  },
  managedPolicies: [
    iam.ManagedPolicy.fromAwsManagedPolicyName(
      'service-role/AWSLambdaBasicExecutionRole',
    ),
  ],
});

const channelFlowHandler = new Function(this, 'channelFlowHandler', {
  runtime: Runtime.PYTHON_3_9,
  handler: 'channelFlowHandler.lambda_handler',
  code: Code.fromAsset('src'),
  role: channelFlowLambdaRole,
});

channelFlowHandler.addPermission('Chime Resource Policy', {
  principal: new iam.ServicePrincipal('chime.amazonaws.com'),
  sourceArn: `arn:aws:chime:${this.region}:${this.account}:app-instance/*`,
  sourceAccount: `${this.account}`,
});
```

#### Creating Channel Flow Processor

```typescript
const channelFlow = new chime.ChannelFlow(this, 'channelFlow', {
  appInstanceArn: appInstance.appInstanceArn,
  processors: [
    {
      name: 'channelFlowName',
      configuration: {
        lambda: {
          resourceArn: channelFlowHandler.functionArn,
          invocationType: chime.InvocationType.ASYNC,
        },
      },
      executionOrder: 1,
      fallbackAction: chime.FallbackAction.ABORT,
    },
  ],
  clientRequestToken: uuidv4(),
});
```

### Streaming Messaging Data

[API Reference](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html)

```typescript
const kinesisStream = new kinesis.Stream(this, 'kinesisStream', {
  streamName: 'chime-messaging-channel-stream',
  shardCount: 2,
  encryption: kinesis.StreamEncryption.MANAGED,
});

appInstance.streaming([
  {
    appInstanceDataType: chime.AppInstanceDataType.CHANNEL,
    resourceArn: kinesisStream.streamArn,
  },
]);
```

Take note of the requirements for the Kinesis Stream for streaming messaging data:

- Kinesis streams must be in the same AWS account as the AppInstance.
- A stream must be in the same region as the AppInstance.
- Stream names have a prefix that starts with chime-messaging-.
- You must configure at least two shards. Each shard can receive data up to 1MB per second, so scale your stream accordingly.
- You must enable server-side encryption (SSE).

### Message Retention

[API Reference](https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceRetentionSettings.html)

```typescript
appInstance.retention(2);
```

Pass a number in days for message retention.
