import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({description: 'Nombre y apellido del cliente / Razon Social de la Empresa', example:'Juan Perez'})
  nombreCliente: string;

  @ApiProperty({description: 'Direccion del cliente / Empresa', example:'Las Calles 123'})
  direccion: string

  @ApiProperty({description: 'Id ciudad del cliente / Empresa', example:'1'})
  ciudad: number;

  @ApiProperty({description: 'Id pais del cliente / Empresa', example:'1'})
  pais: number;

  @ApiPropertyOptional({example:'0123-456789'})
  telefono: string;

  @ApiProperty({example:'12458745 / 20123456788'})
  dniCuit: string;

  @ApiProperty({example:'0123-456789'})
  email: string;

  @ApiPropertyOptional({example:'La Empresa SRL'})
  razonSocial: string;

  @ApiPropertyOptional({example:'Info adicional a agregar'})
  infoAdicional: string;
}
