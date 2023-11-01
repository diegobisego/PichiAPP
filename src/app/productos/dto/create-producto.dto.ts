import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty()
  nombreProducto: string;
  @ApiProperty()
  idCategoriaProducto: number;
  @ApiProperty()
  idPesoCantidadProducto: number;
  @ApiProperty()
  idUnidadMedidaProducto: number;
  @ApiPropertyOptional()
  stockProducto: number;
}
