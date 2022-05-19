import * as cdk from 'aws-cdk-lib';
import {
  ChimePhoneNumber,
  PhoneCountry,
  PhoneNumberType,
  PhoneProductType,
} from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('StateOnly', () => {
  new ChimePhoneNumber(stack, 'StateOnly', {
    phoneState: 'IL',
    phoneProductType: PhoneProductType.SMA,
  });
});

test('AreaCodeOnly', () => {
  new ChimePhoneNumber(stack, 'AreaCodeOnly', {
    phoneAreaCode: 815,
    phoneProductType: PhoneProductType.SMA,
  });
});

test('USandAreaCode', () => {
  new ChimePhoneNumber(stack, 'USandAreaCode', {
    phoneCountry: PhoneCountry.US,
    phoneAreaCode: 815,
    phoneProductType: PhoneProductType.SMA,
  });
});

test('USOnly', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'USOnly', {
        phoneCountry: PhoneCountry.US,
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('Need a State, Area Code, or Toll Free Prefix');
});

test('CityAndState', () => {
  new ChimePhoneNumber(stack, 'CityAndState', {
    phoneState: 'IL',
    phoneCity: 'Chicago',
    phoneProductType: PhoneProductType.SMA,
  });
});

test('CityOnly', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'CityOnly', {
        phoneCity: 'Chicago',
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('State must be included with City search');
});

test('NonUSCountryWithNumberType', () => {
  new ChimePhoneNumber(stack, 'NonUSCountryWithNumberType', {
    phoneCountry: PhoneCountry.DE,
    phoneNumberType: PhoneNumberType.LOCAL,
    phoneProductType: PhoneProductType.SMA,
  });
});

test('NonUSCountryWithoutNumberType', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'NonUSCountryWithoutNumberType', {
        phoneCountry: PhoneCountry.DE,
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('Non US numbers must include Number Type');
});

test('Test No Properties', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'NoProperties', {
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('Need a State, Area Code, or Toll Free Prefix');
});

test('NonUSNumberVoiceConnector', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'NonUSNumberVoiceConnector', {
        phoneCountry: PhoneCountry.IT,
        phoneNumberType: PhoneNumberType.LOCAL,
        phoneProductType: PhoneProductType.VC,
      }),
  ).toThrowError('Non US numbers must be SipMediaApplicationDialIn');
});

test('123', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, '123', {
        phoneAreaCode: 123,
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('Invalid Area Code');
});

test('TollFree123', () => {
  expect(
    () =>
      new ChimePhoneNumber(stack, 'TollFree123', {
        phoneNumberTollFreePrefix: 123,
        phoneProductType: PhoneProductType.SMA,
      }),
  ).toThrowError('Invalid Toll Free Prefix');
});
