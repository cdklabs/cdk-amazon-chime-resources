import * as cdk from 'aws-cdk-lib';
import { ChannelFlow, FallbackAction, InvocationType } from '../../src';

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

test('BadChannelFlowName', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'BadChannelFlowName', {
        appInstanceArn: 'appInstanceArn',
        name: 'badcharacters😀😀😀😀😀😀',
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
      }),
  ).toThrowError(
    'Invalid channel flow name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
  );
});

test('TooLongChannelFlowName', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooLongChannelFlowName', {
        appInstanceArn: 'appInstanceArn',
        name: 'baHEMKDJgOdzZtOhRUPjlqLhhS0Uv0fGmKEPRZyx9V5WV3yFVHIxFjF3HT9SlNQKadyfDd8pqMHRVRWHg55GqnHP8mFNqLAzmWJUmgmfo2ou51dYj3tPQ0zJidXYrelYsgUBnddwIO9IPdrDbAMvzV0nkQdTPfQQvzgujHI5erPjX0466zipxV4XfapgdqOjpEnD9PJfwtAtS3H1qMTYePhIo4nHdLOx29Oqo8zlRnmw7HuTJxy2ZYMxwES7ayf3c',
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
      }),
  ).toThrowError('Name length must be >1 and <256');
});

test('TooFewProcessors', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooFewProcessors', {
        appInstanceArn: 'appInstanceArn',
        processors: [],
        clientRequestToken: 'clientRequestToken',
      }),
  ).toThrowError('Processor count must be between 1 and 3');
});

test('TooManyProcessors', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooManyProcessors', {
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
      }),
  ).toThrowError('Processor count must be between 1 and 3');
});

test('TooShortCRT', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooShortCRT', {
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
        clientRequestToken: '1',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('TooLongCRT', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooLongCRT', {
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
        clientRequestToken:
          'pSH1WGgQ1OtSxykYsASVTXSlt3x7JjRUTpWhtCVWI2RGQ8WhNPv2AlMhqY5QCCzd3',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('BadCharactersCRT', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'BadCharactersCRT', {
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
        clientRequestToken: 'client request token',
      }),
  ).toThrowError(
    'Invlaid Client Request Token.  Must fit pattern: [-_a-zA-Z0-9]*',
  );
});

test('BadExecutionOrder', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'BadExecutionOrder', {
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
            executionOrder: 4,
            fallbackAction: FallbackAction.ABORT,
          },
        ],
        clientRequestToken: 'clientRequestToken',
      }),
  ).toThrowError('Execution Order must be between 1 and 3');
});

test('BadProcessorName', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'BadProcessorName', {
        appInstanceArn: 'appInstanceArn',
        processors: [
          {
            name: 'badcharacters😀😀😀😀😀😀',
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
      }),
  ).toThrowError(
    'Invalid processor name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
  );
});

test('TooShortProcessorName', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooShortProcessorName', {
        appInstanceArn: 'appInstanceArn',
        processors: [
          {
            name: '',
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
      }),
  ).toThrowError('Name length must be >1 and <256');
});

test('TooLongProcessorName', () => {
  expect(
    () =>
      new ChannelFlow(stack, 'TooLongProcessorName', {
        appInstanceArn: 'appInstanceArn',
        processors: [
          {
            name: 'baHEMKDJgOdzZtOhRUPjlqLhhS0Uv0fGmKEPRZyx9V5WV3yFVHIxFjF3HT9SlNQKadyfDd8pqMHRVRWHg55GqnHP8mFNqLAzmWJUmgmfo2ou51dYj3tPQ0zJidXYrelYsgUBnddwIO9IPdrDbAMvzV0nkQdTPfQQvzgujHI5erPjX0466zipxV4XfapgdqOjpEnD9PJfwtAtS3H1qMTYePhIo4nHdLOx29Oqo8zlRnmw7HuTJxy2ZYMxwES7ayf3c',
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
      }),
  ).toThrowError('Name length must be >1 and <256');
});
