import { PartialType } from "@nestjs/swagger";
import { CreateMetodoPago } from "./create-metodoPago";

export class UpdateMetodoPagoDto extends PartialType(CreateMetodoPago){}