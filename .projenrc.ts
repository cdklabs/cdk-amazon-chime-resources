import { awscdk } from 'projen';
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  cdkVersion: '2.91.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'chime', 'meetings', 'messaging'],
  releaseToNpm: true,
  jest: false,
  majorVersion: 3,
  eslintOptions: {
    dirs: ['src', 'test', 'projenrc', '.projenrc.ts'],
  },
  lambdaAutoDiscover: false,
  deps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-chime-sdk-messaging',
    '@aws-sdk/client-chime-sdk-identity',
    '@aws-sdk/client-chime-sdk-media-pipelines',
    '@aws-sdk/client-ssm',
    'aws-cdk-lib',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  devDeps: ['yalc', 'esbuild'],
  bundledDeps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-chime-sdk-messaging',
    '@aws-sdk/client-chime-sdk-identity',
    '@aws-sdk/client-chime-sdk-media-pipelines',
    '@aws-sdk/client-ssm',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  workflowNodeVersion: '18.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['schuettc', 'cdklabs-automation'],
  },
  autoApproveUpgrades: true,
  name: 'cdk-amazon-chime-resources',
  projenrcTs: true,
  python: {
    distName: 'cdk-amazon-chime-resources',
    module: 'cdk_amazon_chime_resources',
  },
  repositoryUrl: 'https://github.com/cdklabs/cdk-amazon-chime-resources.git',
});

project.bundler.addBundle('./src/resources/pstn/', {
  platform: 'node',
  target: 'node18',
});

project.bundler.addBundle('./src/resources/messaging/', {
  platform: 'node',
  target: 'node18',
});
project.bundler.addBundle('./src/resources/media-pipelines/', {
  platform: 'node',
  target: 'node18',
});

const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'dependabot.yml',
];

project.npmignore?.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.gitignore.include('example');

project.synth();
