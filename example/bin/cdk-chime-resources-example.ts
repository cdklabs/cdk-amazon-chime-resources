import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PSTNExample } from '../lib/pstn-resource-example';
// import { MessagingExample } from '../lib/messaging-resource-example';
import { VoiceConnectorExample } from '../lib/voice-connector.example';

const app = new cdk.App();
new PSTNExample(app, 'PSTNResources', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
});

// new MessagingExample(app, 'MessagingResources', {
//   env: {
//     account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
//     region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
//   },
// });

new VoiceConnectorExample(app, 'VoiceConnectorResources', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
});
