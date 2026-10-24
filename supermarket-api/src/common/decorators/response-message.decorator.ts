import { SetMetadata } from '@nestjs/common';

export const RESPONSE_MESSAGE_KEY = 'response_message';
export const RESPONSE_DATA_KEY = 'response_data';


export const ResponseMessage = (message: string, dataKey?: string) =>
  SetMetadata(RESPONSE_MESSAGE_KEY, message) &&
  SetMetadata(RESPONSE_DATA_KEY, dataKey);