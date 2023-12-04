import { PartialType } from "@nestjs/swagger";
import { CreateProductoDto } from "src/app/productos/dto/create-producto.dto";

export class UpdateProductoDto extends PartialType(CreateProductoDto){}