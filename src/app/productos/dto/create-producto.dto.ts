import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateProductoDto {
  @IsString({ message: 'El campo nombreProducto debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ example:'Producto 1' })
  nombreProducto: string;

  @IsInt({ message: 'El campo idCategoriaProducto debe ser un número entero' })
  @IsNotEmpty()
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description:'Id de la categoria', example:'1' })
  idCategoriaProducto: number;

  @IsInt({ message: 'El campo pesoCantidadProducto debe ser un número entero' })
  @IsNotEmpty()
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description:'peso/cantidad', example:'5' })
  pesoCantidadProducto: number;

  @IsInt({ message: 'El campo idUnidadMedidaProducto debe ser un número entero' })
  @IsNotEmpty()
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description:'Id de la unidad de medida', example:'1' })
  idUnidadMedidaProducto: number;

  @IsInt({ message: 'El campo stockProducto debe ser un número entero' })
  @Min(0, { message: 'El valor no puede ser menor a 0'})
  @ApiPropertyOptional({ example:'100' })
  stockProducto: number;

  @IsString({ message: 'El campo nombreCompleto debe ser un String' })
  @ApiPropertyOptional()
  nombreCompleto: string;

  @IsString({ message: 'El campo estado debe ser un String' })
  @ApiPropertyOptional({ example:'Activo' })
  estado: string;
}
