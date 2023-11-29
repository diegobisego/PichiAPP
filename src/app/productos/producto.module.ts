import { Module } from '@nestjs/common';
import { ProductosService } from './producto.service';
import { ProductosController } from './producto.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Producto } from './entities/producto.entity';
import { Categoria_Producto } from './entities/categoria-producto.entity';
import { UnidadMedidaProducto } from './entities/unidad-medida-producto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Producto,Categoria_Producto,UnidadMedidaProducto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
