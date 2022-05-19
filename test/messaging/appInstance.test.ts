import * as cdk from 'aws-cdk-lib';
import { MessagingAppInstance, AppInstanceDataType } from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('BasicAppInstance', () => {
  new MessagingAppInstance(stack, 'BasicAppInstance', {});
});

test('TooLongName', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'TooLongName', {
        name: 'baHEMKDJgOdzZtOhRUPjlqLhhS0Uv0fGmKEPRZyx9V5WV3yFVHIxFjF3HT9SlNQKadyfDd8pqMHRVRWHg55GqnHP8mFNqLAzmWJUmgmfo2ou51dYj3tPQ0zJidXYrelYsgUBnddwIO9IPdrDbAMvzV0nkQdTPfQQvzgujHI5erPjX0466zipxV4XfapgdqOjpEnD9PJfwtAtS3H1qMTYePhIo4nHdLOx29Oqo8zlRnmw7HuTJxy2ZYMxwES7ayf3c',
      }),
  ).toThrowError('Name length must be >1 and <256');
});

test('TooShortName', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'TooShortName', {
        name: '',
      }),
  ).toBeTruthy;
});

test('BadNameCharacters', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'BadNameCharacters', {
        name: 'badcharacters😀😀😀😀😀😀',
      }),
  ).toThrowError(
    'Invalid name.  Must fit pattern: [\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*',
  );
});

test('BadMetadata', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'BadMetadata', {
        metadata:
          'SP3Mfwx8eI9fmeWV4cdxtvIP5DKOyvAplJYHfywsHrsXlBn3KXcKPiOPYeSLmKZCNk7cwaX3aJqqP8yuTtFYZhMMTyuG9U3LUrbYsoXaJ6S8cKlcXgQWfbW31fnAP6oFjVpmVBj5g7q9pFaJpCE2LMqt1ULxhdWbFks4pVDza3AAQWYQ64AGwflkKYIfa1AHdNSgfgT4PD5L5mKHuEnTwnI6bAfz7Gh0Lr8zex66aq4vhYXpT7yjEerEzNqUF4c4pRDGQEyzZJp8CwWCuUXvFcjMhjBlXm0zHV9RKZgt9oyUk5Vx1c7Z3CmQ9oAb9Co238En3tn7i8F86WBzOFyFJdKtjZtJOH91x1AUsbvY7seAZQD1VcOFjYjNxSn3fBLPquprRKOTsjG1WkQlsr5EYoJZIwZ0ejcm37WhmgeK5ioEtLPImYAV45SWuj3v6PQ8ZIKmFhH0gYB7nsGR2yMN6mWBayZsZOWVesD4EJQkfBNH4U1swT2P3eRjDCtHGgJZhTghna3o7u5kO4FggAF0X8PqoD9hIJUB4OfzQvAhjws48Bn7RMfS7VQTu7C71So6rOCpelBB7yJJ8cL0YHqgTMsmRhcS5gzkY97Y8o8XXzxsED5RAY2bkxGZ2o5j3K2JOy7ktdhF85K92AFHjxNMLO7xcyFMY7J1UFykkEkxtNXUELh4WTm2IImwD441VJIZHWtgfPsFbOFr6kjJgCesNUkXHcdkdlRAGUaYi3mIhprAoccEmPAnM2XtvZqLp9fnPMptU77vGyaJXouLgSh0HIUAICPudCAnRNn3BNn25Qc8suklzhjHcD4FkapzqXpMgu1TYR9Xc2uUUesKRhc27UeVLHGpSDpAnfIH4suaSaLdyT0x8VW1MERXwQZC3yVjwLoyOPIoRnysdL1v74ENJEA8UiPLU8iFpEOsV1zT9ATyALqQgo1GUhldUfx3dJ9YrvQsJNEj2mcdzZfh6Q3d0OdcHJhbK88lcMPiftQHsLGhLjU2aIh5DwxH4plWeWhe4',
      }),
  ).toThrowError('Metadata length cannote exceed 1024');
});

test('TooShortCRT', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'TooShortCRT', {
        clientRequestToken: '1',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('TooLongCRT', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'TooLongCRT', {
        clientRequestToken:
          'pSH1WGgQ1OtSxykYsASVTXSlt3x7JjRUTpWhtCVWI2RGQ8WhNPv2AlMhqY5QCCzd3',
      }),
  ).toThrowError('ClientRequestToken length must be >2 and <64');
});

test('BadCharactersCRT', () => {
  expect(
    () =>
      new MessagingAppInstance(stack, 'BadCharactersCRT', {
        clientRequestToken: 'client request token',
      }),
  ).toThrowError(
    'Invlaid Client Request Token.  Must fit pattern: [-_a-zA-Z0-9]*',
  );
});

test('Retention', () => {
  const appInstance = new MessagingAppInstance(stack, 'Retention', {});
  appInstance.retention(2);
});

test('Streaming', () => {
  const appInstance = new MessagingAppInstance(stack, 'Streaming', {});
  appInstance.streaming([
    {
      appInstanceDataType: AppInstanceDataType.CHANNEL,
      resourceArn: 'kinesisStream.streamArn',
    },
  ]);
});
