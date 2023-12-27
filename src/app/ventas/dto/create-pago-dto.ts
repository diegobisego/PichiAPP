import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, IsDate, Min } from 'class-validator';

export class CreatePagoDto {
  
  @ApiProperty({ description: 'Fecha de la Pago', example: '2023-11-02' })
  fecha: Date;

  @ApiPropertyOptional({ description: 'Número de Comprobante de la factura', example: 'INV-123' })
  @IsString()
  nroComprobante: string;

  @ApiProperty({ description: 'ID del Cliente', example: 2 })
  @IsInt({ message: 'El campo idCliente debe ser un número entero' })
  @Min(1, { message: 'Debe seleccionar un Cliente'})
  idCliente: number;

  @ApiProperty({ description: 'ID del Vendedor', example: 3 })
  @IsInt({ message: 'El campo idVendedor debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idVendedor: number;

  @ApiProperty({ description: 'ID del Método de Pago', example: 4 })
  @IsInt({ message: 'El campo idMetodoPago debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  idMetodoPago: number;

  @ApiProperty({ description: 'Total del Pago', example: 113.5 })
  @IsNumber({}, { message: 'El campo total debe ser un número' })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  total: number;
}
