import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, IsDate, Min } from 'class-validator';

export class CreateVentaDto {

  @ApiProperty({ description: 'ID del Tipo de Comprobante segun AFIP', example: 1 })
  @IsInt({ message: 'El campo idTipoComprobante debe ser un entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idTipoComprobante: number;

  @ApiProperty({ description: 'Número de Comprobante de la factura', example: 'INV-123' })
  @IsString({ message: 'El campo nroComprobante debe ser una cadena de texto' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  nroComprobante: string;

  @IsDate({ message: 'El campo fecha debe ser una fecha válida' })
  @ApiProperty({ description: 'Fecha de la Venta', example: '2023-11-02' })
  fecha: Date;

  @ApiProperty({ description: 'ID del Cliente', example: 2 })
  @IsInt({ message: 'El campo idCliente debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idCliente: number;

  @ApiProperty({ description: 'ID del Vendedor', example: 3 })
  @IsInt({ message: 'El campo idVendedor debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idVendedor: number;

  @ApiProperty({ description: 'ID del Método de Pago', example: 4 })
  @IsInt({ message: 'El campo idMetodoPago debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idMetodoPago: number;

  @ApiProperty({ description: 'Subtotal de la Venta', example: 100.0 })
  @IsNumber({}, { message: 'El campo subTotal debe ser un número' })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  subTotal: number;

  @ApiProperty({ description: 'Impuestos de la Venta', example: 18.5 })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  impuestos: number;

  @ApiProperty({ description: 'Descuentos de la Venta', example: 5.0 })
  @IsNumber({}, { message: 'El campo descuentos debe ser un número' })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  descuentos: number;

  @ApiProperty({ description: 'Total de la Venta', example: 113.5 })
  @IsNumber({}, { message: 'El campo total debe ser un número' })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  total: number;
}
