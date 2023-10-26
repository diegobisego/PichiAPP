import { Module } from '@nestjs/common';
import { ArticulosService } from './articulos.service';
import { ArticulosController } from './articulos.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Articulo } from './entities/articulo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Articulo])],
  controllers: [ArticulosController],
  providers: [ArticulosService],
})
export class ArticulosModule {}
