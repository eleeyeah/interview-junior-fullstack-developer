import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET',
    allowedHeaders: 'Content-Type, Accept', // The headers we want to allow
  });

  await app.listen(3000);
}
bootstrap();
