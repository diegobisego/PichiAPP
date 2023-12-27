import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodoPago.entity';
import { SharedController } from './shared.controller';
import { SharedService } from './shared.service';
import { TipoComprobanteFiscal } from './entities/tipoComprobanteFiscal.entity';


@Module({
    imports: [TypeOrmModule.forFeature([MetodoPago,TipoComprobanteFiscal])],
    controllers: [SharedController],
    providers: [SharedService],
})
export class SharedModule {}
