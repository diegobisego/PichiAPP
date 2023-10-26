import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticulosModule } from './articulos/articulos.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { getDatabaseConfig } from './config/dbConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDatabaseConfig()),
    ArticulosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
