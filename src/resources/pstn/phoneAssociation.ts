import {
  ChimeSDKVoiceClient,
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
} from '@aws-sdk/client-chime-sdk-voice';

const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: 'us-east-1',
});

export interface AssociatePhoneNumbersProp {
  voiceConnectorId?: string;
  e164PhoneNumber?: string;
}

export const CreatePhoneAssociation = async (
  _uid: string,
  props: AssociatePhoneNumbersProp,
) => {
  console.log(
    `Associating Phone Number ${props.e164PhoneNumber} with Voice Connector ${props.voiceConnectorId}`,
  );
  if (props.e164PhoneNumber && props.voiceConnectorId) {
    console.log('Associating Phone Number with Voice Connector');
    const associateWithVoiceConnectorParams: AssociatePhoneNumbersWithVoiceConnectorCommandInput =
      {
        VoiceConnectorId: props.voiceConnectorId,
        E164PhoneNumbers: [props.e164PhoneNumber],
        ForceAssociate: true,
      };

    await chimeSDKVoiceClient.send(
      new AssociatePhoneNumbersWithVoiceConnectorCommand(
        associateWithVoiceConnectorParams,
      ),
    );
  }
};

export const UpdatePhoneAssociation = async (
  _uid: string,
  props: AssociatePhoneNumbersProp,
) => {
  console.log(
    `Updating Phone Number association ${props.e164PhoneNumber} with Voice Connector ${props.voiceConnectorId}`,
  );
  if (props.e164PhoneNumber && props.voiceConnectorId) {
    console.log('Associating Phone Number with Voice Connector');
    const associateWithVoiceConnectorParams: AssociatePhoneNumbersWithVoiceConnectorCommandInput =
      {
        VoiceConnectorId: props.voiceConnectorId,
        E164PhoneNumbers: [props.e164PhoneNumber],
        ForceAssociate: true,
      };

    await chimeSDKVoiceClient.send(
      new AssociatePhoneNumbersWithVoiceConnectorCommand(
        associateWithVoiceConnectorParams,
      ),
    );
  }
};

export const DeletePhoneAssociation = async (
  _uid: string,
  props: AssociatePhoneNumbersProp,
) => {
  console.log(
    `Deleting Phone Number association ${props.e164PhoneNumber} with Voice Connector ${props.voiceConnectorId}`,
  );

  if (props.e164PhoneNumber && props.voiceConnectorId) {
    console.log('Dissociating Phone Number with Voice Connector');
    const disAssociateWithVoiceConnectorParams: DisassociatePhoneNumbersFromVoiceConnectorCommandInput =
      {
        VoiceConnectorId: props.voiceConnectorId,
        E164PhoneNumbers: [props.e164PhoneNumber],
      };

    await chimeSDKVoiceClient.send(
      new DisassociatePhoneNumbersFromVoiceConnectorCommand(
        disAssociateWithVoiceConnectorParams,
      ),
    );
  }
};
