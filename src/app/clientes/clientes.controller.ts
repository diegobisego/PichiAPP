import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  @ApiOperation({
    summary: 'Creacion de cliente',
    description: 'Se crea un cliente dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'cliente creado con exito' })
  @ApiResponse({status: 400, description: 'Error al crear cliente dentro de la base de datos'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })

  async create(@Body() createClienteDto: CreateClienteDto) {
    try {
      return await this.clientesService.create(createClienteDto);
    } catch (error) {
      console.error(`Se produjo un error al intentar crear un cliente: ${error}`)
    }
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
