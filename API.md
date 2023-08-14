# cdk-amazon-chime-resources

![Experimental](https://img.shields.io/badge/experimental-important.svg?style=for-the-badge)

An AWS Cloud Development Kit (AWS CDK) construct library that allows you to provision Amazon Chime resources with npm and pypi.

## Background

Amazon Chime resources (Amazon Chime Messaging and Amazon Chime PSTN resources) are not natively available in AWS CloudFormation or AWS CDK. Therefore, in order to create these resources with AWS CDK, an AWS Lambda backed custom resource must be used. In an effort to simplify that process, this AWS CDK construct has been created. This AWS CDK construct will create a custom resource and associated Lambda and expose constructs that can be used to create corresponding resources. This construct includes resources for both Amazon Chime Messaging and Amazon Chime PSTN.

## Resources

- [Amazon Chime SDK PSTN Resources](PSTNRESOURCES.MD)
- [Amazon Chime SDK Messaging Resources](MESSAGINGRESOURCES.MD)
- [Amazon Chime SDK Media Insights Resources][MEDIAINSIGHTS.MD]

## Installing

To add to your AWS CDK package.json file:

```
yarn add cdk-amazon-chime-resources
```

## Version 3 Upgrade

Version 3.0 is a potentially breaking change that involves multiple upgrades and changes. Version 3.0 revises the deployment to streamline and make more efficient the multiple configurations. This should result in an increased speed of deployment. All namespaces were updated to the current `chime-sdk-voice`, `chime-sdk-messaging`, `chime-sdk-identity`, or `chime-sdk-media-pipelines` namespace. Along with these changes, IAM policies were reduced as possible. If you encounter issues, please open an Issue.

## Version 2 Upgrade

Version 2.0 is a potentially breaking change that involves multiple upgrades and changes. The original version used Python for the Custom Resources. The upgrade to version 2.0 includes a migration to Typescript for the Custom Resources. This change allows for the use of updated AWS-SDK versions and more recent APIs including expanded region selection.

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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppInstanceStreamingConfigurations <a name="AppInstanceStreamingConfigurations" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer"></a>

```typescript
import { AppInstanceStreamingConfigurations } from 'cdk-amazon-chime-resources'

new AppInstanceStreamingConfigurations(scope: Construct, id: string, props: StreamingConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.StreamingConfigurationProps">StreamingConfigurationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.StreamingConfigurationProps">StreamingConfigurationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.isConstruct"></a>

```typescript
import { AppInstanceStreamingConfigurations } from 'cdk-amazon-chime-resources'

AppInstanceStreamingConfigurations.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.property.streamingConfigs">streamingConfigs</a></code> | <code><a href="#cdk-amazon-chime-resources.StreamingConfig">StreamingConfig</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `streamingConfigs`<sup>Required</sup> <a name="streamingConfigs" id="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.property.streamingConfigs"></a>

```typescript
public readonly streamingConfigs: StreamingConfig[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.StreamingConfig">StreamingConfig</a>[]

---


### ChannelFlow <a name="ChannelFlow" id="cdk-amazon-chime-resources.ChannelFlow"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChannelFlow.Initializer"></a>

```typescript
import { ChannelFlow } from 'cdk-amazon-chime-resources'

new ChannelFlow(scope: Construct, id: string, props: ChannelFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps">ChannelFlowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChannelFlow.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.ChannelFlowProps">ChannelFlowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChannelFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChannelFlow.isConstruct"></a>

```typescript
import { ChannelFlow } from 'cdk-amazon-chime-resources'

ChannelFlow.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChannelFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlow.property.channelFlowArn">channelFlowArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChannelFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `channelFlowArn`<sup>Required</sup> <a name="channelFlowArn" id="cdk-amazon-chime-resources.ChannelFlow.property.channelFlowArn"></a>

```typescript
public readonly channelFlowArn: string;
```

- *Type:* string

---


### ChimePhoneNumber <a name="ChimePhoneNumber" id="cdk-amazon-chime-resources.ChimePhoneNumber"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChimePhoneNumber.Initializer"></a>

```typescript
import { ChimePhoneNumber } from 'cdk-amazon-chime-resources'

new ChimePhoneNumber(scope: Construct, id: string, props: PhoneNumberProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps">PhoneNumberProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChimePhoneNumber.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.PhoneNumberProps">PhoneNumberProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.associateWithVoiceConnector">associateWithVoiceConnector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChimePhoneNumber.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `associateWithVoiceConnector` <a name="associateWithVoiceConnector" id="cdk-amazon-chime-resources.ChimePhoneNumber.associateWithVoiceConnector"></a>

```typescript
public associateWithVoiceConnector(voiceConnectorId: ChimeVoiceConnector): PhoneAssociation
```

###### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="cdk-amazon-chime-resources.ChimePhoneNumber.associateWithVoiceConnector.parameter.voiceConnectorId"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.ChimeVoiceConnector">ChimeVoiceConnector</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChimePhoneNumber.isConstruct"></a>

```typescript
import { ChimePhoneNumber } from 'cdk-amazon-chime-resources'

ChimePhoneNumber.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChimePhoneNumber.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChimePhoneNumber.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChimePhoneNumber.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="cdk-amazon-chime-resources.ChimePhoneNumber.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---


### ChimeSipMediaApp <a name="ChimeSipMediaApp" id="cdk-amazon-chime-resources.ChimeSipMediaApp"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer"></a>

```typescript
import { ChimeSipMediaApp } from 'cdk-amazon-chime-resources'

new ChimeSipMediaApp(scope: Construct, id: string, props: SipMediaAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.SipMediaAppProps">SipMediaAppProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.SipMediaAppProps">SipMediaAppProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.alexaSkill">alexaSkill</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.logging">logging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChimeSipMediaApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `alexaSkill` <a name="alexaSkill" id="cdk-amazon-chime-resources.ChimeSipMediaApp.alexaSkill"></a>

```typescript
public alexaSkill(sipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfiguration): Reference
```

###### `sipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="sipMediaApplicationAlexaSkillConfiguration" id="cdk-amazon-chime-resources.ChimeSipMediaApp.alexaSkill.parameter.sipMediaApplicationAlexaSkillConfiguration"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration">SipMediaApplicationAlexaSkillConfiguration</a>

---

##### `logging` <a name="logging" id="cdk-amazon-chime-resources.ChimeSipMediaApp.logging"></a>

```typescript
public logging(sipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfiguration): PSTNResources
```

###### `sipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="sipMediaApplicationLoggingConfiguration" id="cdk-amazon-chime-resources.ChimeSipMediaApp.logging.parameter.sipMediaApplicationLoggingConfiguration"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration">SipMediaApplicationLoggingConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChimeSipMediaApp.isConstruct"></a>

```typescript
import { ChimeSipMediaApp } from 'cdk-amazon-chime-resources'

ChimeSipMediaApp.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChimeSipMediaApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipMediaApp.property.sipMediaAppId">sipMediaAppId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChimeSipMediaApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `sipMediaAppId`<sup>Required</sup> <a name="sipMediaAppId" id="cdk-amazon-chime-resources.ChimeSipMediaApp.property.sipMediaAppId"></a>

```typescript
public readonly sipMediaAppId: string;
```

- *Type:* string

---


### ChimeSipRule <a name="ChimeSipRule" id="cdk-amazon-chime-resources.ChimeSipRule"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChimeSipRule.Initializer"></a>

```typescript
import { ChimeSipRule } from 'cdk-amazon-chime-resources'

new ChimeSipRule(scope: Construct, id: string, props: SipRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.SipRuleProps">SipRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChimeSipRule.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.SipRuleProps">SipRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChimeSipRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChimeSipRule.isConstruct"></a>

```typescript
import { ChimeSipRule } from 'cdk-amazon-chime-resources'

ChimeSipRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChimeSipRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChimeSipRule.property.sipRuleId">sipRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChimeSipRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `sipRuleId`<sup>Required</sup> <a name="sipRuleId" id="cdk-amazon-chime-resources.ChimeSipRule.property.sipRuleId"></a>

```typescript
public readonly sipRuleId: string;
```

- *Type:* string

---


### ChimeVoiceConnector <a name="ChimeVoiceConnector" id="cdk-amazon-chime-resources.ChimeVoiceConnector"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer"></a>

```typescript
import { ChimeVoiceConnector } from 'cdk-amazon-chime-resources'

new ChimeVoiceConnector(scope: Construct, id: string, props: VoiceConnectorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps">VoiceConnectorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceConnectorProps">VoiceConnectorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChimeVoiceConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChimeVoiceConnector.isConstruct"></a>

```typescript
import { ChimeVoiceConnector } from 'cdk-amazon-chime-resources'

ChimeVoiceConnector.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChimeVoiceConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceConnector.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChimeVoiceConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="cdk-amazon-chime-resources.ChimeVoiceConnector.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---


### ChimeVoiceProfileDomain <a name="ChimeVoiceProfileDomain" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer"></a>

```typescript
import { ChimeVoiceProfileDomain } from 'cdk-amazon-chime-resources'

new ChimeVoiceProfileDomain(scope: Construct, id: string, props: VoiceProfileDomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps">VoiceProfileDomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps">VoiceProfileDomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.isConstruct"></a>

```typescript
import { ChimeVoiceProfileDomain } from 'cdk-amazon-chime-resources'

ChimeVoiceProfileDomain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainArn">voiceProfileDomainArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainId">voiceProfileDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainName">voiceProfileDomainName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `voiceProfileDomainArn`<sup>Required</sup> <a name="voiceProfileDomainArn" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainArn"></a>

```typescript
public readonly voiceProfileDomainArn: string;
```

- *Type:* string

---

##### `voiceProfileDomainId`<sup>Required</sup> <a name="voiceProfileDomainId" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainId"></a>

```typescript
public readonly voiceProfileDomainId: string;
```

- *Type:* string

---

##### `voiceProfileDomainName`<sup>Required</sup> <a name="voiceProfileDomainName" id="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainName"></a>

```typescript
public readonly voiceProfileDomainName: string;
```

- *Type:* string

---


### MediaInsightsPipeline <a name="MediaInsightsPipeline" id="cdk-amazon-chime-resources.MediaInsightsPipeline"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer"></a>

```typescript
import { MediaInsightsPipeline } from 'cdk-amazon-chime-resources'

new MediaInsightsPipeline(scope: Construct, id: string, props: MediaInsightsPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps">MediaInsightsPipelineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps">MediaInsightsPipelineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MediaInsightsPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MediaInsightsPipeline.isConstruct"></a>

```typescript
import { MediaInsightsPipeline } from 'cdk-amazon-chime-resources'

MediaInsightsPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MediaInsightsPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationArn">mediaInsightsPipelineConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationId">mediaInsightsPipelineConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MediaInsightsPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `mediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationArn" id="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationArn"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationArn: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationId" id="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationId"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationId: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="mediaInsightsPipelineConfigurationName" id="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationName"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* string

---


### MessagingAppInstance <a name="MessagingAppInstance" id="cdk-amazon-chime-resources.MessagingAppInstance"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MessagingAppInstance.Initializer"></a>

```typescript
import { MessagingAppInstance } from 'cdk-amazon-chime-resources'

new MessagingAppInstance(scope: Construct, id: string, props: AppInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceProps">AppInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MessagingAppInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceProps">AppInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.retention">retention</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.streaming">streaming</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MessagingAppInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retention` <a name="retention" id="cdk-amazon-chime-resources.MessagingAppInstance.retention"></a>

```typescript
public retention(days: number): MessagingResources
```

###### `days`<sup>Required</sup> <a name="days" id="cdk-amazon-chime-resources.MessagingAppInstance.retention.parameter.days"></a>

- *Type:* number

---

##### `streaming` <a name="streaming" id="cdk-amazon-chime-resources.MessagingAppInstance.streaming"></a>

```typescript
public streaming(streamingConfigs: StreamingConfig[]): MessagingResources
```

###### `streamingConfigs`<sup>Required</sup> <a name="streamingConfigs" id="cdk-amazon-chime-resources.MessagingAppInstance.streaming.parameter.streamingConfigs"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.StreamingConfig">StreamingConfig</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MessagingAppInstance.isConstruct"></a>

```typescript
import { MessagingAppInstance } from 'cdk-amazon-chime-resources'

MessagingAppInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MessagingAppInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstance.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MessagingAppInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.MessagingAppInstance.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string

---


### MessagingAppInstanceAdmin <a name="MessagingAppInstanceAdmin" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer"></a>

```typescript
import { MessagingAppInstanceAdmin } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceAdmin(scope: Construct, id: string, props: AppInstanceAdminProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceAdminProps">AppInstanceAdminProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceAdminProps">AppInstanceAdminProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.isConstruct"></a>

```typescript
import { MessagingAppInstanceAdmin } from 'cdk-amazon-chime-resources'

MessagingAppInstanceAdmin.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminArn">appInstanceAdminArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminName">appInstanceAdminName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appInstanceAdminArn`<sup>Required</sup> <a name="appInstanceAdminArn" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminArn"></a>

```typescript
public readonly appInstanceAdminArn: string;
```

- *Type:* string

---

##### `appInstanceAdminName`<sup>Required</sup> <a name="appInstanceAdminName" id="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminName"></a>

```typescript
public readonly appInstanceAdminName: string;
```

- *Type:* string

---


### MessagingAppInstanceBot <a name="MessagingAppInstanceBot" id="cdk-amazon-chime-resources.MessagingAppInstanceBot"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer"></a>

```typescript
import { MessagingAppInstanceBot } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceBot(scope: Construct, id: string, props: AppInstanceBotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps">AppInstanceBotProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceBotProps">AppInstanceBotProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.isConstruct"></a>

```typescript
import { MessagingAppInstanceBot } from 'cdk-amazon-chime-resources'

MessagingAppInstanceBot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceBot.property.appInstanceBotArn">appInstanceBotArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appInstanceBotArn`<sup>Required</sup> <a name="appInstanceBotArn" id="cdk-amazon-chime-resources.MessagingAppInstanceBot.property.appInstanceBotArn"></a>

```typescript
public readonly appInstanceBotArn: string;
```

- *Type:* string

---


### MessagingAppInstanceUser <a name="MessagingAppInstanceUser" id="cdk-amazon-chime-resources.MessagingAppInstanceUser"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer"></a>

```typescript
import { MessagingAppInstanceUser } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceUser(scope: Construct, id: string, props: AppInstanceUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps">AppInstanceUserProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceUserProps">AppInstanceUserProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.isConstruct"></a>

```typescript
import { MessagingAppInstanceUser } from 'cdk-amazon-chime-resources'

MessagingAppInstanceUser.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MessagingAppInstanceUser.property.appInstanceUserArn">appInstanceUserArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appInstanceUserArn`<sup>Required</sup> <a name="appInstanceUserArn" id="cdk-amazon-chime-resources.MessagingAppInstanceUser.property.appInstanceUserArn"></a>

```typescript
public readonly appInstanceUserArn: string;
```

- *Type:* string

---


### MessagingResources <a name="MessagingResources" id="cdk-amazon-chime-resources.MessagingResources"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.MessagingResources.Initializer"></a>

```typescript
import { MessagingResources } from 'cdk-amazon-chime-resources'

new MessagingResources(scope: Construct, id: string, props: MessagingResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps">MessagingResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.MessagingResources.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.MessagingResourceProps">MessagingResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.MessagingResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.MessagingResources.isConstruct"></a>

```typescript
import { MessagingResources } from 'cdk-amazon-chime-resources'

MessagingResources.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.MessagingResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.MessagingResources.property.messagingCustomResource">messagingCustomResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.MessagingResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `messagingCustomResource`<sup>Required</sup> <a name="messagingCustomResource" id="cdk-amazon-chime-resources.MessagingResources.property.messagingCustomResource"></a>

```typescript
public readonly messagingCustomResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


### PhoneAssociation <a name="PhoneAssociation" id="cdk-amazon-chime-resources.PhoneAssociation"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.PhoneAssociation.Initializer"></a>

```typescript
import { PhoneAssociation } from 'cdk-amazon-chime-resources'

new PhoneAssociation(scope: Construct, id: string, props: PhoneAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps">PhoneAssociationProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.PhoneAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.PhoneAssociationProps">PhoneAssociationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.PhoneAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.PhoneAssociation.isConstruct"></a>

```typescript
import { PhoneAssociation } from 'cdk-amazon-chime-resources'

PhoneAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.PhoneAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociation.property.phoneAssociationResource">phoneAssociationResource</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.PhoneAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `phoneAssociationResource`<sup>Required</sup> <a name="phoneAssociationResource" id="cdk-amazon-chime-resources.PhoneAssociation.property.phoneAssociationResource"></a>

```typescript
public readonly phoneAssociationResource: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

---


### PSTNResources <a name="PSTNResources" id="cdk-amazon-chime-resources.PSTNResources"></a>

#### Initializers <a name="Initializers" id="cdk-amazon-chime-resources.PSTNResources.Initializer"></a>

```typescript
import { PSTNResources } from 'cdk-amazon-chime-resources'

new PSTNResources(scope: Construct, id: string, props: PSTNResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps">PSTNResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-amazon-chime-resources.PSTNResources.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-amazon-chime-resources.PSTNResourceProps">PSTNResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-amazon-chime-resources.PSTNResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-amazon-chime-resources.PSTNResources.isConstruct"></a>

```typescript
import { PSTNResources } from 'cdk-amazon-chime-resources'

PSTNResources.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-amazon-chime-resources.PSTNResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-amazon-chime-resources.PSTNResources.property.pstnCustomResource">pstnCustomResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-amazon-chime-resources.PSTNResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `pstnCustomResource`<sup>Required</sup> <a name="pstnCustomResource" id="cdk-amazon-chime-resources.PSTNResources.property.pstnCustomResource"></a>

```typescript
public readonly pstnCustomResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

---


## Structs <a name="Structs" id="Structs"></a>

### AmazonTranscribeCallAnalyticsProcessorConfiguration <a name="AmazonTranscribeCallAnalyticsProcessorConfiguration" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```typescript
import { AmazonTranscribeCallAnalyticsProcessorConfiguration } from 'cdk-amazon-chime-resources'

const amazonTranscribeCallAnalyticsProcessorConfiguration: AmazonTranscribeCallAnalyticsProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode">languageCode</a></code> | <code><a href="#cdk-amazon-chime-resources.LanguageCode">LanguageCode</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories">callAnalyticsStreamCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code><a href="#cdk-amazon-chime-resources.ContentIdentificationType">ContentIdentificationType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code><a href="#cdk-amazon-chime-resources.ContentRedactionType">ContentRedactionType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code><a href="#cdk-amazon-chime-resources.PartialResultsStability">PartialResultsStability</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings">postCallAnalyticsSettings</a></code> | <code><a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings">PostCallAnalyticsSettings</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code><a href="#cdk-amazon-chime-resources.VocabularyFilterMethod">VocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode"></a>

```typescript
public readonly languageCode: LanguageCode;
```

- *Type:* <a href="#cdk-amazon-chime-resources.LanguageCode">LanguageCode</a>

---

##### `callAnalyticsStreamCategories`<sup>Optional</sup> <a name="callAnalyticsStreamCategories" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories"></a>

```typescript
public readonly callAnalyticsStreamCategories: string[];
```

- *Type:* string[]

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: ContentIdentificationType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ContentIdentificationType">ContentIdentificationType</a>

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: ContentRedactionType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ContentRedactionType">ContentRedactionType</a>

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean;
```

- *Type:* boolean

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean;
```

- *Type:* boolean

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: PartialResultsStability;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PartialResultsStability">PartialResultsStability</a>

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `postCallAnalyticsSettings`<sup>Optional</sup> <a name="postCallAnalyticsSettings" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings"></a>

```typescript
public readonly postCallAnalyticsSettings: PostCallAnalyticsSettings;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings">PostCallAnalyticsSettings</a>

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: VocabularyFilterMethod;
```

- *Type:* <a href="#cdk-amazon-chime-resources.VocabularyFilterMethod">VocabularyFilterMethod</a>

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

### AmazonTranscribeProcessorConfiguration <a name="AmazonTranscribeProcessorConfiguration" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.Initializer"></a>

```typescript
import { AmazonTranscribeProcessorConfiguration } from 'cdk-amazon-chime-resources'

const amazonTranscribeProcessorConfiguration: AmazonTranscribeProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageCode">languageCode</a></code> | <code><a href="#cdk-amazon-chime-resources.LanguageCode">LanguageCode</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentIdentificationType">contentIdentificationType</a></code> | <code><a href="#cdk-amazon-chime-resources.ContentIdentificationType">ContentIdentificationType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentRedactionType">contentRedactionType</a></code> | <code><a href="#cdk-amazon-chime-resources.ContentRedactionType">ContentRedactionType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization">enablePartialResultsStabilization</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.filterPartialResults">filterPartialResults</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageModelName">languageModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.partialResultsStability">partialResultsStability</a></code> | <code><a href="#cdk-amazon-chime-resources.PartialResultsStability">PartialResultsStability</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.piiEntityTypes">piiEntityTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.showSpeakerLabel">showSpeakerLabel</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod">vocabularyFilterMethod</a></code> | <code><a href="#cdk-amazon-chime-resources.VocabularyFilterMethod">VocabularyFilterMethod</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | *No description.* |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageCode"></a>

```typescript
public readonly languageCode: LanguageCode;
```

- *Type:* <a href="#cdk-amazon-chime-resources.LanguageCode">LanguageCode</a>

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="contentIdentificationType" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentIdentificationType"></a>

```typescript
public readonly contentIdentificationType: ContentIdentificationType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ContentIdentificationType">ContentIdentificationType</a>

---

##### `contentRedactionType`<sup>Optional</sup> <a name="contentRedactionType" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentRedactionType"></a>

```typescript
public readonly contentRedactionType: ContentRedactionType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ContentRedactionType">ContentRedactionType</a>

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="enablePartialResultsStabilization" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean;
```

- *Type:* boolean

---

##### `filterPartialResults`<sup>Optional</sup> <a name="filterPartialResults" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.filterPartialResults"></a>

```typescript
public readonly filterPartialResults: boolean;
```

- *Type:* boolean

---

##### `languageModelName`<sup>Optional</sup> <a name="languageModelName" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageModelName"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* string

---

##### `partialResultsStability`<sup>Optional</sup> <a name="partialResultsStability" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.partialResultsStability"></a>

```typescript
public readonly partialResultsStability: PartialResultsStability;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PartialResultsStability">PartialResultsStability</a>

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="piiEntityTypes" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.piiEntityTypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* string

---

##### `showSpeakerLabel`<sup>Optional</sup> <a name="showSpeakerLabel" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.showSpeakerLabel"></a>

```typescript
public readonly showSpeakerLabel: boolean;
```

- *Type:* boolean

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="vocabularyFilterMethod" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod"></a>

```typescript
public readonly vocabularyFilterMethod: VocabularyFilterMethod;
```

- *Type:* <a href="#cdk-amazon-chime-resources.VocabularyFilterMethod">VocabularyFilterMethod</a>

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="vocabularyFilterName" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

---

##### `vocabularyName`<sup>Optional</sup> <a name="vocabularyName" id="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

---

### AppInstanceAdminProps <a name="AppInstanceAdminProps" id="cdk-amazon-chime-resources.AppInstanceAdminProps"></a>

Props for `AppInstance`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceAdminProps.Initializer"></a>

```typescript
import { AppInstanceAdminProps } from 'cdk-amazon-chime-resources'

const appInstanceAdminProps: AppInstanceAdminProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceAdminArn">appInstanceAdminArn</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The name of the app instance. |

---

##### `appInstanceAdminArn`<sup>Required</sup> <a name="appInstanceAdminArn" id="cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceAdminArn"></a>

```typescript
public readonly appInstanceAdminArn: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

### AppInstanceBotConfiguration <a name="AppInstanceBotConfiguration" id="cdk-amazon-chime-resources.AppInstanceBotConfiguration"></a>

Props for `Configuration`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceBotConfiguration.Initializer"></a>

```typescript
import { AppInstanceBotConfiguration } from 'cdk-amazon-chime-resources'

const appInstanceBotConfiguration: AppInstanceBotConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotConfiguration.property.lex">lex</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration">AppInstanceBotLexConfiguration</a></code> | *No description.* |

---

##### `lex`<sup>Required</sup> <a name="lex" id="cdk-amazon-chime-resources.AppInstanceBotConfiguration.property.lex"></a>

```typescript
public readonly lex: AppInstanceBotLexConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration">AppInstanceBotLexConfiguration</a>

---

### AppInstanceBotLexConfiguration <a name="AppInstanceBotLexConfiguration" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration"></a>

Configuration for AppInstanceBot with Lex.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.Initializer"></a>

```typescript
import { AppInstanceBotLexConfiguration } from 'cdk-amazon-chime-resources'

const appInstanceBotLexConfiguration: AppInstanceBotLexConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>string</code> | Lex `BotAliasArn` from setup Lex Bot. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.localeId">localeId</a></code> | <code>string</code> | LocaleId to use. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.respondsTo">respondsTo</a></code> | <code><a href="#cdk-amazon-chime-resources.LexConfigurationRespondsTo">LexConfigurationRespondsTo</a></code> | Setting for when Lex is invoked. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.welcomeIntent">welcomeIntent</a></code> | <code>string</code> | An optional welcome intent to trigger when the Bot is added to the channel. |

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.lexBotAliasArn"></a>

```typescript
public readonly lexBotAliasArn: string;
```

- *Type:* string

Lex `BotAliasArn` from setup Lex Bot.

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.localeId"></a>

```typescript
public readonly localeId: string;
```

- *Type:* string

LocaleId to use.

This needs to match one of the localIds that BotAliasArn is configured with.

---

##### `respondsTo`<sup>Required</sup> <a name="respondsTo" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.respondsTo"></a>

```typescript
public readonly respondsTo: LexConfigurationRespondsTo;
```

- *Type:* <a href="#cdk-amazon-chime-resources.LexConfigurationRespondsTo">LexConfigurationRespondsTo</a>

Setting for when Lex is invoked.

---

##### `welcomeIntent`<sup>Optional</sup> <a name="welcomeIntent" id="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.welcomeIntent"></a>

```typescript
public readonly welcomeIntent: string;
```

- *Type:* string

An optional welcome intent to trigger when the Bot is added to the channel.

---

### AppInstanceBotProps <a name="AppInstanceBotProps" id="cdk-amazon-chime-resources.AppInstanceBotProps"></a>

Props for `AppInstance`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceBotProps.Initializer"></a>

```typescript
import { AppInstanceBotProps } from 'cdk-amazon-chime-resources'

const appInstanceBotProps: AppInstanceBotProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.configuration">configuration</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceBotConfiguration">AppInstanceBotConfiguration</a></code> | The configuration of the bot. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | The ClientRequestToken of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.name">name</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceBotProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.InstanceBotTags">InstanceBotTags</a>[]</code> | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.configuration"></a>

```typescript
public readonly configuration: AppInstanceBotConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceBotConfiguration">AppInstanceBotConfiguration</a>

The configuration of the bot.

This field populates Lex settings.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.AppInstanceBotProps.property.tags"></a>

```typescript
public readonly tags: InstanceBotTags[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.InstanceBotTags">InstanceBotTags</a>[]
- *Default:* None

The tags for the creation request.

---

### AppInstanceProps <a name="AppInstanceProps" id="cdk-amazon-chime-resources.AppInstanceProps"></a>

Props for `AppInstance`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceProps.Initializer"></a>

```typescript
import { AppInstanceProps } from 'cdk-amazon-chime-resources'

const appInstanceProps: AppInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | The ClientRequestToken of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceProps.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceProps.property.name">name</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.AppInstanceTags">AppInstanceTags</a>[]</code> | The tags for the creation request. |

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.AppInstanceProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk-amazon-chime-resources.AppInstanceProps.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.AppInstanceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.AppInstanceProps.property.tags"></a>

```typescript
public readonly tags: AppInstanceTags[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.AppInstanceTags">AppInstanceTags</a>[]
- *Default:* None

The tags for the creation request.

---

### AppInstanceTags <a name="AppInstanceTags" id="cdk-amazon-chime-resources.AppInstanceTags"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceTags.Initializer"></a>

```typescript
import { AppInstanceTags } from 'cdk-amazon-chime-resources'

const appInstanceTags: AppInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceTags.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceTags.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.AppInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.AppInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### AppInstanceUserProps <a name="AppInstanceUserProps" id="cdk-amazon-chime-resources.AppInstanceUserProps"></a>

Props for `AppInstance`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.AppInstanceUserProps.Initializer"></a>

```typescript
import { AppInstanceUserProps } from 'cdk-amazon-chime-resources'

const appInstanceUserProps: AppInstanceUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceUserId">appInstanceUserId</a></code> | <code>string</code> | The id of the app instance user. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | The ClientRequestToken of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.metadata">metadata</a></code> | <code>string</code> | The metadata of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.name">name</a></code> | <code>string</code> | The name of the app instance. |
| <code><a href="#cdk-amazon-chime-resources.AppInstanceUserProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.InstanceUserTags">InstanceUserTags</a>[]</code> | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceUserId"></a>

```typescript
public readonly appInstanceUserId: string;
```

- *Type:* string
- *Default:* None

The id of the app instance user.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.AppInstanceUserProps.property.tags"></a>

```typescript
public readonly tags: InstanceUserTags[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.InstanceUserTags">InstanceUserTags</a>[]
- *Default:* None

The tags for the creation request.

---

### ChannelFlowProps <a name="ChannelFlowProps" id="cdk-amazon-chime-resources.ChannelFlowProps"></a>

Props for `AppInstance`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.ChannelFlowProps.Initializer"></a>

```typescript
import { ChannelFlowProps } from 'cdk-amazon-chime-resources'

const channelFlowProps: ChannelFlowProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The ARN of the App Instance. |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | The client token for the request. |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps.property.processors">processors</a></code> | <code><a href="#cdk-amazon-chime-resources.Processors">Processors</a>[]</code> | Information about the processor Lambda functions. |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps.property.name">name</a></code> | <code>string</code> | The name of the channel flow. |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.ChannelFlowTags">ChannelFlowTags</a>[]</code> | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.ChannelFlowProps.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string
- *Default:* None

The ARN of the App Instance.

---

##### `clientRequestToken`<sup>Required</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.ChannelFlowProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string
- *Default:* None

The client token for the request.

An Idempotency token.

---

##### `processors`<sup>Required</sup> <a name="processors" id="cdk-amazon-chime-resources.ChannelFlowProps.property.processors"></a>

```typescript
public readonly processors: Processors[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.Processors">Processors</a>[]
- *Default:* None

Information about the processor Lambda functions.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.ChannelFlowProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the channel flow.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.ChannelFlowProps.property.tags"></a>

```typescript
public readonly tags: ChannelFlowTags[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.ChannelFlowTags">ChannelFlowTags</a>[]
- *Default:* None

The tags for the creation request.

---

### ChannelFlowTags <a name="ChannelFlowTags" id="cdk-amazon-chime-resources.ChannelFlowTags"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.ChannelFlowTags.Initializer"></a>

```typescript
import { ChannelFlowTags } from 'cdk-amazon-chime-resources'

const channelFlowTags: ChannelFlowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowTags.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ChannelFlowTags.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.ChannelFlowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.ChannelFlowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### Configuration <a name="Configuration" id="cdk-amazon-chime-resources.Configuration"></a>

Props for `Configuration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ProcessorConfiguration.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Configuration.Initializer"></a>

```typescript
import { Configuration } from 'cdk-amazon-chime-resources'

const configuration: Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Configuration.property.lambda">lambda</a></code> | <code><a href="#cdk-amazon-chime-resources.Lambda">Lambda</a></code> | Indicates that the processor is of type Lambda. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="cdk-amazon-chime-resources.Configuration.property.lambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* <a href="#cdk-amazon-chime-resources.Lambda">Lambda</a>
- *Default:* None

Indicates that the processor is of type Lambda.

---

### Elements <a name="Elements" id="cdk-amazon-chime-resources.Elements"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Elements.Initializer"></a>

```typescript
import { Elements } from 'cdk-amazon-chime-resources'

const elements: Elements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.type">type</a></code> | <code><a href="#cdk-amazon-chime-resources.ElementsType">ElementsType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.amazonTranscribeCallAnalyticsProcessorConfiguration">amazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration">AmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.amazonTranscribeProcessorConfiguration">amazonTranscribeProcessorConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration">AmazonTranscribeProcessorConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.kinesisDataStreamSinkConfiguration">kinesisDataStreamSinkConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration">KinesisDataStreamSinkConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.lambdaFunctionSinkConfiguration">lambdaFunctionSinkConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration">LambdaFunctionSinkConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.s3RecordingSinkConfiguration">s3RecordingSinkConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.S3RecordingSinkConfiguration">S3RecordingSinkConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.snsTopicSinkConfiguration">snsTopicSinkConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.SnsTopicSinkConfiguration">SnsTopicSinkConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.sqsQueueSinkConfiguration">sqsQueueSinkConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.SqsQueueSinkConfiguration">SqsQueueSinkConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Elements.property.voiceAnalyticsProcessorConfiguration">voiceAnalyticsProcessorConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration">VoiceAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-amazon-chime-resources.Elements.property.type"></a>

```typescript
public readonly type: ElementsType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ElementsType">ElementsType</a>

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeCallAnalyticsProcessorConfiguration" id="cdk-amazon-chime-resources.Elements.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfiguration: AmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration">AmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---

##### `amazonTranscribeProcessorConfiguration`<sup>Optional</sup> <a name="amazonTranscribeProcessorConfiguration" id="cdk-amazon-chime-resources.Elements.property.amazonTranscribeProcessorConfiguration"></a>

```typescript
public readonly amazonTranscribeProcessorConfiguration: AmazonTranscribeProcessorConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration">AmazonTranscribeProcessorConfiguration</a>

---

##### `kinesisDataStreamSinkConfiguration`<sup>Optional</sup> <a name="kinesisDataStreamSinkConfiguration" id="cdk-amazon-chime-resources.Elements.property.kinesisDataStreamSinkConfiguration"></a>

```typescript
public readonly kinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration">KinesisDataStreamSinkConfiguration</a>

---

##### `lambdaFunctionSinkConfiguration`<sup>Optional</sup> <a name="lambdaFunctionSinkConfiguration" id="cdk-amazon-chime-resources.Elements.property.lambdaFunctionSinkConfiguration"></a>

```typescript
public readonly lambdaFunctionSinkConfiguration: LambdaFunctionSinkConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration">LambdaFunctionSinkConfiguration</a>

---

##### `s3RecordingSinkConfiguration`<sup>Optional</sup> <a name="s3RecordingSinkConfiguration" id="cdk-amazon-chime-resources.Elements.property.s3RecordingSinkConfiguration"></a>

```typescript
public readonly s3RecordingSinkConfiguration: S3RecordingSinkConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.S3RecordingSinkConfiguration">S3RecordingSinkConfiguration</a>

---

##### `snsTopicSinkConfiguration`<sup>Optional</sup> <a name="snsTopicSinkConfiguration" id="cdk-amazon-chime-resources.Elements.property.snsTopicSinkConfiguration"></a>

```typescript
public readonly snsTopicSinkConfiguration: SnsTopicSinkConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.SnsTopicSinkConfiguration">SnsTopicSinkConfiguration</a>

---

##### `sqsQueueSinkConfiguration`<sup>Optional</sup> <a name="sqsQueueSinkConfiguration" id="cdk-amazon-chime-resources.Elements.property.sqsQueueSinkConfiguration"></a>

```typescript
public readonly sqsQueueSinkConfiguration: SqsQueueSinkConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.SqsQueueSinkConfiguration">SqsQueueSinkConfiguration</a>

---

##### `voiceAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="voiceAnalyticsProcessorConfiguration" id="cdk-amazon-chime-resources.Elements.property.voiceAnalyticsProcessorConfiguration"></a>

```typescript
public readonly voiceAnalyticsProcessorConfiguration: VoiceAnalyticsProcessorConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration">VoiceAnalyticsProcessorConfiguration</a>

---

### InstanceBotTags <a name="InstanceBotTags" id="cdk-amazon-chime-resources.InstanceBotTags"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.InstanceBotTags.Initializer"></a>

```typescript
import { InstanceBotTags } from 'cdk-amazon-chime-resources'

const instanceBotTags: InstanceBotTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.InstanceBotTags.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.InstanceBotTags.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.InstanceBotTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.InstanceBotTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### InstanceUserTags <a name="InstanceUserTags" id="cdk-amazon-chime-resources.InstanceUserTags"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.InstanceUserTags.Initializer"></a>

```typescript
import { InstanceUserTags } from 'cdk-amazon-chime-resources'

const instanceUserTags: InstanceUserTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.InstanceUserTags.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.InstanceUserTags.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.InstanceUserTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.InstanceUserTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### IssueDetectionConfiguration <a name="IssueDetectionConfiguration" id="cdk-amazon-chime-resources.IssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.IssueDetectionConfiguration.Initializer"></a>

```typescript
import { IssueDetectionConfiguration } from 'cdk-amazon-chime-resources'

const issueDetectionConfiguration: IssueDetectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.IssueDetectionConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="cdk-amazon-chime-resources.IssueDetectionConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

### KeywordMatchConfiguration <a name="KeywordMatchConfiguration" id="cdk-amazon-chime-resources.KeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.KeywordMatchConfiguration.Initializer"></a>

```typescript
import { KeywordMatchConfiguration } from 'cdk-amazon-chime-resources'

const keywordMatchConfiguration: KeywordMatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.KeywordMatchConfiguration.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.KeywordMatchConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.KeywordMatchConfiguration.property.negate">negate</a></code> | <code>boolean</code> | *No description.* |

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `negate`<sup>Optional</sup> <a name="negate" id="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.negate"></a>

```typescript
public readonly negate: boolean;
```

- *Type:* boolean

---

### KinesisDataStreamSinkConfiguration <a name="KinesisDataStreamSinkConfiguration" id="cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration.Initializer"></a>

```typescript
import { KinesisDataStreamSinkConfiguration } from 'cdk-amazon-chime-resources'

const kinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

### Lambda <a name="Lambda" id="cdk-amazon-chime-resources.Lambda"></a>

Props for `LambdaConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_LambdaConfiguration.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'cdk-amazon-chime-resources'

const lambda: Lambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Lambda.property.invocationType">invocationType</a></code> | <code><a href="#cdk-amazon-chime-resources.InvocationType">InvocationType</a></code> | Controls how the Lambda function is invoked. |
| <code><a href="#cdk-amazon-chime-resources.Lambda.property.resourceArn">resourceArn</a></code> | <code>string</code> | The ARN of the Lambda message processing function. |

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="cdk-amazon-chime-resources.Lambda.property.invocationType"></a>

```typescript
public readonly invocationType: InvocationType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.InvocationType">InvocationType</a>
- *Default:* None

Controls how the Lambda function is invoked.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="cdk-amazon-chime-resources.Lambda.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string
- *Default:* None

The ARN of the Lambda message processing function.

---

### LambdaFunctionSinkConfiguration <a name="LambdaFunctionSinkConfiguration" id="cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration.Initializer"></a>

```typescript
import { LambdaFunctionSinkConfiguration } from 'cdk-amazon-chime-resources'

const lambdaFunctionSinkConfiguration: LambdaFunctionSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

### MediaInsightsConfiguration <a name="MediaInsightsConfiguration" id="cdk-amazon-chime-resources.MediaInsightsConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.MediaInsightsConfiguration.Initializer"></a>

```typescript
import { MediaInsightsConfiguration } from 'cdk-amazon-chime-resources'

const mediaInsightsConfiguration: MediaInsightsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsConfiguration.property.configurationArn">configurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsConfiguration.property.disabled">disabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `configurationArn`<sup>Required</sup> <a name="configurationArn" id="cdk-amazon-chime-resources.MediaInsightsConfiguration.property.configurationArn"></a>

```typescript
public readonly configurationArn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="cdk-amazon-chime-resources.MediaInsightsConfiguration.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean

---

### MediaInsightsPipelineProps <a name="MediaInsightsPipelineProps" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.Initializer"></a>

```typescript
import { MediaInsightsPipelineProps } from 'cdk-amazon-chime-resources'

const mediaInsightsPipelineProps: MediaInsightsPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.elements">elements</a></code> | <code><a href="#cdk-amazon-chime-resources.Elements">Elements</a>[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.resourceAccessRoleArn">resourceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.mediaInsightsPipelineConfigurationName">mediaInsightsPipelineConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.realTimeAlertConfiguration">realTimeAlertConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.RealTimeAlertConfiguration">RealTimeAlertConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.MediaPipelineInsightsTag">MediaPipelineInsightsTag</a>[]</code> | *No description.* |

---

##### `elements`<sup>Required</sup> <a name="elements" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.elements"></a>

```typescript
public readonly elements: Elements[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.Elements">Elements</a>[]

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="resourceAccessRoleArn" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.resourceAccessRoleArn"></a>

```typescript
public readonly resourceAccessRoleArn: string;
```

- *Type:* string

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string

---

##### `mediaInsightsPipelineConfigurationName`<sup>Optional</sup> <a name="mediaInsightsPipelineConfigurationName" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.mediaInsightsPipelineConfigurationName"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* string

---

##### `realTimeAlertConfiguration`<sup>Optional</sup> <a name="realTimeAlertConfiguration" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.realTimeAlertConfiguration"></a>

```typescript
public readonly realTimeAlertConfiguration: RealTimeAlertConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.RealTimeAlertConfiguration">RealTimeAlertConfiguration</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.tags"></a>

```typescript
public readonly tags: MediaPipelineInsightsTag[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.MediaPipelineInsightsTag">MediaPipelineInsightsTag</a>[]

---

### MediaPipelineInsightsTag <a name="MediaPipelineInsightsTag" id="cdk-amazon-chime-resources.MediaPipelineInsightsTag"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.MediaPipelineInsightsTag.Initializer"></a>

```typescript
import { MediaPipelineInsightsTag } from 'cdk-amazon-chime-resources'

const mediaPipelineInsightsTag: MediaPipelineInsightsTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### MessagingResourceProps <a name="MessagingResourceProps" id="cdk-amazon-chime-resources.MessagingResourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.MessagingResourceProps.Initializer"></a>

```typescript
import { MessagingResourceProps } from 'cdk-amazon-chime-resources'

const messagingResourceProps: MessagingResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.properties">properties</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingResourceProps.property.uid">uid</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="cdk-amazon-chime-resources.MessagingResourceProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="cdk-amazon-chime-resources.MessagingResourceProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="cdk-amazon-chime-resources.MessagingResourceProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.MessagingResourceProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `properties`<sup>Required</sup> <a name="properties" id="cdk-amazon-chime-resources.MessagingResourceProps.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-amazon-chime-resources.MessagingResourceProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="cdk-amazon-chime-resources.MessagingResourceProps.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

### PhoneAssociationProps <a name="PhoneAssociationProps" id="cdk-amazon-chime-resources.PhoneAssociationProps"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.PhoneAssociationProps.Initializer"></a>

```typescript
import { PhoneAssociationProps } from 'cdk-amazon-chime-resources'

const phoneAssociationProps: PhoneAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.e164PhoneNumber">e164PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneAssociationProps.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="e164PhoneNumber" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.e164PhoneNumber"></a>

```typescript
public readonly e164PhoneNumber: string;
```

- *Type:* string

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="cdk-amazon-chime-resources.PhoneAssociationProps.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

### PhoneNumberProps <a name="PhoneNumberProps" id="cdk-amazon-chime-resources.PhoneNumberProps"></a>

Props for `PhoneNumber`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.PhoneNumberProps.Initializer"></a>

```typescript
import { PhoneNumberProps } from 'cdk-amazon-chime-resources'

const phoneNumberProps: PhoneNumberProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneProductType">phoneProductType</a></code> | <code><a href="#cdk-amazon-chime-resources.PhoneProductType">PhoneProductType</a></code> | Phone Product Type (required) - SipMediaApplicationDialIn or VoiceConnector. |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneAreaCode">phoneAreaCode</a></code> | <code>number</code> | Area Code for phone number request (optional)  - Usable only with US Country. |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCity">phoneCity</a></code> | <code>string</code> | City for phone number request (optional) - Usable only with US Country. |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCountry">phoneCountry</a></code> | <code><a href="#cdk-amazon-chime-resources.PhoneCountry">PhoneCountry</a></code> | Country for phone number request (optional) - See https://docs.aws.amazon.com/chime/latest/ag/phone-country-reqs.html for more details. |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberTollFreePrefix">phoneNumberTollFreePrefix</a></code> | <code>number</code> | Toll Free Prefix for phone number request (optional). |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberType">phoneNumberType</a></code> | <code><a href="#cdk-amazon-chime-resources.PhoneNumberType">PhoneNumberType</a></code> | Phone Number Type for phone number request (optional) - Local or TollFree - Required with non-US country. |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberProps.property.phoneState">phoneState</a></code> | <code>string</code> | State for phone number request (optional) - Usable only with US Country. |

---

##### `phoneProductType`<sup>Required</sup> <a name="phoneProductType" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneProductType"></a>

```typescript
public readonly phoneProductType: PhoneProductType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PhoneProductType">PhoneProductType</a>
- *Default:* None

Phone Product Type (required) - SipMediaApplicationDialIn or VoiceConnector.

---

##### `phoneAreaCode`<sup>Optional</sup> <a name="phoneAreaCode" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneAreaCode"></a>

```typescript
public readonly phoneAreaCode: number;
```

- *Type:* number
- *Default:* None

Area Code for phone number request (optional)  - Usable only with US Country.

---

##### `phoneCity`<sup>Optional</sup> <a name="phoneCity" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCity"></a>

```typescript
public readonly phoneCity: string;
```

- *Type:* string
- *Default:* None

City for phone number request (optional) - Usable only with US Country.

---

##### `phoneCountry`<sup>Optional</sup> <a name="phoneCountry" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCountry"></a>

```typescript
public readonly phoneCountry: PhoneCountry;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PhoneCountry">PhoneCountry</a>
- *Default:* US

Country for phone number request (optional) - See https://docs.aws.amazon.com/chime/latest/ag/phone-country-reqs.html for more details.

---

##### `phoneNumberTollFreePrefix`<sup>Optional</sup> <a name="phoneNumberTollFreePrefix" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberTollFreePrefix"></a>

```typescript
public readonly phoneNumberTollFreePrefix: number;
```

- *Type:* number
- *Default:* None

Toll Free Prefix for phone number request (optional).

---

##### `phoneNumberType`<sup>Optional</sup> <a name="phoneNumberType" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberType"></a>

```typescript
public readonly phoneNumberType: PhoneNumberType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.PhoneNumberType">PhoneNumberType</a>
- *Default:* None

Phone Number Type for phone number request (optional) - Local or TollFree - Required with non-US country.

---

##### `phoneState`<sup>Optional</sup> <a name="phoneState" id="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneState"></a>

```typescript
public readonly phoneState: string;
```

- *Type:* string
- *Default:* None

State for phone number request (optional) - Usable only with US Country.

---

### PostCallAnalyticsSettings <a name="PostCallAnalyticsSettings" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings.Initializer"></a>

```typescript
import { PostCallAnalyticsSettings } from 'cdk-amazon-chime-resources'

const postCallAnalyticsSettings: PostCallAnalyticsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.contentRedactionOutput">contentRedactionOutput</a></code> | <code><a href="#cdk-amazon-chime-resources.ContentRedactionOutput">ContentRedactionOutput</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputEncryptionKMSKeyId">outputEncryptionKMSKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `contentRedactionOutput`<sup>Optional</sup> <a name="contentRedactionOutput" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.contentRedactionOutput"></a>

```typescript
public readonly contentRedactionOutput: ContentRedactionOutput;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ContentRedactionOutput">ContentRedactionOutput</a>

---

##### `outputEncryptionKMSKeyId`<sup>Optional</sup> <a name="outputEncryptionKMSKeyId" id="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputEncryptionKMSKeyId"></a>

```typescript
public readonly outputEncryptionKMSKeyId: string;
```

- *Type:* string

---

### Processors <a name="Processors" id="cdk-amazon-chime-resources.Processors"></a>

Props for `Processors`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Processor.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Processors.Initializer"></a>

```typescript
import { Processors } from 'cdk-amazon-chime-resources'

const processors: Processors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Processors.property.configuration">configuration</a></code> | <code><a href="#cdk-amazon-chime-resources.Configuration">Configuration</a></code> | The information about the type of processor and its identifier. |
| <code><a href="#cdk-amazon-chime-resources.Processors.property.executionOrder">executionOrder</a></code> | <code>number</code> | The sequence in which processors run. |
| <code><a href="#cdk-amazon-chime-resources.Processors.property.fallbackAction">fallbackAction</a></code> | <code><a href="#cdk-amazon-chime-resources.FallbackAction">FallbackAction</a></code> | Determines whether to continue with message processing or stop it in cases where communication with a processor fails. |
| <code><a href="#cdk-amazon-chime-resources.Processors.property.name">name</a></code> | <code>string</code> | The name of the Channel Flow Processor. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="cdk-amazon-chime-resources.Processors.property.configuration"></a>

```typescript
public readonly configuration: Configuration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.Configuration">Configuration</a>
- *Default:* None

The information about the type of processor and its identifier.

---

##### `executionOrder`<sup>Required</sup> <a name="executionOrder" id="cdk-amazon-chime-resources.Processors.property.executionOrder"></a>

```typescript
public readonly executionOrder: number;
```

- *Type:* number
- *Default:* None

The sequence in which processors run.

If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence. At this point, we support only 1 processor within a flow.

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="cdk-amazon-chime-resources.Processors.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: FallbackAction;
```

- *Type:* <a href="#cdk-amazon-chime-resources.FallbackAction">FallbackAction</a>
- *Default:* None

Determines whether to continue with message processing or stop it in cases where communication with a processor fails.

If a processor has a fallback action of ABORT and communication with it fails, the processor sets the message status to FAILED and does not send the message to any recipients. Note that if the last processor in the channel flow sequence has a fallback action of CONTINUE and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-amazon-chime-resources.Processors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the Channel Flow Processor.

---

### PSTNResourceProps <a name="PSTNResourceProps" id="cdk-amazon-chime-resources.PSTNResourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.PSTNResourceProps.Initializer"></a>

```typescript
import { PSTNResourceProps } from 'cdk-amazon-chime-resources'

const pSTNResourceProps: PSTNResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.properties">properties</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PSTNResourceProps.property.uid">uid</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="account" id="cdk-amazon-chime-resources.PSTNResourceProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="cdk-amazon-chime-resources.PSTNResourceProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="cdk-amazon-chime-resources.PSTNResourceProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.PSTNResourceProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `properties`<sup>Required</sup> <a name="properties" id="cdk-amazon-chime-resources.PSTNResourceProps.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="cdk-amazon-chime-resources.PSTNResourceProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="cdk-amazon-chime-resources.PSTNResourceProps.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

### RealTimeAlertConfiguration <a name="RealTimeAlertConfiguration" id="cdk-amazon-chime-resources.RealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.RealTimeAlertConfiguration.Initializer"></a>

```typescript
import { RealTimeAlertConfiguration } from 'cdk-amazon-chime-resources'

const realTimeAlertConfiguration: RealTimeAlertConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.disabled">disabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.rules">rules</a></code> | <code><a href="#cdk-amazon-chime-resources.Rules">Rules</a>[]</code> | *No description.* |

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.disabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* boolean

---

##### `rules`<sup>Required</sup> <a name="rules" id="cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.rules"></a>

```typescript
public readonly rules: Rules[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.Rules">Rules</a>[]

---

### Routes <a name="Routes" id="cdk-amazon-chime-resources.Routes"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Routes.Initializer"></a>

```typescript
import { Routes } from 'cdk-amazon-chime-resources'

const routes: Routes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Routes.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Routes.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Routes.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Routes.property.protocol">protocol</a></code> | <code><a href="#cdk-amazon-chime-resources.Protocol">Protocol</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Routes.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `host`<sup>Required</sup> <a name="host" id="cdk-amazon-chime-resources.Routes.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="cdk-amazon-chime-resources.Routes.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="cdk-amazon-chime-resources.Routes.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdk-amazon-chime-resources.Routes.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#cdk-amazon-chime-resources.Protocol">Protocol</a>

---

##### `weight`<sup>Required</sup> <a name="weight" id="cdk-amazon-chime-resources.Routes.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

### Rules <a name="Rules" id="cdk-amazon-chime-resources.Rules"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Rules.Initializer"></a>

```typescript
import { Rules } from 'cdk-amazon-chime-resources'

const rules: Rules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Rules.property.type">type</a></code> | <code><a href="#cdk-amazon-chime-resources.RulesType">RulesType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Rules.property.issueDetectionConfiguration">issueDetectionConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.IssueDetectionConfiguration">IssueDetectionConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Rules.property.keywordMatchConfiguration">keywordMatchConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.KeywordMatchConfiguration">KeywordMatchConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Rules.property.sentimentConfiguration">sentimentConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.SentimentConfiguration">SentimentConfiguration</a></code> | *No description.* |

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-amazon-chime-resources.Rules.property.type"></a>

```typescript
public readonly type: RulesType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.RulesType">RulesType</a>

---

##### `issueDetectionConfiguration`<sup>Optional</sup> <a name="issueDetectionConfiguration" id="cdk-amazon-chime-resources.Rules.property.issueDetectionConfiguration"></a>

```typescript
public readonly issueDetectionConfiguration: IssueDetectionConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.IssueDetectionConfiguration">IssueDetectionConfiguration</a>

---

##### `keywordMatchConfiguration`<sup>Optional</sup> <a name="keywordMatchConfiguration" id="cdk-amazon-chime-resources.Rules.property.keywordMatchConfiguration"></a>

```typescript
public readonly keywordMatchConfiguration: KeywordMatchConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.KeywordMatchConfiguration">KeywordMatchConfiguration</a>

---

##### `sentimentConfiguration`<sup>Optional</sup> <a name="sentimentConfiguration" id="cdk-amazon-chime-resources.Rules.property.sentimentConfiguration"></a>

```typescript
public readonly sentimentConfiguration: SentimentConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.SentimentConfiguration">SentimentConfiguration</a>

---

### S3RecordingSinkConfiguration <a name="S3RecordingSinkConfiguration" id="cdk-amazon-chime-resources.S3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.S3RecordingSinkConfiguration.Initializer"></a>

```typescript
import { S3RecordingSinkConfiguration } from 'cdk-amazon-chime-resources'

const s3RecordingSinkConfiguration: S3RecordingSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.S3RecordingSinkConfiguration.property.destination">destination</a></code> | <code>string</code> | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="destination" id="cdk-amazon-chime-resources.S3RecordingSinkConfiguration.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

### SentimentConfiguration <a name="SentimentConfiguration" id="cdk-amazon-chime-resources.SentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SentimentConfiguration.Initializer"></a>

```typescript
import { SentimentConfiguration } from 'cdk-amazon-chime-resources'

const sentimentConfiguration: SentimentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SentimentConfiguration.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.SentimentConfiguration.property.sentimentType">sentimentType</a></code> | <code><a href="#cdk-amazon-chime-resources.SentimentType">SentimentType</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.SentimentConfiguration.property.timePeriod">timePeriod</a></code> | <code>number</code> | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="cdk-amazon-chime-resources.SentimentConfiguration.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `sentimentType`<sup>Required</sup> <a name="sentimentType" id="cdk-amazon-chime-resources.SentimentConfiguration.property.sentimentType"></a>

```typescript
public readonly sentimentType: SentimentType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.SentimentType">SentimentType</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="cdk-amazon-chime-resources.SentimentConfiguration.property.timePeriod"></a>

```typescript
public readonly timePeriod: number;
```

- *Type:* number

---

### ServerSideEncryptionConfiguration <a name="ServerSideEncryptionConfiguration" id="cdk-amazon-chime-resources.ServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.ServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { ServerSideEncryptionConfiguration } from 'cdk-amazon-chime-resources'

const serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ServerSideEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="cdk-amazon-chime-resources.ServerSideEncryptionConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

### SipMediaApplicationAlexaSkillConfiguration <a name="SipMediaApplicationAlexaSkillConfiguration" id="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.Initializer"></a>

```typescript
import { SipMediaApplicationAlexaSkillConfiguration } from 'cdk-amazon-chime-resources'

const sipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillIds">alexaSkillIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillStatus">alexaSkillStatus</a></code> | <code><a href="#cdk-amazon-chime-resources.AlexaSkillStatus">AlexaSkillStatus</a></code> | *No description.* |

---

##### `alexaSkillIds`<sup>Required</sup> <a name="alexaSkillIds" id="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillIds"></a>

```typescript
public readonly alexaSkillIds: string[];
```

- *Type:* string[]

---

##### `alexaSkillStatus`<sup>Required</sup> <a name="alexaSkillStatus" id="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillStatus"></a>

```typescript
public readonly alexaSkillStatus: AlexaSkillStatus;
```

- *Type:* <a href="#cdk-amazon-chime-resources.AlexaSkillStatus">AlexaSkillStatus</a>

---

### SipMediaApplicationLoggingConfiguration <a name="SipMediaApplicationLoggingConfiguration" id="cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration"></a>

Props for `AppInstanceStreamingConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_AppInstanceStreamingConfiguration.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration.Initializer"></a>

```typescript
import { SipMediaApplicationLoggingConfiguration } from 'cdk-amazon-chime-resources'

const sipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs">enableSipMediaApplicationMessageLogs</a></code> | <code>boolean</code> | Enables message logging for the specified SIP media application. |

---

##### `enableSipMediaApplicationMessageLogs`<sup>Required</sup> <a name="enableSipMediaApplicationMessageLogs" id="cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs"></a>

```typescript
public readonly enableSipMediaApplicationMessageLogs: boolean;
```

- *Type:* boolean

Enables message logging for the specified SIP media application.

---

### SipMediaAppProps <a name="SipMediaAppProps" id="cdk-amazon-chime-resources.SipMediaAppProps"></a>

Props for `SipMediaApplication`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SipMediaAppProps.Initializer"></a>

```typescript
import { SipMediaAppProps } from 'cdk-amazon-chime-resources'

const sipMediaAppProps: SipMediaAppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SipMediaAppProps.property.endpoint">endpoint</a></code> | <code>string</code> | endpoint for SipMediaApplication(required). |
| <code><a href="#cdk-amazon-chime-resources.SipMediaAppProps.property.name">name</a></code> | <code>string</code> | name for SipMediaApplication (optional). |
| <code><a href="#cdk-amazon-chime-resources.SipMediaAppProps.property.region">region</a></code> | <code>string</code> | region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="cdk-amazon-chime-resources.SipMediaAppProps.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string
- *Default:* none

endpoint for SipMediaApplication(required).

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.SipMediaAppProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* unique ID for resource

name for SipMediaApplication (optional).

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.SipMediaAppProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* same region as stack deployment

region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler.

---

### SipRuleProps <a name="SipRuleProps" id="cdk-amazon-chime-resources.SipRuleProps"></a>

Props for `SipRule`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SipRuleProps.Initializer"></a>

```typescript
import { SipRuleProps } from 'cdk-amazon-chime-resources'

const sipRuleProps: SipRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SipRuleProps.property.targetApplications">targetApplications</a></code> | <code><a href="#cdk-amazon-chime-resources.SipRuleTargetApplication">SipRuleTargetApplication</a>[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.SipRuleProps.property.triggerType">triggerType</a></code> | <code><a href="#cdk-amazon-chime-resources.TriggerType">TriggerType</a></code> | Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME. |
| <code><a href="#cdk-amazon-chime-resources.SipRuleProps.property.triggerValue">triggerValue</a></code> | <code>string</code> | Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI. |
| <code><a href="#cdk-amazon-chime-resources.SipRuleProps.property.name">name</a></code> | <code>string</code> | name for SipRule (optional). |

---

##### `targetApplications`<sup>Required</sup> <a name="targetApplications" id="cdk-amazon-chime-resources.SipRuleProps.property.targetApplications"></a>

```typescript
public readonly targetApplications: SipRuleTargetApplication[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.SipRuleTargetApplication">SipRuleTargetApplication</a>[]

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="cdk-amazon-chime-resources.SipRuleProps.property.triggerType"></a>

```typescript
public readonly triggerType: TriggerType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.TriggerType">TriggerType</a>
- *Default:* none

Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME.

---

##### `triggerValue`<sup>Required</sup> <a name="triggerValue" id="cdk-amazon-chime-resources.SipRuleProps.property.triggerValue"></a>

```typescript
public readonly triggerValue: string;
```

- *Type:* string
- *Default:* none

Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.SipRuleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* unique ID for resource

name for SipRule (optional).

---

### SipRuleTargetApplication <a name="SipRuleTargetApplication" id="cdk-amazon-chime-resources.SipRuleTargetApplication"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SipRuleTargetApplication.Initializer"></a>

```typescript
import { SipRuleTargetApplication } from 'cdk-amazon-chime-resources'

const sipRuleTargetApplication: SipRuleTargetApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SipRuleTargetApplication.property.priority">priority</a></code> | <code>number</code> | Priority for SipRule (required) - 1 to 25. |
| <code><a href="#cdk-amazon-chime-resources.SipRuleTargetApplication.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>string</code> | SipMediaApplicationId for SipRule (required). |
| <code><a href="#cdk-amazon-chime-resources.SipRuleTargetApplication.property.region">region</a></code> | <code>string</code> | Region for SipRule (optional). |

---

##### `priority`<sup>Required</sup> <a name="priority" id="cdk-amazon-chime-resources.SipRuleTargetApplication.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* none

Priority for SipRule (required) - 1 to 25.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="cdk-amazon-chime-resources.SipRuleTargetApplication.property.sipMediaApplicationId"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* string
- *Default:* none

SipMediaApplicationId for SipRule (required).

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.SipRuleTargetApplication.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* same region as stack deployment

Region for SipRule (optional).

---

### SnsTopicSinkConfiguration <a name="SnsTopicSinkConfiguration" id="cdk-amazon-chime-resources.SnsTopicSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SnsTopicSinkConfiguration.Initializer"></a>

```typescript
import { SnsTopicSinkConfiguration } from 'cdk-amazon-chime-resources'

const snsTopicSinkConfiguration: SnsTopicSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SnsTopicSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="cdk-amazon-chime-resources.SnsTopicSinkConfiguration.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

### SqsQueueSinkConfiguration <a name="SqsQueueSinkConfiguration" id="cdk-amazon-chime-resources.SqsQueueSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.SqsQueueSinkConfiguration.Initializer"></a>

```typescript
import { SqsQueueSinkConfiguration } from 'cdk-amazon-chime-resources'

const sqsQueueSinkConfiguration: SqsQueueSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SqsQueueSinkConfiguration.property.insightsTarget">insightsTarget</a></code> | <code>string</code> | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="insightsTarget" id="cdk-amazon-chime-resources.SqsQueueSinkConfiguration.property.insightsTarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* string

---

### Streaming <a name="Streaming" id="cdk-amazon-chime-resources.Streaming"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Streaming.Initializer"></a>

```typescript
import { Streaming } from 'cdk-amazon-chime-resources'

const streaming: Streaming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Streaming.property.dataRetention">dataRetention</a></code> | <code>number</code> | Streaming data retention for VoiceConnector. |
| <code><a href="#cdk-amazon-chime-resources.Streaming.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Streaming.property.notificationTargets">notificationTargets</a></code> | <code><a href="#cdk-amazon-chime-resources.NotificationTargetType">NotificationTargetType</a>[]</code> | Streaming data retention for VoiceConnector. |
| <code><a href="#cdk-amazon-chime-resources.Streaming.property.mediaInsightsConfiguration">mediaInsightsConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.MediaInsightsConfiguration">MediaInsightsConfiguration</a></code> | *No description.* |

---

##### `dataRetention`<sup>Required</sup> <a name="dataRetention" id="cdk-amazon-chime-resources.Streaming.property.dataRetention"></a>

```typescript
public readonly dataRetention: number;
```

- *Type:* number
- *Default:* 0

Streaming data retention for VoiceConnector.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="cdk-amazon-chime-resources.Streaming.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

##### `notificationTargets`<sup>Required</sup> <a name="notificationTargets" id="cdk-amazon-chime-resources.Streaming.property.notificationTargets"></a>

```typescript
public readonly notificationTargets: NotificationTargetType[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.NotificationTargetType">NotificationTargetType</a>[]
- *Default:* 0

Streaming data retention for VoiceConnector.

---

##### `mediaInsightsConfiguration`<sup>Optional</sup> <a name="mediaInsightsConfiguration" id="cdk-amazon-chime-resources.Streaming.property.mediaInsightsConfiguration"></a>

```typescript
public readonly mediaInsightsConfiguration: MediaInsightsConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.MediaInsightsConfiguration">MediaInsightsConfiguration</a>

---

### StreamingConfig <a name="StreamingConfig" id="cdk-amazon-chime-resources.StreamingConfig"></a>

Props for `AppInstanceStreamingConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_AppInstanceStreamingConfiguration.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.StreamingConfig.Initializer"></a>

```typescript
import { StreamingConfig } from 'cdk-amazon-chime-resources'

const streamingConfig: StreamingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.StreamingConfig.property.dataType">dataType</a></code> | <code><a href="#cdk-amazon-chime-resources.MessagingDataType">MessagingDataType</a></code> | The type of data to be streamed. |
| <code><a href="#cdk-amazon-chime-resources.StreamingConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The resource ARN of a Kinesis Stream. |

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="cdk-amazon-chime-resources.StreamingConfig.property.dataType"></a>

```typescript
public readonly dataType: MessagingDataType;
```

- *Type:* <a href="#cdk-amazon-chime-resources.MessagingDataType">MessagingDataType</a>

The type of data to be streamed.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="cdk-amazon-chime-resources.StreamingConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The resource ARN of a Kinesis Stream.

---

### StreamingConfigurationProps <a name="StreamingConfigurationProps" id="cdk-amazon-chime-resources.StreamingConfigurationProps"></a>

Props for `PutAppInstanceStreamingConfigurations`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.StreamingConfigurationProps.Initializer"></a>

```typescript
import { StreamingConfigurationProps } from 'cdk-amazon-chime-resources'

const streamingConfigurationProps: StreamingConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.StreamingConfigurationProps.property.appInstanceArn">appInstanceArn</a></code> | <code>string</code> | The ARN of the App Instance. |
| <code><a href="#cdk-amazon-chime-resources.StreamingConfigurationProps.property.streamingConfigs">streamingConfigs</a></code> | <code><a href="#cdk-amazon-chime-resources.StreamingConfig">StreamingConfig</a>[]</code> | The AppInstanceStreamingConfigurations. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="cdk-amazon-chime-resources.StreamingConfigurationProps.property.appInstanceArn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* string
- *Default:* None

The ARN of the App Instance.

---

##### `streamingConfigs`<sup>Required</sup> <a name="streamingConfigs" id="cdk-amazon-chime-resources.StreamingConfigurationProps.property.streamingConfigs"></a>

```typescript
public readonly streamingConfigs: StreamingConfig[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.StreamingConfig">StreamingConfig</a>[]
- *Default:* None

The AppInstanceStreamingConfigurations.

---

### Termination <a name="Termination" id="cdk-amazon-chime-resources.Termination"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.Termination.Initializer"></a>

```typescript
import { Termination } from 'cdk-amazon-chime-resources'

const termination: Termination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Termination.property.callingRegions">callingRegions</a></code> | <code>string[]</code> | Calling Regions for VoiceConnector (optional). |
| <code><a href="#cdk-amazon-chime-resources.Termination.property.terminationCidrs">terminationCidrs</a></code> | <code>string[]</code> | termination IP for VoiceConnector (optional). |
| <code><a href="#cdk-amazon-chime-resources.Termination.property.cps">cps</a></code> | <code>number</code> | CPS Limit. |

---

##### `callingRegions`<sup>Required</sup> <a name="callingRegions" id="cdk-amazon-chime-resources.Termination.property.callingRegions"></a>

```typescript
public readonly callingRegions: string[];
```

- *Type:* string[]
- *Default:* ['US']

Calling Regions for VoiceConnector (optional).

---

##### `terminationCidrs`<sup>Required</sup> <a name="terminationCidrs" id="cdk-amazon-chime-resources.Termination.property.terminationCidrs"></a>

```typescript
public readonly terminationCidrs: string[];
```

- *Type:* string[]
- *Default:* none

termination IP for VoiceConnector (optional).

---

##### `cps`<sup>Optional</sup> <a name="cps" id="cdk-amazon-chime-resources.Termination.property.cps"></a>

```typescript
public readonly cps: number;
```

- *Type:* number
- *Default:* 1

CPS Limit.

---

### VoiceAnalyticsProcessorConfiguration <a name="VoiceAnalyticsProcessorConfiguration" id="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.Initializer"></a>

```typescript
import { VoiceAnalyticsProcessorConfiguration } from 'cdk-amazon-chime-resources'

const voiceAnalyticsProcessorConfiguration: VoiceAnalyticsProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.speakerSearchStatus">speakerSearchStatus</a></code> | <code><a href="#cdk-amazon-chime-resources.SpeakerSearchStatus">SpeakerSearchStatus</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.voiceToneAnalysisStatus">voiceToneAnalysisStatus</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceToneAnalysisStatus">VoiceToneAnalysisStatus</a></code> | *No description.* |

---

##### `speakerSearchStatus`<sup>Required</sup> <a name="speakerSearchStatus" id="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.speakerSearchStatus"></a>

```typescript
public readonly speakerSearchStatus: SpeakerSearchStatus;
```

- *Type:* <a href="#cdk-amazon-chime-resources.SpeakerSearchStatus">SpeakerSearchStatus</a>

---

##### `voiceToneAnalysisStatus`<sup>Required</sup> <a name="voiceToneAnalysisStatus" id="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.voiceToneAnalysisStatus"></a>

```typescript
public readonly voiceToneAnalysisStatus: VoiceToneAnalysisStatus;
```

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceToneAnalysisStatus">VoiceToneAnalysisStatus</a>

---

### VoiceConnectorLoggingConfiguration <a name="VoiceConnectorLoggingConfiguration" id="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.Initializer"></a>

```typescript
import { VoiceConnectorLoggingConfiguration } from 'cdk-amazon-chime-resources'

const voiceConnectorLoggingConfiguration: VoiceConnectorLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableMediaMetricLogs">enableMediaMetricLogs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableSIPLogs">enableSIPLogs</a></code> | <code>boolean</code> | *No description.* |

---

##### `enableMediaMetricLogs`<sup>Optional</sup> <a name="enableMediaMetricLogs" id="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableMediaMetricLogs"></a>

```typescript
public readonly enableMediaMetricLogs: boolean;
```

- *Type:* boolean

---

##### `enableSIPLogs`<sup>Optional</sup> <a name="enableSIPLogs" id="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableSIPLogs"></a>

```typescript
public readonly enableSIPLogs: boolean;
```

- *Type:* boolean

---

### VoiceConnectorProps <a name="VoiceConnectorProps" id="cdk-amazon-chime-resources.VoiceConnectorProps"></a>

Props for `SipMediaApplication`.

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.VoiceConnectorProps.Initializer"></a>

```typescript
import { VoiceConnectorProps } from 'cdk-amazon-chime-resources'

const voiceConnectorProps: VoiceConnectorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.encryption">encryption</a></code> | <code>boolean</code> | Encryption boolean for VoiceConnector. |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration">VoiceConnectorLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.name">name</a></code> | <code>string</code> | name for VoiceConnector. |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.origination">origination</a></code> | <code><a href="#cdk-amazon-chime-resources.Routes">Routes</a>[]</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.region">region</a></code> | <code>string</code> | region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler. |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.streaming">streaming</a></code> | <code><a href="#cdk-amazon-chime-resources.Streaming">Streaming</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceConnectorProps.property.termination">termination</a></code> | <code><a href="#cdk-amazon-chime-resources.Termination">Termination</a></code> | *No description.* |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.encryption"></a>

```typescript
public readonly encryption: boolean;
```

- *Type:* boolean
- *Default:* False

Encryption boolean for VoiceConnector.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: VoiceConnectorLoggingConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration">VoiceConnectorLoggingConfiguration</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* unique ID for resource

name for VoiceConnector.

---

##### `origination`<sup>Optional</sup> <a name="origination" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.origination"></a>

```typescript
public readonly origination: Routes[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.Routes">Routes</a>[]

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* same region as stack deployment

region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler.

---

##### `streaming`<sup>Optional</sup> <a name="streaming" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.streaming"></a>

```typescript
public readonly streaming: Streaming;
```

- *Type:* <a href="#cdk-amazon-chime-resources.Streaming">Streaming</a>

---

##### `termination`<sup>Optional</sup> <a name="termination" id="cdk-amazon-chime-resources.VoiceConnectorProps.property.termination"></a>

```typescript
public readonly termination: Termination;
```

- *Type:* <a href="#cdk-amazon-chime-resources.Termination">Termination</a>

---

### VoiceProfileDomainProps <a name="VoiceProfileDomainProps" id="cdk-amazon-chime-resources.VoiceProfileDomainProps"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.Initializer"></a>

```typescript
import { VoiceProfileDomainProps } from 'cdk-amazon-chime-resources'

const voiceProfileDomainProps: VoiceProfileDomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#cdk-amazon-chime-resources.ServerSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps.property.clientRequestToken">clientRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainProps.property.tags">tags</a></code> | <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainTag">VoiceProfileDomainTag</a>[]</code> | *No description.* |

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
```

- *Type:* <a href="#cdk-amazon-chime-resources.ServerSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a>

---

##### `clientRequestToken`<sup>Optional</sup> <a name="clientRequestToken" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.clientRequestToken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.tags"></a>

```typescript
public readonly tags: VoiceProfileDomainTag[];
```

- *Type:* <a href="#cdk-amazon-chime-resources.VoiceProfileDomainTag">VoiceProfileDomainTag</a>[]

---

### VoiceProfileDomainTag <a name="VoiceProfileDomainTag" id="cdk-amazon-chime-resources.VoiceProfileDomainTag"></a>

#### Initializer <a name="Initializer" id="cdk-amazon-chime-resources.VoiceProfileDomainTag.Initializer"></a>

```typescript
import { VoiceProfileDomainTag } from 'cdk-amazon-chime-resources'

const voiceProfileDomainTag: VoiceProfileDomainTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainTag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceProfileDomainTag.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-amazon-chime-resources.VoiceProfileDomainTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-amazon-chime-resources.VoiceProfileDomainTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### AlexaSkillStatus <a name="AlexaSkillStatus" id="cdk-amazon-chime-resources.AlexaSkillStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.AlexaSkillStatus.ACTIVE">ACTIVE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.AlexaSkillStatus.INACTIVE">INACTIVE</a></code> | *No description.* |

---

##### `ACTIVE` <a name="ACTIVE" id="cdk-amazon-chime-resources.AlexaSkillStatus.ACTIVE"></a>

---


##### `INACTIVE` <a name="INACTIVE" id="cdk-amazon-chime-resources.AlexaSkillStatus.INACTIVE"></a>

---


### ContentIdentificationType <a name="ContentIdentificationType" id="cdk-amazon-chime-resources.ContentIdentificationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ContentIdentificationType.PII">PII</a></code> | *No description.* |

---

##### `PII` <a name="PII" id="cdk-amazon-chime-resources.ContentIdentificationType.PII"></a>

---


### ContentRedactionOutput <a name="ContentRedactionOutput" id="cdk-amazon-chime-resources.ContentRedactionOutput"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED">REDACTED</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED_AND_UNREDACTED">REDACTED_AND_UNREDACTED</a></code> | *No description.* |

---

##### `REDACTED` <a name="REDACTED" id="cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED"></a>

---


##### `REDACTED_AND_UNREDACTED` <a name="REDACTED_AND_UNREDACTED" id="cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED_AND_UNREDACTED"></a>

---


### ContentRedactionType <a name="ContentRedactionType" id="cdk-amazon-chime-resources.ContentRedactionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ContentRedactionType.PII">PII</a></code> | *No description.* |

---

##### `PII` <a name="PII" id="cdk-amazon-chime-resources.ContentRedactionType.PII"></a>

---


### ElementsType <a name="ElementsType" id="cdk-amazon-chime-resources.ElementsType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS">AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.VOICE_ANALYTICS_PROCESSOR">VOICE_ANALYTICS_PROCESSOR</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIBE_PROCESSOR">AMAZON_TRANSCRIBE_PROCESSOR</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.KINESIS_DATA_STREAM_SINK">KINESIS_DATA_STREAM_SINK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.LAMBDA_FUNCTION_SINK">LAMBDA_FUNCTION_SINK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.SQS_QUEUE_SINK">SQS_QUEUE_SINK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.SNS_TOPICS_SINK">SNS_TOPICS_SINK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.ElementsType.S3_RECORDING_SINK">S3_RECORDING_SINK</a></code> | *No description.* |

---

##### `AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS` <a name="AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS" id="cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS"></a>

---


##### `VOICE_ANALYTICS_PROCESSOR` <a name="VOICE_ANALYTICS_PROCESSOR" id="cdk-amazon-chime-resources.ElementsType.VOICE_ANALYTICS_PROCESSOR"></a>

---


##### `AMAZON_TRANSCRIBE_PROCESSOR` <a name="AMAZON_TRANSCRIBE_PROCESSOR" id="cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIBE_PROCESSOR"></a>

---


##### `KINESIS_DATA_STREAM_SINK` <a name="KINESIS_DATA_STREAM_SINK" id="cdk-amazon-chime-resources.ElementsType.KINESIS_DATA_STREAM_SINK"></a>

---


##### `LAMBDA_FUNCTION_SINK` <a name="LAMBDA_FUNCTION_SINK" id="cdk-amazon-chime-resources.ElementsType.LAMBDA_FUNCTION_SINK"></a>

---


##### `SQS_QUEUE_SINK` <a name="SQS_QUEUE_SINK" id="cdk-amazon-chime-resources.ElementsType.SQS_QUEUE_SINK"></a>

---


##### `SNS_TOPICS_SINK` <a name="SNS_TOPICS_SINK" id="cdk-amazon-chime-resources.ElementsType.SNS_TOPICS_SINK"></a>

---


##### `S3_RECORDING_SINK` <a name="S3_RECORDING_SINK" id="cdk-amazon-chime-resources.ElementsType.S3_RECORDING_SINK"></a>

---


### FallbackAction <a name="FallbackAction" id="cdk-amazon-chime-resources.FallbackAction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.FallbackAction.CONTINUE">CONTINUE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.FallbackAction.ABORT">ABORT</a></code> | *No description.* |

---

##### `CONTINUE` <a name="CONTINUE" id="cdk-amazon-chime-resources.FallbackAction.CONTINUE"></a>

---


##### `ABORT` <a name="ABORT" id="cdk-amazon-chime-resources.FallbackAction.ABORT"></a>

---


### InvocationType <a name="InvocationType" id="cdk-amazon-chime-resources.InvocationType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.InvocationType.ASYNC">ASYNC</a></code> | *No description.* |

---

##### `ASYNC` <a name="ASYNC" id="cdk-amazon-chime-resources.InvocationType.ASYNC"></a>

---


### LanguageCode <a name="LanguageCode" id="cdk-amazon-chime-resources.LanguageCode"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.EN_US">EN_US</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.EN_GB">EN_GB</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.ES_US">ES_US</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.FR_CA">FR_CA</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.FR_FR">FR_FR</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.EN_AU">EN_AU</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.IT_IT">IT_IT</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.DE_DE">DE_DE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.LanguageCode.PT_BR">PT_BR</a></code> | *No description.* |

---

##### `EN_US` <a name="EN_US" id="cdk-amazon-chime-resources.LanguageCode.EN_US"></a>

---


##### `EN_GB` <a name="EN_GB" id="cdk-amazon-chime-resources.LanguageCode.EN_GB"></a>

---


##### `ES_US` <a name="ES_US" id="cdk-amazon-chime-resources.LanguageCode.ES_US"></a>

---


##### `FR_CA` <a name="FR_CA" id="cdk-amazon-chime-resources.LanguageCode.FR_CA"></a>

---


##### `FR_FR` <a name="FR_FR" id="cdk-amazon-chime-resources.LanguageCode.FR_FR"></a>

---


##### `EN_AU` <a name="EN_AU" id="cdk-amazon-chime-resources.LanguageCode.EN_AU"></a>

---


##### `IT_IT` <a name="IT_IT" id="cdk-amazon-chime-resources.LanguageCode.IT_IT"></a>

---


##### `DE_DE` <a name="DE_DE" id="cdk-amazon-chime-resources.LanguageCode.DE_DE"></a>

---


##### `PT_BR` <a name="PT_BR" id="cdk-amazon-chime-resources.LanguageCode.PT_BR"></a>

---


### LexConfigurationRespondsTo <a name="LexConfigurationRespondsTo" id="cdk-amazon-chime-resources.LexConfigurationRespondsTo"></a>

Props for `Configuration` when Configuration is for Lex.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.LexConfigurationRespondsTo.STANDARD_MESSAGES">STANDARD_MESSAGES</a></code> | *No description.* |

---

##### `STANDARD_MESSAGES` <a name="STANDARD_MESSAGES" id="cdk-amazon-chime-resources.LexConfigurationRespondsTo.STANDARD_MESSAGES"></a>

---


### MessagingDataType <a name="MessagingDataType" id="cdk-amazon-chime-resources.MessagingDataType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.MessagingDataType.CHANNEL">CHANNEL</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.MessagingDataType.CHANNELMESSAGE">CHANNELMESSAGE</a></code> | *No description.* |

---

##### `CHANNEL` <a name="CHANNEL" id="cdk-amazon-chime-resources.MessagingDataType.CHANNEL"></a>

---


##### `CHANNELMESSAGE` <a name="CHANNELMESSAGE" id="cdk-amazon-chime-resources.MessagingDataType.CHANNELMESSAGE"></a>

---


### NotificationTargetType <a name="NotificationTargetType" id="cdk-amazon-chime-resources.NotificationTargetType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.NotificationTargetType.EVENTBRIDGE">EVENTBRIDGE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.NotificationTargetType.SNS">SNS</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.NotificationTargetType.SQS">SQS</a></code> | *No description.* |

---

##### `EVENTBRIDGE` <a name="EVENTBRIDGE" id="cdk-amazon-chime-resources.NotificationTargetType.EVENTBRIDGE"></a>

---


##### `SNS` <a name="SNS" id="cdk-amazon-chime-resources.NotificationTargetType.SNS"></a>

---


##### `SQS` <a name="SQS" id="cdk-amazon-chime-resources.NotificationTargetType.SQS"></a>

---


### PartialResultsStability <a name="PartialResultsStability" id="cdk-amazon-chime-resources.PartialResultsStability"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PartialResultsStability.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PartialResultsStability.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PartialResultsStability.LOW">LOW</a></code> | *No description.* |

---

##### `HIGH` <a name="HIGH" id="cdk-amazon-chime-resources.PartialResultsStability.HIGH"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="cdk-amazon-chime-resources.PartialResultsStability.MEDIUM"></a>

---


##### `LOW` <a name="LOW" id="cdk-amazon-chime-resources.PartialResultsStability.LOW"></a>

---


### PhoneCountry <a name="PhoneCountry" id="cdk-amazon-chime-resources.PhoneCountry"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.AU">AU</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.AT">AT</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.CA">CA</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.DK">DK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.DE">DE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.IE">IE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.IT">IT</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.NZ">NZ</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.NG">NG</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.PR">PR</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.KR">KR</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.SE">SE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.CH">CH</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.UK">UK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneCountry.US">US</a></code> | *No description.* |

---

##### `AU` <a name="AU" id="cdk-amazon-chime-resources.PhoneCountry.AU"></a>

---


##### `AT` <a name="AT" id="cdk-amazon-chime-resources.PhoneCountry.AT"></a>

---


##### `CA` <a name="CA" id="cdk-amazon-chime-resources.PhoneCountry.CA"></a>

---


##### `DK` <a name="DK" id="cdk-amazon-chime-resources.PhoneCountry.DK"></a>

---


##### `DE` <a name="DE" id="cdk-amazon-chime-resources.PhoneCountry.DE"></a>

---


##### `IE` <a name="IE" id="cdk-amazon-chime-resources.PhoneCountry.IE"></a>

---


##### `IT` <a name="IT" id="cdk-amazon-chime-resources.PhoneCountry.IT"></a>

---


##### `NZ` <a name="NZ" id="cdk-amazon-chime-resources.PhoneCountry.NZ"></a>

---


##### `NG` <a name="NG" id="cdk-amazon-chime-resources.PhoneCountry.NG"></a>

---


##### `PR` <a name="PR" id="cdk-amazon-chime-resources.PhoneCountry.PR"></a>

---


##### `KR` <a name="KR" id="cdk-amazon-chime-resources.PhoneCountry.KR"></a>

---


##### `SE` <a name="SE" id="cdk-amazon-chime-resources.PhoneCountry.SE"></a>

---


##### `CH` <a name="CH" id="cdk-amazon-chime-resources.PhoneCountry.CH"></a>

---


##### `UK` <a name="UK" id="cdk-amazon-chime-resources.PhoneCountry.UK"></a>

---


##### `US` <a name="US" id="cdk-amazon-chime-resources.PhoneCountry.US"></a>

---


### PhoneNumberType <a name="PhoneNumberType" id="cdk-amazon-chime-resources.PhoneNumberType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberType.LOCAL">LOCAL</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneNumberType.TOLLFREE">TOLLFREE</a></code> | *No description.* |

---

##### `LOCAL` <a name="LOCAL" id="cdk-amazon-chime-resources.PhoneNumberType.LOCAL"></a>

---


##### `TOLLFREE` <a name="TOLLFREE" id="cdk-amazon-chime-resources.PhoneNumberType.TOLLFREE"></a>

---


### PhoneProductType <a name="PhoneProductType" id="cdk-amazon-chime-resources.PhoneProductType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.PhoneProductType.SMA">SMA</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.PhoneProductType.VC">VC</a></code> | *No description.* |

---

##### `SMA` <a name="SMA" id="cdk-amazon-chime-resources.PhoneProductType.SMA"></a>

---


##### `VC` <a name="VC" id="cdk-amazon-chime-resources.PhoneProductType.VC"></a>

---


### Protocol <a name="Protocol" id="cdk-amazon-chime-resources.Protocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.Protocol.TCP">TCP</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.Protocol.UDP">UDP</a></code> | *No description.* |

---

##### `TCP` <a name="TCP" id="cdk-amazon-chime-resources.Protocol.TCP"></a>

---


##### `UDP` <a name="UDP" id="cdk-amazon-chime-resources.Protocol.UDP"></a>

---


### RulesType <a name="RulesType" id="cdk-amazon-chime-resources.RulesType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.RulesType.KEYWORD_MATCH">KEYWORD_MATCH</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.RulesType.SENTIMENT">SENTIMENT</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.RulesType.ISSUE_DETECTION">ISSUE_DETECTION</a></code> | *No description.* |

---

##### `KEYWORD_MATCH` <a name="KEYWORD_MATCH" id="cdk-amazon-chime-resources.RulesType.KEYWORD_MATCH"></a>

---


##### `SENTIMENT` <a name="SENTIMENT" id="cdk-amazon-chime-resources.RulesType.SENTIMENT"></a>

---


##### `ISSUE_DETECTION` <a name="ISSUE_DETECTION" id="cdk-amazon-chime-resources.RulesType.ISSUE_DETECTION"></a>

---


### SentimentType <a name="SentimentType" id="cdk-amazon-chime-resources.SentimentType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SentimentType.NEGATIVE">NEGATIVE</a></code> | *No description.* |

---

##### `NEGATIVE` <a name="NEGATIVE" id="cdk-amazon-chime-resources.SentimentType.NEGATIVE"></a>

---


### SpeakerSearchStatus <a name="SpeakerSearchStatus" id="cdk-amazon-chime-resources.SpeakerSearchStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.SpeakerSearchStatus.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.SpeakerSearchStatus.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="cdk-amazon-chime-resources.SpeakerSearchStatus.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="cdk-amazon-chime-resources.SpeakerSearchStatus.DISABLED"></a>

---


### TriggerType <a name="TriggerType" id="cdk-amazon-chime-resources.TriggerType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.TriggerType.TO_PHONE_NUMBER">TO_PHONE_NUMBER</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.TriggerType.REQUEST_URI_HOSTNAME">REQUEST_URI_HOSTNAME</a></code> | *No description.* |

---

##### `TO_PHONE_NUMBER` <a name="TO_PHONE_NUMBER" id="cdk-amazon-chime-resources.TriggerType.TO_PHONE_NUMBER"></a>

---


##### `REQUEST_URI_HOSTNAME` <a name="REQUEST_URI_HOSTNAME" id="cdk-amazon-chime-resources.TriggerType.REQUEST_URI_HOSTNAME"></a>

---


### VocabularyFilterMethod <a name="VocabularyFilterMethod" id="cdk-amazon-chime-resources.VocabularyFilterMethod"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VocabularyFilterMethod.REMOVE">REMOVE</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VocabularyFilterMethod.MASK">MASK</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VocabularyFilterMethod.TAG">TAG</a></code> | *No description.* |

---

##### `REMOVE` <a name="REMOVE" id="cdk-amazon-chime-resources.VocabularyFilterMethod.REMOVE"></a>

---


##### `MASK` <a name="MASK" id="cdk-amazon-chime-resources.VocabularyFilterMethod.MASK"></a>

---


##### `TAG` <a name="TAG" id="cdk-amazon-chime-resources.VocabularyFilterMethod.TAG"></a>

---


### VoiceToneAnalysisStatus <a name="VoiceToneAnalysisStatus" id="cdk-amazon-chime-resources.VoiceToneAnalysisStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-amazon-chime-resources.VoiceToneAnalysisStatus.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#cdk-amazon-chime-resources.VoiceToneAnalysisStatus.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="cdk-amazon-chime-resources.VoiceToneAnalysisStatus.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="cdk-amazon-chime-resources.VoiceToneAnalysisStatus.DISABLED"></a>

---

