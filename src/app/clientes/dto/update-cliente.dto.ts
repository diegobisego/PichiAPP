import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @ApiProperty({ required: false })
  nombreCliente?: string;

  @ApiProperty({ required: false })
  direccion: string;

  @ApiProperty({ required: false })
  ciudad: number;

  @ApiProperty({ required: false })
  pais: number;

  @ApiProperty({ required: false })
  telefono: string;

  @ApiProperty({ required: false })
  dniCuit: string;
  
  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  empresa: string;
  
  @ApiProperty({ required: false })
  infoAdicional: string;
}
