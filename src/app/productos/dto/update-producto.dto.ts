import { ApiPropertyOptional } from '@nestjs/swagger';
import { CategoriaProducto } from '../entities/categoria-producto.entity'; 
import { UnidadMedidaProducto } from '../entities/unidad-medida-producto.entity'; 

export class UpdateProductoDto {
  @ApiPropertyOptional()
  nombreProducto?: string;

  @ApiPropertyOptional()
  idCategoriaProducto?: Partial<CategoriaProducto>;

  @ApiPropertyOptional()
  idPesoCantidadProducto?: number;

  @ApiPropertyOptional()
  idUnidadMedidaProducto?: Partial<UnidadMedidaProducto>;

  @ApiPropertyOptional()
  stockProducto?: number;
}

