import * as cdklabs from 'cdklabs-projen-project-types';

const project = new cdklabs.CdklabsConstructLibrary({
  name: 'cdk-amazon-chime-resources',
  private: false,
  projenrcTs: true,
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  repositoryUrl: 'https://github.com/cdklabs/cdk-amazon-chime-resources.git',
  cdkVersion: '2.133.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'chime', 'meetings', 'messaging'],
  jest: false,
  jsiiVersion: '~5.9.0',
  typescriptVersion: '~5.9.0',
  majorVersion: 3,
  enablePRAutoMerge: true,
  lambdaAutoDiscover: false,
  deps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-chime-sdk-messaging',
    '@aws-sdk/client-chime-sdk-identity',
    '@aws-sdk/client-chime-sdk-media-pipelines',
    '@aws-sdk/client-cloudwatch-logs',
    '@aws-sdk/client-ssm',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  devDeps: [
    'cdklabs-projen-project-types',
    'yalc',
    'esbuild',
    'aws-cdk-lib',
  ],
  bundledDeps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-chime-sdk-messaging',
    '@aws-sdk/client-chime-sdk-identity',
    '@aws-sdk/client-chime-sdk-media-pipelines',
    '@aws-sdk/client-ssm',
    '@aws-sdk/client-kinesis-video',
    '@aws-sdk/client-cloudwatch-logs',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  jsiiTargetLanguages: [cdklabs.JsiiLanguage.PYTHON],
  publishToPypi: {
    distName: 'cdk-amazon-chime-resources',
    module: 'cdk_amazon_chime_resources',
  },
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
