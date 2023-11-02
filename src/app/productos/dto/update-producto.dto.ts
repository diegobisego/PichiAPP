import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductoDto {
  @ApiPropertyOptional({example:'Producto 1'})
  nombreProducto?: string;

  @ApiPropertyOptional({description:'Id de la categoria',example:'1'})
  idCategoriaProducto?: number;

  @ApiPropertyOptional({description:'peso/cantidad',example:'5'})
  pesoCantidadProducto?: number;

  @ApiPropertyOptional({description:'Id de la unidad de medida',example:'1'})
  idUnidadMedidaProducto?: number;

  @ApiPropertyOptional({example:'100'})
  stockProducto?: number;
}

