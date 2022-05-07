// tuto : https://betterprogramming.pub/building-an-e-commerce-api-using-nestjs-sqlite-and-typeorm-25a7978de666
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create<NestFastifyApplication>(
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    // new FastifyAdapter({ logger: true }),
  );
  await app.listen(3000);
}
bootstrap();
