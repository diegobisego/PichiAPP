import { IsString, IsInt, Min, MinLength, MaxLength, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClienteDto {

  @IsString({ message: 'El campo nombreCliente debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre y apellido del cliente / Razon Social de la Empresa', example:'Juan Perez' })
  nombreCliente: string;

  @IsInt({ message: 'El campo idCondicionFiscal debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @IsNotEmpty()
  @ApiProperty({ description: 'Id de la condicion fiscal', example:'1' })
  idCondicionFiscal: number;

  @IsString({ message: 'El campo direccion debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ description: 'Direccion del cliente / Empresa', example:'Las Calles 123' })
  direccion: string;

  @IsString({ message: 'El campo Ciudad debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre de la Ciudad', example:'Villa Maria' })
  ciudad: string;

  @IsString({ message: 'El campo Provincia debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre de la Provincia', example:'Cordoba' })
  provincia: string;

  @IsString({ message: 'El campo Pais debe ser un string' })
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del Pais', example:'Argentina' })
  pais: string;

  @IsString({ message: 'El campo telefono debe ser un String' })
  @IsNotEmpty()
  @ApiPropertyOptional({ example:'0123-456789' })
  telefono: string;

  @IsString({ message: 'El campo dniCuit debe ser una cadena de caracteres' })
  @MinLength(7, { message: 'El valor no puede ser menor a 7 caracteres' })
  @MaxLength(11, { message: 'El valor no puede ser mayor a 11 caracteres' })
  @ApiProperty({ example:'12458745 / 20123456788' })
  @IsNotEmpty()
  dniCuit: string;
  

  @IsString({ message: 'El campo email debe ser un String' })
  @IsNotEmpty()
  @ApiProperty({ example:'0123-456789' })
  email: string;

  @IsString({ message: 'El campo razonSocial debe ser un String' })
  @ApiPropertyOptional({ example:'La Empresa SRL' })
  razonSocial: string;

  @IsString({ message: 'El campo infoAdicional debe ser un String' })
  @ApiPropertyOptional({ example:'Info adicional a agregar' })
  infoAdicional: string;
}
