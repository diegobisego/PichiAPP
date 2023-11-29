import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty({example:'Producto 1'})
  nombreProducto: string;
  @ApiProperty({description:'Id de la categoria',example:'1'})
  idCategoriaProducto: number;
  @ApiProperty({description:'peso/cantidad',example:'5'})
  pesoCantidadProducto: number;
  @ApiProperty({description:'Id de la unidad de medida',example:'1'})
  idUnidadMedidaProducto: number;
  @ApiPropertyOptional({example:'100'})
  stockProducto: number;
  @ApiPropertyOptional()
  nombreCompleto: string
  @ApiPropertyOptional({example:'Activo'})
  estado: string
}
