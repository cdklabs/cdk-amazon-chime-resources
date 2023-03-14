# cdk-amazon-chime-resources

![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)

An AWS Cloud Development Kit (AWS CDK) construct library that allows you to provision Amazon Chime resources with npm and pypi.

## Background

Amazon Chime resources (Amazon Chime Messaging and Amazon Chime PSTN resources) are not natively available in AWS CloudFormation or AWS CDK. Therefore, in order to create these resources with AWS CDK, an AWS Lambda backed custom resource must be used. In an effort to simplify that process, this AWS CDK construct has been created. This AWS CDK construct will create a custom resource and associated Lambda and expose constructs that can be used to create corresponding resources. This construct includes resources for both Amazon Chime Messaging and Amazon Chime PSTN.

## Resources

- [Amazon Chime PSTN Resources](PSTNRESOURCES.MD)
- [Amazon Chime Messaging Resources](MESSAGINGRESOURCES.MD)

## Installing

To add to your AWS CDK package.json file:

```
yarn add cdk-amazon-chime-resources
```

## Version 2 Upgrade

Version 2.0 is a potentially breaking change that involves multiple upgrades and changes. The original version used Python for the Custom Resources. The upgrade to version 2.0 includes a migration to Typescript for the Custom Resources. This change allows for the use of updated AWS-SDK versions and more recent APIs including expanded region selection.

## Not Supported Yet

This is a work in progress.

Features that are not supported yet:

- [ ] Amazon Chime Voice Connector Groups
- ~~[X] Amazon Chime Voice Connector Logging~~
- [ ] Amazon Chime Voice Connector Emergency Calling
- [ ] Updates to created resources

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache-2.0 License.
