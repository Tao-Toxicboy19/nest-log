import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    // logger: logger, // ใช้ logger ที่กำหนดใน NestJS
  });

  await app.listen(8080);
}

bootstrap();
