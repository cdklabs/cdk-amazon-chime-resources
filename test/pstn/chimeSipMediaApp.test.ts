import * as cdk from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { AlexaSkillStatus, ChimeSipMediaApp } from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {});
const code = Code.fromInline(
  'exports.handler = async (event) => {  console.log(event)',
);

test('Normal', () => {
  const smaHandler = new Function(stack, 'NormalHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: code,
  });

  new ChimeSipMediaApp(stack, 'Normal', {
    region: 'us-east-1',
    endpoint: smaHandler.functionArn,
  });
});

test('NoRegion', () => {
  const smaHandler = new Function(stack, 'NoRegionHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: code,
  });

  new ChimeSipMediaApp(stack, 'NoRegion', {
    endpoint: smaHandler.functionArn,
  });
});

test('NormalWithName', () => {
  const smaHandler = new Function(stack, 'NormalWithNameHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: code,
  });
  new ChimeSipMediaApp(stack, 'NormalWithName', {
    region: 'us-west-2',
    endpoint: smaHandler.functionArn,
    name: 'NormalWithName',
  });
});

test('BadRegion', () => {
  expect(() => {
    const smaHandler = new Function(stack, 'BadRegionHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'index.handler',
      code: code,
    });
    new ChimeSipMediaApp(stack, 'BadRegion', {
      endpoint: smaHandler.functionArn,
      region: 'us-west-1',
    });
  }).toThrowError(
    'Region must be a valid region: https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html#sdk-pstn-regions',
  );
});

test('Logging', () => {
  const smaHandler = new Function(stack, 'LoggingHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: code,
  });
  const sipMediaApp = new ChimeSipMediaApp(stack, 'Logging', {
    endpoint: smaHandler.functionArn,
  });
  sipMediaApp.logging({ enableSipMediaApplicationMessageLogs: true });
});

test('AlexaSkill', () => {
  const smaHandler = new Function(stack, 'AlexaSkillHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: code,
  });
  const sipMediaApp = new ChimeSipMediaApp(stack, 'AlexaSkill', {
    endpoint: smaHandler.functionArn,
  });
  sipMediaApp.alexaSkill({
    alexaSkillIds: [
      'amzn1.application-oa2-client.11223344556677889900112233445566',
    ],
    alexaSkillStatus: AlexaSkillStatus.ACTIVE,
  });
});

test('BadAlexaSkill', () => {
  expect(() => {
    const smaHandler = new Function(stack, 'BadAlexaSkillHandler', {
      runtime: Runtime.PYTHON_3_9,
      handler: 'index.handler',
      code: code,
    });
    const sipMediaApp = new ChimeSipMediaApp(stack, 'BadAlexaSkill', {
      endpoint: smaHandler.functionArn,
    });
    sipMediaApp.alexaSkill({
      alexaSkillIds: ['amzn1.application-oa2-client.BAD'],
      alexaSkillStatus: AlexaSkillStatus.ACTIVE,
    });
  }).toThrowError(
    'Invalid Alexa Skill Id.  Alexa Skill Id must match pattern: amzn1.application-oa2-client.[0-9a-fA-F]{32}',
  );
});
