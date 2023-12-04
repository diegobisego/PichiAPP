import { IsString, IsInt, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClienteDto {

  @IsString({ message: 'El campo nombreCliente debe ser un String' })
  @ApiProperty({ description: 'Nombre y apellido del cliente / Razon Social de la Empresa', example:'Juan Perez' })
  nombreCliente: string;

  @IsInt({ message: 'El campo idCondicionFiscal debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description: 'Id de la condicion fiscal', example:'1' })
  idCondicionFiscal: number;

  @IsString({ message: 'El campo direccion debe ser un String' })
  @ApiProperty({ description: 'Direccion del cliente / Empresa', example:'Las Calles 123' })
  direccion: string;

  @IsInt({ message: 'El campo idCiudad debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description: 'Id ciudad del cliente / Empresa', example:'1' })
  idCiudad: number;

  @IsInt({ message: 'El campo idPais debe ser un número entero' })
  @Min(1, { message: 'El valor no puede ser menor a 1'})
  @ApiProperty({ description: 'Id pais del cliente / Empresa', example:'1' })
  idPais: number;

  @IsString({ message: 'El campo telefono debe ser un String' })
  @ApiPropertyOptional({ example:'0123-456789' })
  telefono: string;

  @IsString({ message: 'El campo dniCuit debe ser un String' })
  @ApiProperty({ example:'12458745 / 20123456788' })
  dniCuit: string;

  @IsString({ message: 'El campo email debe ser un String' })
  @ApiProperty({ example:'0123-456789' })
  email: string;

  @IsString({ message: 'El campo razonSocial debe ser un String' })
  @ApiPropertyOptional({ example:'La Empresa SRL' })
  razonSocial: string;

  @IsString({ message: 'El campo infoAdicional debe ser un String' })
  @ApiPropertyOptional({ example:'Info adicional a agregar' })
  infoAdicional: string;
}
