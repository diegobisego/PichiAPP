import { ApiProperty } from '@nestjs/swagger';

export class CreateDetalleVentaDto {
  @ApiProperty({ example: '01/01/2000' })
  fecha: Date;

  @ApiProperty({ description: 'Id de la venta', example: '1' })
  idVenta: number;

  @ApiProperty({ description: 'Id del producto', example: '5' })
  idProducto: number;

  @ApiProperty({ description: 'Cantidad del producto', example: '2' })
  cantidad: number;

  @ApiProperty({ example: '100' })
  importeUnit: number;

  @ApiProperty({ example: '200' })
  total: number;
}
