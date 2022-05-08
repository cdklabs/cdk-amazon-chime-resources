# cdk-amazon-chime-resources

![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)

An AWS Cloud Development Kit (AWS CDK) construct library that allows you to provision Amazon Chime resources with npm and pypi

## Background

Amazon Chime resources (Amazon Chime Messaging and Amazon Chime PSTN resources) are not natively available in AWS CloudFormation or AWS CDK. Therefore, in order to create these resources with AWS CDK, an AWS Lambda backed custom resource must be used. In an effort to simplify that process, this AWS CDK construct has been created. This AWS CDK construct will create a custom resource and associated Lambda and expose constructs that can be used to create corresponding resources. This construct includes resources for both Amazon Chime Messaging and Amazon Chime PSTN.

## Usage

#### Amazon Chime PSTN Resources Example

See [example/lib/pstn-resources-example.ts](example/lib/pstn-resource-example.ts) for an example of deploying Amazon Chime PSTN resources. To deploy: `yarn cdk deploy PSTNResources`

This example includes

- Amazon Chime [Phone Number](https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html)
- Amazon Chime [SIP media application](https://docs.aws.amazon.com/chime-sdk/latest/ag/use-sip-apps.html)
- Amazon Chime [SIP media application rule](https://docs.aws.amazon.com/chime-sdk/latest/ag/use-sip-rules.html)
- Amazon Chime [Voice Connector](https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connectors.html)

#### Amazon Chime Messaging Resources Example

See [example/lib/messaging-resource-example.ts](example/lib/messaging-resource-example.ts) for an example of deploying Amazon Chime Messaging resources. To deploy: `yarn cdk deploy MessagingResources`

This example includes

- Amazon Chime [App Instance](https://docs.aws.amazon.com/chime-sdk/latest/dg/create-app-instance.html)
- Amazon Chime [Channel Flow](https://docs.aws.amazon.com/chime-sdk/latest/dg/using-channel-flows.html)

To verify:

```
APP_INSTANCE=$(aws chime list-app-instances --query 'AppInstances[?Name==`MessagingAppInstanceExample`]| [0].AppInstanceArn' --output text)

aws chime-sdk-messaging list-channel-flows --app-instance-arn $APP_INSTANCE
```

#### In your own CDK

To add to your AWS CDK package.json file:

```
yarn add cdk-amazon-chime-resources
```

## Amazon Chime PSTN resources

### Phone Number Creation

```ts
const phoneNumber = new chime.ChimePhoneNumber(this, 'phoneNumber', {
  phoneState: 'IL',
  phoneNumberType: chime.PhoneNumberType.LOCAL,
  phoneProductType: chime.PhoneProductType.SMA,
});
```

The phone number created will be a `LOCAL` number for use with `SMA` from a pool of available numbers in Illinois. Other search option are available that will return a single phone number based on the criteria provided.

### SIP Media Application Creation

```ts
const sipMediaApp = new chime.ChimeSipMediaApp(this, 'sipMediaApp', {
  region: this.region,
  endpoint: smaHandler.functionArn,
});
```

The SIP media application created will use the smaHandler referenced by the endpoint in the same region the AWS CDK is being deployed in. The SIP media application must be created in the same region as the associated Lambda endpoint and must be in `us-east-1` or `us-west-2`.

### SIP Media Application Rule Creation

```ts
const sipRule = new chime.ChimeSipRule(this, 'sipRule', {
  triggerType: chime.TriggerType.TO_PHONE_NUMBER,
  triggerValue: phoneNumber.phoneNumber,
  targetApplications: [
    {
      region: this.region,
      priority: 1,
      sipMediaApplicationId: sipMediaApp.sipMediaAppId,
    },
  ],
});
```

The SIP rule will assocaite the previously created phone number with the previously created SIP media application. The SIP rule can be associated with either an E.164 number or Amazon Chime Voice Connector URI. If the TriggerType is `TO_PHONE_NUMBER`, the TriggerValue must be an E.164 number. If the TriggerType is `REQUEST_URI_HOSTNAME`, the TriggerValue must be an Amazon Chime Voice Connector URI. A priority must be assigned with a value between 1 and 25 inclusive. A targetApplication is required. This will associate the trigger to the SIP media application and associated Lambda.

### Voice Connector Creation

Using a phone number created with Product Type of VC:

```ts
const voiceConnector = new chime.ChimeVoiceConnector(this, 'voiceConnector', {
  encryption: true,
  name: 'string',
  region: 'us-east-1',
  termination: {
    terminationCidrs: ['198.51.100.10/32'],
    callingRegions: ['US'],
  },
  origination: [
    {
      host: '198.51.100.10',
      port: 5061,
      protocol: chime.Protocol.TCP,
      priority: 1,
      weight: 1,
    },
  ],
  streaming: {
    enabled: true,
    dataRetention: 0,
    notificationTargets: [chime.NotificationTargetType.EVENTBRIDGE],
  },
});
```

This will create an Amazon Chime Voice Connector with specified options. Termination, origination, and streaming are all optional.

```ts
voiceConnectorPhone.associateWithVoiceConnector(voiceConnector);
```

This will assocaite the previously created phone number with the voice connector.

## Amazon Chime Messaging Resources

### Amazon Chime Messaging App Instance

```typescript
const appInstance = new chime.MessagingAppInstance(this, 'appInstance', {
  name: 'MessagingAppInstanceExample',
});
```

This will create an Amazon Chime Messaging App Instance and will return the `AppInstanceArn`.

### Amazon Chime Messaging Channel Flow

```
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

Using the previously created Amazon Chime Messaging App Instance, this will create an Amazon Chime Messaging Channel Flow. This channel flow will be associated with an AWS Lambda. Take note of the [required permissions](https://docs.aws.amazon.com/chime-sdk/latest/dg/processor-setup.html) for the AWS Lambda in the example to allow the Amazon Chime service to invoke the associated Lambda.

## Not Supported Yet

This is a work in progress.

Features that are not supported yet:

- [ ] Amazon Chime Voice Connector Groups
- [ ] Amazon Chime Voice Connector Logging
- [ ] Amazon Chime Voice Connector Emergency Calling
- [ ] Updates to created resources

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache-2.0 License.
