import { Module } from "@nestjs/common/decorators/modules";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetalleVenta } from "./entities/detalle-venta.entity";

@Module({
    imports: [TypeOrmModule.forFeature([DetalleVenta])],
    controllers: [],
    providers: [],
  })
  export class DetalleVentaModule {}