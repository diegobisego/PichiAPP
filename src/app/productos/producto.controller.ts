import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiOperation,ApiResponse, ApiTags } from '@nestjs/swagger';
import { productosService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@ApiTags('Productos')
@Controller('productos')
export class productosController {
  constructor(private readonly productosService: productosService) {}

  // crear producto
  @Post()
  @ApiOperation({
    summary: 'Creacion de Producto',
    description: 'Se crea un producto dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'Producto creado con exito' })
  @ApiResponse({status: 400, description: 'Error al crear Producto dentro de la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })


  async createProducto(@Body() createProductoDto: CreateProductoDto) {
    try {
      return await this.productosService.create(createProductoDto);
    } catch (error) {
      console.error(`Error en la creacion del producto: ${error}`)
    }
  }

  // obtener todos los productos
  
  @Get()
  @ApiOperation({
    summary: 'Obtener Producto',
    description: 'Se obtiene la lista de productos',
  })
  @ApiResponse({ status: 200, description: 'Productos encontrados con exito' })
  @ApiResponse({status: 400, description: 'Error al listar los productos en la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })

  async findAll() {
    try {
      return await this.productosService.findAll();
    } catch (error) {
      console.error(`Error al listar los productos: ${error}`)
    }
  }

  // buscar un Producto
  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un Producto',
    description: 'Se obtiene un productos',
  })
  @ApiResponse({ status: 200, description: 'Producto encontrado con exito' })
  @ApiResponse({status: 400, description: 'Error al buscar el productos en la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })


  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findOne(id);
  }

  // Editar un producto
  @Patch(':id')
  @ApiOperation({
    summary: 'Editar un Producto',
    description: 'Se edita un producto',
  })
  @ApiResponse({ status: 200, description: 'Producto Eliminado con exito' })
  @ApiResponse({status: 400, description: 'Error al Eliminar el productos en la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })

  update(@Param('id', ParseIntPipe) id: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(id, updateProductoDto);
  }


  // eliminar un producto
  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un Producto',
    description: 'Se Elimina un producto',
  })
  @ApiResponse({ status: 200, description: 'Producto Editado con exito' })
  @ApiResponse({status: 400, description: 'Error al Editar el productos en la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
