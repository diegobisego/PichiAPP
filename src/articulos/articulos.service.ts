import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { Articulo } from './entities/articulo.entity';
import { Repository } from 'typeorm';
import { UpdateArticuloDto } from './dto/update-articulo.dto';

@Injectable()
export class ArticulosService {

  constructor(@InjectRepository(Articulo) private articuloRepository:Repository<Articulo>) {}


  /* METODOS */
  create(articulo: CreateArticuloDto) {
    const newArticulo = this.articuloRepository.create(articulo)
    return this.articuloRepository.save(newArticulo)
  }

  findAll() {
    return `This action returns all articulos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articulo`;
  }

  update(id: number, articulo: UpdateArticuloDto) {
    return `This action updates a #${id} articulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} articulo`;
  }
}
