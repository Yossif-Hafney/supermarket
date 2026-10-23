import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {
    return {
      "":{
        success: true,
        message: 'Supermarket API is running',
        status: 'OK',
      }
    };
  }
}
