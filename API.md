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
| [`lambda`](#cdkamazonchimeresourcesmessagingresourcespropertylambda)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |
| [`messagingCustomResource`](#cdkamazonchimeresourcesmessagingresourcespropertymessagingcustomresource)<span title="Required">*</span> | [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource) | *No description.* |

---

##### `lambda`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.property.lambda" id="cdkamazonchimeresourcesmessagingresourcespropertylambda"></a>

```typescript
public readonly lambda: IFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---

##### `messagingCustomResource`<sup>Required</sup> <a name="cdk-amazon-chime-resources.MessagingResources.property.messagingCustomResource" id="cdkamazonchimeresourcesmessagingresourcespropertymessagingcustomresource"></a>

```typescript
public readonly messagingCustomResource: CustomResource;
```

- *Type:* [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource)

---


### PhoneAssociation <a name="cdk-amazon-chime-resources.PhoneAssociation" id="cdkamazonchimeresourcesphoneassociation"></a>

#### Initializers <a name="cdk-amazon-chime-resources.PhoneAssociation.Initializer" id="cdkamazonchimeresourcesphoneassociationinitializer"></a>

```typescript
import { PhoneAssociation } from 'cdk-amazon-chime-resources'

new PhoneAssociation(scope: Construct, id: string, props: PhoneAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdkamazonchimeresourcesphoneassociationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#cdkamazonchimeresourcesphoneassociationparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#cdkamazonchimeresourcesphoneassociationparameterprops)<span title="Required">*</span> | [`cdk-amazon-chime-resources.PhoneAssociationProps`](#cdk-amazon-chime-resources.PhoneAssociationProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociation.parameter.scope" id="cdkamazonchimeresourcesphoneassociationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociation.parameter.id" id="cdkamazonchimeresourcesphoneassociationparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociation.parameter.props" id="cdkamazonchimeresourcesphoneassociationparameterprops"></a>

- *Type:* [`cdk-amazon-chime-resources.PhoneAssociationProps`](#cdk-amazon-chime-resources.PhoneAssociationProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`phoneAssociationResource`](#cdkamazonchimeresourcesphoneassociationpropertyphoneassociationresource)<span title="Required">*</span> | [`aws-cdk-lib.custom_resources.AwsCustomResource`](#aws-cdk-lib.custom_resources.AwsCustomResource) | *No description.* |

---

##### `phoneAssociationResource`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociation.property.phoneAssociationResource" id="cdkamazonchimeresourcesphoneassociationpropertyphoneassociationresource"></a>

```typescript
public readonly phoneAssociationResource: AwsCustomResource;
```

- *Type:* [`aws-cdk-lib.custom_resources.AwsCustomResource`](#aws-cdk-lib.custom_resources.AwsCustomResource)

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
| [`lambda`](#cdkamazonchimeresourcespstnresourcespropertylambda)<span title="Required">*</span> | [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction) | *No description.* |
| [`pstnCustomResource`](#cdkamazonchimeresourcespstnresourcespropertypstncustomresource)<span title="Required">*</span> | [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource) | *No description.* |

---

##### `lambda`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.property.lambda" id="cdkamazonchimeresourcespstnresourcespropertylambda"></a>

```typescript
public readonly lambda: IFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.IFunction`](#aws-cdk-lib.aws_lambda.IFunction)

---

##### `pstnCustomResource`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PSTNResources.property.pstnCustomResource" id="cdkamazonchimeresourcespstnresourcespropertypstncustomresource"></a>

```typescript
public readonly pstnCustomResource: CustomResource;
```

- *Type:* [`aws-cdk-lib.CustomResource`](#aws-cdk-lib.CustomResource)

---


## Structs <a name="Structs" id="structs"></a>

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
| [`appInstanceUserId`](#cdkamazonchimeresourcesappinstanceuserpropspropertyappinstanceuserid)<span title="Required">*</span> | `string` | The name of the app instance. |
| [`clientRequestToken`](#cdkamazonchimeresourcesappinstanceuserpropspropertyclientrequesttoken) | `string` | The ClientRequestToken of the app instance. |
| [`metadata`](#cdkamazonchimeresourcesappinstanceuserpropspropertymetadata) | `string` | The metadata of the app instance. |
| [`name`](#cdkamazonchimeresourcesappinstanceuserpropspropertyname) | `string` | The name of the app instance. |

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

The name of the app instance.

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
| [`tags`](#cdkamazonchimeresourceschannelflowpropspropertytags) | [`cdk-amazon-chime-resources.Tags`](#cdk-amazon-chime-resources.Tags)[] | The tags for the creation request. |

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
public readonly tags: Tags[];
```

- *Type:* [`cdk-amazon-chime-resources.Tags`](#cdk-amazon-chime-resources.Tags)[]
- *Default:* None

The tags for the creation request.

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

`undefined` implies that a physical name will be allocated by    CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

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

### PhoneAssociationProps <a name="cdk-amazon-chime-resources.PhoneAssociationProps" id="cdkamazonchimeresourcesphoneassociationprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PhoneAssociationProps } from 'cdk-amazon-chime-resources'

const phoneAssociationProps: PhoneAssociationProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`account`](#cdkamazonchimeresourcesphoneassociationpropspropertyaccount) | `string` | The AWS account ID this resource belongs to. |
| [`environmentFromArn`](#cdkamazonchimeresourcesphoneassociationpropspropertyenvironmentfromarn) | `string` | ARN to deduce region and account from. |
| [`physicalName`](#cdkamazonchimeresourcesphoneassociationpropspropertyphysicalname) | `string` | The value passed in by users to the physical name prop of the resource. |
| [`region`](#cdkamazonchimeresourcesphoneassociationpropspropertyregion) | `string` | The AWS region this resource belongs to. |
| [`e164PhoneNumber`](#cdkamazonchimeresourcesphoneassociationpropspropertye164phonenumber)<span title="Required">*</span> | `string` | *No description.* |
| [`voiceConnectorId`](#cdkamazonchimeresourcesphoneassociationpropspropertyvoiceconnectorid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `account`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.account" id="cdkamazonchimeresourcesphoneassociationpropspropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.environmentFromArn" id="cdkamazonchimeresourcesphoneassociationpropspropertyenvironmentfromarn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* `string`
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources.  Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.physicalName" id="cdkamazonchimeresourcesphoneassociationpropspropertyphysicalname"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* `string`
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by    CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.region" id="cdkamazonchimeresourcesphoneassociationpropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `e164PhoneNumber`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.e164PhoneNumber" id="cdkamazonchimeresourcesphoneassociationpropspropertye164phonenumber"></a>

```typescript
public readonly e164PhoneNumber: string;
```

- *Type:* `string`

---

##### `voiceConnectorId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.PhoneAssociationProps.property.voiceConnectorId" id="cdkamazonchimeresourcesphoneassociationpropspropertyvoiceconnectorid"></a>

```typescript
public readonly voiceConnectorId: string;
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

`undefined` implies that a physical name will be allocated by    CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

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
| [`targetApplications`](#cdkamazonchimeresourcessiprulepropspropertytargetapplications)<span title="Required">*</span> | [`cdk-amazon-chime-resources.TargetApplications`](#cdk-amazon-chime-resources.TargetApplications)[] | *No description.* |
| [`triggerType`](#cdkamazonchimeresourcessiprulepropspropertytriggertype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.TriggerType`](#cdk-amazon-chime-resources.TriggerType) | Trigger Type for SipRule (required) - TO_PHONE_NUMBER or REQUEST_URI_HOSTNAME. |
| [`triggerValue`](#cdkamazonchimeresourcessiprulepropspropertytriggervalue)<span title="Required">*</span> | `string` | Trigger Value for SipRule (required) - EE.164 Phone Number or Voice Connector URI. |
| [`name`](#cdkamazonchimeresourcessiprulepropspropertyname) | `string` | name for SipRule (optional). |

---

##### `targetApplications`<sup>Required</sup> <a name="cdk-amazon-chime-resources.SipRuleProps.property.targetApplications" id="cdkamazonchimeresourcessiprulepropspropertytargetapplications"></a>

```typescript
public readonly targetApplications: TargetApplications[];
```

- *Type:* [`cdk-amazon-chime-resources.TargetApplications`](#cdk-amazon-chime-resources.TargetApplications)[]

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
| [`appInstanceDataType`](#cdkamazonchimeresourcesstreamingconfigpropertyappinstancedatatype)<span title="Required">*</span> | [`cdk-amazon-chime-resources.AppInstanceDataType`](#cdk-amazon-chime-resources.AppInstanceDataType) | The type of data to be streamed. |
| [`resourceArn`](#cdkamazonchimeresourcesstreamingconfigpropertyresourcearn)<span title="Required">*</span> | `string` | The resource ARN of a Kinesis Stream. |

---

##### `appInstanceDataType`<sup>Required</sup> <a name="cdk-amazon-chime-resources.StreamingConfig.property.appInstanceDataType" id="cdkamazonchimeresourcesstreamingconfigpropertyappinstancedatatype"></a>

```typescript
public readonly appInstanceDataType: AppInstanceDataType;
```

- *Type:* [`cdk-amazon-chime-resources.AppInstanceDataType`](#cdk-amazon-chime-resources.AppInstanceDataType)

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

### Tags <a name="cdk-amazon-chime-resources.Tags" id="cdkamazonchimeresourcestags"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Tags } from 'cdk-amazon-chime-resources'

const tags: Tags = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`key`](#cdkamazonchimeresourcestagspropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`value`](#cdkamazonchimeresourcestagspropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `key`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Tags.property.key" id="cdkamazonchimeresourcestagspropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `value`<sup>Required</sup> <a name="cdk-amazon-chime-resources.Tags.property.value" id="cdkamazonchimeresourcestagspropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

### TargetApplications <a name="cdk-amazon-chime-resources.TargetApplications" id="cdkamazonchimeresourcestargetapplications"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TargetApplications } from 'cdk-amazon-chime-resources'

const targetApplications: TargetApplications = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`priority`](#cdkamazonchimeresourcestargetapplicationspropertypriority)<span title="Required">*</span> | `number` | Priority for SipRule (required) - 1 to 25. |
| [`sipMediaApplicationId`](#cdkamazonchimeresourcestargetapplicationspropertysipmediaapplicationid)<span title="Required">*</span> | `string` | SipMediaApplicationId for SipRule (required). |
| [`region`](#cdkamazonchimeresourcestargetapplicationspropertyregion) | `string` | Region for SipRule (optional). |

---

##### `priority`<sup>Required</sup> <a name="cdk-amazon-chime-resources.TargetApplications.property.priority" id="cdkamazonchimeresourcestargetapplicationspropertypriority"></a>

```typescript
public readonly priority: number;
```

- *Type:* `number`
- *Default:* none

Priority for SipRule (required) - 1 to 25.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="cdk-amazon-chime-resources.TargetApplications.property.sipMediaApplicationId" id="cdkamazonchimeresourcestargetapplicationspropertysipmediaapplicationid"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* `string`
- *Default:* none

SipMediaApplicationId for SipRule (required).

---

##### `region`<sup>Optional</sup> <a name="cdk-amazon-chime-resources.TargetApplications.property.region" id="cdkamazonchimeresourcestargetapplicationspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* same region as stack deployment

Region for SipRule (optional).

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



## Enums <a name="Enums" id="enums"></a>

### AppInstanceDataType <a name="AppInstanceDataType" id="appinstancedatatype"></a>

| **Name** | **Description** |
| --- | --- |
| [`CHANNEL`](#cdkamazonchimeresourcesappinstancedatatypechannel) | *No description.* |
| [`CHANNELMESSAGE`](#cdkamazonchimeresourcesappinstancedatatypechannelmessage) | *No description.* |

---

#### `CHANNEL` <a name="cdk-amazon-chime-resources.AppInstanceDataType.CHANNEL" id="cdkamazonchimeresourcesappinstancedatatypechannel"></a>

---


#### `CHANNELMESSAGE` <a name="cdk-amazon-chime-resources.AppInstanceDataType.CHANNELMESSAGE" id="cdkamazonchimeresourcesappinstancedatatypechannelmessage"></a>

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
| [`UK`](#cdkamazonchimeresourcesphonecountryuk) | *No description.* |
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


#### `UK` <a name="cdk-amazon-chime-resources.PhoneCountry.UK" id="cdkamazonchimeresourcesphonecountryuk"></a>

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

