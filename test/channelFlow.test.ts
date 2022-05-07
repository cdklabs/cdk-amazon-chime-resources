import * as cdk from 'aws-cdk-lib';
import { ChannelFlow, FallbackAction, InvocationType } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicChannelFlow', () => {
  new ChannelFlow(stack, 'BasicChannelFlow', {
    appInstanceArn: 'appInstanceArn',
    processors: [
      {
        name: 'name',
        configuration: {
          lambda: {
            resourceArn: 'resourceArn',
            invocationType: InvocationType.ASYNC,
          },
        },
        executionOrder: 1,
        fallbackAction: FallbackAction.ABORT,
      },
    ],
    name: 'name',
    clientRequestToken: 'clientRequestToken',
  });
});

test('BasicChannelFlowWithoutName', () => {
  new ChannelFlow(stack, 'BasicChannelFlowWithoutName', {
    appInstanceArn: 'appInstanceArn',
    processors: [
      {
        name: 'name',
        configuration: {
          lambda: {
            resourceArn: 'resourceArn',
            invocationType: InvocationType.ASYNC,
          },
        },
        executionOrder: 1,
        fallbackAction: FallbackAction.ABORT,
      },
    ],
    clientRequestToken: 'clientRequestToken',
  });
});
