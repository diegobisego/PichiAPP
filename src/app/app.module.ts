import { SharedModule } from './shared/shared.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from '../config/dbConfig';
import { ClientesModule } from './clientes/clientes.module';
import { VentasModule } from './ventas/ventas.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DetalleVentaController } from './detalle-venta/detalle-venta.controller';
import { DetalleVentaModule } from './detalle-venta/detalle-venta.module';
import appConfig from 'src/config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Importa ConfigModule
      useFactory: getDatabaseConfig, // Usa la función de configuración
      inject: [ConfigService], // Inyecta ConfigService
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
    }),
    SharedModule,
    ProductosModule,
    ClientesModule,
    VentasModule,
    DetalleVentaModule
  ],
  controllers: [AppController, DetalleVentaController],
  providers: [AppService],
})
export class AppModule {}
