
import {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  Context,
} from 'aws-lambda';
import {
  CreatePhoneAssociation,
  DeletePhoneAssociation,
  UpdatePhoneAssociation,
} from './phoneAssociation';

import { CreatePhoneNumber, DeletePhoneNumber } from './phoneNumber';

import {
  CreateSipMediaApplication,
  DeleteSipMediaApplication,
  PutSipMediaApplicationAlexaSkill,
  PutSipMediaApplicationLogging,
} from './sipMediaApp';

import { CreateSIPRule, DeleteSIPRule } from './sipRule';

import {
  CreateVoiceConnector,
  UpdateVoiceConnector,
  DeleteVoiceConnector,
} from './voiceConnector';

import {
  CreateVoiceProfileDomain,
  DeleteVoiceProfileDomain,
  UpdateVoiceProfileDomain,
} from './voiceProfileDomain';

import { VoiceProfileDomainProps } from '../../pstn/voiceProfileDomain';

const response: CdkCustomResourceResponse = {};
let resourcePropertiesUid: string;
let requestProperties: {};

export const handler = async (
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
  response.PhysicalResourceId = context.logGroupName;

  switch (resourceType) {
    case 'PhoneNumber':
      switch (requestType) {
        case 'Create':
          console.log('Create Phone Number');
          response.Data = await CreatePhoneNumber(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreatePhoneNumber successful';

          break;
        case 'Update':
          console.log('Update Phone Number');
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          console.log('Delete Phone Number');
          await DeletePhoneNumber(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeletePhoneNumber successful';
          break;
      }
      break;

    case 'SMARule':
      switch (requestType) {
        case 'Create':
          console.log('Create SIP Rule');
          response.Data = await CreateSIPRule(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'CreateSMARule successful';
          break;
        case 'Update':
          console.log('Update SIP Rule');
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          console.log('Delete SIP Rule');
          await DeleteSIPRule(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'DeleteSMARule successful';
          break;
      }
      break;

    case 'SMA':
      switch (requestType) {
        case 'Create':
          console.log('Create SIP Media Application');
          response.Data = await CreateSipMediaApplication(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Create SMA successful';
          break;
        case 'Update':
          console.log('Update SIP Media Application');
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          console.log('Delete SIP Media Application');
          await DeleteSipMediaApplication(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'Delete SMA successful';
          break;
      }
      break;

    case 'SMALogging':
      switch (requestType) {
        case 'Create':
          console.log('Create SIP Media Application Logging');
          response.Data = await PutSipMediaApplicationLogging(
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationLogging successful';
          break;
        case 'Update':
          console.log('Update SIP Media Application Logging');
          response.Data = await PutSipMediaApplicationLogging(
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationLogging successful';
          break;
        case 'Delete':
          console.log('Delete SIP Media Application Logging');
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationLogging Delete NoOP';
          break;
      }
      break;

    case 'SMAAlexaSkill':
      switch (requestType) {
        case 'Create':
          console.log('Create SIP Media Application Alexa Skill');
          response.Data = await PutSipMediaApplicationAlexaSkill(
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationAlexaSkill successful';
          break;
        case 'Update':
          console.log('Update SIP Media Application Alexa Skill');
          response.Data = await PutSipMediaApplicationAlexaSkill(
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationAlexaSkill successful';
          break;
        case 'Delete':
          console.log('DSIP Media Application Alexa Skill');
          response.Status = 'SUCCESS';
          response.Reason = 'PutSipMediaApplicationAlexaSkill Delete NoOP';
          break;
      }
      break;

    case 'VoiceConnector':
      switch (requestType) {
        case 'Create':
          console.log('Voice Connector Create');
          response.Data = await CreateVoiceConnector(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Create VC successful';
          break;
        case 'Update':
          console.log('Voice Connector Update');
          response.Data = await UpdateVoiceConnector(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Update VC successful';
          break;
        case 'Delete':
          console.log('Voice Connector Delete');
          await DeleteVoiceConnector(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'Delete VC successful';
          break;
      }
      break;

    case 'VoiceProfileDomain':
      switch (requestType) {
        case 'Create':
          console.log('Voice Profile Domain Create');
          response.Data = await CreateVoiceProfileDomain(
            resourcePropertiesUid,
            requestProperties as VoiceProfileDomainProps,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Create Voice Profile Domain successful';
          break;
        case 'Update':
          console.log('Voice Profile Domain Update');
          await UpdateVoiceProfileDomain(
            resourcePropertiesUid,
            requestProperties as VoiceProfileDomainProps,
          );
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          console.log('Voice Profile Domain Delete');
          await DeleteVoiceProfileDomain(resourcePropertiesUid);
          response.Status = 'SUCCESS';
          response.Reason = 'Delete Voice Profile Domain successful';
          break;
      }
      break;

    case 'PhoneAssociation':
      console.log('Phone Association');
      switch (requestType) {
        case 'Create':
          console.log('Phone Association Create');
          await CreatePhoneAssociation(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Phone Number Association successful';
          break;
        case 'Update':
          console.log('Phone Association Update');
          await UpdatePhoneAssociation(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          break;
        case 'Delete':
          console.log('Phone Association Delete');
          await DeletePhoneAssociation(
            resourcePropertiesUid,
            requestProperties,
          );
          response.Status = 'SUCCESS';
          response.Reason = 'Phone Number Dissociation successful';
          break;
      }
      break;
  }
  console.log(`Response: ${JSON.stringify(response)}`);
  return response;
};
