# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AppInstanceStreamingConfigurations <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations" id="cdkamazonchimeresourcesappinstancestreamingconfigurations"></a>

#### Initializers <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.Initializer" id="cdkamazonchimeresourcesappinstancestreamingconfigurationsinitializer"></a>

```typescript
import { AppInstanceStreamingConfigurations } from 'cdk-amazon-chime-resources'

new AppInstanceStreamingConfigurations(scope: Construct, id: string, props: StreamingConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.StreamingConfigurationProps`](#cdk-amazon-chime-resources.StreamingConfigurationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.parameter.scope" id="cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.parameter.id" id="cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.parameter.props" id="cdkamazonchimeresourcesappinstancestreamingconfigurationsparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.StreamingConfigurationProps`](#cdk-amazon-chime-resources.StreamingConfigurationProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`streamingConfigs`](#cdkamazonchimeresourcesappinstancestreamingconfigurationspropertystreamingconfigs)<span title="Required">*</span> | [`cdk-amazon-chime-resources.StreamingConfig`](#cdk-amazon-chime-resources.StreamingConfig)[] | *No description.* |

---

##### `streamingConfigs`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceStreamingConfigurations.property.streamingConfigs" id="cdkamazonchimeresourcesappinstancestreamingconfigurationspropertystreamingconfigs"></a>

```typescript
public readonly streamingConfigs: StreamingConfig[];
```

- *Type:* [`cdk-amazon-chime-resources.StreamingConfig`](#cdk-amazon-chime-resources.StreamingConfig)[]

---


### ChannelFlow <a name="cdk-amazon-chime-resources.ChannelFlow" id="cdkamazonchimeresourceschannelflow"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChannelFlow.Initializer" id="cdkamazonchimeresourceschannelflowinitializer"></a>

```typescript
import { ChannelFlow } from 'cdk-amazon-chime-resources'

new ChannelFlow(scope: Construct, id: string, props: ChannelFlowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschannelflowparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschannelflowparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschannelflowparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.ChannelFlowProps`](#cdk-amazon-chime-resources.ChannelFlowProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlow.parameter.scope" id="cdkamazonchimeresourceschannelflowparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlow.parameter.id" id="cdkamazonchimeresourceschannelflowparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlow.parameter.props" id="cdkamazonchimeresourceschannelflowparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.ChannelFlowProps`](#cdk-amazon-chime-resources.ChannelFlowProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`channelFlowArn`](#cdkamazonchimeresourceschannelflowpropertychannelflowarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `channelFlowArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlow.property.channelFlowArn" id="cdkamazonchimeresourceschannelflowpropertychannelflowarn"></a>

```typescript
public readonly channelFlowArn: string;
```

- *Type:* `string`

---


### ChimePhoneNumber <a name="cdk-amazon-chime-resources.ChimePhoneNumber" id="cdkamazonchimeresourceschimephonenumber"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChimePhoneNumber.Initializer" id="cdkamazonchimeresourceschimephonenumberinitializer"></a>

```typescript
import { ChimePhoneNumber } from 'cdk-amazon-chime-resources'

new ChimePhoneNumber(scope: Construct, id: string, props: PhoneNumberProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschimephonenumberparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschimephonenumberparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschimephonenumberparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.PhoneNumberProps`](#cdk-amazon-chime-resources.PhoneNumberProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimePhoneNumber.parameter.scope" id="cdkamazonchimeresourceschimephonenumberparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimePhoneNumber.parameter.id" id="cdkamazonchimeresourceschimephonenumberparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimePhoneNumber.parameter.props" id="cdkamazonchimeresourceschimephonenumberparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.PhoneNumberProps`](#cdk-amazon-chime-resources.PhoneNumberProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`associateWithVoiceConnector`](#cdkamazonchimeresourceschimephonenumberassociatewithvoiceconnector) | *No description.* |

---

##### `associateWithVoiceConnector` <a name="cdk-amazon-chime-resources.ChimePhoneNumber.associateWithVoiceConnector" id="cdkamazonchimeresourceschimephonenumberassociatewithvoiceconnector"></a>

```typescript
public associateWithVoiceConnector(voiceConnectorId: ChimeVoiceConnector)
```

###### `voiceConnectorId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimePhoneNumber.parameter.voiceConnectorId" id="cdkamazonchimeresourceschimephonenumberparametervoiceconnectorid"></a>

- *Type:* [`cdk-amazon-chime-resources.ChimeVoiceConnector`](#cdk-amazon-chime-resources.ChimeVoiceConnector)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`phoneNumber`](#cdkamazonchimeresourceschimephonenumberpropertyphonenumber)<span title="Required">*</span> | `string` | *No description.* |

---

##### `phoneNumber`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimePhoneNumber.property.phoneNumber" id="cdkamazonchimeresourceschimephonenumberpropertyphonenumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* `string`

---


### ChimeSipMediaApp <a name="cdk-amazon-chime-resources.ChimeSipMediaApp" id="cdkamazonchimeresourceschimesipmediaapp"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.Initializer" id="cdkamazonchimeresourceschimesipmediaappinitializer"></a>

```typescript
import { ChimeSipMediaApp } from 'cdk-amazon-chime-resources'

new ChimeSipMediaApp(scope: Construct, id: string, props: SipMediaAppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschimesipmediaappparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschimesipmediaappparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschimesipmediaappparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.SipMediaAppProps`](#cdk-amazon-chime-resources.SipMediaAppProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.parameter.scope" id="cdkamazonchimeresourceschimesipmediaappparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.parameter.id" id="cdkamazonchimeresourceschimesipmediaappparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.parameter.props" id="cdkamazonchimeresourceschimesipmediaappparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.SipMediaAppProps`](#cdk-amazon-chime-resources.SipMediaAppProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`alexaSkill`](#cdkamazonchimeresourceschimesipmediaappalexaskill) | *No description.* |
| [`logging`](#cdkamazonchimeresourceschimesipmediaapplogging) | *No description.* |

---

##### `alexaSkill` <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.alexaSkill" id="cdkamazonchimeresourceschimesipmediaappalexaskill"></a>

```typescript
public alexaSkill(sipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfiguration)
```

###### `sipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.parameter.sipMediaApplicationAlexaSkillConfiguration" id="cdkamazonchimeresourceschimesipmediaappparametersipmediaapplicationalexaskillconfiguration"></a>

- *Type:* [`cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration`](#cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration)

---

##### `logging` <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.logging" id="cdkamazonchimeresourceschimesipmediaapplogging"></a>

```typescript
public logging(sipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfiguration)
```

###### `sipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.parameter.sipMediaApplicationLoggingConfiguration" id="cdkamazonchimeresourceschimesipmediaappparametersipmediaapplicationloggingconfiguration"></a>

- *Type:* [`cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration`](#cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`sipMediaAppId`](#cdkamazonchimeresourceschimesipmediaapppropertysipmediaappid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `sipMediaAppId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipMediaApp.property.sipMediaAppId" id="cdkamazonchimeresourceschimesipmediaapppropertysipmediaappid"></a>

```typescript
public readonly sipMediaAppId: string;
```

- *Type:* `string`

---


### ChimeSipRule <a name="cdk-amazon-chime-resources.ChimeSipRule" id="cdkamazonchimeresourceschimesiprule"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChimeSipRule.Initializer" id="cdkamazonchimeresourceschimesipruleinitializer"></a>

```typescript
import { ChimeSipRule } from 'cdk-amazon-chime-resources'

new ChimeSipRule(scope: Construct, id: string, props: SipRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschimesipruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschimesipruleparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschimesipruleparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.SipRuleProps`](#cdk-amazon-chime-resources.SipRuleProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipRule.parameter.scope" id="cdkamazonchimeresourceschimesipruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipRule.parameter.id" id="cdkamazonchimeresourceschimesipruleparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipRule.parameter.props" id="cdkamazonchimeresourceschimesipruleparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.SipRuleProps`](#cdk-amazon-chime-resources.SipRuleProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`sipRuleId`](#cdkamazonchimeresourceschimesiprulepropertysipruleid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `sipRuleId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeSipRule.property.sipRuleId" id="cdkamazonchimeresourceschimesiprulepropertysipruleid"></a>

```typescript
public readonly sipRuleId: string;
```

- *Type:* `string`

---


### ChimeVoiceConnector <a name="cdk-amazon-chime-resources.ChimeVoiceConnector" id="cdkamazonchimeresourceschimevoiceconnector"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChimeVoiceConnector.Initializer" id="cdkamazonchimeresourceschimevoiceconnectorinitializer"></a>

```typescript
import { ChimeVoiceConnector } from 'cdk-amazon-chime-resources'

new ChimeVoiceConnector(scope: Construct, id: string, props: VoiceConnectorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschimevoiceconnectorparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschimevoiceconnectorparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschimevoiceconnectorparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.VoiceConnectorProps`](#cdk-amazon-chime-resources.VoiceConnectorProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceConnector.parameter.scope" id="cdkamazonchimeresourceschimevoiceconnectorparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceConnector.parameter.id" id="cdkamazonchimeresourceschimevoiceconnectorparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceConnector.parameter.props" id="cdkamazonchimeresourceschimevoiceconnectorparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.VoiceConnectorProps`](#cdk-amazon-chime-resources.VoiceConnectorProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`voiceConnectorId`](#cdkamazonchimeresourceschimevoiceconnectorpropertyvoiceconnectorid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `voiceConnectorId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceConnector.property.voiceConnectorId" id="cdkamazonchimeresourceschimevoiceconnectorpropertyvoiceconnectorid"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* `string`

---


### ChimeVoiceProfileDomain <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain" id="cdkamazonchimeresourceschimevoiceprofiledomain"></a>

#### Initializers <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.Initializer" id="cdkamazonchimeresourceschimevoiceprofiledomaininitializer"></a>

```typescript
import { ChimeVoiceProfileDomain } from 'cdk-amazon-chime-resources'

new ChimeVoiceProfileDomain(scope: Construct, id: string, props: VoiceProfileDomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceschimevoiceprofiledomainparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceschimevoiceprofiledomainparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceschimevoiceprofiledomainparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.VoiceProfileDomainProps`](#cdk-amazon-chime-resources.VoiceProfileDomainProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.parameter.scope" id="cdkamazonchimeresourceschimevoiceprofiledomainparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.parameter.id" id="cdkamazonchimeresourceschimevoiceprofiledomainparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.parameter.props" id="cdkamazonchimeresourceschimevoiceprofiledomainparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.VoiceProfileDomainProps`](#cdk-amazon-chime-resources.VoiceProfileDomainProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`voiceProfileDomainArn`](#cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainarn)<span title="Required">*</span> | `string` | *No description.* |
| [`voiceProfileDomainId`](#cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainid)<span title="Required">*</span> | `string` | *No description.* |
| [`voiceProfileDomainName`](#cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `voiceProfileDomainArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainArn" id="cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainarn"></a>

```typescript
public readonly voiceProfileDomainArn: string;
```

- *Type:* `string`

---

##### `voiceProfileDomainId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainId" id="cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainid"></a>

```typescript
public readonly voiceProfileDomainId: string;
```

- *Type:* `string`

---

##### `voiceProfileDomainName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChimeVoiceProfileDomain.property.voiceProfileDomainName" id="cdkamazonchimeresourceschimevoiceprofiledomainpropertyvoiceprofiledomainname"></a>

```typescript
public readonly voiceProfileDomainName: string;
```

- *Type:* `string`

---


### KinesisVideoStreamPool <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool" id="cdkamazonchimeresourceskinesisvideostreampool"></a>

#### Initializers <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.Initializer" id="cdkamazonchimeresourceskinesisvideostreampoolinitializer"></a>

```typescript
import { KinesisVideoStreamPool } from 'cdk-amazon-chime-resources'

new KinesisVideoStreamPool(scope: Construct, id: string, props: KinesisVideoStreamPoolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourceskinesisvideostreampoolparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourceskinesisvideostreampoolparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourceskinesisvideostreampoolparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.KinesisVideoStreamPoolProps`](#cdk-amazon-chime-resources.KinesisVideoStreamPoolProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.parameter.scope" id="cdkamazonchimeresourceskinesisvideostreampoolparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.parameter.id" id="cdkamazonchimeresourceskinesisvideostreampoolparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.parameter.props" id="cdkamazonchimeresourceskinesisvideostreampoolparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.KinesisVideoStreamPoolProps`](#cdk-amazon-chime-resources.KinesisVideoStreamPoolProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`createdTimestamp`](#cdkamazonchimeresourceskinesisvideostreampoolpropertycreatedtimestamp)<span title="Required">*</span> | `string` | *No description.* |
| [`poolArn`](#cdkamazonchimeresourceskinesisvideostreampoolpropertypoolarn)<span title="Required">*</span> | `string` | *No description.* |
| [`poolId`](#cdkamazonchimeresourceskinesisvideostreampoolpropertypoolid)<span title="Required">*</span> | `string` | *No description.* |
| [`poolName`](#cdkamazonchimeresourceskinesisvideostreampoolpropertypoolname)<span title="Required">*</span> | `string` | *No description.* |
| [`poolStatus`](#cdkamazonchimeresourceskinesisvideostreampoolpropertypoolstatus)<span title="Required">*</span> | `string` | *No description.* |
| [`updatedTimestamp`](#cdkamazonchimeresourceskinesisvideostreampoolpropertyupdatedtimestamp)<span title="Required">*</span> | `string` | *No description.* |

---

##### `createdTimestamp`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.createdTimestamp" id="cdkamazonchimeresourceskinesisvideostreampoolpropertycreatedtimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* `string`

---

##### `poolArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.poolArn" id="cdkamazonchimeresourceskinesisvideostreampoolpropertypoolarn"></a>

```typescript
public readonly poolArn: string;
```

- *Type:* `string`

---

##### `poolId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.poolId" id="cdkamazonchimeresourceskinesisvideostreampoolpropertypoolid"></a>

```typescript
public readonly poolId: string;
```

- *Type:* `string`

---

##### `poolName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.poolName" id="cdkamazonchimeresourceskinesisvideostreampoolpropertypoolname"></a>

```typescript
public readonly poolName: string;
```

- *Type:* `string`

---

##### `poolStatus`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.poolStatus" id="cdkamazonchimeresourceskinesisvideostreampoolpropertypoolstatus"></a>

```typescript
public readonly poolStatus: string;
```

- *Type:* `string`

---

##### `updatedTimestamp`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPool.property.updatedTimestamp" id="cdkamazonchimeresourceskinesisvideostreampoolpropertyupdatedtimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* `string`

---


### MediaInsightsPipeline <a name="cdk-amazon-chime-resources.MediaInsightsPipeline" id="cdkamazonchimeresourcesmediainsightspipeline"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.Initializer" id="cdkamazonchimeresourcesmediainsightspipelineinitializer"></a>

```typescript
import { MediaInsightsPipeline } from 'cdk-amazon-chime-resources'

new MediaInsightsPipeline(scope: Construct, id: string, props: MediaInsightsPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmediainsightspipelineparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmediainsightspipelineparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmediainsightspipelineparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.MediaInsightsPipelineProps`](#cdk-amazon-chime-resources.MediaInsightsPipelineProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.parameter.scope" id="cdkamazonchimeresourcesmediainsightspipelineparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.parameter.id" id="cdkamazonchimeresourcesmediainsightspipelineparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.parameter.props" id="cdkamazonchimeresourcesmediainsightspipelineparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.MediaInsightsPipelineProps`](#cdk-amazon-chime-resources.MediaInsightsPipelineProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`mediaInsightsPipelineConfigurationArn`](#cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationarn)<span title="Required">*</span> | `string` | *No description.* |
| [`mediaInsightsPipelineConfigurationId`](#cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationid)<span title="Required">*</span> | `string` | *No description.* |
| [`mediaInsightsPipelineConfigurationName`](#cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `mediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationArn" id="cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationarn"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationArn: string;
```

- *Type:* `string`

---

##### `mediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationId" id="cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationid"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationId: string;
```

- *Type:* `string`

---

##### `mediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipeline.property.mediaInsightsPipelineConfigurationName" id="cdkamazonchimeresourcesmediainsightspipelinepropertymediainsightspipelineconfigurationname"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* `string`

---


### MessagingAppInstance <a name="cdk-amazon-chime-resources.MessagingAppInstance" id="cdkamazonchimeresourcesmessagingappinstance"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MessagingAppInstance.Initializer" id="cdkamazonchimeresourcesmessagingappinstanceinitializer"></a>

```typescript
import { MessagingAppInstance } from 'cdk-amazon-chime-resources'

new MessagingAppInstance(scope: Construct, id: string, props: AppInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmessagingappinstanceparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmessagingappinstanceparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmessagingappinstanceparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceProps`](#cdk-amazon-chime-resources.AppInstanceProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.parameter.scope" id="cdkamazonchimeresourcesmessagingappinstanceparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.parameter.id" id="cdkamazonchimeresourcesmessagingappinstanceparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.parameter.props" id="cdkamazonchimeresourcesmessagingappinstanceparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.AppInstanceProps`](#cdk-amazon-chime-resources.AppInstanceProps)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`retention`](#cdkamazonchimeresourcesmessagingappinstanceretention) | *No description.* |
| [`streaming`](#cdkamazonchimeresourcesmessagingappinstancestreaming) | *No description.* |

---

##### `retention` <a name="cdk-amazon-chime-resources.MessagingAppInstance.retention" id="cdkamazonchimeresourcesmessagingappinstanceretention"></a>

```typescript
public retention(days: number)
```

###### `days`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.parameter.days" id="cdkamazonchimeresourcesmessagingappinstanceparameterdays"></a>

- *Type:* `number`

---

##### `streaming` <a name="cdk-amazon-chime-resources.MessagingAppInstance.streaming" id="cdkamazonchimeresourcesmessagingappinstancestreaming"></a>

```typescript
public streaming(streamingConfigs: StreamingConfig[])
```

###### `streamingConfigs`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.parameter.streamingConfigs" id="cdkamazonchimeresourcesmessagingappinstanceparameterstreamingconfigs"></a>

- *Type:* [`cdk-amazon-chime-resources.StreamingConfig`](#cdk-amazon-chime-resources.StreamingConfig)[]

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceArn`](#cdkamazonchimeresourcesmessagingappinstancepropertyappinstancearn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstance.property.appInstanceArn" id="cdkamazonchimeresourcesmessagingappinstancepropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`

---


### MessagingAppInstanceAdmin <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin" id="cdkamazonchimeresourcesmessagingappinstanceadmin"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.Initializer" id="cdkamazonchimeresourcesmessagingappinstanceadmininitializer"></a>

```typescript
import { MessagingAppInstanceAdmin } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceAdmin(scope: Construct, id: string, props: AppInstanceAdminProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmessagingappinstanceadminparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmessagingappinstanceadminparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmessagingappinstanceadminparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceAdminProps`](#cdk-amazon-chime-resources.AppInstanceAdminProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.parameter.scope" id="cdkamazonchimeresourcesmessagingappinstanceadminparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.parameter.id" id="cdkamazonchimeresourcesmessagingappinstanceadminparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.parameter.props" id="cdkamazonchimeresourcesmessagingappinstanceadminparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.AppInstanceAdminProps`](#cdk-amazon-chime-resources.AppInstanceAdminProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceAdminArn`](#cdkamazonchimeresourcesmessagingappinstanceadminpropertyappinstanceadminarn)<span title="Required">*</span> | `string` | *No description.* |
| [`appInstanceAdminName`](#cdkamazonchimeresourcesmessagingappinstanceadminpropertyappinstanceadminname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `appInstanceAdminArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminArn" id="cdkamazonchimeresourcesmessagingappinstanceadminpropertyappinstanceadminarn"></a>

```typescript
public readonly appInstanceAdminArn: string;
```

- *Type:* `string`

---

##### `appInstanceAdminName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceAdmin.property.appInstanceAdminName" id="cdkamazonchimeresourcesmessagingappinstanceadminpropertyappinstanceadminname"></a>

```typescript
public readonly appInstanceAdminName: string;
```

- *Type:* `string`

---


### MessagingAppInstanceBot <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot" id="cdkamazonchimeresourcesmessagingappinstancebot"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot.Initializer" id="cdkamazonchimeresourcesmessagingappinstancebotinitializer"></a>

```typescript
import { MessagingAppInstanceBot } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceBot(scope: Construct, id: string, props: AppInstanceBotProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmessagingappinstancebotparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmessagingappinstancebotparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmessagingappinstancebotparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceBotProps`](#cdk-amazon-chime-resources.AppInstanceBotProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot.parameter.scope" id="cdkamazonchimeresourcesmessagingappinstancebotparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot.parameter.id" id="cdkamazonchimeresourcesmessagingappinstancebotparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot.parameter.props" id="cdkamazonchimeresourcesmessagingappinstancebotparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.AppInstanceBotProps`](#cdk-amazon-chime-resources.AppInstanceBotProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceBotArn`](#cdkamazonchimeresourcesmessagingappinstancebotpropertyappinstancebotarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `appInstanceBotArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceBot.property.appInstanceBotArn" id="cdkamazonchimeresourcesmessagingappinstancebotpropertyappinstancebotarn"></a>

```typescript
public readonly appInstanceBotArn: string;
```

- *Type:* `string`

---


### MessagingAppInstanceUser <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser" id="cdkamazonchimeresourcesmessagingappinstanceuser"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser.Initializer" id="cdkamazonchimeresourcesmessagingappinstanceuserinitializer"></a>

```typescript
import { MessagingAppInstanceUser } from 'cdk-amazon-chime-resources'

new MessagingAppInstanceUser(scope: Construct, id: string, props: AppInstanceUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmessagingappinstanceuserparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmessagingappinstanceuserparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmessagingappinstanceuserparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceUserProps`](#cdk-amazon-chime-resources.AppInstanceUserProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser.parameter.scope" id="cdkamazonchimeresourcesmessagingappinstanceuserparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser.parameter.id" id="cdkamazonchimeresourcesmessagingappinstanceuserparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser.parameter.props" id="cdkamazonchimeresourcesmessagingappinstanceuserparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.AppInstanceUserProps`](#cdk-amazon-chime-resources.AppInstanceUserProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceUserArn`](#cdkamazonchimeresourcesmessagingappinstanceuserpropertyappinstanceuserarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `appInstanceUserArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingAppInstanceUser.property.appInstanceUserArn" id="cdkamazonchimeresourcesmessagingappinstanceuserpropertyappinstanceuserarn"></a>

```typescript
public readonly appInstanceUserArn: string;
```

- *Type:* `string`

---


### MessagingResources <a name="cdk-amazon-chime-resources.MessagingResources" id="cdkamazonchimeresourcesmessagingresources"></a>

#### Initializers <a name="cdk-amazon-chime-resources.MessagingResources.Initializer" id="cdkamazonchimeresourcesmessagingresourcesinitializer"></a>

```typescript
import { MessagingResources } from 'cdk-amazon-chime-resources'

new MessagingResources(scope: Construct, id: string, props: MessagingResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesmessagingresourcesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesmessagingresourcesparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesmessagingresourcesparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.MessagingResourceProps`](#cdk-amazon-chime-resources.MessagingResourceProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.parameter.scope" id="cdkamazonchimeresourcesmessagingresourcesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.parameter.id" id="cdkamazonchimeresourcesmessagingresourcesparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.parameter.props" id="cdkamazonchimeresourcesmessagingresourcesparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.MessagingResourceProps`](#cdk-amazon-chime-resources.MessagingResourceProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`messagingCustomResource`](#cdkamazonchimeresourcesmessagingresourcespropertymessagingcustomresource)<span title="Required">*</span> | [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource) | *No description.* |

---

##### `messagingCustomResource`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.property.messagingCustomResource" id="cdkamazonchimeresourcesmessagingresourcespropertymessagingcustomresource"></a>

```typescript
public readonly messagingCustomResource: CustomResource;
```

- *Type:* [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource)

---


### PSTNResources <a name="cdk-amazon-chime-resources.PSTNResources" id="cdkamazonchimeresourcespstnresources"></a>

#### Initializers <a name="cdk-amazon-chime-resources.PSTNResources.Initializer" id="cdkamazonchimeresourcespstnresourcesinitializer"></a>

```typescript
import { PSTNResources } from 'cdk-amazon-chime-resources'

new PSTNResources(scope: Construct, id: string, props: PSTNResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcespstnresourcesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcespstnresourcesparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcespstnresourcesparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.PSTNResourceProps`](#cdk-amazon-chime-resources.PSTNResourceProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.parameter.scope" id="cdkamazonchimeresourcespstnresourcesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.parameter.id" id="cdkamazonchimeresourcespstnresourcesparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.parameter.props" id="cdkamazonchimeresourcespstnresourcesparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.PSTNResourceProps`](#cdk-amazon-chime-resources.PSTNResourceProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`pstnCustomResource`](#cdkamazonchimeresourcespstnresourcespropertypstncustomresource)<span title="Required">*</span> | [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource) | *No description.* |

---

##### `pstnCustomResource`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.property.pstnCustomResource" id="cdkamazonchimeresourcespstnresourcespropertypstncustomresource"></a>

```typescript
public readonly pstnCustomResource: CustomResource;
```

- *Type:* [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource)

---


## Structs <a name="Structs" id="structs"></a>

### AmazonTranscribeCallAnalyticsProcessorConfiguration <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AmazonTranscribeCallAnalyticsProcessorConfiguration } from 'cdk-amazon-chime-resources'

const amazonTranscribeCallAnalyticsProcessorConfiguration: AmazonTranscribeCallAnalyticsProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`languageCode`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertylanguagecode)<span title="Required">*</span> | [`cdk-amazon-chime-resources.LanguageCode`](#cdk-amazon-chime-resources.LanguageCode) | *No description.* |
| [`callAnalyticsStreamCategories`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycallanalyticsstreamcategories) | `string`[] | *No description.* |
| [`contentIdentificationType`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycontentidentificationtype) | [`cdk-amazon-chime-resources.ContentIdentificationType`](#cdk-amazon-chime-resources.ContentIdentificationType) | *No description.* |
| [`contentRedactionType`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycontentredactiontype) | [`cdk-amazon-chime-resources.ContentRedactionType`](#cdk-amazon-chime-resources.ContentRedactionType) | *No description.* |
| [`enablePartialResultsStabilization`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyenablepartialresultsstabilization) | `boolean` | *No description.* |
| [`filterPartialResults`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyfilterpartialresults) | `boolean` | *No description.* |
| [`languageModelName`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertylanguagemodelname) | `string` | *No description.* |
| [`partialResultsStability`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypartialresultsstability) | [`cdk-amazon-chime-resources.PartialResultsStability`](#cdk-amazon-chime-resources.PartialResultsStability) | *No description.* |
| [`piiEntityTypes`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypiientitytypes) | `string` | *No description.* |
| [`postCallAnalyticsSettings`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypostcallanalyticssettings) | [`cdk-amazon-chime-resources.PostCallAnalyticsSettings`](#cdk-amazon-chime-resources.PostCallAnalyticsSettings) | *No description.* |
| [`vocabularyFilterMethod`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyfiltermethod) | [`cdk-amazon-chime-resources.VocabularyFilterMethod`](#cdk-amazon-chime-resources.VocabularyFilterMethod) | *No description.* |
| [`vocabularyFilterName`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyfiltername) | `string` | *No description.* |
| [`vocabularyName`](#cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyname) | `string` | *No description.* |

---

##### `languageCode`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageCode" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertylanguagecode"></a>

```typescript
public readonly languageCode: LanguageCode;
```

- *Type:* [`cdk-amazon-chime-resources.LanguageCode`](#cdk-amazon-chime-resources.LanguageCode)

---

##### `callAnalyticsStreamCategories`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.callAnalyticsStreamCategories" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycallanalyticsstreamcategories"></a>

```typescript
public readonly callAnalyticsStreamCategories: string[];
```

- *Type:* `string`[]

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentIdentificationType" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycontentidentificationtype"></a>

```typescript
public readonly contentIdentificationType: ContentIdentificationType;
```

- *Type:* [`cdk-amazon-chime-resources.ContentIdentificationType`](#cdk-amazon-chime-resources.ContentIdentificationType)

---

##### `contentRedactionType`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.contentRedactionType" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertycontentredactiontype"></a>

```typescript
public readonly contentRedactionType: ContentRedactionType;
```

- *Type:* [`cdk-amazon-chime-resources.ContentRedactionType`](#cdk-amazon-chime-resources.ContentRedactionType)

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.enablePartialResultsStabilization" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyenablepartialresultsstabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean;
```

- *Type:* `boolean`

---

##### `filterPartialResults`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.filterPartialResults" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyfilterpartialresults"></a>

```typescript
public readonly filterPartialResults: boolean;
```

- *Type:* `boolean`

---

##### `languageModelName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.languageModelName" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertylanguagemodelname"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* `string`

---

##### `partialResultsStability`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.partialResultsStability" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypartialresultsstability"></a>

```typescript
public readonly partialResultsStability: PartialResultsStability;
```

- *Type:* [`cdk-amazon-chime-resources.PartialResultsStability`](#cdk-amazon-chime-resources.PartialResultsStability)

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.piiEntityTypes" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypiientitytypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* `string`

---

##### `postCallAnalyticsSettings`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.postCallAnalyticsSettings" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertypostcallanalyticssettings"></a>

```typescript
public readonly postCallAnalyticsSettings: PostCallAnalyticsSettings;
```

- *Type:* [`cdk-amazon-chime-resources.PostCallAnalyticsSettings`](#cdk-amazon-chime-resources.PostCallAnalyticsSettings)

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterMethod" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyfiltermethod"></a>

```typescript
public readonly vocabularyFilterMethod: VocabularyFilterMethod;
```

- *Type:* [`cdk-amazon-chime-resources.VocabularyFilterMethod`](#cdk-amazon-chime-resources.VocabularyFilterMethod)

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyFilterName" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyfiltername"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* `string`

---

##### `vocabularyName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration.property.vocabularyName" id="cdkamazonchimeresourcesamazontranscribecallanalyticsprocessorconfigurationpropertyvocabularyname"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* `string`

---

### AmazonTranscribeProcessorConfiguration <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration" id="cdkamazonchimeresourcesamazontranscribeprocessorconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AmazonTranscribeProcessorConfiguration } from 'cdk-amazon-chime-resources'

const amazonTranscribeProcessorConfiguration: AmazonTranscribeProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`languageCode`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertylanguagecode)<span title="Required">*</span> | [`cdk-amazon-chime-resources.LanguageCode`](#cdk-amazon-chime-resources.LanguageCode) | *No description.* |
| [`contentIdentificationType`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertycontentidentificationtype) | [`cdk-amazon-chime-resources.ContentIdentificationType`](#cdk-amazon-chime-resources.ContentIdentificationType) | *No description.* |
| [`contentRedactionType`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertycontentredactiontype) | [`cdk-amazon-chime-resources.ContentRedactionType`](#cdk-amazon-chime-resources.ContentRedactionType) | *No description.* |
| [`enablePartialResultsStabilization`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyenablepartialresultsstabilization) | `boolean` | *No description.* |
| [`filterPartialResults`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyfilterpartialresults) | `boolean` | *No description.* |
| [`languageModelName`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertylanguagemodelname) | `string` | *No description.* |
| [`partialResultsStability`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertypartialresultsstability) | [`cdk-amazon-chime-resources.PartialResultsStability`](#cdk-amazon-chime-resources.PartialResultsStability) | *No description.* |
| [`piiEntityTypes`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertypiientitytypes) | `string` | *No description.* |
| [`showSpeakerLabel`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyshowspeakerlabel) | `boolean` | *No description.* |
| [`vocabularyFilterMethod`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyfiltermethod) | [`cdk-amazon-chime-resources.VocabularyFilterMethod`](#cdk-amazon-chime-resources.VocabularyFilterMethod) | *No description.* |
| [`vocabularyFilterName`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyfiltername) | `string` | *No description.* |
| [`vocabularyName`](#cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyname) | `string` | *No description.* |

---

##### `languageCode`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageCode" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertylanguagecode"></a>

```typescript
public readonly languageCode: LanguageCode;
```

- *Type:* [`cdk-amazon-chime-resources.LanguageCode`](#cdk-amazon-chime-resources.LanguageCode)

---

##### `contentIdentificationType`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentIdentificationType" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertycontentidentificationtype"></a>

```typescript
public readonly contentIdentificationType: ContentIdentificationType;
```

- *Type:* [`cdk-amazon-chime-resources.ContentIdentificationType`](#cdk-amazon-chime-resources.ContentIdentificationType)

---

##### `contentRedactionType`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.contentRedactionType" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertycontentredactiontype"></a>

```typescript
public readonly contentRedactionType: ContentRedactionType;
```

- *Type:* [`cdk-amazon-chime-resources.ContentRedactionType`](#cdk-amazon-chime-resources.ContentRedactionType)

---

##### `enablePartialResultsStabilization`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.enablePartialResultsStabilization" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyenablepartialresultsstabilization"></a>

```typescript
public readonly enablePartialResultsStabilization: boolean;
```

- *Type:* `boolean`

---

##### `filterPartialResults`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.filterPartialResults" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyfilterpartialresults"></a>

```typescript
public readonly filterPartialResults: boolean;
```

- *Type:* `boolean`

---

##### `languageModelName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.languageModelName" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertylanguagemodelname"></a>

```typescript
public readonly languageModelName: string;
```

- *Type:* `string`

---

##### `partialResultsStability`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.partialResultsStability" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertypartialresultsstability"></a>

```typescript
public readonly partialResultsStability: PartialResultsStability;
```

- *Type:* [`cdk-amazon-chime-resources.PartialResultsStability`](#cdk-amazon-chime-resources.PartialResultsStability)

---

##### `piiEntityTypes`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.piiEntityTypes" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertypiientitytypes"></a>

```typescript
public readonly piiEntityTypes: string;
```

- *Type:* `string`

---

##### `showSpeakerLabel`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.showSpeakerLabel" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyshowspeakerlabel"></a>

```typescript
public readonly showSpeakerLabel: boolean;
```

- *Type:* `boolean`

---

##### `vocabularyFilterMethod`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterMethod" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyfiltermethod"></a>

```typescript
public readonly vocabularyFilterMethod: VocabularyFilterMethod;
```

- *Type:* [`cdk-amazon-chime-resources.VocabularyFilterMethod`](#cdk-amazon-chime-resources.VocabularyFilterMethod)

---

##### `vocabularyFilterName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyFilterName" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyfiltername"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* `string`

---

##### `vocabularyName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration.property.vocabularyName" id="cdkamazonchimeresourcesamazontranscribeprocessorconfigurationpropertyvocabularyname"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* `string`

---

### AppInstanceAdminProps <a name="cdk-amazon-chime-resources.AppInstanceAdminProps" id="cdkamazonchimeresourcesappinstanceadminprops"></a>

Props for `AppInstance`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceAdminProps } from 'cdk-amazon-chime-resources'

const appInstanceAdminProps: AppInstanceAdminProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceAdminArn`](#cdkamazonchimeresourcesappinstanceadminpropspropertyappinstanceadminarn)<span title="Required">*</span> | `string` | The name of the app instance. |
| [`appInstanceArn`](#cdkamazonchimeresourcesappinstanceadminpropspropertyappinstancearn)<span title="Required">*</span> | `string` | The name of the app instance. |

---

##### `appInstanceAdminArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceAdminArn" id="cdkamazonchimeresourcesappinstanceadminpropspropertyappinstanceadminarn"></a>

```typescript
public readonly appInstanceAdminArn: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceAdminProps.property.appInstanceArn" id="cdkamazonchimeresourcesappinstanceadminpropspropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

### AppInstanceBotConfiguration <a name="cdk-amazon-chime-resources.AppInstanceBotConfiguration" id="cdkamazonchimeresourcesappinstancebotconfiguration"></a>

Props for `Configuration`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceBotConfiguration } from 'cdk-amazon-chime-resources'

const appInstanceBotConfiguration: AppInstanceBotConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`lex`](#cdkamazonchimeresourcesappinstancebotconfigurationpropertylex)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceBotLexConfiguration`](#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration) | *No description.* |

---

##### `lex`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotConfiguration.property.lex" id="cdkamazonchimeresourcesappinstancebotconfigurationpropertylex"></a>

```typescript
public readonly lex: AppInstanceBotLexConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.AppInstanceBotLexConfiguration`](#cdk-amazon-chime-resources.AppInstanceBotLexConfiguration)

---

### AppInstanceBotLexConfiguration <a name="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration" id="cdkamazonchimeresourcesappinstancebotlexconfiguration"></a>

Configuration for AppInstanceBot with Lex.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceBotLexConfiguration } from 'cdk-amazon-chime-resources'

const appInstanceBotLexConfiguration: AppInstanceBotLexConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`lexBotAliasArn`](#cdkamazonchimeresourcesappinstancebotlexconfigurationpropertylexbotaliasarn)<span title="Required">*</span> | `string` | Lex `BotAliasArn` from setup Lex Bot. |
| [`localeId`](#cdkamazonchimeresourcesappinstancebotlexconfigurationpropertylocaleid)<span title="Required">*</span> | `string` | LocaleId to use. |
| [`respondsTo`](#cdkamazonchimeresourcesappinstancebotlexconfigurationpropertyrespondsto)<span title="Required">*</span> | [`cdk-amazon-chime-resources.LexConfigurationRespondsTo`](#cdk-amazon-chime-resources.LexConfigurationRespondsTo) | Setting for when Lex is invoked. |
| [`welcomeIntent`](#cdkamazonchimeresourcesappinstancebotlexconfigurationpropertywelcomeintent) | `string` | An optional welcome intent to trigger when the Bot is added to the channel. |

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.lexBotAliasArn" id="cdkamazonchimeresourcesappinstancebotlexconfigurationpropertylexbotaliasarn"></a>

```typescript
public readonly lexBotAliasArn: string;
```

- *Type:* `string`

Lex `BotAliasArn` from setup Lex Bot.

---

##### `localeId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.localeId" id="cdkamazonchimeresourcesappinstancebotlexconfigurationpropertylocaleid"></a>

```typescript
public readonly localeId: string;
```

- *Type:* `string`

LocaleId to use.

This needs to match one of the localIds that BotAliasArn is configured with.

---

##### `respondsTo`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.respondsTo" id="cdkamazonchimeresourcesappinstancebotlexconfigurationpropertyrespondsto"></a>

```typescript
public readonly respondsTo: LexConfigurationRespondsTo;
```

- *Type:* [`cdk-amazon-chime-resources.LexConfigurationRespondsTo`](#cdk-amazon-chime-resources.LexConfigurationRespondsTo)

Setting for when Lex is invoked.

---

##### `welcomeIntent`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotLexConfiguration.property.welcomeIntent" id="cdkamazonchimeresourcesappinstancebotlexconfigurationpropertywelcomeintent"></a>

```typescript
public readonly welcomeIntent: string;
```

- *Type:* `string`

An optional welcome intent to trigger when the Bot is added to the channel.

---

### AppInstanceBotProps <a name="cdk-amazon-chime-resources.AppInstanceBotProps" id="cdkamazonchimeresourcesappinstancebotprops"></a>

Props for `AppInstance`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceBotProps } from 'cdk-amazon-chime-resources'

const appInstanceBotProps: AppInstanceBotProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceArn`](#cdkamazonchimeresourcesappinstancebotpropspropertyappinstancearn)<span title="Required">*</span> | `string` | The name of the app instance. |
| [`configuration`](#cdkamazonchimeresourcesappinstancebotpropspropertyconfiguration)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceBotConfiguration`](#cdk-amazon-chime-resources.AppInstanceBotConfiguration) | The configuration of the bot. |
| [`clientRequestToken`](#cdkamazonchimeresourcesappinstancebotpropspropertyclientrequesttoken) | `string` | The ClientRequestToken of the app instance. |
| [`metadata`](#cdkamazonchimeresourcesappinstancebotpropspropertymetadata) | `string` | The metadata of the app instance. |
| [`name`](#cdkamazonchimeresourcesappinstancebotpropspropertyname) | `string` | The name of the app instance. |
| [`tags`](#cdkamazonchimeresourcesappinstancebotpropspropertytags) | [`cdk-amazon-chime-resources.InstanceBotTags`](#cdk-amazon-chime-resources.InstanceBotTags)[] | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.appInstanceArn" id="cdkamazonchimeresourcesappinstancebotpropspropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `configuration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.configuration" id="cdkamazonchimeresourcesappinstancebotpropspropertyconfiguration"></a>

```typescript
public readonly configuration: AppInstanceBotConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.AppInstanceBotConfiguration`](#cdk-amazon-chime-resources.AppInstanceBotConfiguration)

The configuration of the bot.

This field populates Lex settings.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.clientRequestToken" id="cdkamazonchimeresourcesappinstancebotpropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.metadata" id="cdkamazonchimeresourcesappinstancebotpropspropertymetadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* `string`
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.name" id="cdkamazonchimeresourcesappinstancebotpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceBotProps.property.tags" id="cdkamazonchimeresourcesappinstancebotpropspropertytags"></a>

```typescript
public readonly tags: InstanceBotTags[];
```

- *Type:* [`cdk-amazon-chime-resources.InstanceBotTags`](#cdk-amazon-chime-resources.InstanceBotTags)[]
- *Default:* None

The tags for the creation request.

---

### AppInstanceProps <a name="cdk-amazon-chime-resources.AppInstanceProps" id="cdkamazonchimeresourcesappinstanceprops"></a>

Props for `AppInstance`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceProps } from 'cdk-amazon-chime-resources'

const appInstanceProps: AppInstanceProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`clientRequestToken`](#cdkamazonchimeresourcesappinstancepropspropertyclientrequesttoken) | `string` | The ClientRequestToken of the app instance. |
| [`metadata`](#cdkamazonchimeresourcesappinstancepropspropertymetadata) | `string` | The metadata of the app instance. |
| [`name`](#cdkamazonchimeresourcesappinstancepropspropertyname) | `string` | The name of the app instance. |
| [`tags`](#cdkamazonchimeresourcesappinstancepropspropertytags) | [`cdk-amazon-chime-resources.AppInstanceTags`](#cdk-amazon-chime-resources.AppInstanceTags)[] | The tags for the creation request. |

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceProps.property.clientRequestToken" id="cdkamazonchimeresourcesappinstancepropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceProps.property.metadata" id="cdkamazonchimeresourcesappinstancepropspropertymetadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* `string`
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceProps.property.name" id="cdkamazonchimeresourcesappinstancepropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceProps.property.tags" id="cdkamazonchimeresourcesappinstancepropspropertytags"></a>

```typescript
public readonly tags: AppInstanceTags[];
```

- *Type:* [`cdk-amazon-chime-resources.AppInstanceTags`](#cdk-amazon-chime-resources.AppInstanceTags)[]
- *Default:* None

The tags for the creation request.

---

### AppInstanceTags <a name="cdk-amazon-chime-resources.AppInstanceTags" id="cdkamazonchimeresourcesappinstancetags"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceTags } from 'cdk-amazon-chime-resources'

const appInstanceTags: AppInstanceTags = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcesappinstancetagspropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcesappinstancetagspropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceTags.property.key" id="cdkamazonchimeresourcesappinstancetagspropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceTags.property.value" id="cdkamazonchimeresourcesappinstancetagspropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### AppInstanceUserProps <a name="cdk-amazon-chime-resources.AppInstanceUserProps" id="cdkamazonchimeresourcesappinstanceuserprops"></a>

Props for `AppInstance`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AppInstanceUserProps } from 'cdk-amazon-chime-resources'

const appInstanceUserProps: AppInstanceUserProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceArn`](#cdkamazonchimeresourcesappinstanceuserpropspropertyappinstancearn)<span title="Required">*</span> | `string` | The name of the app instance. |
| [`appInstanceUserId`](#cdkamazonchimeresourcesappinstanceuserpropspropertyappinstanceuserid)<span title="Required">*</span> | `string` | The id of the app instance user. |
| [`clientRequestToken`](#cdkamazonchimeresourcesappinstanceuserpropspropertyclientrequesttoken) | `string` | The ClientRequestToken of the app instance. |
| [`metadata`](#cdkamazonchimeresourcesappinstanceuserpropspropertymetadata) | `string` | The metadata of the app instance. |
| [`name`](#cdkamazonchimeresourcesappinstanceuserpropspropertyname) | `string` | The name of the app instance. |
| [`tags`](#cdkamazonchimeresourcesappinstanceuserpropspropertytags) | [`cdk-amazon-chime-resources.InstanceUserTags`](#cdk-amazon-chime-resources.InstanceUserTags)[] | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceArn" id="cdkamazonchimeresourcesappinstanceuserpropspropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.appInstanceUserId" id="cdkamazonchimeresourcesappinstanceuserpropspropertyappinstanceuserid"></a>

```typescript
public readonly appInstanceUserId: string;
```

- *Type:* `string`
- *Default:* None

The id of the app instance user.

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.clientRequestToken" id="cdkamazonchimeresourcesappinstanceuserpropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`
- *Default:* None

The ClientRequestToken of the app instance.

This field is autopopulated if not provided.

---

##### `metadata`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.metadata" id="cdkamazonchimeresourcesappinstanceuserpropspropertymetadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* `string`
- *Default:* None

The metadata of the app instance.

Limited to a 1KB string in UTF-8.

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.name" id="cdkamazonchimeresourcesappinstanceuserpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* None

The name of the app instance.

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.AppInstanceUserProps.property.tags" id="cdkamazonchimeresourcesappinstanceuserpropspropertytags"></a>

```typescript
public readonly tags: InstanceUserTags[];
```

- *Type:* [`cdk-amazon-chime-resources.InstanceUserTags`](#cdk-amazon-chime-resources.InstanceUserTags)[]
- *Default:* None

The tags for the creation request.

---

### ChannelFlowProps <a name="cdk-amazon-chime-resources.ChannelFlowProps" id="cdkamazonchimeresourceschannelflowprops"></a>

Props for `AppInstance`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelFlow.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ChannelFlowProps } from 'cdk-amazon-chime-resources'

const channelFlowProps: ChannelFlowProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceArn`](#cdkamazonchimeresourceschannelflowpropspropertyappinstancearn)<span title="Required">*</span> | `string` | The ARN of the App Instance. |
| [`clientRequestToken`](#cdkamazonchimeresourceschannelflowpropspropertyclientrequesttoken)<span title="Required">*</span> | `string` | The client token for the request. |
| [`processors`](#cdkamazonchimeresourceschannelflowpropspropertyprocessors)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Processors`](#cdk-amazon-chime-resources.Processors)[] | Information about the processor Lambda functions. |
| [`name`](#cdkamazonchimeresourceschannelflowpropspropertyname) | `string` | The name of the channel flow. |
| [`tags`](#cdkamazonchimeresourceschannelflowpropspropertytags) | [`cdk-amazon-chime-resources.ChannelFlowTags`](#cdk-amazon-chime-resources.ChannelFlowTags)[] | The tags for the creation request. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlowProps.property.appInstanceArn" id="cdkamazonchimeresourceschannelflowpropspropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`
- *Default:* None

The ARN of the App Instance.

---

##### `clientRequestToken`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlowProps.property.clientRequestToken" id="cdkamazonchimeresourceschannelflowpropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`
- *Default:* None

The client token for the request.

An Idempotency token.

---

##### `processors`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlowProps.property.processors" id="cdkamazonchimeresourceschannelflowpropspropertyprocessors"></a>

```typescript
public readonly processors: Processors[];
```

- *Type:* [`cdk-amazon-chime-resources.Processors`](#cdk-amazon-chime-resources.Processors)[]
- *Default:* None

Information about the processor Lambda functions.

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.ChannelFlowProps.property.name" id="cdkamazonchimeresourceschannelflowpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* None

The name of the channel flow.

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.ChannelFlowProps.property.tags" id="cdkamazonchimeresourceschannelflowpropspropertytags"></a>

```typescript
public readonly tags: ChannelFlowTags[];
```

- *Type:* [`cdk-amazon-chime-resources.ChannelFlowTags`](#cdk-amazon-chime-resources.ChannelFlowTags)[]
- *Default:* None

The tags for the creation request.

---

### ChannelFlowTags <a name="cdk-amazon-chime-resources.ChannelFlowTags" id="cdkamazonchimeresourceschannelflowtags"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ChannelFlowTags } from 'cdk-amazon-chime-resources'

const channelFlowTags: ChannelFlowTags = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourceschannelflowtagspropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourceschannelflowtagspropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlowTags.property.key" id="cdkamazonchimeresourceschannelflowtagspropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ChannelFlowTags.property.value" id="cdkamazonchimeresourceschannelflowtagspropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### Configuration <a name="cdk-amazon-chime-resources.Configuration" id="cdkamazonchimeresourcesconfiguration"></a>

Props for `Configuration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ProcessorConfiguration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Configuration } from 'cdk-amazon-chime-resources'

const configuration: Configuration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`lambda`](#cdkamazonchimeresourcesconfigurationpropertylambda)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Lambda`](#cdk-amazon-chime-resources.Lambda) | Indicates that the processor is of type Lambda. |

---

##### `lambda`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Configuration.property.lambda" id="cdkamazonchimeresourcesconfigurationpropertylambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* [`cdk-amazon-chime-resources.Lambda`](#cdk-amazon-chime-resources.Lambda)
- *Default:* None

Indicates that the processor is of type Lambda.

---

### Elements <a name="cdk-amazon-chime-resources.Elements" id="cdkamazonchimeresourceselements"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Elements } from 'cdk-amazon-chime-resources'

const elements: Elements = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#cdkamazonchimeresourceselementspropertytype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.ElementsType`](#cdk-amazon-chime-resources.ElementsType) | *No description.* |
| [`amazonTranscribeCallAnalyticsProcessorConfiguration`](#cdkamazonchimeresourceselementspropertyamazontranscribecallanalyticsprocessorconfiguration) | [`cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration`](#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration) | *No description.* |
| [`amazonTranscribeProcessorConfiguration`](#cdkamazonchimeresourceselementspropertyamazontranscribeprocessorconfiguration) | [`cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration`](#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration) | *No description.* |
| [`kinesisDataStreamSinkConfiguration`](#cdkamazonchimeresourceselementspropertykinesisdatastreamsinkconfiguration) | [`cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration`](#cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration) | *No description.* |
| [`lambdaFunctionSinkConfiguration`](#cdkamazonchimeresourceselementspropertylambdafunctionsinkconfiguration) | [`cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration`](#cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration) | *No description.* |
| [`s3RecordingSinkConfiguration`](#cdkamazonchimeresourceselementspropertys3recordingsinkconfiguration) | [`cdk-amazon-chime-resources.S3RecordingSinkConfiguration`](#cdk-amazon-chime-resources.S3RecordingSinkConfiguration) | *No description.* |
| [`snsTopicSinkConfiguration`](#cdkamazonchimeresourceselementspropertysnstopicsinkconfiguration) | [`cdk-amazon-chime-resources.SnsTopicSinkConfiguration`](#cdk-amazon-chime-resources.SnsTopicSinkConfiguration) | *No description.* |
| [`sqsQueueSinkConfiguration`](#cdkamazonchimeresourceselementspropertysqsqueuesinkconfiguration) | [`cdk-amazon-chime-resources.SqsQueueSinkConfiguration`](#cdk-amazon-chime-resources.SqsQueueSinkConfiguration) | *No description.* |
| [`voiceAnalyticsProcessorConfiguration`](#cdkamazonchimeresourceselementspropertyvoiceanalyticsprocessorconfiguration) | [`cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration`](#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration) | *No description.* |

---

##### `type`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Elements.property.type" id="cdkamazonchimeresourceselementspropertytype"></a>

```typescript
public readonly type: ElementsType;
```

- *Type:* [`cdk-amazon-chime-resources.ElementsType`](#cdk-amazon-chime-resources.ElementsType)

---

##### `amazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.amazonTranscribeCallAnalyticsProcessorConfiguration" id="cdkamazonchimeresourceselementspropertyamazontranscribecallanalyticsprocessorconfiguration"></a>

```typescript
public readonly amazonTranscribeCallAnalyticsProcessorConfiguration: AmazonTranscribeCallAnalyticsProcessorConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration`](#cdk-amazon-chime-resources.AmazonTranscribeCallAnalyticsProcessorConfiguration)

---

##### `amazonTranscribeProcessorConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.amazonTranscribeProcessorConfiguration" id="cdkamazonchimeresourceselementspropertyamazontranscribeprocessorconfiguration"></a>

```typescript
public readonly amazonTranscribeProcessorConfiguration: AmazonTranscribeProcessorConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration`](#cdk-amazon-chime-resources.AmazonTranscribeProcessorConfiguration)

---

##### `kinesisDataStreamSinkConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.kinesisDataStreamSinkConfiguration" id="cdkamazonchimeresourceselementspropertykinesisdatastreamsinkconfiguration"></a>

```typescript
public readonly kinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration`](#cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration)

---

##### `lambdaFunctionSinkConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.lambdaFunctionSinkConfiguration" id="cdkamazonchimeresourceselementspropertylambdafunctionsinkconfiguration"></a>

```typescript
public readonly lambdaFunctionSinkConfiguration: LambdaFunctionSinkConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration`](#cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration)

---

##### `s3RecordingSinkConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.s3RecordingSinkConfiguration" id="cdkamazonchimeresourceselementspropertys3recordingsinkconfiguration"></a>

```typescript
public readonly s3RecordingSinkConfiguration: S3RecordingSinkConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.S3RecordingSinkConfiguration`](#cdk-amazon-chime-resources.S3RecordingSinkConfiguration)

---

##### `snsTopicSinkConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.snsTopicSinkConfiguration" id="cdkamazonchimeresourceselementspropertysnstopicsinkconfiguration"></a>

```typescript
public readonly snsTopicSinkConfiguration: SnsTopicSinkConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.SnsTopicSinkConfiguration`](#cdk-amazon-chime-resources.SnsTopicSinkConfiguration)

---

##### `sqsQueueSinkConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.sqsQueueSinkConfiguration" id="cdkamazonchimeresourceselementspropertysqsqueuesinkconfiguration"></a>

```typescript
public readonly sqsQueueSinkConfiguration: SqsQueueSinkConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.SqsQueueSinkConfiguration`](#cdk-amazon-chime-resources.SqsQueueSinkConfiguration)

---

##### `voiceAnalyticsProcessorConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Elements.property.voiceAnalyticsProcessorConfiguration" id="cdkamazonchimeresourceselementspropertyvoiceanalyticsprocessorconfiguration"></a>

```typescript
public readonly voiceAnalyticsProcessorConfiguration: VoiceAnalyticsProcessorConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration`](#cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration)

---

### InstanceBotTags <a name="cdk-amazon-chime-resources.InstanceBotTags" id="cdkamazonchimeresourcesinstancebottags"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InstanceBotTags } from 'cdk-amazon-chime-resources'

const instanceBotTags: InstanceBotTags = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcesinstancebottagspropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcesinstancebottagspropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.InstanceBotTags.property.key" id="cdkamazonchimeresourcesinstancebottagspropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.InstanceBotTags.property.value" id="cdkamazonchimeresourcesinstancebottagspropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### InstanceUserTags <a name="cdk-amazon-chime-resources.InstanceUserTags" id="cdkamazonchimeresourcesinstanceusertags"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { InstanceUserTags } from 'cdk-amazon-chime-resources'

const instanceUserTags: InstanceUserTags = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcesinstanceusertagspropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcesinstanceusertagspropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.InstanceUserTags.property.key" id="cdkamazonchimeresourcesinstanceusertagspropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.InstanceUserTags.property.value" id="cdkamazonchimeresourcesinstanceusertagspropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### IssueDetectionConfiguration <a name="cdk-amazon-chime-resources.IssueDetectionConfiguration" id="cdkamazonchimeresourcesissuedetectionconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { IssueDetectionConfiguration } from 'cdk-amazon-chime-resources'

const issueDetectionConfiguration: IssueDetectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ruleName`](#cdkamazonchimeresourcesissuedetectionconfigurationpropertyrulename)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.IssueDetectionConfiguration.property.ruleName" id="cdkamazonchimeresourcesissuedetectionconfigurationpropertyrulename"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* `string`

---

### KeywordMatchConfiguration <a name="cdk-amazon-chime-resources.KeywordMatchConfiguration" id="cdkamazonchimeresourceskeywordmatchconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { KeywordMatchConfiguration } from 'cdk-amazon-chime-resources'

const keywordMatchConfiguration: KeywordMatchConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`keywords`](#cdkamazonchimeresourceskeywordmatchconfigurationpropertykeywords)<span title="Required">*</span> | `string`[] | *No description.* |
| [`ruleName`](#cdkamazonchimeresourceskeywordmatchconfigurationpropertyrulename)<span title="Required">*</span> | `string` | *No description.* |
| [`negate`](#cdkamazonchimeresourceskeywordmatchconfigurationpropertynegate) | `boolean` | *No description.* |

---

##### `keywords`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.keywords" id="cdkamazonchimeresourceskeywordmatchconfigurationpropertykeywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

---

##### `ruleName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.ruleName" id="cdkamazonchimeresourceskeywordmatchconfigurationpropertyrulename"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* `string`

---

##### `negate`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.KeywordMatchConfiguration.property.negate" id="cdkamazonchimeresourceskeywordmatchconfigurationpropertynegate"></a>

```typescript
public readonly negate: boolean;
```

- *Type:* `boolean`

---

### KinesisDataStreamSinkConfiguration <a name="cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration" id="cdkamazonchimeresourceskinesisdatastreamsinkconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { KinesisDataStreamSinkConfiguration } from 'cdk-amazon-chime-resources'

const kinesisDataStreamSinkConfiguration: KinesisDataStreamSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`insightsTarget`](#cdkamazonchimeresourceskinesisdatastreamsinkconfigurationpropertyinsightstarget)<span title="Required">*</span> | `string` | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisDataStreamSinkConfiguration.property.insightsTarget" id="cdkamazonchimeresourceskinesisdatastreamsinkconfigurationpropertyinsightstarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* `string`

---

### KinesisVideoStreamConfiguration <a name="cdk-amazon-chime-resources.KinesisVideoStreamConfiguration" id="cdkamazonchimeresourceskinesisvideostreamconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { KinesisVideoStreamConfiguration } from 'cdk-amazon-chime-resources'

const kinesisVideoStreamConfiguration: KinesisVideoStreamConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`region`](#cdkamazonchimeresourceskinesisvideostreamconfigurationpropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`dataRetentionInHours`](#cdkamazonchimeresourceskinesisvideostreamconfigurationpropertydataretentioninhours) | `number` | *No description.* |

---

##### `region`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamConfiguration.property.region" id="cdkamazonchimeresourceskinesisvideostreamconfigurationpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `dataRetentionInHours`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamConfiguration.property.dataRetentionInHours" id="cdkamazonchimeresourceskinesisvideostreamconfigurationpropertydataretentioninhours"></a>

```typescript
public readonly dataRetentionInHours: number;
```

- *Type:* `number`

---

### KinesisVideoStreamPoolProps <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolProps" id="cdkamazonchimeresourceskinesisvideostreampoolprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { KinesisVideoStreamPoolProps } from 'cdk-amazon-chime-resources'

const kinesisVideoStreamPoolProps: KinesisVideoStreamPoolProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`streamConfiguration`](#cdkamazonchimeresourceskinesisvideostreampoolpropspropertystreamconfiguration)<span title="Required">*</span> | [`cdk-amazon-chime-resources.KinesisVideoStreamConfiguration`](#cdk-amazon-chime-resources.KinesisVideoStreamConfiguration) | *No description.* |
| [`clientRequestToken`](#cdkamazonchimeresourceskinesisvideostreampoolpropspropertyclientrequesttoken) | `string` | *No description.* |
| [`poolName`](#cdkamazonchimeresourceskinesisvideostreampoolpropspropertypoolname) | `string` | *No description.* |
| [`tags`](#cdkamazonchimeresourceskinesisvideostreampoolpropspropertytags) | [`cdk-amazon-chime-resources.KinesisVideoStreamPoolTag`](#cdk-amazon-chime-resources.KinesisVideoStreamPoolTag)[] | *No description.* |

---

##### `streamConfiguration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolProps.property.streamConfiguration" id="cdkamazonchimeresourceskinesisvideostreampoolpropspropertystreamconfiguration"></a>

```typescript
public readonly streamConfiguration: KinesisVideoStreamConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.KinesisVideoStreamConfiguration`](#cdk-amazon-chime-resources.KinesisVideoStreamConfiguration)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolProps.property.clientRequestToken" id="cdkamazonchimeresourceskinesisvideostreampoolpropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`

---

##### `poolName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolProps.property.poolName" id="cdkamazonchimeresourceskinesisvideostreampoolpropspropertypoolname"></a>

```typescript
public readonly poolName: string;
```

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolProps.property.tags" id="cdkamazonchimeresourceskinesisvideostreampoolpropspropertytags"></a>

```typescript
public readonly tags: KinesisVideoStreamPoolTag[];
```

- *Type:* [`cdk-amazon-chime-resources.KinesisVideoStreamPoolTag`](#cdk-amazon-chime-resources.KinesisVideoStreamPoolTag)[]

---

### KinesisVideoStreamPoolTag <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolTag" id="cdkamazonchimeresourceskinesisvideostreampooltag"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { KinesisVideoStreamPoolTag } from 'cdk-amazon-chime-resources'

const kinesisVideoStreamPoolTag: KinesisVideoStreamPoolTag = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourceskinesisvideostreampooltagpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourceskinesisvideostreampooltagpropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolTag.property.key" id="cdkamazonchimeresourceskinesisvideostreampooltagpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.KinesisVideoStreamPoolTag.property.value" id="cdkamazonchimeresourceskinesisvideostreampooltagpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### Lambda <a name="cdk-amazon-chime-resources.Lambda" id="cdkamazonchimeresourceslambda"></a>

Props for `LambdaConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_LambdaConfiguration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Lambda } from 'cdk-amazon-chime-resources'

const lambda: Lambda = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`invocationType`](#cdkamazonchimeresourceslambdapropertyinvocationtype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.InvocationType`](#cdk-amazon-chime-resources.InvocationType) | Controls how the Lambda function is invoked. |
| [`resourceArn`](#cdkamazonchimeresourceslambdapropertyresourcearn)<span title="Required">*</span> | `string` | The ARN of the Lambda message processing function. |

---

##### `invocationType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Lambda.property.invocationType" id="cdkamazonchimeresourceslambdapropertyinvocationtype"></a>

```typescript
public readonly invocationType: InvocationType;
```

- *Type:* [`cdk-amazon-chime-resources.InvocationType`](#cdk-amazon-chime-resources.InvocationType)
- *Default:* None

Controls how the Lambda function is invoked.

---

##### `resourceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Lambda.property.resourceArn" id="cdkamazonchimeresourceslambdapropertyresourcearn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* `string`
- *Default:* None

The ARN of the Lambda message processing function.

---

### LambdaFunctionSinkConfiguration <a name="cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration" id="cdkamazonchimeresourceslambdafunctionsinkconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { LambdaFunctionSinkConfiguration } from 'cdk-amazon-chime-resources'

const lambdaFunctionSinkConfiguration: LambdaFunctionSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`insightsTarget`](#cdkamazonchimeresourceslambdafunctionsinkconfigurationpropertyinsightstarget)<span title="Required">*</span> | `string` | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="cdk-amazon-chime-resources.LambdaFunctionSinkConfiguration.property.insightsTarget" id="cdkamazonchimeresourceslambdafunctionsinkconfigurationpropertyinsightstarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* `string`

---

### MediaInsightsConfiguration <a name="cdk-amazon-chime-resources.MediaInsightsConfiguration" id="cdkamazonchimeresourcesmediainsightsconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MediaInsightsConfiguration } from 'cdk-amazon-chime-resources'

const mediaInsightsConfiguration: MediaInsightsConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configurationArn`](#cdkamazonchimeresourcesmediainsightsconfigurationpropertyconfigurationarn)<span title="Required">*</span> | `string` | *No description.* |
| [`disabled`](#cdkamazonchimeresourcesmediainsightsconfigurationpropertydisabled)<span title="Required">*</span> | `boolean` | *No description.* |

---

##### `configurationArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsConfiguration.property.configurationArn" id="cdkamazonchimeresourcesmediainsightsconfigurationpropertyconfigurationarn"></a>

```typescript
public readonly configurationArn: string;
```

- *Type:* `string`

---

##### `disabled`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsConfiguration.property.disabled" id="cdkamazonchimeresourcesmediainsightsconfigurationpropertydisabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* `boolean`

---

### MediaInsightsPipelineProps <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps" id="cdkamazonchimeresourcesmediainsightspipelineprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MediaInsightsPipelineProps } from 'cdk-amazon-chime-resources'

const mediaInsightsPipelineProps: MediaInsightsPipelineProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`elements`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertyelements)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Elements`](#cdk-amazon-chime-resources.Elements)[] | *No description.* |
| [`resourceAccessRoleArn`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertyresourceaccessrolearn)<span title="Required">*</span> | `string` | *No description.* |
| [`clientRequestToken`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertyclientrequesttoken) | `string` | *No description.* |
| [`mediaInsightsPipelineConfigurationName`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertymediainsightspipelineconfigurationname) | `string` | *No description.* |
| [`realTimeAlertConfiguration`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertyrealtimealertconfiguration) | [`cdk-amazon-chime-resources.RealTimeAlertConfiguration`](#cdk-amazon-chime-resources.RealTimeAlertConfiguration) | *No description.* |
| [`tags`](#cdkamazonchimeresourcesmediainsightspipelinepropspropertytags) | [`cdk-amazon-chime-resources.MediaPipelineInsightsTag`](#cdk-amazon-chime-resources.MediaPipelineInsightsTag)[] | *No description.* |

---

##### `elements`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.elements" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertyelements"></a>

```typescript
public readonly elements: Elements[];
```

- *Type:* [`cdk-amazon-chime-resources.Elements`](#cdk-amazon-chime-resources.Elements)[]

---

##### `resourceAccessRoleArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.resourceAccessRoleArn" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertyresourceaccessrolearn"></a>

```typescript
public readonly resourceAccessRoleArn: string;
```

- *Type:* `string`

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.clientRequestToken" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`

---

##### `mediaInsightsPipelineConfigurationName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.mediaInsightsPipelineConfigurationName" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertymediainsightspipelineconfigurationname"></a>

```typescript
public readonly mediaInsightsPipelineConfigurationName: string;
```

- *Type:* `string`

---

##### `realTimeAlertConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.realTimeAlertConfiguration" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertyrealtimealertconfiguration"></a>

```typescript
public readonly realTimeAlertConfiguration: RealTimeAlertConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.RealTimeAlertConfiguration`](#cdk-amazon-chime-resources.RealTimeAlertConfiguration)

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MediaInsightsPipelineProps.property.tags" id="cdkamazonchimeresourcesmediainsightspipelinepropspropertytags"></a>

```typescript
public readonly tags: MediaPipelineInsightsTag[];
```

- *Type:* [`cdk-amazon-chime-resources.MediaPipelineInsightsTag`](#cdk-amazon-chime-resources.MediaPipelineInsightsTag)[]

---

### MediaPipelineInsightsTag <a name="cdk-amazon-chime-resources.MediaPipelineInsightsTag" id="cdkamazonchimeresourcesmediapipelineinsightstag"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MediaPipelineInsightsTag } from 'cdk-amazon-chime-resources'

const mediaPipelineInsightsTag: MediaPipelineInsightsTag = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcesmediapipelineinsightstagpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcesmediapipelineinsightstagpropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.key" id="cdkamazonchimeresourcesmediapipelineinsightstagpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MediaPipelineInsightsTag.property.value" id="cdkamazonchimeresourcesmediapipelineinsightstagpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### MessagingResourceProps <a name="cdk-amazon-chime-resources.MessagingResourceProps" id="cdkamazonchimeresourcesmessagingresourceprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { MessagingResourceProps } from 'cdk-amazon-chime-resources'

const messagingResourceProps: MessagingResourceProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`account`](#cdkamazonchimeresourcesmessagingresourcepropspropertyaccount) | `string` | The AWS account ID this resource belongs to. |
| [`environmentFromArn`](#cdkamazonchimeresourcesmessagingresourcepropspropertyenvironmentfromarn) | `string` | ARN to deduce region and account from. |
| [`physicalName`](#cdkamazonchimeresourcesmessagingresourcepropspropertyphysicalname) | `string` | The value passed in by users to the physical name prop of the resource. |
| [`region`](#cdkamazonchimeresourcesmessagingresourcepropspropertyregion) | `string` | The AWS region this resource belongs to. |
| [`properties`](#cdkamazonchimeresourcesmessagingresourcepropspropertyproperties)<span title="Required">*</span> | {[ key: string ]: `any`} | *No description.* |
| [`resourceType`](#cdkamazonchimeresourcesmessagingresourcepropspropertyresourcetype)<span title="Required">*</span> | `string` | *No description.* |
| [`uid`](#cdkamazonchimeresourcesmessagingresourcepropspropertyuid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.account" id="cdkamazonchimeresourcesmessagingresourcepropspropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.environmentFromArn" id="cdkamazonchimeresourcesmessagingresourcepropspropertyenvironmentfromarn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* `string`
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources.  Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.physicalName" id="cdkamazonchimeresourcesmessagingresourcepropspropertyphysicalname"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* `string`
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by   CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.region" id="cdkamazonchimeresourcesmessagingresourcepropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `properties`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.properties" id="cdkamazonchimeresourcesmessagingresourcepropspropertyproperties"></a>

```typescript
public readonly properties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `resourceType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.resourceType" id="cdkamazonchimeresourcesmessagingresourcepropspropertyresourcetype"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResourceProps.property.uid" id="cdkamazonchimeresourcesmessagingresourcepropspropertyuid"></a>

```typescript
public readonly uid: string;
```

- *Type:* `string`

---

### PhoneNumberProps <a name="cdk-amazon-chime-resources.PhoneNumberProps" id="cdkamazonchimeresourcesphonenumberprops"></a>

Props for `PhoneNumber`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PhoneNumberProps } from 'cdk-amazon-chime-resources'

const phoneNumberProps: PhoneNumberProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`phoneProductType`](#cdkamazonchimeresourcesphonenumberpropspropertyphoneproducttype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.PhoneProductType`](#cdk-amazon-chime-resources.PhoneProductType) | Phone Product Type (required) - SipMediaApplicationDialIn or VoiceConnector. |
| [`phoneAreaCode`](#cdkamazonchimeresourcesphonenumberpropspropertyphoneareacode) | `number` | Area Code for phone number request (optional)  - Usable only with US Country. |
| [`phoneCity`](#cdkamazonchimeresourcesphonenumberpropspropertyphonecity) | `string` | City for phone number request (optional) - Usable only with US Country. |
| [`phoneCountry`](#cdkamazonchimeresourcesphonenumberpropspropertyphonecountry) | [`cdk-amazon-chime-resources.PhoneCountry`](#cdk-amazon-chime-resources.PhoneCountry) | Country for phone number request (optional) - See https://docs.aws.amazon.com/chime/latest/ag/phone-country-reqs.html for more details. |
| [`phoneNumberTollFreePrefix`](#cdkamazonchimeresourcesphonenumberpropspropertyphonenumbertollfreeprefix) | `number` | Toll Free Prefix for phone number request (optional). |
| [`phoneNumberType`](#cdkamazonchimeresourcesphonenumberpropspropertyphonenumbertype) | [`cdk-amazon-chime-resources.PhoneNumberType`](#cdk-amazon-chime-resources.PhoneNumberType) | Phone Number Type for phone number request (optional) - Local or TollFree - Required with non-US country. |
| [`phoneState`](#cdkamazonchimeresourcesphonenumberpropspropertyphonestate) | `string` | State for phone number request (optional) - Usable only with US Country. |

---

##### `phoneProductType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneProductType" id="cdkamazonchimeresourcesphonenumberpropspropertyphoneproducttype"></a>

```typescript
public readonly phoneProductType: PhoneProductType;
```

- *Type:* [`cdk-amazon-chime-resources.PhoneProductType`](#cdk-amazon-chime-resources.PhoneProductType)
- *Default:* None

Phone Product Type (required) - SipMediaApplicationDialIn or VoiceConnector.

---

##### `phoneAreaCode`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneAreaCode" id="cdkamazonchimeresourcesphonenumberpropspropertyphoneareacode"></a>

```typescript
public readonly phoneAreaCode: number;
```

- *Type:* `number`
- *Default:* None

Area Code for phone number request (optional)  - Usable only with US Country.

---

##### `phoneCity`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCity" id="cdkamazonchimeresourcesphonenumberpropspropertyphonecity"></a>

```typescript
public readonly phoneCity: string;
```

- *Type:* `string`
- *Default:* None

City for phone number request (optional) - Usable only with US Country.

---

##### `phoneCountry`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneCountry" id="cdkamazonchimeresourcesphonenumberpropspropertyphonecountry"></a>

```typescript
public readonly phoneCountry: PhoneCountry;
```

- *Type:* [`cdk-amazon-chime-resources.PhoneCountry`](#cdk-amazon-chime-resources.PhoneCountry)
- *Default:* US

Country for phone number request (optional) - See https://docs.aws.amazon.com/chime/latest/ag/phone-country-reqs.html for more details.

---

##### `phoneNumberTollFreePrefix`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberTollFreePrefix" id="cdkamazonchimeresourcesphonenumberpropspropertyphonenumbertollfreeprefix"></a>

```typescript
public readonly phoneNumberTollFreePrefix: number;
```

- *Type:* `number`
- *Default:* None

Toll Free Prefix for phone number request (optional).

---

##### `phoneNumberType`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneNumberType" id="cdkamazonchimeresourcesphonenumberpropspropertyphonenumbertype"></a>

```typescript
public readonly phoneNumberType: PhoneNumberType;
```

- *Type:* [`cdk-amazon-chime-resources.PhoneNumberType`](#cdk-amazon-chime-resources.PhoneNumberType)
- *Default:* None

Phone Number Type for phone number request (optional) - Local or TollFree - Required with non-US country.

---

##### `phoneState`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneNumberProps.property.phoneState" id="cdkamazonchimeresourcesphonenumberpropspropertyphonestate"></a>

```typescript
public readonly phoneState: string;
```

- *Type:* `string`
- *Default:* None

State for phone number request (optional) - Usable only with US Country.

---

### PostCallAnalyticsSettings <a name="cdk-amazon-chime-resources.PostCallAnalyticsSettings" id="cdkamazonchimeresourcespostcallanalyticssettings"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PostCallAnalyticsSettings } from 'cdk-amazon-chime-resources'

const postCallAnalyticsSettings: PostCallAnalyticsSettings = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dataAccessRoleArn`](#cdkamazonchimeresourcespostcallanalyticssettingspropertydataaccessrolearn)<span title="Required">*</span> | `string` | *No description.* |
| [`outputLocation`](#cdkamazonchimeresourcespostcallanalyticssettingspropertyoutputlocation)<span title="Required">*</span> | `string` | *No description.* |
| [`contentRedactionOutput`](#cdkamazonchimeresourcespostcallanalyticssettingspropertycontentredactionoutput) | [`cdk-amazon-chime-resources.ContentRedactionOutput`](#cdk-amazon-chime-resources.ContentRedactionOutput) | *No description.* |
| [`outputEncryptionKMSKeyId`](#cdkamazonchimeresourcespostcallanalyticssettingspropertyoutputencryptionkmskeyid) | `string` | *No description.* |

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.dataAccessRoleArn" id="cdkamazonchimeresourcespostcallanalyticssettingspropertydataaccessrolearn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* `string`

---

##### `outputLocation`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputLocation" id="cdkamazonchimeresourcespostcallanalyticssettingspropertyoutputlocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* `string`

---

##### `contentRedactionOutput`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.contentRedactionOutput" id="cdkamazonchimeresourcespostcallanalyticssettingspropertycontentredactionoutput"></a>

```typescript
public readonly contentRedactionOutput: ContentRedactionOutput;
```

- *Type:* [`cdk-amazon-chime-resources.ContentRedactionOutput`](#cdk-amazon-chime-resources.ContentRedactionOutput)

---

##### `outputEncryptionKMSKeyId`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PostCallAnalyticsSettings.property.outputEncryptionKMSKeyId" id="cdkamazonchimeresourcespostcallanalyticssettingspropertyoutputencryptionkmskeyid"></a>

```typescript
public readonly outputEncryptionKMSKeyId: string;
```

- *Type:* `string`

---

### Processors <a name="cdk-amazon-chime-resources.Processors" id="cdkamazonchimeresourcesprocessors"></a>

Props for `Processors`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_Processor.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Processors } from 'cdk-amazon-chime-resources'

const processors: Processors = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configuration`](#cdkamazonchimeresourcesprocessorspropertyconfiguration)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Configuration`](#cdk-amazon-chime-resources.Configuration) | The information about the type of processor and its identifier. |
| [`executionOrder`](#cdkamazonchimeresourcesprocessorspropertyexecutionorder)<span title="Required">*</span> | `number` | The sequence in which processors run. |
| [`fallbackAction`](#cdkamazonchimeresourcesprocessorspropertyfallbackaction)<span title="Required">*</span> | [`cdk-amazon-chime-resources.FallbackAction`](#cdk-amazon-chime-resources.FallbackAction) | Determines whether to continue with message processing or stop it in cases where communication with a processor fails. |
| [`name`](#cdkamazonchimeresourcesprocessorspropertyname)<span title="Required">*</span> | `string` | The name of the Channel Flow Processor. |

---

##### `configuration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Processors.property.configuration" id="cdkamazonchimeresourcesprocessorspropertyconfiguration"></a>

```typescript
public readonly configuration: Configuration;
```

- *Type:* [`cdk-amazon-chime-resources.Configuration`](#cdk-amazon-chime-resources.Configuration)
- *Default:* None

The information about the type of processor and its identifier.

---

##### `executionOrder`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Processors.property.executionOrder" id="cdkamazonchimeresourcesprocessorspropertyexecutionorder"></a>

```typescript
public readonly executionOrder: number;
```

- *Type:* `number`
- *Default:* None

The sequence in which processors run.

If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence. At this point, we support only 1 processor within a flow.

---

##### `fallbackAction`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Processors.property.fallbackAction" id="cdkamazonchimeresourcesprocessorspropertyfallbackaction"></a>

```typescript
public readonly fallbackAction: FallbackAction;
```

- *Type:* [`cdk-amazon-chime-resources.FallbackAction`](#cdk-amazon-chime-resources.FallbackAction)
- *Default:* None

Determines whether to continue with message processing or stop it in cases where communication with a processor fails.

If a processor has a fallback action of ABORT and communication with it fails, the processor sets the message status to FAILED and does not send the message to any recipients. Note that if the last processor in the channel flow sequence has a fallback action of CONTINUE and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.

---

##### `name`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Processors.property.name" id="cdkamazonchimeresourcesprocessorspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* None

The name of the Channel Flow Processor.

---

### PSTNResourceProps <a name="cdk-amazon-chime-resources.PSTNResourceProps" id="cdkamazonchimeresourcespstnresourceprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PSTNResourceProps } from 'cdk-amazon-chime-resources'

const pSTNResourceProps: PSTNResourceProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`account`](#cdkamazonchimeresourcespstnresourcepropspropertyaccount) | `string` | The AWS account ID this resource belongs to. |
| [`environmentFromArn`](#cdkamazonchimeresourcespstnresourcepropspropertyenvironmentfromarn) | `string` | ARN to deduce region and account from. |
| [`physicalName`](#cdkamazonchimeresourcespstnresourcepropspropertyphysicalname) | `string` | The value passed in by users to the physical name prop of the resource. |
| [`region`](#cdkamazonchimeresourcespstnresourcepropspropertyregion) | `string` | The AWS region this resource belongs to. |
| [`properties`](#cdkamazonchimeresourcespstnresourcepropspropertyproperties)<span title="Required">*</span> | {[ key: string ]: `any`} | *No description.* |
| [`resourceType`](#cdkamazonchimeresourcespstnresourcepropspropertyresourcetype)<span title="Required">*</span> | `string` | *No description.* |
| [`uid`](#cdkamazonchimeresourcespstnresourcepropspropertyuid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.account" id="cdkamazonchimeresourcespstnresourcepropspropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.environmentFromArn" id="cdkamazonchimeresourcespstnresourcepropspropertyenvironmentfromarn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* `string`
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources.  Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.physicalName" id="cdkamazonchimeresourcespstnresourcepropspropertyphysicalname"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* `string`
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by   CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated   by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.region" id="cdkamazonchimeresourcespstnresourcepropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `properties`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.properties" id="cdkamazonchimeresourcespstnresourcepropspropertyproperties"></a>

```typescript
public readonly properties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `resourceType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.resourceType" id="cdkamazonchimeresourcespstnresourcepropspropertyresourcetype"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* `string`

---

##### `uid`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResourceProps.property.uid" id="cdkamazonchimeresourcespstnresourcepropspropertyuid"></a>

```typescript
public readonly uid: string;
```

- *Type:* `string`

---

### RealTimeAlertConfiguration <a name="cdk-amazon-chime-resources.RealTimeAlertConfiguration" id="cdkamazonchimeresourcesrealtimealertconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RealTimeAlertConfiguration } from 'cdk-amazon-chime-resources'

const realTimeAlertConfiguration: RealTimeAlertConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`disabled`](#cdkamazonchimeresourcesrealtimealertconfigurationpropertydisabled)<span title="Required">*</span> | `boolean` | *No description.* |
| [`rules`](#cdkamazonchimeresourcesrealtimealertconfigurationpropertyrules)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Rules`](#cdk-amazon-chime-resources.Rules)[] | *No description.* |

---

##### `disabled`<sup>Required</sup> <a name="cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.disabled" id="cdkamazonchimeresourcesrealtimealertconfigurationpropertydisabled"></a>

```typescript
public readonly disabled: boolean;
```

- *Type:* `boolean`

---

##### `rules`<sup>Required</sup> <a name="cdk-amazon-chime-resources.RealTimeAlertConfiguration.property.rules" id="cdkamazonchimeresourcesrealtimealertconfigurationpropertyrules"></a>

```typescript
public readonly rules: Rules[];
```

- *Type:* [`cdk-amazon-chime-resources.Rules`](#cdk-amazon-chime-resources.Rules)[]

---

### Routes <a name="cdk-amazon-chime-resources.Routes" id="cdkamazonchimeresourcesroutes"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Routes } from 'cdk-amazon-chime-resources'

const routes: Routes = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`host`](#cdkamazonchimeresourcesroutespropertyhost)<span title="Required">*</span> | `string` | *No description.* |
| [`port`](#cdkamazonchimeresourcesroutespropertyport)<span title="Required">*</span> | `number` | *No description.* |
| [`priority`](#cdkamazonchimeresourcesroutespropertypriority)<span title="Required">*</span> | `number` | *No description.* |
| [`protocol`](#cdkamazonchimeresourcesroutespropertyprotocol)<span title="Required">*</span> | [`cdk-amazon-chime-resources.Protocol`](#cdk-amazon-chime-resources.Protocol) | *No description.* |
| [`weight`](#cdkamazonchimeresourcesroutespropertyweight)<span title="Required">*</span> | `number` | *No description.* |

---

##### `host`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Routes.property.host" id="cdkamazonchimeresourcesroutespropertyhost"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

---

##### `port`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Routes.property.port" id="cdkamazonchimeresourcesroutespropertyport"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `priority`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Routes.property.priority" id="cdkamazonchimeresourcesroutespropertypriority"></a>

```typescript
public readonly priority: number;
```

- *Type:* `number`

---

##### `protocol`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Routes.property.protocol" id="cdkamazonchimeresourcesroutespropertyprotocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* [`cdk-amazon-chime-resources.Protocol`](#cdk-amazon-chime-resources.Protocol)

---

##### `weight`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Routes.property.weight" id="cdkamazonchimeresourcesroutespropertyweight"></a>

```typescript
public readonly weight: number;
```

- *Type:* `number`

---

### Rules <a name="cdk-amazon-chime-resources.Rules" id="cdkamazonchimeresourcesrules"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Rules } from 'cdk-amazon-chime-resources'

const rules: Rules = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`type`](#cdkamazonchimeresourcesrulespropertytype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.RulesType`](#cdk-amazon-chime-resources.RulesType) | *No description.* |
| [`issueDetectionConfiguration`](#cdkamazonchimeresourcesrulespropertyissuedetectionconfiguration) | [`cdk-amazon-chime-resources.IssueDetectionConfiguration`](#cdk-amazon-chime-resources.IssueDetectionConfiguration) | *No description.* |
| [`keywordMatchConfiguration`](#cdkamazonchimeresourcesrulespropertykeywordmatchconfiguration) | [`cdk-amazon-chime-resources.KeywordMatchConfiguration`](#cdk-amazon-chime-resources.KeywordMatchConfiguration) | *No description.* |
| [`sentimentConfiguration`](#cdkamazonchimeresourcesrulespropertysentimentconfiguration) | [`cdk-amazon-chime-resources.SentimentConfiguration`](#cdk-amazon-chime-resources.SentimentConfiguration) | *No description.* |

---

##### `type`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Rules.property.type" id="cdkamazonchimeresourcesrulespropertytype"></a>

```typescript
public readonly type: RulesType;
```

- *Type:* [`cdk-amazon-chime-resources.RulesType`](#cdk-amazon-chime-resources.RulesType)

---

##### `issueDetectionConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Rules.property.issueDetectionConfiguration" id="cdkamazonchimeresourcesrulespropertyissuedetectionconfiguration"></a>

```typescript
public readonly issueDetectionConfiguration: IssueDetectionConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.IssueDetectionConfiguration`](#cdk-amazon-chime-resources.IssueDetectionConfiguration)

---

##### `keywordMatchConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Rules.property.keywordMatchConfiguration" id="cdkamazonchimeresourcesrulespropertykeywordmatchconfiguration"></a>

```typescript
public readonly keywordMatchConfiguration: KeywordMatchConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.KeywordMatchConfiguration`](#cdk-amazon-chime-resources.KeywordMatchConfiguration)

---

##### `sentimentConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Rules.property.sentimentConfiguration" id="cdkamazonchimeresourcesrulespropertysentimentconfiguration"></a>

```typescript
public readonly sentimentConfiguration: SentimentConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.SentimentConfiguration`](#cdk-amazon-chime-resources.SentimentConfiguration)

---

### S3RecordingSinkConfiguration <a name="cdk-amazon-chime-resources.S3RecordingSinkConfiguration" id="cdkamazonchimeresourcess3recordingsinkconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { S3RecordingSinkConfiguration } from 'cdk-amazon-chime-resources'

const s3RecordingSinkConfiguration: S3RecordingSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`destination`](#cdkamazonchimeresourcess3recordingsinkconfigurationpropertydestination)<span title="Required">*</span> | `string` | *No description.* |

---

##### `destination`<sup>Required</sup> <a name="cdk-amazon-chime-resources.S3RecordingSinkConfiguration.property.destination" id="cdkamazonchimeresourcess3recordingsinkconfigurationpropertydestination"></a>

```typescript
public readonly destination: string;
```

- *Type:* `string`

---

### SentimentConfiguration <a name="cdk-amazon-chime-resources.SentimentConfiguration" id="cdkamazonchimeresourcessentimentconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SentimentConfiguration } from 'cdk-amazon-chime-resources'

const sentimentConfiguration: SentimentConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ruleName`](#cdkamazonchimeresourcessentimentconfigurationpropertyrulename)<span title="Required">*</span> | `string` | *No description.* |
| [`sentimentType`](#cdkamazonchimeresourcessentimentconfigurationpropertysentimenttype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.SentimentType`](#cdk-amazon-chime-resources.SentimentType) | *No description.* |
| [`timePeriod`](#cdkamazonchimeresourcessentimentconfigurationpropertytimeperiod)<span title="Required">*</span> | `number` | *No description.* |

---

##### `ruleName`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SentimentConfiguration.property.ruleName" id="cdkamazonchimeresourcessentimentconfigurationpropertyrulename"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* `string`

---

##### `sentimentType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SentimentConfiguration.property.sentimentType" id="cdkamazonchimeresourcessentimentconfigurationpropertysentimenttype"></a>

```typescript
public readonly sentimentType: SentimentType;
```

- *Type:* [`cdk-amazon-chime-resources.SentimentType`](#cdk-amazon-chime-resources.SentimentType)

---

##### `timePeriod`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SentimentConfiguration.property.timePeriod" id="cdkamazonchimeresourcessentimentconfigurationpropertytimeperiod"></a>

```typescript
public readonly timePeriod: number;
```

- *Type:* `number`

---

### ServerSideEncryptionConfiguration <a name="cdk-amazon-chime-resources.ServerSideEncryptionConfiguration" id="cdkamazonchimeresourcesserversideencryptionconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ServerSideEncryptionConfiguration } from 'cdk-amazon-chime-resources'

const serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`kmsKeyArn`](#cdkamazonchimeresourcesserversideencryptionconfigurationpropertykmskeyarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.ServerSideEncryptionConfiguration.property.kmsKeyArn" id="cdkamazonchimeresourcesserversideencryptionconfigurationpropertykmskeyarn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* `string`

---

### SipMediaApplicationAlexaSkillConfiguration <a name="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration" id="cdkamazonchimeresourcessipmediaapplicationalexaskillconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SipMediaApplicationAlexaSkillConfiguration } from 'cdk-amazon-chime-resources'

const sipMediaApplicationAlexaSkillConfiguration: SipMediaApplicationAlexaSkillConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`alexaSkillIds`](#cdkamazonchimeresourcessipmediaapplicationalexaskillconfigurationpropertyalexaskillids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`alexaSkillStatus`](#cdkamazonchimeresourcessipmediaapplicationalexaskillconfigurationpropertyalexaskillstatus)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AlexaSkillStatus`](#cdk-amazon-chime-resources.AlexaSkillStatus) | *No description.* |

---

##### `alexaSkillIds`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillIds" id="cdkamazonchimeresourcessipmediaapplicationalexaskillconfigurationpropertyalexaskillids"></a>

```typescript
public readonly alexaSkillIds: string[];
```

- *Type:* `string`[]

---

##### `alexaSkillStatus`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipMediaApplicationAlexaSkillConfiguration.property.alexaSkillStatus" id="cdkamazonchimeresourcessipmediaapplicationalexaskillconfigurationpropertyalexaskillstatus"></a>

```typescript
public readonly alexaSkillStatus: AlexaSkillStatus;
```

- *Type:* [`cdk-amazon-chime-resources.AlexaSkillStatus`](#cdk-amazon-chime-resources.AlexaSkillStatus)

---

### SipMediaApplicationLoggingConfiguration <a name="cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration" id="cdkamazonchimeresourcessipmediaapplicationloggingconfiguration"></a>

Props for `AppInstanceStreamingConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_AppInstanceStreamingConfiguration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SipMediaApplicationLoggingConfiguration } from 'cdk-amazon-chime-resources'

const sipMediaApplicationLoggingConfiguration: SipMediaApplicationLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`enableSipMediaApplicationMessageLogs`](#cdkamazonchimeresourcessipmediaapplicationloggingconfigurationpropertyenablesipmediaapplicationmessagelogs)<span title="Required">*</span> | `boolean` | Enables message logging for the specified SIP media application. |

---

##### `enableSipMediaApplicationMessageLogs`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipMediaApplicationLoggingConfiguration.property.enableSipMediaApplicationMessageLogs" id="cdkamazonchimeresourcessipmediaapplicationloggingconfigurationpropertyenablesipmediaapplicationmessagelogs"></a>

```typescript
public readonly enableSipMediaApplicationMessageLogs: boolean;
```

- *Type:* `boolean`

Enables message logging for the specified SIP media application.

---

### SipMediaAppProps <a name="cdk-amazon-chime-resources.SipMediaAppProps" id="cdkamazonchimeresourcessipmediaappprops"></a>

Props for `SipMediaApplication`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SipMediaAppProps } from 'cdk-amazon-chime-resources'

const sipMediaAppProps: SipMediaAppProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`endpoint`](#cdkamazonchimeresourcessipmediaapppropspropertyendpoint)<span title="Required">*</span> | `string` | endpoint for SipMediaApplication(required). |
| [`name`](#cdkamazonchimeresourcessipmediaapppropspropertyname) | `string` | name for SipMediaApplication (optional). |
| [`region`](#cdkamazonchimeresourcessipmediaapppropspropertyregion) | `string` | region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler. |

---

##### `endpoint`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipMediaAppProps.property.endpoint" id="cdkamazonchimeresourcessipmediaapppropspropertyendpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* `string`
- *Default:* none

endpoint for SipMediaApplication(required).

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.SipMediaAppProps.property.name" id="cdkamazonchimeresourcessipmediaapppropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* unique ID for resource

name for SipMediaApplication (optional).

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.SipMediaAppProps.property.region" id="cdkamazonchimeresourcessipmediaapppropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* same region as stack deployment

region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler.

---

### SipRuleProps <a name="cdk-amazon-chime-resources.SipRuleProps" id="cdkamazonchimeresourcessipruleprops"></a>

Props for `SipRule`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SipRuleProps } from 'cdk-amazon-chime-resources'

const sipRuleProps: SipRuleProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`targetApplications`](#cdkamazonchimeresourcessiprulepropspropertytargetapplications)<span title="Required">*</span> | [`cdk-amazon-chime-resources.SipRuleTargetApplication`](#cdk-amazon-chime-resources.SipRuleTargetApplication)[] | *No description.* |
| [`triggerType`](#cdkamazonchimeresourcessiprulepropspropertytriggertype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.TriggerType`](#cdk-amazon-chime-resources.TriggerType) | Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME. |
| [`triggerValue`](#cdkamazonchimeresourcessiprulepropspropertytriggervalue)<span title="Required">*</span> | `string` | Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI. |
| [`name`](#cdkamazonchimeresourcessiprulepropspropertyname) | `string` | name for SipRule (optional). |

---

##### `targetApplications`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleProps.property.targetApplications" id="cdkamazonchimeresourcessiprulepropspropertytargetapplications"></a>

```typescript
public readonly targetApplications: SipRuleTargetApplication[];
```

- *Type:* [`cdk-amazon-chime-resources.SipRuleTargetApplication`](#cdk-amazon-chime-resources.SipRuleTargetApplication)[]

---

##### `triggerType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleProps.property.triggerType" id="cdkamazonchimeresourcessiprulepropspropertytriggertype"></a>

```typescript
public readonly triggerType: TriggerType;
```

- *Type:* [`cdk-amazon-chime-resources.TriggerType`](#cdk-amazon-chime-resources.TriggerType)
- *Default:* none

Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME.

---

##### `triggerValue`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleProps.property.triggerValue" id="cdkamazonchimeresourcessiprulepropspropertytriggervalue"></a>

```typescript
public readonly triggerValue: string;
```

- *Type:* `string`
- *Default:* none

Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI.

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.SipRuleProps.property.name" id="cdkamazonchimeresourcessiprulepropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* unique ID for resource

name for SipRule (optional).

---

### SipRuleTargetApplication <a name="cdk-amazon-chime-resources.SipRuleTargetApplication" id="cdkamazonchimeresourcessipruletargetapplication"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SipRuleTargetApplication } from 'cdk-amazon-chime-resources'

const sipRuleTargetApplication: SipRuleTargetApplication = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`priority`](#cdkamazonchimeresourcessipruletargetapplicationpropertypriority)<span title="Required">*</span> | `number` | Priority for SipRule (required) - 1 to 25. |
| [`sipMediaApplicationId`](#cdkamazonchimeresourcessipruletargetapplicationpropertysipmediaapplicationid)<span title="Required">*</span> | `string` | SipMediaApplicationId for SipRule (required). |
| [`region`](#cdkamazonchimeresourcessipruletargetapplicationpropertyregion) | `string` | Region for SipRule (optional). |

---

##### `priority`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleTargetApplication.property.priority" id="cdkamazonchimeresourcessipruletargetapplicationpropertypriority"></a>

```typescript
public readonly priority: number;
```

- *Type:* `number`
- *Default:* none

Priority for SipRule (required) - 1 to 25.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleTargetApplication.property.sipMediaApplicationId" id="cdkamazonchimeresourcessipruletargetapplicationpropertysipmediaapplicationid"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* `string`
- *Default:* none

SipMediaApplicationId for SipRule (required).

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.SipRuleTargetApplication.property.region" id="cdkamazonchimeresourcessipruletargetapplicationpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* same region as stack deployment

Region for SipRule (optional).

---

### SnsTopicSinkConfiguration <a name="cdk-amazon-chime-resources.SnsTopicSinkConfiguration" id="cdkamazonchimeresourcessnstopicsinkconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SnsTopicSinkConfiguration } from 'cdk-amazon-chime-resources'

const snsTopicSinkConfiguration: SnsTopicSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`insightsTarget`](#cdkamazonchimeresourcessnstopicsinkconfigurationpropertyinsightstarget)<span title="Required">*</span> | `string` | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SnsTopicSinkConfiguration.property.insightsTarget" id="cdkamazonchimeresourcessnstopicsinkconfigurationpropertyinsightstarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* `string`

---

### SqsQueueSinkConfiguration <a name="cdk-amazon-chime-resources.SqsQueueSinkConfiguration" id="cdkamazonchimeresourcessqsqueuesinkconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SqsQueueSinkConfiguration } from 'cdk-amazon-chime-resources'

const sqsQueueSinkConfiguration: SqsQueueSinkConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`insightsTarget`](#cdkamazonchimeresourcessqsqueuesinkconfigurationpropertyinsightstarget)<span title="Required">*</span> | `string` | *No description.* |

---

##### `insightsTarget`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SqsQueueSinkConfiguration.property.insightsTarget" id="cdkamazonchimeresourcessqsqueuesinkconfigurationpropertyinsightstarget"></a>

```typescript
public readonly insightsTarget: string;
```

- *Type:* `string`

---

### Streaming <a name="cdk-amazon-chime-resources.Streaming" id="cdkamazonchimeresourcesstreaming"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Streaming } from 'cdk-amazon-chime-resources'

const streaming: Streaming = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dataRetention`](#cdkamazonchimeresourcesstreamingpropertydataretention)<span title="Required">*</span> | `number` | Streaming data retention for VoiceConnector. |
| [`enabled`](#cdkamazonchimeresourcesstreamingpropertyenabled)<span title="Required">*</span> | `boolean` | *No description.* |
| [`notificationTargets`](#cdkamazonchimeresourcesstreamingpropertynotificationtargets)<span title="Required">*</span> | [`cdk-amazon-chime-resources.NotificationTargetType`](#cdk-amazon-chime-resources.NotificationTargetType)[] | Streaming data retention for VoiceConnector. |
| [`mediaInsightsConfiguration`](#cdkamazonchimeresourcesstreamingpropertymediainsightsconfiguration) | [`cdk-amazon-chime-resources.MediaInsightsConfiguration`](#cdk-amazon-chime-resources.MediaInsightsConfiguration) | *No description.* |

---

##### `dataRetention`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Streaming.property.dataRetention" id="cdkamazonchimeresourcesstreamingpropertydataretention"></a>

```typescript
public readonly dataRetention: number;
```

- *Type:* `number`
- *Default:* 0

Streaming data retention for VoiceConnector.

---

##### `enabled`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Streaming.property.enabled" id="cdkamazonchimeresourcesstreamingpropertyenabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* `boolean`

---

##### `notificationTargets`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Streaming.property.notificationTargets" id="cdkamazonchimeresourcesstreamingpropertynotificationtargets"></a>

```typescript
public readonly notificationTargets: NotificationTargetType[];
```

- *Type:* [`cdk-amazon-chime-resources.NotificationTargetType`](#cdk-amazon-chime-resources.NotificationTargetType)[]
- *Default:* 0

Streaming data retention for VoiceConnector.

---

##### `mediaInsightsConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Streaming.property.mediaInsightsConfiguration" id="cdkamazonchimeresourcesstreamingpropertymediainsightsconfiguration"></a>

```typescript
public readonly mediaInsightsConfiguration: MediaInsightsConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.MediaInsightsConfiguration`](#cdk-amazon-chime-resources.MediaInsightsConfiguration)

---

### StreamingConfig <a name="cdk-amazon-chime-resources.StreamingConfig" id="cdkamazonchimeresourcesstreamingconfig"></a>

Props for `AppInstanceStreamingConfiguration`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_AppInstanceStreamingConfiguration.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { StreamingConfig } from 'cdk-amazon-chime-resources'

const streamingConfig: StreamingConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dataType`](#cdkamazonchimeresourcesstreamingconfigpropertydatatype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.MessagingDataType`](#cdk-amazon-chime-resources.MessagingDataType) | The type of data to be streamed. |
| [`resourceArn`](#cdkamazonchimeresourcesstreamingconfigpropertyresourcearn)<span title="Required">*</span> | `string` | The resource ARN of a Kinesis Stream. |

---

##### `dataType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.StreamingConfig.property.dataType" id="cdkamazonchimeresourcesstreamingconfigpropertydatatype"></a>

```typescript
public readonly dataType: MessagingDataType;
```

- *Type:* [`cdk-amazon-chime-resources.MessagingDataType`](#cdk-amazon-chime-resources.MessagingDataType)

The type of data to be streamed.

---

##### `resourceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.StreamingConfig.property.resourceArn" id="cdkamazonchimeresourcesstreamingconfigpropertyresourcearn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* `string`

The resource ARN of a Kinesis Stream.

---

### StreamingConfigurationProps <a name="cdk-amazon-chime-resources.StreamingConfigurationProps" id="cdkamazonchimeresourcesstreamingconfigurationprops"></a>

Props for `PutAppInstanceStreamingConfigurations`.

See: https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { StreamingConfigurationProps } from 'cdk-amazon-chime-resources'

const streamingConfigurationProps: StreamingConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`appInstanceArn`](#cdkamazonchimeresourcesstreamingconfigurationpropspropertyappinstancearn)<span title="Required">*</span> | `string` | The ARN of the App Instance. |
| [`streamingConfigs`](#cdkamazonchimeresourcesstreamingconfigurationpropspropertystreamingconfigs)<span title="Required">*</span> | [`cdk-amazon-chime-resources.StreamingConfig`](#cdk-amazon-chime-resources.StreamingConfig)[] | The AppInstanceStreamingConfigurations. |

---

##### `appInstanceArn`<sup>Required</sup> <a name="cdk-amazon-chime-resources.StreamingConfigurationProps.property.appInstanceArn" id="cdkamazonchimeresourcesstreamingconfigurationpropspropertyappinstancearn"></a>

```typescript
public readonly appInstanceArn: string;
```

- *Type:* `string`
- *Default:* None

The ARN of the App Instance.

---

##### `streamingConfigs`<sup>Required</sup> <a name="cdk-amazon-chime-resources.StreamingConfigurationProps.property.streamingConfigs" id="cdkamazonchimeresourcesstreamingconfigurationpropspropertystreamingconfigs"></a>

```typescript
public readonly streamingConfigs: StreamingConfig[];
```

- *Type:* [`cdk-amazon-chime-resources.StreamingConfig`](#cdk-amazon-chime-resources.StreamingConfig)[]
- *Default:* None

The AppInstanceStreamingConfigurations.

---

### Termination <a name="cdk-amazon-chime-resources.Termination" id="cdkamazonchimeresourcestermination"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Termination } from 'cdk-amazon-chime-resources'

const termination: Termination = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`callingRegions`](#cdkamazonchimeresourcesterminationpropertycallingregions)<span title="Required">*</span> | `string`[] | Calling Regions for VoiceConnector (optional). |
| [`terminationCidrs`](#cdkamazonchimeresourcesterminationpropertyterminationcidrs)<span title="Required">*</span> | `string`[] | termination IP for VoiceConnector (optional). |
| [`cps`](#cdkamazonchimeresourcesterminationpropertycps) | `number` | CPS Limit. |

---

##### `callingRegions`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Termination.property.callingRegions" id="cdkamazonchimeresourcesterminationpropertycallingregions"></a>

```typescript
public readonly callingRegions: string[];
```

- *Type:* `string`[]
- *Default:* ['US']

Calling Regions for VoiceConnector (optional).

---

##### `terminationCidrs`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Termination.property.terminationCidrs" id="cdkamazonchimeresourcesterminationpropertyterminationcidrs"></a>

```typescript
public readonly terminationCidrs: string[];
```

- *Type:* `string`[]
- *Default:* none

termination IP for VoiceConnector (optional).

---

##### `cps`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.Termination.property.cps" id="cdkamazonchimeresourcesterminationpropertycps"></a>

```typescript
public readonly cps: number;
```

- *Type:* `number`
- *Default:* 1

CPS Limit.

---

### VoiceAnalyticsProcessorConfiguration <a name="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration" id="cdkamazonchimeresourcesvoiceanalyticsprocessorconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VoiceAnalyticsProcessorConfiguration } from 'cdk-amazon-chime-resources'

const voiceAnalyticsProcessorConfiguration: VoiceAnalyticsProcessorConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`speakerSearchStatus`](#cdkamazonchimeresourcesvoiceanalyticsprocessorconfigurationpropertyspeakersearchstatus)<span title="Required">*</span> | [`cdk-amazon-chime-resources.SpeakerSearchStatus`](#cdk-amazon-chime-resources.SpeakerSearchStatus) | *No description.* |
| [`voiceToneAnalysisStatus`](#cdkamazonchimeresourcesvoiceanalyticsprocessorconfigurationpropertyvoicetoneanalysisstatus)<span title="Required">*</span> | [`cdk-amazon-chime-resources.VoiceToneAnalysisStatus`](#cdk-amazon-chime-resources.VoiceToneAnalysisStatus) | *No description.* |

---

##### `speakerSearchStatus`<sup>Required</sup> <a name="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.speakerSearchStatus" id="cdkamazonchimeresourcesvoiceanalyticsprocessorconfigurationpropertyspeakersearchstatus"></a>

```typescript
public readonly speakerSearchStatus: SpeakerSearchStatus;
```

- *Type:* [`cdk-amazon-chime-resources.SpeakerSearchStatus`](#cdk-amazon-chime-resources.SpeakerSearchStatus)

---

##### `voiceToneAnalysisStatus`<sup>Required</sup> <a name="cdk-amazon-chime-resources.VoiceAnalyticsProcessorConfiguration.property.voiceToneAnalysisStatus" id="cdkamazonchimeresourcesvoiceanalyticsprocessorconfigurationpropertyvoicetoneanalysisstatus"></a>

```typescript
public readonly voiceToneAnalysisStatus: VoiceToneAnalysisStatus;
```

- *Type:* [`cdk-amazon-chime-resources.VoiceToneAnalysisStatus`](#cdk-amazon-chime-resources.VoiceToneAnalysisStatus)

---

### VoiceConnectorLoggingConfiguration <a name="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration" id="cdkamazonchimeresourcesvoiceconnectorloggingconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VoiceConnectorLoggingConfiguration } from 'cdk-amazon-chime-resources'

const voiceConnectorLoggingConfiguration: VoiceConnectorLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`enableMediaMetricLogs`](#cdkamazonchimeresourcesvoiceconnectorloggingconfigurationpropertyenablemediametriclogs) | `boolean` | *No description.* |
| [`enableSIPLogs`](#cdkamazonchimeresourcesvoiceconnectorloggingconfigurationpropertyenablesiplogs) | `boolean` | *No description.* |

---

##### `enableMediaMetricLogs`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableMediaMetricLogs" id="cdkamazonchimeresourcesvoiceconnectorloggingconfigurationpropertyenablemediametriclogs"></a>

```typescript
public readonly enableMediaMetricLogs: boolean;
```

- *Type:* `boolean`

---

##### `enableSIPLogs`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration.property.enableSIPLogs" id="cdkamazonchimeresourcesvoiceconnectorloggingconfigurationpropertyenablesiplogs"></a>

```typescript
public readonly enableSIPLogs: boolean;
```

- *Type:* `boolean`

---

### VoiceConnectorProps <a name="cdk-amazon-chime-resources.VoiceConnectorProps" id="cdkamazonchimeresourcesvoiceconnectorprops"></a>

Props for `SipMediaApplication`.

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VoiceConnectorProps } from 'cdk-amazon-chime-resources'

const voiceConnectorProps: VoiceConnectorProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`encryption`](#cdkamazonchimeresourcesvoiceconnectorpropspropertyencryption) | `boolean` | Encryption boolean for VoiceConnector. |
| [`loggingConfiguration`](#cdkamazonchimeresourcesvoiceconnectorpropspropertyloggingconfiguration) | [`cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration`](#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration) | *No description.* |
| [`name`](#cdkamazonchimeresourcesvoiceconnectorpropspropertyname) | `string` | name for VoiceConnector. |
| [`origination`](#cdkamazonchimeresourcesvoiceconnectorpropspropertyorigination) | [`cdk-amazon-chime-resources.Routes`](#cdk-amazon-chime-resources.Routes)[] | *No description.* |
| [`region`](#cdkamazonchimeresourcesvoiceconnectorpropspropertyregion) | `string` | region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler. |
| [`streaming`](#cdkamazonchimeresourcesvoiceconnectorpropspropertystreaming) | [`cdk-amazon-chime-resources.Streaming`](#cdk-amazon-chime-resources.Streaming) | *No description.* |
| [`termination`](#cdkamazonchimeresourcesvoiceconnectorpropspropertytermination) | [`cdk-amazon-chime-resources.Termination`](#cdk-amazon-chime-resources.Termination) | *No description.* |

---

##### `encryption`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.encryption" id="cdkamazonchimeresourcesvoiceconnectorpropspropertyencryption"></a>

```typescript
public readonly encryption: boolean;
```

- *Type:* `boolean`
- *Default:* False

Encryption boolean for VoiceConnector.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.loggingConfiguration" id="cdkamazonchimeresourcesvoiceconnectorpropspropertyloggingconfiguration"></a>

```typescript
public readonly loggingConfiguration: VoiceConnectorLoggingConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration`](#cdk-amazon-chime-resources.VoiceConnectorLoggingConfiguration)

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.name" id="cdkamazonchimeresourcesvoiceconnectorpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* unique ID for resource

name for VoiceConnector.

---

##### `origination`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.origination" id="cdkamazonchimeresourcesvoiceconnectorpropspropertyorigination"></a>

```typescript
public readonly origination: Routes[];
```

- *Type:* [`cdk-amazon-chime-resources.Routes`](#cdk-amazon-chime-resources.Routes)[]

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.region" id="cdkamazonchimeresourcesvoiceconnectorpropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* same region as stack deployment

region for SipMediaApplication(required) - Must us-east-1 or us-west-2 and in the same region as the SipMediaApplication Lambda handler.

---

##### `streaming`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.streaming" id="cdkamazonchimeresourcesvoiceconnectorpropspropertystreaming"></a>

```typescript
public readonly streaming: Streaming;
```

- *Type:* [`cdk-amazon-chime-resources.Streaming`](#cdk-amazon-chime-resources.Streaming)

---

##### `termination`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceConnectorProps.property.termination" id="cdkamazonchimeresourcesvoiceconnectorpropspropertytermination"></a>

```typescript
public readonly termination: Termination;
```

- *Type:* [`cdk-amazon-chime-resources.Termination`](#cdk-amazon-chime-resources.Termination)

---

### VoiceProfileDomainProps <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps" id="cdkamazonchimeresourcesvoiceprofiledomainprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VoiceProfileDomainProps } from 'cdk-amazon-chime-resources'

const voiceProfileDomainProps: VoiceProfileDomainProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`serverSideEncryptionConfiguration`](#cdkamazonchimeresourcesvoiceprofiledomainpropspropertyserversideencryptionconfiguration)<span title="Required">*</span> | [`cdk-amazon-chime-resources.ServerSideEncryptionConfiguration`](#cdk-amazon-chime-resources.ServerSideEncryptionConfiguration) | *No description.* |
| [`clientRequestToken`](#cdkamazonchimeresourcesvoiceprofiledomainpropspropertyclientrequesttoken) | `string` | *No description.* |
| [`description`](#cdkamazonchimeresourcesvoiceprofiledomainpropspropertydescription) | `string` | *No description.* |
| [`name`](#cdkamazonchimeresourcesvoiceprofiledomainpropspropertyname) | `string` | *No description.* |
| [`tags`](#cdkamazonchimeresourcesvoiceprofiledomainpropspropertytags) | [`cdk-amazon-chime-resources.VoiceProfileDomainTag`](#cdk-amazon-chime-resources.VoiceProfileDomainTag)[] | *No description.* |

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.serverSideEncryptionConfiguration" id="cdkamazonchimeresourcesvoiceprofiledomainpropspropertyserversideencryptionconfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
```

- *Type:* [`cdk-amazon-chime-resources.ServerSideEncryptionConfiguration`](#cdk-amazon-chime-resources.ServerSideEncryptionConfiguration)

---

##### `clientRequestToken`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.clientRequestToken" id="cdkamazonchimeresourcesvoiceprofiledomainpropspropertyclientrequesttoken"></a>

```typescript
public readonly clientRequestToken: string;
```

- *Type:* `string`

---

##### `description`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.description" id="cdkamazonchimeresourcesvoiceprofiledomainpropspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `name`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.name" id="cdkamazonchimeresourcesvoiceprofiledomainpropspropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `tags`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainProps.property.tags" id="cdkamazonchimeresourcesvoiceprofiledomainpropspropertytags"></a>

```typescript
public readonly tags: VoiceProfileDomainTag[];
```

- *Type:* [`cdk-amazon-chime-resources.VoiceProfileDomainTag`](#cdk-amazon-chime-resources.VoiceProfileDomainTag)[]

---

### VoiceProfileDomainTag <a name="cdk-amazon-chime-resources.VoiceProfileDomainTag" id="cdkamazonchimeresourcesvoiceprofiledomaintag"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VoiceProfileDomainTag } from 'cdk-amazon-chime-resources'

const voiceProfileDomainTag: VoiceProfileDomainTag = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcesvoiceprofiledomaintagpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcesvoiceprofiledomaintagpropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainTag.property.key" id="cdkamazonchimeresourcesvoiceprofiledomaintagpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.VoiceProfileDomainTag.property.value" id="cdkamazonchimeresourcesvoiceprofiledomaintagpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---



## Enums <a name="Enums" id="enums"></a>

### AlexaSkillStatus <a name="AlexaSkillStatus" id="alexaskillstatus"></a>

| **Name** | **Description** |
| --- | --- |
| [`ACTIVE`](#cdkamazonchimeresourcesalexaskillstatusactive) | *No description.* |
| [`INACTIVE`](#cdkamazonchimeresourcesalexaskillstatusinactive) | *No description.* |

---

#### `ACTIVE` <a name="cdk-amazon-chime-resources.AlexaSkillStatus.ACTIVE" id="cdkamazonchimeresourcesalexaskillstatusactive"></a>

---


#### `INACTIVE` <a name="cdk-amazon-chime-resources.AlexaSkillStatus.INACTIVE" id="cdkamazonchimeresourcesalexaskillstatusinactive"></a>

---


### ContentIdentificationType <a name="ContentIdentificationType" id="contentidentificationtype"></a>

| **Name** | **Description** |
| --- | --- |
| [`PII`](#cdkamazonchimeresourcescontentidentificationtypepii) | *No description.* |

---

#### `PII` <a name="cdk-amazon-chime-resources.ContentIdentificationType.PII" id="cdkamazonchimeresourcescontentidentificationtypepii"></a>

---


### ContentRedactionOutput <a name="ContentRedactionOutput" id="contentredactionoutput"></a>

| **Name** | **Description** |
| --- | --- |
| [`REDACTED`](#cdkamazonchimeresourcescontentredactionoutputredacted) | *No description.* |
| [`REDACTED_AND_UNREDACTED`](#cdkamazonchimeresourcescontentredactionoutputredactedandunredacted) | *No description.* |

---

#### `REDACTED` <a name="cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED" id="cdkamazonchimeresourcescontentredactionoutputredacted"></a>

---


#### `REDACTED_AND_UNREDACTED` <a name="cdk-amazon-chime-resources.ContentRedactionOutput.REDACTED_AND_UNREDACTED" id="cdkamazonchimeresourcescontentredactionoutputredactedandunredacted"></a>

---


### ContentRedactionType <a name="ContentRedactionType" id="contentredactiontype"></a>

| **Name** | **Description** |
| --- | --- |
| [`PII`](#cdkamazonchimeresourcescontentredactiontypepii) | *No description.* |

---

#### `PII` <a name="cdk-amazon-chime-resources.ContentRedactionType.PII" id="cdkamazonchimeresourcescontentredactiontypepii"></a>

---


### ElementsType <a name="ElementsType" id="elementstype"></a>

| **Name** | **Description** |
| --- | --- |
| [`AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS`](#cdkamazonchimeresourceselementstypeamazontranscriptcallanalyticsprocess) | *No description.* |
| [`VOICE_ANALYTICS_PROCESSOR`](#cdkamazonchimeresourceselementstypevoiceanalyticsprocessor) | *No description.* |
| [`AMAZON_TRANSCRIBE_PROCESSOR`](#cdkamazonchimeresourceselementstypeamazontranscribeprocessor) | *No description.* |
| [`KINESIS_DATA_STREAM_SINK`](#cdkamazonchimeresourceselementstypekinesisdatastreamsink) | *No description.* |
| [`LAMBDA_FUNCTION_SINK`](#cdkamazonchimeresourceselementstypelambdafunctionsink) | *No description.* |
| [`SQS_QUEUE_SINK`](#cdkamazonchimeresourceselementstypesqsqueuesink) | *No description.* |
| [`SNS_TOPICS_SINK`](#cdkamazonchimeresourceselementstypesnstopicssink) | *No description.* |
| [`S3_RECORDING_SINK`](#cdkamazonchimeresourceselementstypes3recordingsink) | *No description.* |

---

#### `AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS` <a name="cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIPT_CALL_ANALYTICS_PROCESS" id="cdkamazonchimeresourceselementstypeamazontranscriptcallanalyticsprocess"></a>

---


#### `VOICE_ANALYTICS_PROCESSOR` <a name="cdk-amazon-chime-resources.ElementsType.VOICE_ANALYTICS_PROCESSOR" id="cdkamazonchimeresourceselementstypevoiceanalyticsprocessor"></a>

---


#### `AMAZON_TRANSCRIBE_PROCESSOR` <a name="cdk-amazon-chime-resources.ElementsType.AMAZON_TRANSCRIBE_PROCESSOR" id="cdkamazonchimeresourceselementstypeamazontranscribeprocessor"></a>

---


#### `KINESIS_DATA_STREAM_SINK` <a name="cdk-amazon-chime-resources.ElementsType.KINESIS_DATA_STREAM_SINK" id="cdkamazonchimeresourceselementstypekinesisdatastreamsink"></a>

---


#### `LAMBDA_FUNCTION_SINK` <a name="cdk-amazon-chime-resources.ElementsType.LAMBDA_FUNCTION_SINK" id="cdkamazonchimeresourceselementstypelambdafunctionsink"></a>

---


#### `SQS_QUEUE_SINK` <a name="cdk-amazon-chime-resources.ElementsType.SQS_QUEUE_SINK" id="cdkamazonchimeresourceselementstypesqsqueuesink"></a>

---


#### `SNS_TOPICS_SINK` <a name="cdk-amazon-chime-resources.ElementsType.SNS_TOPICS_SINK" id="cdkamazonchimeresourceselementstypesnstopicssink"></a>

---


#### `S3_RECORDING_SINK` <a name="cdk-amazon-chime-resources.ElementsType.S3_RECORDING_SINK" id="cdkamazonchimeresourceselementstypes3recordingsink"></a>

---


### FallbackAction <a name="FallbackAction" id="fallbackaction"></a>

| **Name** | **Description** |
| --- | --- |
| [`CONTINUE`](#cdkamazonchimeresourcesfallbackactioncontinue) | *No description.* |
| [`ABORT`](#cdkamazonchimeresourcesfallbackactionabort) | *No description.* |

---

#### `CONTINUE` <a name="cdk-amazon-chime-resources.FallbackAction.CONTINUE" id="cdkamazonchimeresourcesfallbackactioncontinue"></a>

---


#### `ABORT` <a name="cdk-amazon-chime-resources.FallbackAction.ABORT" id="cdkamazonchimeresourcesfallbackactionabort"></a>

---


### InvocationType <a name="InvocationType" id="invocationtype"></a>

| **Name** | **Description** |
| --- | --- |
| [`ASYNC`](#cdkamazonchimeresourcesinvocationtypeasync) | *No description.* |

---

#### `ASYNC` <a name="cdk-amazon-chime-resources.InvocationType.ASYNC" id="cdkamazonchimeresourcesinvocationtypeasync"></a>

---


### LanguageCode <a name="LanguageCode" id="languagecode"></a>

| **Name** | **Description** |
| --- | --- |
| [`EN_US`](#cdkamazonchimeresourceslanguagecodeenus) | *No description.* |
| [`EN_GB`](#cdkamazonchimeresourceslanguagecodeengb) | *No description.* |
| [`ES_US`](#cdkamazonchimeresourceslanguagecodeesus) | *No description.* |
| [`FR_CA`](#cdkamazonchimeresourceslanguagecodefrca) | *No description.* |
| [`FR_FR`](#cdkamazonchimeresourceslanguagecodefrfr) | *No description.* |
| [`EN_AU`](#cdkamazonchimeresourceslanguagecodeenau) | *No description.* |
| [`IT_IT`](#cdkamazonchimeresourceslanguagecodeitit) | *No description.* |
| [`DE_DE`](#cdkamazonchimeresourceslanguagecodedede) | *No description.* |
| [`PT_BR`](#cdkamazonchimeresourceslanguagecodeptbr) | *No description.* |

---

#### `EN_US` <a name="cdk-amazon-chime-resources.LanguageCode.EN_US" id="cdkamazonchimeresourceslanguagecodeenus"></a>

---


#### `EN_GB` <a name="cdk-amazon-chime-resources.LanguageCode.EN_GB" id="cdkamazonchimeresourceslanguagecodeengb"></a>

---


#### `ES_US` <a name="cdk-amazon-chime-resources.LanguageCode.ES_US" id="cdkamazonchimeresourceslanguagecodeesus"></a>

---


#### `FR_CA` <a name="cdk-amazon-chime-resources.LanguageCode.FR_CA" id="cdkamazonchimeresourceslanguagecodefrca"></a>

---


#### `FR_FR` <a name="cdk-amazon-chime-resources.LanguageCode.FR_FR" id="cdkamazonchimeresourceslanguagecodefrfr"></a>

---


#### `EN_AU` <a name="cdk-amazon-chime-resources.LanguageCode.EN_AU" id="cdkamazonchimeresourceslanguagecodeenau"></a>

---


#### `IT_IT` <a name="cdk-amazon-chime-resources.LanguageCode.IT_IT" id="cdkamazonchimeresourceslanguagecodeitit"></a>

---


#### `DE_DE` <a name="cdk-amazon-chime-resources.LanguageCode.DE_DE" id="cdkamazonchimeresourceslanguagecodedede"></a>

---


#### `PT_BR` <a name="cdk-amazon-chime-resources.LanguageCode.PT_BR" id="cdkamazonchimeresourceslanguagecodeptbr"></a>

---


### LexConfigurationRespondsTo <a name="LexConfigurationRespondsTo" id="lexconfigurationrespondsto"></a>

| **Name** | **Description** |
| --- | --- |
| [`STANDARD_MESSAGES`](#cdkamazonchimeresourceslexconfigurationrespondstostandardmessages) | *No description.* |

---

Props for `Configuration` when Configuration is for Lex.

#### `STANDARD_MESSAGES` <a name="cdk-amazon-chime-resources.LexConfigurationRespondsTo.STANDARD_MESSAGES" id="cdkamazonchimeresourceslexconfigurationrespondstostandardmessages"></a>

---


### MessagingDataType <a name="MessagingDataType" id="messagingdatatype"></a>

| **Name** | **Description** |
| --- | --- |
| [`CHANNEL`](#cdkamazonchimeresourcesmessagingdatatypechannel) | *No description.* |
| [`CHANNELMESSAGE`](#cdkamazonchimeresourcesmessagingdatatypechannelmessage) | *No description.* |

---

#### `CHANNEL` <a name="cdk-amazon-chime-resources.MessagingDataType.CHANNEL" id="cdkamazonchimeresourcesmessagingdatatypechannel"></a>

---


#### `CHANNELMESSAGE` <a name="cdk-amazon-chime-resources.MessagingDataType.CHANNELMESSAGE" id="cdkamazonchimeresourcesmessagingdatatypechannelmessage"></a>

---


### NotificationTargetType <a name="NotificationTargetType" id="notificationtargettype"></a>

| **Name** | **Description** |
| --- | --- |
| [`EVENTBRIDGE`](#cdkamazonchimeresourcesnotificationtargettypeeventbridge) | *No description.* |
| [`SNS`](#cdkamazonchimeresourcesnotificationtargettypesns) | *No description.* |
| [`SQS`](#cdkamazonchimeresourcesnotificationtargettypesqs) | *No description.* |

---

#### `EVENTBRIDGE` <a name="cdk-amazon-chime-resources.NotificationTargetType.EVENTBRIDGE" id="cdkamazonchimeresourcesnotificationtargettypeeventbridge"></a>

---


#### `SNS` <a name="cdk-amazon-chime-resources.NotificationTargetType.SNS" id="cdkamazonchimeresourcesnotificationtargettypesns"></a>

---


#### `SQS` <a name="cdk-amazon-chime-resources.NotificationTargetType.SQS" id="cdkamazonchimeresourcesnotificationtargettypesqs"></a>

---


### PartialResultsStability <a name="PartialResultsStability" id="partialresultsstability"></a>

| **Name** | **Description** |
| --- | --- |
| [`HIGH`](#cdkamazonchimeresourcespartialresultsstabilityhigh) | *No description.* |
| [`MEDIUM`](#cdkamazonchimeresourcespartialresultsstabilitymedium) | *No description.* |
| [`LOW`](#cdkamazonchimeresourcespartialresultsstabilitylow) | *No description.* |

---

#### `HIGH` <a name="cdk-amazon-chime-resources.PartialResultsStability.HIGH" id="cdkamazonchimeresourcespartialresultsstabilityhigh"></a>

---


#### `MEDIUM` <a name="cdk-amazon-chime-resources.PartialResultsStability.MEDIUM" id="cdkamazonchimeresourcespartialresultsstabilitymedium"></a>

---


#### `LOW` <a name="cdk-amazon-chime-resources.PartialResultsStability.LOW" id="cdkamazonchimeresourcespartialresultsstabilitylow"></a>

---


### PhoneCountry <a name="PhoneCountry" id="phonecountry"></a>

| **Name** | **Description** |
| --- | --- |
| [`AU`](#cdkamazonchimeresourcesphonecountryau) | *No description.* |
| [`AT`](#cdkamazonchimeresourcesphonecountryat) | *No description.* |
| [`CA`](#cdkamazonchimeresourcesphonecountryca) | *No description.* |
| [`DK`](#cdkamazonchimeresourcesphonecountrydk) | *No description.* |
| [`DE`](#cdkamazonchimeresourcesphonecountryde) | *No description.* |
| [`IE`](#cdkamazonchimeresourcesphonecountryie) | *No description.* |
| [`IT`](#cdkamazonchimeresourcesphonecountryit) | *No description.* |
| [`NZ`](#cdkamazonchimeresourcesphonecountrynz) | *No description.* |
| [`NG`](#cdkamazonchimeresourcesphonecountryng) | *No description.* |
| [`PR`](#cdkamazonchimeresourcesphonecountrypr) | *No description.* |
| [`KR`](#cdkamazonchimeresourcesphonecountrykr) | *No description.* |
| [`SE`](#cdkamazonchimeresourcesphonecountryse) | *No description.* |
| [`CH`](#cdkamazonchimeresourcesphonecountrych) | *No description.* |
| [`GB`](#cdkamazonchimeresourcesphonecountrygb) | *No description.* |
| [`US`](#cdkamazonchimeresourcesphonecountryus) | *No description.* |

---

#### `AU` <a name="cdk-amazon-chime-resources.PhoneCountry.AU" id="cdkamazonchimeresourcesphonecountryau"></a>

---


#### `AT` <a name="cdk-amazon-chime-resources.PhoneCountry.AT" id="cdkamazonchimeresourcesphonecountryat"></a>

---


#### `CA` <a name="cdk-amazon-chime-resources.PhoneCountry.CA" id="cdkamazonchimeresourcesphonecountryca"></a>

---


#### `DK` <a name="cdk-amazon-chime-resources.PhoneCountry.DK" id="cdkamazonchimeresourcesphonecountrydk"></a>

---


#### `DE` <a name="cdk-amazon-chime-resources.PhoneCountry.DE" id="cdkamazonchimeresourcesphonecountryde"></a>

---


#### `IE` <a name="cdk-amazon-chime-resources.PhoneCountry.IE" id="cdkamazonchimeresourcesphonecountryie"></a>

---


#### `IT` <a name="cdk-amazon-chime-resources.PhoneCountry.IT" id="cdkamazonchimeresourcesphonecountryit"></a>

---


#### `NZ` <a name="cdk-amazon-chime-resources.PhoneCountry.NZ" id="cdkamazonchimeresourcesphonecountrynz"></a>

---


#### `NG` <a name="cdk-amazon-chime-resources.PhoneCountry.NG" id="cdkamazonchimeresourcesphonecountryng"></a>

---


#### `PR` <a name="cdk-amazon-chime-resources.PhoneCountry.PR" id="cdkamazonchimeresourcesphonecountrypr"></a>

---


#### `KR` <a name="cdk-amazon-chime-resources.PhoneCountry.KR" id="cdkamazonchimeresourcesphonecountrykr"></a>

---


#### `SE` <a name="cdk-amazon-chime-resources.PhoneCountry.SE" id="cdkamazonchimeresourcesphonecountryse"></a>

---


#### `CH` <a name="cdk-amazon-chime-resources.PhoneCountry.CH" id="cdkamazonchimeresourcesphonecountrych"></a>

---


#### `GB` <a name="cdk-amazon-chime-resources.PhoneCountry.GB" id="cdkamazonchimeresourcesphonecountrygb"></a>

---


#### `US` <a name="cdk-amazon-chime-resources.PhoneCountry.US" id="cdkamazonchimeresourcesphonecountryus"></a>

---


### PhoneNumberType <a name="PhoneNumberType" id="phonenumbertype"></a>

| **Name** | **Description** |
| --- | --- |
| [`LOCAL`](#cdkamazonchimeresourcesphonenumbertypelocal) | *No description.* |
| [`TOLLFREE`](#cdkamazonchimeresourcesphonenumbertypetollfree) | *No description.* |

---

#### `LOCAL` <a name="cdk-amazon-chime-resources.PhoneNumberType.LOCAL" id="cdkamazonchimeresourcesphonenumbertypelocal"></a>

---


#### `TOLLFREE` <a name="cdk-amazon-chime-resources.PhoneNumberType.TOLLFREE" id="cdkamazonchimeresourcesphonenumbertypetollfree"></a>

---


### PhoneProductType <a name="PhoneProductType" id="phoneproducttype"></a>

| **Name** | **Description** |
| --- | --- |
| [`SMA`](#cdkamazonchimeresourcesphoneproducttypesma) | *No description.* |
| [`VC`](#cdkamazonchimeresourcesphoneproducttypevc) | *No description.* |

---

#### `SMA` <a name="cdk-amazon-chime-resources.PhoneProductType.SMA" id="cdkamazonchimeresourcesphoneproducttypesma"></a>

---


#### `VC` <a name="cdk-amazon-chime-resources.PhoneProductType.VC" id="cdkamazonchimeresourcesphoneproducttypevc"></a>

---


### Protocol <a name="Protocol" id="protocol"></a>

| **Name** | **Description** |
| --- | --- |
| [`TCP`](#cdkamazonchimeresourcesprotocoltcp) | *No description.* |
| [`UDP`](#cdkamazonchimeresourcesprotocoludp) | *No description.* |

---

#### `TCP` <a name="cdk-amazon-chime-resources.Protocol.TCP" id="cdkamazonchimeresourcesprotocoltcp"></a>

---


#### `UDP` <a name="cdk-amazon-chime-resources.Protocol.UDP" id="cdkamazonchimeresourcesprotocoludp"></a>

---


### RulesType <a name="RulesType" id="rulestype"></a>

| **Name** | **Description** |
| --- | --- |
| [`KEYWORD_MATCH`](#cdkamazonchimeresourcesrulestypekeywordmatch) | *No description.* |
| [`SENTIMENT`](#cdkamazonchimeresourcesrulestypesentiment) | *No description.* |
| [`ISSUE_DETECTION`](#cdkamazonchimeresourcesrulestypeissuedetection) | *No description.* |

---

#### `KEYWORD_MATCH` <a name="cdk-amazon-chime-resources.RulesType.KEYWORD_MATCH" id="cdkamazonchimeresourcesrulestypekeywordmatch"></a>

---


#### `SENTIMENT` <a name="cdk-amazon-chime-resources.RulesType.SENTIMENT" id="cdkamazonchimeresourcesrulestypesentiment"></a>

---


#### `ISSUE_DETECTION` <a name="cdk-amazon-chime-resources.RulesType.ISSUE_DETECTION" id="cdkamazonchimeresourcesrulestypeissuedetection"></a>

---


### SentimentType <a name="SentimentType" id="sentimenttype"></a>

| **Name** | **Description** |
| --- | --- |
| [`NEGATIVE`](#cdkamazonchimeresourcessentimenttypenegative) | *No description.* |

---

#### `NEGATIVE` <a name="cdk-amazon-chime-resources.SentimentType.NEGATIVE" id="cdkamazonchimeresourcessentimenttypenegative"></a>

---


### SpeakerSearchStatus <a name="SpeakerSearchStatus" id="speakersearchstatus"></a>

| **Name** | **Description** |
| --- | --- |
| [`ENABLED`](#cdkamazonchimeresourcesspeakersearchstatusenabled) | *No description.* |
| [`DISABLED`](#cdkamazonchimeresourcesspeakersearchstatusdisabled) | *No description.* |

---

#### `ENABLED` <a name="cdk-amazon-chime-resources.SpeakerSearchStatus.ENABLED" id="cdkamazonchimeresourcesspeakersearchstatusenabled"></a>

---


#### `DISABLED` <a name="cdk-amazon-chime-resources.SpeakerSearchStatus.DISABLED" id="cdkamazonchimeresourcesspeakersearchstatusdisabled"></a>

---


### TriggerType <a name="TriggerType" id="triggertype"></a>

| **Name** | **Description** |
| --- | --- |
| [`TO_PHONE_NUMBER`](#cdkamazonchimeresourcestriggertypetophonenumber) | *No description.* |
| [`REQUEST_URI_HOSTNAME`](#cdkamazonchimeresourcestriggertyperequesturihostname) | *No description.* |

---

#### `TO_PHONE_NUMBER` <a name="cdk-amazon-chime-resources.TriggerType.TO_PHONE_NUMBER" id="cdkamazonchimeresourcestriggertypetophonenumber"></a>

---


#### `REQUEST_URI_HOSTNAME` <a name="cdk-amazon-chime-resources.TriggerType.REQUEST_URI_HOSTNAME" id="cdkamazonchimeresourcestriggertyperequesturihostname"></a>

---


### VocabularyFilterMethod <a name="VocabularyFilterMethod" id="vocabularyfiltermethod"></a>

| **Name** | **Description** |
| --- | --- |
| [`REMOVE`](#cdkamazonchimeresourcesvocabularyfiltermethodremove) | *No description.* |
| [`MASK`](#cdkamazonchimeresourcesvocabularyfiltermethodmask) | *No description.* |
| [`TAG`](#cdkamazonchimeresourcesvocabularyfiltermethodtag) | *No description.* |

---

#### `REMOVE` <a name="cdk-amazon-chime-resources.VocabularyFilterMethod.REMOVE" id="cdkamazonchimeresourcesvocabularyfiltermethodremove"></a>

---


#### `MASK` <a name="cdk-amazon-chime-resources.VocabularyFilterMethod.MASK" id="cdkamazonchimeresourcesvocabularyfiltermethodmask"></a>

---


#### `TAG` <a name="cdk-amazon-chime-resources.VocabularyFilterMethod.TAG" id="cdkamazonchimeresourcesvocabularyfiltermethodtag"></a>

---


### VoiceToneAnalysisStatus <a name="VoiceToneAnalysisStatus" id="voicetoneanalysisstatus"></a>

| **Name** | **Description** |
| --- | --- |
| [`ENABLED`](#cdkamazonchimeresourcesvoicetoneanalysisstatusenabled) | *No description.* |
| [`DISABLED`](#cdkamazonchimeresourcesvoicetoneanalysisstatusdisabled) | *No description.* |

---

#### `ENABLED` <a name="cdk-amazon-chime-resources.VoiceToneAnalysisStatus.ENABLED" id="cdkamazonchimeresourcesvoicetoneanalysisstatusenabled"></a>

---


#### `DISABLED` <a name="cdk-amazon-chime-resources.VoiceToneAnalysisStatus.DISABLED" id="cdkamazonchimeresourcesvoicetoneanalysisstatusdisabled"></a>

---

