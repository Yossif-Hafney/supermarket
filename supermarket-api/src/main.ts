import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ObserveInstrument } from './observe.js';
import { ResponseInterceptor } from './common/interceptors/response.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  
  app.useGlobalInterceptors(new ResponseInterceptor(app.get(Reflector)));

  await app.listen(process.env.PORT ?? 8080);
}
await bootstrap();
