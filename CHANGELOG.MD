# ChangeLog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.2.0] - 2024-04-16

### Changed

- Removed restriction on S3 + Transcribe/TCA for Media Insight Pipeline Configuration

### Added

- IAM Policy reset for Voice Connector Logging

## [3.1.0] - 2023-11-07

### Added

- Support for Amazon Chime SDK media pipeline Kinesis Video Stream pools - https://docs.aws.amazon.com/chime-sdk/latest/dg/create-media-stream-pipeline.html

## [3.0.0] - 2023-08-13

### Changed

- Changed namespace for all underlying API requests to `chime-sdk-voice`, `chime-sdk-messaging`, `chime-sdk-identity`, or `chime-sdk-media-pipelines`.
- Revised CustomResource and Provider mechanics to not duplicate Lambda Functions

### Security

- Revised permissions to Custom Resource to reduce scope

### Added

- Documentation for Amazon Chime SDK media insights

### Removed

- Example CDK as part of package. Will now be separate.
