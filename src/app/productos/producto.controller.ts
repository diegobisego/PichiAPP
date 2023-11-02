import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductosService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // crear un producto
  @Post()
  @ApiOperation({
    summary: 'Creacion de Producto',
    description: 'Se crea un producto dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'Producto creado con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async createProducto(@Body() createProductoDto: CreateProductoDto) {
    try {
      const productoCreado = await this.productosService.create(createProductoDto);
      return productoCreado;
    } catch (error) {
      console.error(`Error en la creación del producto: ${error}`);
      throw new HttpException(
        'Error interno del servidor al crear el producto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // editar un producto
  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un Producto',
    description: 'Se actualiza un producto',
  })
  @ApiResponse({ status: 200, description: 'Producto actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    try {
      const updatedProducto = await this.productosService.update(
        id,
        updateProductoDto,
      );
      return updatedProducto;
    } catch (error) {
      console.error(`Error al actualizar el producto: ${error}`);
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Producto no encontrado');
      } else {
        throw new HttpException(
          'Error interno del servidor al actualizar el producto',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  // obtener lista de productos
  @Get()
  @ApiOperation({
    summary: 'Obtener Productos',
    description: 'Se obtiene la lista de productos',
  })
  @ApiResponse({ status: 200, description: 'Productos encontrados con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findAll() {
    try {
      const findProducts = await this.productosService.findAll();
      return findProducts;
    } catch (error) {
      console.error(`Error al obtener productos: ${error}`);
      throw new HttpException(
        'Error interno del servidor al obtener productos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // obtener un producto
  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un Producto',
    description: 'Se obtiene un producto',
  })
  @ApiResponse({ status: 200, description: 'Producto encontrado con éxito' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.productosService.findOne(id);
    } catch (error) {
      throw new NotFoundException(`Error: ${error}`);
    }
  }
  

  // eliminar un producto
  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un Producto',
    description: 'Se elimina un producto',
  })
  @ApiResponse({ status: 200, description: 'Producto eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async remove(@Param('id') id: string) {
    try {
      await this.productosService.remove(+id);
      return {
        message: 'Producto eliminado con éxito',
      };
    } catch (error) {
      console.error(`Error al eliminar el producto: ${error}`);
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Producto no encontrado');
      } else {
        throw new HttpException(
          'Error interno del servidor al eliminar el producto',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
