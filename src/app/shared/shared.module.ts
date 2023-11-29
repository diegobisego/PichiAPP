import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Ciudad } from './entities/ciudad.entity';
import { MetodoPago } from './entities/metodoPago.entity';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';
import { TipoComprobanteFiscal } from './entities/tipoComprobanteFiscal.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Pais,Ciudad,MetodoPago,TipoComprobanteFiscal])],
    controllers: [SharedController],
    providers: [SharedService],
})
export class SharedModule {}
