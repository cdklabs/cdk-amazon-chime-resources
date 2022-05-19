import * as cdk from 'aws-cdk-lib';
import { MessagingAppInstanceUser } from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicAppInstanceUser', () => {
  new MessagingAppInstanceUser(stack, 'BasicAppInstanceUser', {
    metadata: 'metadata',
    clientRequestToken: 'clientRequestToken',
    appInstanceArn: 'appInstanceArn',
    appInstanceUserId: 'appInstanceUserId',
  });
});

test('TooLongName', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'TooLongName', {
        name: 'baHEMKDJgOdzZtOhRUPjlqLhhS0Uv0fGmKEPRZyx9V5WV3yFVHIxFjF3HT9SlNQKadyfDd8pqMHRVRWHg55GqnHP8mFNqLAzmWJUmgmfo2ou51dYj3tPQ0zJidXYrelYsgUBnddwIO9IPdrDbAMvzV0nkQdTPfQQvzgujHI5erPjX0466zipxV4XfapgdqOjpEnD9PJfwtAtS3H1qMTYePhIo4nHdLOx29Oqo8zlRnmw7HuTJxy2ZYMxwES7ayf3c',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toThrowError('Name length must be >1 and <256');
});

test('TooShortName', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'TooShortName', {
        name: '',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toBeTruthy;
});

test('BadNameCharacters', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'BadNameCharacters', {
        name: 'badcharacters😀😀😀😀😀😀',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toThrowError(
    'Invalid name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
  );
});

test('TooShortCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'TooShortCRT', {
        clientRequestToken: '1',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('TooLongCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'TooLongCRT', {
        clientRequestToken:
          'pSH1WGgQ1OtSxykYsASVTXSlt3x7JjRUTpWhtCVWI2RGQ8WhNPv2AlMhqY5QCCzd3',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('BadCharactersCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceUser(stack, 'BadCharactersCRT', {
        clientRequestToken: 'client request token',
        appInstanceArn: 'appInstanceArn',
        appInstanceUserId: 'appInstanceUserId',
      }),
  ).toThrowError(
    'Invlaid Client Request Token.  Must fit pattern: [-_a-zA-Z0-9]*',
  );
});
