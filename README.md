# cdk-amazon-chime-resources

![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)

An AWS Cloud Development Kit (AWS CDK) construct library that allows you to provision Amazon Chime resources with npm and pypi.

## Background

Amazon Chime resources (Amazon Chime Messaging and Amazon Chime PSTN resources) are not natively available in AWS CloudFormation or AWS CDK. Therefore, in order to create these resources with AWS CDK, an AWS Lambda backed custom resource must be used. In an effort to simplify that process, this AWS CDK construct has been created. This AWS CDK construct will create a custom resource and associated Lambda and expose constructs that can be used to create corresponding resources. This construct includes resources for both Amazon Chime Messaging and Amazon Chime PSTN.

## Resources

- [Amazon Chime SDK PSTN Resources](PSTNRESOURCES.MD)
- [Amazon Chime SDK Messaging Resources](MESSAGINGRESOURCES.MD)
- [Amazon Chime SDK Media Insights Resources](MEDIAINSIGHTS.MD)

## Installing

To add to your AWS CDK package.json file:

```
yarn add cdk-amazon-chime-resources
```

## Version 3 Upgrade

Version 3.0 is a potentially breaking change that involves multiple upgrades and changes. Version 3.0 revises the deployment to streamline and make more efficient the multiple configurations. This should result in an increased speed of deployment. All namespaces were updated to the current `chime-sdk-voice`, `chime-sdk-messaging`, `chime-sdk-identity`, or `chime-sdk-media-pipelines` namespace. Along with these changes, IAM policies were reduced where possible. If you encounter issues, please open an Issue.

> Potential Breaking Change with Streaming Messaging Data
>
> As part of the namespace change, this has been updated:
>
> ```typescript
> const appInstance = new MessagingAppInstance(this, 'appInstance', {
>   name: 'MessagingAppInstanceExample',
> });
> appInstance.streaming([
>   {
>     dataType: MessagingDataType.CHANNEL,
>     resourceArn: kinesisStream.streamArn,
>   },
> ]);
> ```

## Not Supported Yet

This is a work in progress.

Features that are not supported yet:

- [ ] Amazon Chime Voice Connector Groups
- [ ] Amazon Chime Voice Connector Emergency Calling
- [ ] Updates to created resources

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## License

This project is licensed under the Apache-2.0 License.
