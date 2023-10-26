import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefijo para los endpoints
  app.setGlobalPrefix('api/v1')

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('PichiAPP')
    .setDescription('Modulo de ventas de productos')
    .setVersion('1.0')
    .addTag('Productos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(5000);
}
bootstrap();
