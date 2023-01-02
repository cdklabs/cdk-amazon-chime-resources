import path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import {
  ChimeSipRule,
  ChimeSipMediaApp,
  PhoneProductType,
  ChimePhoneNumber,
  TriggerType,
} from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {});

const smaHandler = new Function(stack, 'NormalHandler', {
  runtime: Runtime.PYTHON_3_9,
  handler: 'index.handler',
  code: Code.fromAsset(path.join(__dirname, '../../example/src/')),
});

const sipMediaApp = new ChimeSipMediaApp(stack, 'SipMediaApp', {
  region: 'us-east-1',
  endpoint: smaHandler.functionArn,
});

const phoneNumber = new ChimePhoneNumber(stack, 'StateOnly', {
  phoneState: 'IL',
  phoneProductType: PhoneProductType.SMA,
});

test('Normal', () => {
  new ChimeSipRule(stack, 'Normal', {
    triggerType: TriggerType.REQUEST_URI_HOSTNAME,
    triggerValue: 'bl4jpdz2puqt55uhwjnzxi.voiceconnector.chime.aws',
    targetApplications: [
      {
        sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        region: 'us-east-1',
        priority: 1,
      },
    ],
  });
});

test('WithVoiceConnector', () => {
  new ChimeSipRule(stack, 'WithVoiceConnector', {
    triggerType: TriggerType.REQUEST_URI_HOSTNAME,
    triggerValue: 'bl4jpdz2puqt55uhwjnzxi.voiceconnector.chime.aws',
    targetApplications: [
      {
        sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        priority: 1,
        region: stack.region,
      },
    ],
  });
});

test('WithPhoneNumber', () => {
  new ChimeSipRule(stack, 'WithPhoneNumber', {
    triggerType: TriggerType.TO_PHONE_NUMBER,
    triggerValue: phoneNumber.phoneNumber,
    targetApplications: [
      {
        sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        priority: 1,
        region: stack.region,
      },
    ],
  });
});

test('NormalWithName', () => {
  new ChimeSipRule(stack, 'NormalWithName', {
    name: 'TestName',
    triggerType: TriggerType.TO_PHONE_NUMBER,
    triggerValue: phoneNumber.phoneNumber,
    targetApplications: [
      {
        sipMediaApplicationId: sipMediaApp.sipMediaAppId,
        priority: 1,
        region: stack.region,
      },
    ],
  });
});

test('BadRegion', () => {
  expect(
    () =>
      new ChimeSipRule(stack, 'BadRegion', {
        triggerType: TriggerType.TO_PHONE_NUMBER,
        triggerValue: phoneNumber.phoneNumber,
        targetApplications: [
          {
            sipMediaApplicationId: sipMediaApp.sipMediaAppId,
            priority: 1,
            region: 'us-west-1',
          },
        ],
      }),
  ).toThrowError('Region must be us-east-1 or us-west-2');
});

test('BadURI', () => {
  expect(
    () =>
      new ChimeSipRule(stack, 'BadURI', {
        triggerType: TriggerType.REQUEST_URI_HOSTNAME,
        triggerValue: '12345.voiceconnector.chime.aws',
        targetApplications: [
          {
            sipMediaApplicationId: sipMediaApp.sipMediaAppId,
            region: 'us-east-1',
            priority: 1,
          },
        ],
      }),
  ).toThrowError('Trigger Value must be valid Chime Voice Connector');
});

test('BadNumber', () => {
  expect(
    () =>
      new ChimeSipRule(stack, 'BadNumber', {
        triggerType: TriggerType.TO_PHONE_NUMBER,
        triggerValue: '1234567890',
        targetApplications: [
          {
            sipMediaApplicationId: sipMediaApp.sipMediaAppId,
            priority: 1,
            region: 'us-west-2',
          },
        ],
      }),
  ).toThrowError('Trigger Value must be must be valid E.164 number');
});

test('BadSMAID', () => {
  expect(
    () =>
      new ChimeSipRule(stack, 'BadSMAID', {
        triggerType: TriggerType.TO_PHONE_NUMBER,
        triggerValue: phoneNumber.phoneNumber,
        targetApplications: [
          {
            sipMediaApplicationId: '123456',
            priority: 1,
            region: stack.region,
          },
        ],
      }),
  ).toThrowError('sipMediaApplicationId must be valid');
});

test('Badpriority', () => {
  expect(
    () =>
      new ChimeSipRule(stack, 'Badpriority', {
        triggerType: TriggerType.REQUEST_URI_HOSTNAME,
        triggerValue: 'bl4jpdz2puqt55uhwjnzxi.voiceconnector.chime.aws',
        targetApplications: [
          {
            sipMediaApplicationId: sipMediaApp.sipMediaAppId,
            region: 'us-east-1',
            priority: 26,
          },
        ],
      }),
  ).toThrowError('priority should be between 1 and 25');
});
