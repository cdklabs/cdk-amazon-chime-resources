const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Amazon Web Services',
  authorAddress: 'https://aws.amazon.com',
  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'chime', 'meetings', 'messaging'],
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  workflowNodeVersion: '16.13.1',
  devDeps: ['yalc', '@types/prettier@2.6.0', 'got@12.1.0'],
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
