import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity'; 
import { Repository } from 'typeorm';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { DeepPartial } from 'typeorm';

@Injectable()
export class productosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  /* METODOS */
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = await this.productoRepository.create(createProductoDto as DeepPartial<Producto>);
    return this.productoRepository.save(producto);
  }

  async findAll() {
    const listaproductos = await this.productoRepository.find();
    return listaproductos;
  }

  async findOne(idProducto: number) {
    const product = await this.productoRepository.findOne({
      where: { idProducto }, // Aquí se especifica la condición de búsqueda
    });
    return product;
  }
  


  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }

    // Aplicamos las actualizaciones desde el UpdateProductoDto a la entidad Producto
    this.productoRepository.merge(producto, updateProductoDto);

    const updatedProducto = await this.productoRepository.save(producto);

    return updatedProducto;
  }
  

  remove(id: number) {
    return this.productoRepository.delete(id);
  }
}
