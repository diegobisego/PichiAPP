import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CondicionFiscal } from './entities/condicionFiscal.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cliente,CondicionFiscal])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
