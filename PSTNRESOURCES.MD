## Usage

#### Amazon Chime PSTN Resources Example

See [example/lib/pstn-resources-example.ts](example/lib/pstn-resource-example.ts) for an example of deploying Amazon Chime PSTN resources. To deploy: `yarn cdk deploy PSTNResources`

This example includes

- Amazon Chime [Phone Number](https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html)
- Amazon Chime [SIP media application](https://docs.aws.amazon.com/chime-sdk/latest/ag/use-sip-apps.html)
- Amazon Chime [SIP media application rule](https://docs.aws.amazon.com/chime-sdk/latest/ag/use-sip-rules.html)

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

#### Amazon Chime Voice Connector Resources Example

See [example/lib/voice-connector-example.ts](example/lib/voice-connector.example.ts) for an example of deploying Amazon Chime Voice Connector resources. To deploy: `yarn cdk deploy VoiceConnectorResources`

This example includes

- Amazon Chime [Phone Number](https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html)
- Amazon Chime [Voice Connector](https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connectors.html)

### Voice Connector Phone Number Creation

```typescript
const voiceConnectorPhone = new chime.ChimePhoneNumber(
  this,
  'voiceConnectorPhoneNumber',
  {
    phoneState: 'IL',
    phoneCountry: chime.PhoneCountry.US,
    phoneProductType: chime.PhoneProductType.VC,
    phoneNumberType: chime.PhoneNumberType.LOCAL,
  },
);
```

### Voice Connector Creation

```typescript
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

### Phone Number Association

```ts
voiceConnectorPhone.associateWithVoiceConnector(voiceConnector);
```

This will assocaite the previously created phone number with the voice connector.
