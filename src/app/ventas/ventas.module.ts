import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './ventas.service';
import { MetodoPago } from './entities/metodoPago.entity';
import { TipoComprobante } from './entities/tipoComprobante.entity';
import { Vendedor } from './entities/vendedor.entity';
import { Venta } from './entities/venta.entity'; 
import { VentasController } from './ventas.controller';

@Module({
  imports:[TypeOrmModule.forFeature([MetodoPago,TipoComprobante,Vendedor,Venta])],
  controllers: [VentasController],
  providers: [VentasService],
})

export class VentasModule {}
