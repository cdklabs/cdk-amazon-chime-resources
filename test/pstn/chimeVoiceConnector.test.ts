import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import {
  ChimeVoiceConnector,
  NotificationTargetType,
  ChimePhoneNumber,
  PhoneProductType,
  Protocol,
} from '../../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {});

const asteriskEip = new ec2.CfnEIP(stack, 'asteriskEip');

const phoneNumber = new ChimePhoneNumber(stack, 'StateOnly', {
  phoneState: 'IL',
  phoneProductType: PhoneProductType.SMA,
});

test('Nothing', () => {
  new ChimeVoiceConnector(stack, 'Nothing', {});
});

test('Association', () => {
  const voiceConnector = new ChimeVoiceConnector(stack, 'Association', {});
  phoneNumber.associateWithVoiceConnector(voiceConnector);
});

test('Name', () => {
  new ChimeVoiceConnector(stack, 'Name', {
    name: 'TestVoiceConnector',
  });
});

test('ValidTerminationIPv4', () => {
  new ChimeVoiceConnector(stack, 'ValidTerminationIPv4', {
    termination: {
      terminationCidrs: ['198.51.100.10/32'],
      callingRegions: ['US'],
      cps: 1,
    },
  });
});

test('ValidOriginationIPv4', () => {
  new ChimeVoiceConnector(stack, 'ValidOriginationIPv4', {
    origination: [
      {
        host: '198.51.100.10',
        port: 5060,
        protocol: Protocol.UDP,
        priority: 1,
        weight: 1,
      },
    ],
  });
});

test('ValidOriginationFQDN', () => {
  new ChimeVoiceConnector(stack, 'ValidOriginationFQDN', {
    origination: [
      {
        host: 'example.com',
        port: 5060,
        protocol: Protocol.UDP,
        priority: 1,
        weight: 1,
      },
    ],
  });
});

test('ValidStreaming', () => {
  new ChimeVoiceConnector(stack, 'ValidStreaming', {
    streaming: {
      enabled: true,
      dataRetention: 0,
      notificationTargets: [NotificationTargetType.EVENTBRIDGE],
    },
  });
});

test('GoodRegion', () => {
  new ChimeVoiceConnector(stack, 'GoodRegion', {
    region: 'us-east-1',
  });
});

test('BadRegion', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadRegion', {
      region: 'us-east-2',
    });
  }).toThrowError('Region must be us-east-1 or us-west-2');
});

test('ReferenceIPs', () => {
  new ChimeVoiceConnector(stack, 'ReferenceIPs', {
    termination: {
      callingRegions: ['US'],
      terminationCidrs: [`${asteriskEip.ref}/32`],
    },
    origination: [
      {
        host: `${asteriskEip.ref}`,
        port: 5060,
        protocol: Protocol.TCP,
        priority: 1,
        weight: 1,
      },
    ],
    encryption: false,
  });
});

test('BadCountry', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadCountry', {
      termination: {
        terminationCidrs: ['198.51.100.10/32'],
        callingRegions: ['XX'],
      },
    });
  }).toThrowError('Invalid Country');
});

test('RFC1918terminationCidr', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'RFC1918terminationCidr', {
      termination: {
        terminationCidrs: ['10.10.10.10/32'],
        callingRegions: ['US'],
      },
    });
  }).toThrowError('Termination CDIR must not be RFC1918 CIDR block (/27-/32)');
});

test('BadTerminationIP', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadTerminationIP', {
      termination: { terminationCidrs: ['string'], callingRegions: ['US'] },
    });
  }).toThrowError(
    'Termination CIDR must be a valid non-RFC1918 IPv4 CIDR block (/27-/32)',
  );
});

test('BadCpsLow', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadCpsLow', {
      termination: {
        terminationCidrs: ['198.51.100.10/32'],
        callingRegions: ['US'],
        cps: 0,
      },
    });
  }).toThrowError('CPS must be between 1 and 256');
});

test('BadCpsHigh', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadCpsHigh', {
      termination: {
        terminationCidrs: ['198.51.100.10/32'],
        callingRegions: ['US'],
        cps: 257,
      },
    });
  }).toThrowError('CPS must be between 1 and 256');
});

test('RFC1918OriginationIp', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'RFC1918OriginationIp', {
      origination: [
        {
          host: '10.10.10.10',
          port: 5060,
          protocol: Protocol.TCP,
          priority: 1,
          weight: 1,
        },
      ],
    });
  }).toThrowError('Origination IP must not be RFC1918 IP Address');
});

test('BadFQDNOrigination', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'BadFQDNOrigination', {
      origination: [
        {
          host: 'example',
          port: 5060,
          protocol: Protocol.TCP,
          priority: 1,
          weight: 1,
        },
      ],
    });
  }).toThrowError(
    'Origination IP must be valid, non-RFC1918 IPv4 Address or FQDN',
  );
});

test('InvalidPortOrigination', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'InvalidPortOrigination', {
      origination: [
        {
          host: 'example.com',
          port: 65536,
          protocol: Protocol.TCP,
          priority: 1,
          weight: 1,
        },
      ],
    });
  }).toThrowError('Port range must be valid: 1-65535');
});

test('InvalidProtocol', () => {
  expect(() => {
    new ChimeVoiceConnector(stack, 'InvalidProtocol', {
      encryption: true,
      origination: [
        {
          host: 'example.com',
          port: 5061,
          protocol: Protocol.UDP,
          priority: 1,
          weight: 1,
        },
      ],
    });
  }).toThrowError('TCP must be used with Encryption enabled');
});

test('ValidEncryption', () => {
  new ChimeVoiceConnector(stack, 'ValidEncryption', {
    encryption: true,
    origination: [
      {
        host: 'example.com',
        port: 5061,
        protocol: Protocol.TCP,
        priority: 1,
        weight: 1,
      },
    ],
  });
});
