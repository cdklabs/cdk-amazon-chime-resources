import * as cdk from 'aws-cdk-lib';
import { LexConfigurationRespondsTo, MessagingAppInstanceBot } from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicAppInstanceBot', () => {
  new MessagingAppInstanceBot(stack, 'BasicAppInstanceBot', {
    configuration: {
      lex: {
        lexBotAliasArn: 'someArn',
        localeId: 'en_US',
        respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
      },
    },
    metadata: 'metadata',
    clientRequestToken: 'clientRequestToken',
    appInstanceArn: 'appInstanceArn',
  });
});

test('TooLongName', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'TooLongName', {
        name: 'baHEMKDJgOdzZtOhRUPjlqLhhS0Uv0fGmKEPRZyx9V5WV3yFVHIxFjF3HT9SlNQKadyfDd8pqMHRVRWHg55GqnHP8mFNqLAzmWJUmgmfo2ou51dYj3tPQ0zJidXYrelYsgUBnddwIO9IPdrDbAMvzV0nkQdTPfQQvzgujHI5erPjX0466zipxV4XfapgdqOjpEnD9PJfwtAtS3H1qMTYePhIo4nHdLOx29Oqo8zlRnmw7HuTJxy2ZYMxwES7ayf3c',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toThrowError('Name length must be >1 and <256');
});

test('TooShortName', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'TooShortName', {
        name: '',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toBeTruthy;
});

test('BadNameCharacters', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'BadNameCharacters', {
        name: 'badcharacters😀😀😀😀😀😀',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toThrowError(
    'Invalid name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
  );
});

test('TooShortCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'TooShortCRT', {
        clientRequestToken: '1',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('TooLongCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'TooLongCRT', {
        clientRequestToken:
          'pSH1WGgQ1OtSxykYsASVTXSlt3x7JjRUTpWhtCVWI2RGQ8WhNPv2AlMhqY5QCCzd3',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('BadCharactersCRT', () => {
  expect(
    () =>
      new MessagingAppInstanceBot(stack, 'BadCharactersCRT', {
        clientRequestToken: 'client request token',
        appInstanceArn: 'appInstanceArn',
        configuration: {
          lex: {
            lexBotAliasArn: 'someArn',
            localeId: 'en_US',
            respondsTo: LexConfigurationRespondsTo.STANDARD_MESSAGES,
          },
        },
      }),
  ).toThrowError(
    'Invlaid Client Request Token.  Must fit pattern: [-_a-zA-Z0-9]*',
  );
});
