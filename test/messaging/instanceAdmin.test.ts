import * as cdk from 'aws-cdk-lib';
import { MessagingAppInstanceAdmin } from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicAppInstanceAdmin', () => {
  new MessagingAppInstanceAdmin(stack, 'BasicAppInstance', {
    appInstanceArn: 'appInstanceArn',
    appInstanceAdminArn: 'appInstanceAdminArn',
  });
});
