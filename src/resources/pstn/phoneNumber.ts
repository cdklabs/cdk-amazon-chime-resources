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
  ChimeSDKVoiceServiceException,
} from '@aws-sdk/client-chime-sdk-voice';

import {
  SSMClient,
  DeleteParameterCommand,
  GetParameterCommand,
  GetParameterCommandOutput,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';

const chimeSDKVoiceClient = new ChimeSDKVoiceClient({
  region: 'us-east-1',
});

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

let searchAvailableNumbersParam: SearchAvailablePhoneNumbersCommandInput;
let searchAvailablePhoneNumberResponse: SearchAvailablePhoneNumbersCommandOutput;
let createPhoneNumberOrderResponse: CreatePhoneNumberOrderCommandOutput;
let getParameterCommandOutput: GetParameterCommandOutput;
let getPhoneNumberResponse: GetPhoneNumberCommandOutput;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface CreatePhoneNumberProps {
  phoneState?: string;
  phoneAreaCode?: string;
  phoneCity?: string;
  phoneCountry?: string;
  phoneNumberTollFreePrefix?: string;
  phoneProductType?: string;
  phoneNumberType?: string;
}

export const CreatePhoneNumber = async (
  uid: string,
  props: CreatePhoneNumberProps,
) => {
  searchAvailableNumbersParam = {
    ...(props.phoneAreaCode && { AreaCode: props.phoneAreaCode }),
    ...(props.phoneNumberType && { PhoneNumberType: props.phoneNumberType }),
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

  let orderSuccessful: boolean = false;
  let searchAttempts = 1;

  while (searchAttempts < 16) {
    try {
      console.log(
        `Searching for available numbers.  Search # ${searchAttempts}`,
      );
      searchAvailablePhoneNumberResponse = await chimeSDKVoiceClient.send(
        new SearchAvailablePhoneNumbersCommand(searchAvailableNumbersParam),
      );
      console.log(
        `Search Available Numbers Response: ${JSON.stringify(
          searchAvailablePhoneNumberResponse,
        )}`,
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        throw error;
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
      console.log('Creating New Phone Number Order');
      createPhoneNumberOrderResponse = await chimeSDKVoiceClient.send(
        new CreatePhoneNumberOrderCommand({
          ProductType: props.phoneProductType,
          E164PhoneNumbers: [
            searchAvailablePhoneNumberResponse.E164PhoneNumbers![0],
          ],
        }),
      );
      console.log(
        `CreatePhoneNumberOrder Response: ${JSON.stringify(
          createPhoneNumberOrderResponse,
        )}`,
      );
    } catch (error) {
      if (error instanceof ChimeSDKVoiceServiceException) {
        if (error.name === 'BadRequestException') {
          console.log('Bad Request Exception.  Retrying');
          console.error(error);
          searchAttempts++;
          await sleep(10000);
          continue;
        } else {
          console.error(error);
          throw error;
        }
      }
    }
    let orderAttempts = 0;
    let orderResults: string | undefined = '';
    while (orderAttempts < 20) {
      orderResults = await checkPhoneNumber(
        createPhoneNumberOrderResponse.PhoneNumberOrder!.PhoneNumberOrderId!,
      );

      if (orderResults === 'Processing') {
        orderAttempts++;
        await sleep(10000);
        console.log('Still processing phone number order.  Looping');
        continue;
      } else if (orderResults === 'Failed') {
        console.log('Phone number order failed');
        break;
      } else if (orderResults === 'Successful') {
        orderSuccessful = true;
        console.log('Phone number order successful');
        break;
      } else {
        console.log('Unknown phone number order status');
        break;
      }
    }
    if (orderSuccessful) {
      break;
    }
  }

  if (!orderSuccessful) {
    throw new Error(
      'The phone number order failed to process.  Please try again.',
    );
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
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }
  }

  return {
    phoneNumber: searchAvailablePhoneNumberResponse.E164PhoneNumbers![0],
  };
};

export const DeletePhoneNumber = async (uid: string) => {
  try {
    getParameterCommandOutput = await ssmClient.send(
      new GetParameterCommand({ Name: '/chime/phoneNumber' + uid }),
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw error;
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
      throw error;
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
      throw error;
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
      throw error;
    }
    return;
  }
}
