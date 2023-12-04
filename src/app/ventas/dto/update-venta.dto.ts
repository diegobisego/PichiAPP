import { CreateVentaDto } from "./create-venta.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateVentaDto extends PartialType(CreateVentaDto){}