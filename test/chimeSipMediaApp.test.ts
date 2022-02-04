import path from 'path';
import * as cdk from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { ChimeSipMediaApp } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {});

test('Normal', () => {
  const smaHandler = new Function(stack, 'NormalHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: Code.fromAsset(path.join(__dirname, '../example/src/')),
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
    code: Code.fromAsset(path.join(__dirname, '../example/src/')),
  });

  new ChimeSipMediaApp(stack, 'NoRegion', {
    endpoint: smaHandler.functionArn,
  });
});

test('NormalWithName', () => {
  const smaHandler = new Function(stack, 'NormalWithNameHandler', {
    runtime: Runtime.PYTHON_3_9,
    handler: 'index.handler',
    code: Code.fromAsset(path.join(__dirname, '../example/src/')),
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
      code: Code.fromAsset(path.join(__dirname, '../example/src/')),
    });
    new ChimeSipMediaApp(stack, 'BadRegion', {
      endpoint: smaHandler.functionArn,
      region: 'us-west-1',
    });
  }).toThrowError('Region must be us-east-1 or us-west-2');
});
