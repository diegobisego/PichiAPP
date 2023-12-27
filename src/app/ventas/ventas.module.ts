import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './ventas.service';
import { MetodoPago } from '../shared/entities/metodoPago.entity';
import { Vendedor } from './entities/vendedor.entity';
import { Venta } from './entities/venta.entity'; 
import { Pago } from './entities/pagos.entity';
import { VentasController } from './ventas.controller';

@Module({
  imports:[TypeOrmModule.forFeature([MetodoPago,Vendedor,Venta, Pago])],
  controllers: [VentasController],
  providers: [VentasService],
})

export class VentasModule {}
