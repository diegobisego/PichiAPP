import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVentaDto {
  @ApiPropertyOptional({ description: 'ID del Tipo de Comprobante', example: 1 })
  idTipoComprobante?: number;

  @ApiPropertyOptional({ description: 'Número de Documento', example: 'INV-123' })
  nroDocumento?: string;

  @ApiPropertyOptional({ description: 'Fecha de la Venta', example: '2023-11-02' })
  fecha?: Date;

  @ApiPropertyOptional({ description: 'ID del Cliente', example: 2 })
  idCliente?: number;

  @ApiPropertyOptional({ description: 'ID del Vendedor', example: 3 })
  idVendedor?: number;

  @ApiPropertyOptional({ description: 'ID del Método de Pago', example: 4 })
  idMetodoPago?: number;

  @ApiPropertyOptional({ description: 'Subtotal de la Venta', example: 100.0 })
  subTotal?: number;

  @ApiPropertyOptional({ description: 'Impuestos de la Venta', example: 18.5 })
  impuestos?: number;

  @ApiPropertyOptional({ description: 'Descuentos de la Venta', example: 5.0 })
  descuentos?: number;

  @ApiPropertyOptional({ description: 'Total de la Venta', example: 113.5 })
  total?: number;
}
