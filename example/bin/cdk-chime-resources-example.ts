import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ChimeExample } from '../lib/cdk-chime-resources-example';

const app = new cdk.App();
new ChimeExample(app, 'ChimeResources', {});
