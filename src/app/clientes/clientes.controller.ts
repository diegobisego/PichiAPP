import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cliente } from './entities/cliente.entity';
import { CondicionFiscal } from './entities/condicionFiscal.entity';

@ApiTags('Clientes')
@Controller('clients')
export class ClientesController {
  constructor(
      private readonly clientesService: ClientesService,
      private readonly condicionFiscalService: ClientesService

      
      ) {}

  @Post()
  @ApiOperation({
    summary: 'Creación de cliente',
    description: 'Se crea un cliente dentro de la base de datos',
  })
  @ApiResponse({ status: 201, description: 'Cliente creado con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async create(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    try {
      return await this.clientesService.create(createClienteDto);
    } catch (error) {
      throw new HttpException(
        'Error al crear el cliente',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener Clientes',
    description: 'Obtener la lista de clientes',
  })
  @ApiResponse({ status: 200, description: 'Clientes encontrados con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }

  @Get('/tax-Status')
  @ApiOperation({
    summary: 'Obtener Condicion Fiscal',
    description: 'Obtener la lista de clientes',
  })
  @ApiResponse({ status: 200, description: 'Clientes encontrados con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  findAllCondicionFiscal(): Promise<CondicionFiscal[]> {
    return this.condicionFiscalService.findAllCondicionFiscal();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un Cliente',
    description: 'Obtener un cliente por su ID',
  })
  @ApiResponse({ status: 200, description: 'Cliente encontrado con éxito' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  findOne(@Param('id', ParseIntPipe) id: string): Promise<Cliente> {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un Cliente',
    description: 'Actualizar un cliente por su ID',
  })
  @ApiResponse({ status: 200, description: 'Cliente actualizado con éxito' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  update(@Param('id', ParseIntPipe) id: string, @Body() updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un Cliente',
    description: 'Eliminar un cliente por su ID',
  })
  @ApiResponse({ status: 200, description: 'Cliente eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    return this.clientesService.remove(+id);
  }
}
