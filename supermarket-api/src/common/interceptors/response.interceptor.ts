import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { RESPONSE_DATA_KEY, RESPONSE_MESSAGE_KEY } from '@/common/decorators/response-message.decorator.js';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, object> {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<object> {


    const message =
      this.reflector.get<string>(
        RESPONSE_MESSAGE_KEY,
        context.getHandler(),
      ) ?? 'Request successful';

      const dataKey =
      this.reflector.get<string>(
        RESPONSE_DATA_KEY,
        context.getHandler(),
      ) ?? 'data';

    return next.handle().pipe(
      map((data) => ({
        success: true,
        message,
        [dataKey]:data,
      })),
    );
  }
}