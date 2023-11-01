import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVentaDto {
  @ApiPropertyOptional()
  idTipoComprobante?: number;

  @ApiPropertyOptional()
  noDocumento?: string;

  @ApiPropertyOptional()
  fecha?: Date;

  @ApiPropertyOptional()
  idCliente?: number;

  @ApiPropertyOptional()
  idVendedor?: number;

  @ApiPropertyOptional()
  idMetodoPago?: number;

  @ApiPropertyOptional()
  subTotal?: number;

  @ApiPropertyOptional()
  impuestos?: number;

  @ApiPropertyOptional()
  descuentos?: number;

  @ApiPropertyOptional()
  total?: number;
}

