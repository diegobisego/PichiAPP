import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  // crear un producto
  async create(createProductoDto: CreateProductoDto) {
    const nuevoProducto = this.productoRepository.create(createProductoDto);
    const productoGuardado = await this.productoRepository.save(nuevoProducto);
    if (productoGuardado) {
      return productoGuardado;
    } else {
      throw new BadRequestException('Error al intentar crear el producto');
    }
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(idProducto: number) {
    const product = await this.productoRepository.findOne({
      where: { idProducto },
    });
    if (!product) {
      throw new NotFoundException(
        `Producto con ID ${idProducto} no encontrado.`,
      );
    }
    return product;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
  
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
  
    Object.keys(updateProductoDto).forEach((key) => {
      if (updateProductoDto[key] !== undefined) {
        producto[key] = updateProductoDto[key];
      }
    });
  
    const updatedProducto = await this.productoRepository.save(producto);
  
    return updatedProducto;
  }
  


  async remove(id: number) {
    const deleteResult = await this.productoRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
  }
}
