import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @ApiPropertyOptional({example:'Nuevo Nombre'})
  nombreCliente?: string;

  @ApiPropertyOptional({example:'1'})
  idCondicionFiscal?: number

  @ApiPropertyOptional({example:'Nueva Direccion'})
  direccion?: string;

  @ApiPropertyOptional({description:'Id de ciudad',example:2})
  ciudad?: number;

  @ApiPropertyOptional({description:'Id de Pais',example:2})
  pais?: number;

  @ApiPropertyOptional({example:'123456987'})
  telefono?: string;

  @ApiPropertyOptional({example:20123456879})
  dniCuit?: string;
  
  @ApiPropertyOptional({example:'email@email.com'})
  email?: string;

  @ApiPropertyOptional({example:'Empresa SRL'})
  empresa?: string;
  
  @ApiPropertyOptional({example:'Info adicional'})
  infoAdicional?: string;
}
