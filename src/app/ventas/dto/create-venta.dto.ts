
import { ApiProperty } from '@nestjs/swagger';

export class CreateVentaDto {
  
  @ApiProperty({ description: 'ID del Tipo de Comprobante', example: 1 })
  idTipoComprobante: number;

  
  @ApiProperty({ description: 'Número de Documento', example: 'INV-123' })
  nroDocumento: string;

  
  @ApiProperty({ description: 'Fecha de la Venta', example: '2023-11-02' })
  fecha: Date;

  
  @ApiProperty({ description: 'ID del Cliente', example: 2 })
  idCliente: number;

  
  @ApiProperty({ description: 'ID del Vendedor', example: 3 })
  idVendedor: number;

  
  @ApiProperty({ description: 'ID del Método de Pago', example: 4 })
  idMetodoPago: number;

  
  @ApiProperty({ description: 'Subtotal de la Venta', example: 100.0 })
  subTotal: number;

  
  @ApiProperty({ description: 'Impuestos de la Venta', example: 18.5 })
  impuestos: number;

  
  @ApiProperty({ description: 'Descuentos de la Venta', example: 5.0 })
  descuentos: number;

  
  @ApiProperty({ description: 'Total de la Venta', example: 113.5 })
  total: number;
}
