import * as cdk from 'aws-cdk-lib';
import {
  MessagingDataType,
  AppInstanceStreamingConfigurations,
} from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('InstanceStreamingConfig', () => {
  new AppInstanceStreamingConfigurations(stack, 'BasicStreamingConfig', {
    appInstanceArn: 'appInstanceArn',
    streamingConfigs: [
      {
        dataType: MessagingDataType.CHANNEL,
        resourceArn: 'resourceArn',
      },
    ],
  });
});
