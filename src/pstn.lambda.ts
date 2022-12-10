import {
  ChimeSDKVoiceClient,
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderCommandOutput,
  DeletePhoneNumberCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberCommandOutput,
  GetPhoneNumberOrderCommand,
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
  UpdateSipRuleCommand,
} from '@aws-sdk/client-chime-sdk-voice';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: process.env.AWS_REGION,
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';

const response: CdkCustomResourceResponse = {};
let resourcePropertiesUid: string;
let requestProperties: {};

export const lambdaHandler = async (
  event: CdkCustomResourceEvent,
  context: Context,
): Promise<CdkCustomResourceResponse> => {
  console.info('event: ', event);
  const resourceType = event.ResourceProperties.resourceType;
  const requestType = event.RequestType;
  resourcePropertiesUid = event.ResourceProperties.uid;
  requestProperties = event.ResourceProperties.properties;

  response.StackId = event.StackId;
  response.RequestId = event.RequestId;
  response.LogicalResourceId = event.LogicalResourceId;
  response.PhysicalResourceId = context.logStreamName;

  switch (resourceType) {
    case 'PhoneNumber':
      switch (requestType) {
        case 'Create':
          response.Data = await CreatePhoneNumber(
            resourcePropertiesUid,
            requestProperties,
          );
          break;
        case 'Update':
          break;
        case 'Delete':
          await DeletePhoneNumber(resourcePropertiesUid);
          break;
      }
      response.Status = 'SUCCESS';
      response.Data = {};
      break;

    case 'VoiceConnector':
      break;
  }
  return response;
};

let data: string;
let searchAvailableNumbersParam: SearchAvailablePhoneNumbersCommandInput;
let searchAvailablePhoneNumberResponse: SearchAvailablePhoneNumbersCommandOutput;
let createPhoneNumberOrderResponse: CreatePhoneNumberOrderCommandOutput;
let checkPhoneNumberOrderCount = 0;
let getParameterCommandOutput: GetParameterCommandOutput;
let getPhoneNumberResponse: GetPhoneNumberCommandOutput;

export interface CreatePhoneNumberProps {
  phoneState?: string;
  phoneAreaCode?: string;
  phoneCity?: string;
  phoneCountry?: string;
  phoneNumberTollFreePrefix?: string;
  phoneProductType?: string;
}

const CreatePhoneNumber = async (
  uid: string,
  props: CreatePhoneNumberProps,
) => {
  searchAvailableNumbersParam = {
    ...(props.phoneAreaCode && { AreaCode: props.phoneAreaCode }),
    ...(props.phoneState && { State: props.phoneState }),
    ...(props.phoneCity && { City: props.phoneCity }),
    ...(props.phoneCountry && { Country: props.phoneCountry }),
    ...(props.phoneNumberTollFreePrefix && {
      TollFreePrefix: props.phoneNumberTollFreePrefix,
    }),
  };
  console.info(
    `Search Available Numbers: ${JSON.stringify(searchAvailableNumbersParam)}`,
  );

  try {
    searchAvailablePhoneNumberResponse = await chimeSDKVoiceClient.send(
      new SearchAvailablePhoneNumbersCommand(searchAvailableNumbersParam),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  if (
    searchAvailablePhoneNumberResponse &&
    searchAvailablePhoneNumberResponse.E164PhoneNumbers &&
    searchAvailablePhoneNumberResponse.E164PhoneNumbers.length === 0
  ) {
    throw new Error(
      'No numbers were found with this search parameters.  Please try a different search.',
    );
  }
  try {
    createPhoneNumberOrderResponse = await chimeSDKVoiceClient.send(
      new CreatePhoneNumberOrderCommand({
        ProductType: props.phoneProductType,
        E164PhoneNumbers: [
          searchAvailablePhoneNumberResponse.E164PhoneNumbers![0],
        ],
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  while (
    (await checkPhoneNumber(
      createPhoneNumberOrderResponse.PhoneNumberOrder!.PhoneNumberOrderId!,
    )) !== 'Successful'
  ) {
    checkPhoneNumberOrderCount++;
    if (checkPhoneNumberOrderCount > 10) {
      throw new Error(
        'Could not get a valid phone number from Amazon Chime SDK',
      );
    }
    await sleep(10000);
  }

  try {
    await ssmClient.send(
      new PutParameterCommand({
        Name: '/chime/phoneNumber' + uid,
        Value: searchAvailablePhoneNumberResponse.E164PhoneNumbers![0],
        Description: 'Phone Number',
        Overwrite: true,
        Type: 'String',
      }),
    );
  } catch (error) {}

  return { phoneNumber: data };
};

const DeletePhoneNumber = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/phoneNumber' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    getPhoneNumberResponse = await chimeSDKVoiceClient.send(
      new GetPhoneNumberCommand({
        PhoneNumberId: getParameterCommandOutput.Parameter!.Value,
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }

  try {
    if (getPhoneNumberResponse.PhoneNumber!.Status === 'Assigned') {
      if (
        getPhoneNumberResponse.PhoneNumber!.ProductType! === 'VoiceConnector'
      ) {
        await chimeSDKVoiceClient.send(
          new DisassociatePhoneNumbersFromVoiceConnectorCommand({
            E164PhoneNumbers: [
              getPhoneNumberResponse.PhoneNumber!.E164PhoneNumber!,
            ],
            VoiceConnectorId:
              getPhoneNumberResponse.PhoneNumber!.Associations![0].Value!,
          }),
        );
      } else if (
        getPhoneNumberResponse.PhoneNumber!.ProductType! ===
        'SipMediaApplication'
      ) {
        await chimeSDKVoiceClient.send(
          new UpdateSipRuleCommand({
            Name: getPhoneNumberResponse.PhoneNumber!.E164PhoneNumber!,
            SipRuleId:
              getPhoneNumberResponse.PhoneNumber!.Associations![0].Value!,
            Disabled: true,
          }),
        );
      } else {
        throw new Error('Could not disassociate number');
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
  }
  await sleep(10000);

  try {
    await chimeSDKVoiceClient.send(
      new DeletePhoneNumberCommand({
        PhoneNumberId: getParameterCommandOutput.Parameter!.Value,
      }),
    );
    await ssmClient.send(
      new DeleteParameterCommand({ Name: '/chime/phoneNumber' + uid }),
    );
  } catch (error) {}
};

async function checkPhoneNumber(phoneOrderId: string) {
  try {
    const getPhoneNumberOrderResponse = await chimeSDKVoiceClient.send(
      new GetPhoneNumberOrderCommand({ PhoneNumberOrderId: phoneOrderId }),
    );
    console.info(
      `Get Phone Number Order: ${JSON.stringify(getPhoneNumberOrderResponse)}`,
    );
    return getPhoneNumberOrderResponse.PhoneNumberOrder?.Status;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error.message;
    }
    return false;
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
