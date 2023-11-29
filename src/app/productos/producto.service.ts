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
import { Categoria_Producto } from './entities/categoria-producto.entity';
import { UnidadMedidaProducto } from './entities/unidad-medida-producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Categoria_Producto)
    private categoriaRepository: Repository<Categoria_Producto>,
    @InjectRepository(UnidadMedidaProducto)
    private UMRepository: Repository<UnidadMedidaProducto>,
  ) {}

  // crear un producto
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const nuevoProducto = this.productoRepository.create(createProductoDto);
    const productoGuardado = await this.productoRepository.save(nuevoProducto);
    if (productoGuardado) {
      return productoGuardado;
    } else {
      throw new BadRequestException('Error al intentar crear el producto');
    }
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async findOne(idProducto: number): Promise<Producto> {
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

  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
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

  async remove(id: number):Promise<void> {
    const deleteResult = await this.productoRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
  }

  async findAllCategory(): Promise<Categoria_Producto[]> {
    return await this.categoriaRepository.find();
  }

  async findAllUM(): Promise<UnidadMedidaProducto[]> {
    return await this.UMRepository.find();
  }



}
