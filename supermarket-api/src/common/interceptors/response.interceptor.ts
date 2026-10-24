import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, object> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<object> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        message: 'Request successful',
      })),
    );
  }
}