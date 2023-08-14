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
    ignorePatterns: ['example/**'],
  },
  lambdaAutoDiscover: false,
  deps: [
    '@aws-sdk/client-chime-sdk-voice@latest',
    '@aws-sdk/client-chime-sdk-messaging@latest',
    '@aws-sdk/client-chime-sdk-identity@latest',
    '@aws-sdk/client-chime-sdk-media-pipelines@latest',
    '@aws-sdk/client-ssm',
    'aws-cdk-lib',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  devDeps: ['yalc', 'esbuild'],
  bundledDeps: [
    '@aws-sdk/client-chime-sdk-voice@latest',
    '@aws-sdk/client-chime-sdk-messaging@latest',
    '@aws-sdk/client-chime-sdk-identity@latest',
    '@aws-sdk/client-chime-sdk-media-pipelines@latest',
    '@aws-sdk/client-ssm',
    'aws-lambda',
    '@types/aws-lambda',
    'fs-extra',
  ],
  workflowNodeVersion: '16.x',
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

// const externals: string[] = [
//   // Previously wrong configuration means this has never been used
//   // '@aws-sdk/client-ssm',
//   // '@aws-sdk/client-chime-sdk-messaging@latest',
//   // 'aws-lambda',
//   // '@types/aws-lambda',
// ];

// new awscdk.LambdaFunction(project, {
//   cdkDeps: project.cdkDeps,
//   bundlingOptions: {
//     externals,
//   },
//   entrypoint: 'src/resources/pstn/pstn.lambda.ts',
//   runtime: awscdk.LambdaRuntime.NODEJS_18_X,
// });

// new awscdk.LambdaFunction(project, {
//   cdkDeps: project.cdkDeps,
//   entrypoint: 'src/resources/messaging/messaging.lambda.ts',
//   runtime: awscdk.LambdaRuntime.NODEJS_18_X,
//   bundlingOptions: {
//     externals,
//   },
// });

// new awscdk.LambdaFunction(project, {
//   cdkDeps: project.cdkDeps,
//   entrypoint: 'src/resources/media-pipelines/media-pipelines.lambda.ts',
//   runtime: awscdk.LambdaRuntime.NODEJS_18_X,
//   bundlingOptions: {
//     externals,
//   },
// });

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
