import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ChimeExample } from '../lib/cdk-chime-resources-example';

const app = new cdk.App();
new ChimeExample(app, 'ChimeResources', {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
});
