import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber,  Min } from 'class-validator';


export class CreateVentaDetalleDto {
  @ApiProperty({ description: 'Id de la venta', example: '1' })
  @Min(1, { message: 'El campo idVenta no puede ser menor a 1' })
  @IsInt({ message: 'El campo idVenta debe ser un entero' })
  idVenta: number;

  @ApiProperty({ description: 'Id del producto', example: '5' })
  @Min(1, { message: 'El campo idProducto no puede ser menor a 1' })
  @IsInt({ message: 'El campo idProducto debe ser un entero' })
  idProducto: number;

  @ApiProperty({ description: 'Cantidad del producto', example: '2' })
  @IsInt({ message: 'El campo cantidad debe ser un entero' })
  @Min(1, { message: 'El campo cantidad no puede ser menor a 1' })
  cantidad: number;

  @ApiProperty({ example: '100' })
  @IsNumber({maxDecimalPlaces: 2}, { message: 'El campo subTotalUnit debe ser un número' })
  @Min(1, { message: 'El campo subTotalUnit no puede ser menor a 1' })
  subTotalUnit: number;

  @ApiProperty({ example: '100' })
  @IsNumber({maxDecimalPlaces: 2}, { message: 'El campo impuestoUnit debe ser un número' })
  @Min(1, { message: 'El campo subTotalUnit no puede ser menor a 1' })
  impuestoUnit: number;

  @ApiPropertyOptional({ example: '100' })
  @IsNumber({maxDecimalPlaces: 2}, { message: 'El campo descuentoUnit debe ser un número' })
  descuentoUnit: number;

  @ApiProperty({ example: '200' })
  @IsNumber({maxDecimalPlaces: 2}, { message: 'El campo totalUnit debe ser un número' })
  totalUnit: number;
}
