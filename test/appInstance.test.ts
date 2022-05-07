import * as cdk from 'aws-cdk-lib';
import { MessagingAppInstance } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicAppInstance', () => {
  new MessagingAppInstance(stack, 'BasicAppInstance', {});
});
