const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  cdkVersion: '2.53.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'chime', 'meetings', 'messaging'],
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  lambdaAutoDiscover: false,
  // peerDeps: ['@aws-sdk/client-chime-sdk-voice'],
  // peerDependencyOptions: { pinnedDevDependency: false },
  deps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-ssm',
    'aws-lambda',
    '@types/aws-lambda',
  ],
  devDeps: [
    'yalc',
    'esbuild',
    // '@aws-sdk/client-chime-sdk-voice',
    // '@aws-sdk/client-ssm',
    // 'aws-lambda',
    // '@types/aws-lambda',
  ],
  bundledDeps: [
    '@aws-sdk/client-chime-sdk-voice',
    '@aws-sdk/client-ssm',
    'aws-lambda',
    '@types/aws-lambda',
  ],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['schuettc', 'cdklabs-automation'],
  },
  autoApproveUpgrades: true,
  name: 'cdk-amazon-chime-resources',
  python: {
    distName: 'cdk-amazon-chime-resources',
    module: 'cdk_amazon_chime_resources',
  },
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  repositoryUrl: 'https://github.com/cdklabs/cdk-amazon-chime-resources.git',
});

new awscdk.LambdaFunction(project, {
  cdkVersion: '2.53.0',
  cdkDeps: [
    '@aws-sdk/client-ssm',
    '@aws-sdk/client-chime-sdk-voice',
    'aws-lambda',
    '@types/aws-lambda',
  ],
  entrypoint: 'src/resources/pstn/pstn.lambda.ts',
  runtime: awscdk.LambdaRuntime.NODEJS_18_X,
  target: 'node18',
  platform: 'node',
});

const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'dependabot.yml',
];

project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.gitignore.include('example');

project.synth();
