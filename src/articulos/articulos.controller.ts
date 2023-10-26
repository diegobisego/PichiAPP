import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation,ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArticulosService } from './articulos.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';

@ApiTags('Productos')
@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) {}

  // crear producto
  @Post()
  @ApiOperation({
    summary: 'Creacion de Producto',
    description: 'Se crea un producto dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'Producto creado con exito' })
  @ApiResponse({status: 400, description: 'Error al crear Producto dentro de la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })


  createArticulo(@Body() createArticuloDto: CreateArticuloDto) {
    return this.articulosService.create(createArticuloDto);
  }

  // obtener todos los productos
  
  @Get()
  findAll() {
    return this.articulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articulosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticuloDto: UpdateArticuloDto) {
    return this.articulosService.update(+id, updateArticuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articulosService.remove(+id);
  }
}
