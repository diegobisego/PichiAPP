import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Ciudad } from './entities/ciudad.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pais,Ciudad])],
    controllers: [],
    providers: [],
})
export class SharedModule {}
