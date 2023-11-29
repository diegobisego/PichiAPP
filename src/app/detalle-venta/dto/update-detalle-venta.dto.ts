import { ApiPropertyOptional } from '@nestjs/swagger';


export class UpdateDetalleVentaDto {
    @ApiPropertyOptional({ example: '01/01/2000' })
    fecha?: Date;
  
    @ApiPropertyOptional({ description: 'Id de la venta', example: '1' })
    idVenta?: number;
  
    @ApiPropertyOptional({ description: 'Id del producto', example: '5' })
    idProducto?: number;
  
    @ApiPropertyOptional({ description: 'Cantidad del producto', example: '2' })
    cantidad?: number;
  
    @ApiPropertyOptional({ example: '100' })
    importeUnit?: number;
  
    @ApiPropertyOptional({ example: '200' })
    total?: number;
  }