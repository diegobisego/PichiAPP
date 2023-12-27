import { Module } from '@nestjs/common';
import { VentaDetalleService } from './venta-detalle.service';
import { VentaDetalleController } from './venta-detalle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaDetalle } from './entities/venta-detalle.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VentaDetalle])],
  controllers: [VentaDetalleController],
  providers: [VentaDetalleService],
})
export class VentaDetalleModule {}
