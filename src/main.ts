import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpException, ValidationError, ValidationPipe, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // prefijo para los endpoints
  app.setGlobalPrefix('api/v1');

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('PichiAPP')
    .setDescription('Modulo de ventas de productos')
    .setVersion('1.0')
    .addTag('Productos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // manejador de errores
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) => {
        throw new HttpException({ message: 'Validation failed', errors }, HttpStatus.BAD_REQUEST);
      },
    })
  );

  app.use((err: { status: any; message: any; stack: any; }, _req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: { message: any; stack: any; }): void; new(): any; }; }; }, next: any) => {
    // Manejar la excepción aquí, registrarla y responder al cliente según corresponda.
    res.status(err.status || 500).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  });

  await app.listen(5000);
}
bootstrap();
