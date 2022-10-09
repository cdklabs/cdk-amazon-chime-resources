import * as cdk from 'aws-cdk-lib';
import { AppInstanceDataType, AppInstanceStreamingConfigurations } from '../../lib';

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
    streamingConfigs: [{
      appInstanceDataType: AppInstanceDataType.CHANNEL,
      resourceArn: 'resourceArn',
    }],
  });
});

