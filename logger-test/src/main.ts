import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger } from './AppLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useLogger(app.get(AppLogger));
  await app.listen(3000);
}
bootstrap();
