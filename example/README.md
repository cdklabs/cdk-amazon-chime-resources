## CDK-Amazon-Chime-Resources Examples

Included are several different examples of how this Construct can be used. They are broken out in to three separate Stacks:

- PSTN Resources
- Voice Connector Resources
- Messaging Resources

These examples use `yalc` in order to use the most recent version of `cdk-amazon-chime-resources` and must be published. To publish locally:

```
git clone https://github.com/cdklabs/cdk-amazon-chime-resources.git
cd cdk-amazon-chime-resources
yalc publish
```

Alternatively, you can fork this repo and make changes in your own copy. Once you have made changes to the Construct: `yarn projen build && yalc publish`. Within the `example` directory: `yalc update`. This can be used to make and test changes.

### PSTN Resources

PSTN Resources will deploy the following:

- Phone Number
- Amazon Chime SIP media application
- Amazon Chime SIP media application rule
- Amazon Chime SIP media handler (AWS Lambda)

To deploy:

```
yarn
yalc update
yarn run build
yarn cdk deploy PSTNResources
```

To destroy:

```
yarn cdk destroy PSTNResources
```

### Voice Connector Resources

Voice Connector Resources will deploy the following:

- Phone Number
- Amazon Chime Voice Connector
  - Termination
  - Origination
  - Streaming

To deploy:

```
yarn
yalc update
yarn run build
yarn cdk deploy VoiceConnectorResources
```

To destroy:

```
yarn cdk destroy VoiceConnectorResources
```

### Messaging Resources

Messaging Resources will deploy the following:

- App Instance
  - Streaming
- App Instance User
- App Instance Admin
- Channel Flow Handler (AWS Lambda)
- Channel Flow
- Kinesis Stream
-

To deploy:

```
yarn
yalc update
yarn run build
yarn cdk deploy MessagingResources
```

To destroy:

```
yarn cdk destroy MessagingResources
```

### All Resources

To deploy all resources:

```
yarn
yalc update
yarn run build
yarn cdk deploy --all
```

To destroy:

```
yarn cdk destroy --all
```
