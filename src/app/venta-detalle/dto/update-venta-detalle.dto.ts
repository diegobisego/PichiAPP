import { CreateVentaDetalleDto } from "./create-venta-detalle.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateVentaDetalleDto  extends PartialType(CreateVentaDetalleDto){}
