import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    // transform: true
  }));

  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH', 'OPTIONS']
  });

  await app.listen(3000);
}
bootstrap();
