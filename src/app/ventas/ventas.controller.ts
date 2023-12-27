import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Venta } from './entities/venta.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';

@ApiTags('Ventas')
@Controller('sales')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear una Venta',
    description: 'Crea una nueva venta en la base de datos junto con su detalle',
  })
  @ApiResponse({ status: 201, description: 'Venta creada con éxito' })
  @ApiResponse({ status: 400, description: 'Error al crear la venta' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async create(@Body() createVentaDto: CreateVentaDto): Promise<Venta> {
    try {
      // Llama al método create de VentasService con los datos de la venta y su detalle
      const resultado = await this.ventasService.create(createVentaDto);

      // Puedes devolver el resultado como necesites
      return resultado

  
    } catch (error) {
      console.error(`Error al crear una venta: ${error}`);
      throw new Error('Error al crear la venta');
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener Ventas',
    description: 'Obtiene la lista de ventas',
  })
  @ApiResponse({ status: 200, description: 'Ventas encontradas con éxito' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findAll(): Promise<Venta[]> {
    try {
      return await this.ventasService.findAll();
    } catch (error) {
      console.error(`Error al obtener las ventas: ${error}`);
      throw new Error('Error al obtener las ventas');
    }
  }



  @Get(':id')
  @ApiOperation({
    summary: 'Obtener una Venta',
    description: 'Obtiene una venta',
  })
  @ApiResponse({ status: 200, description: 'Venta encontrada con éxito' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findOne(@Param('id', ParseIntPipe) id: string): Promise<Venta> {
    try {
      return await this.ventasService.findOne(+id);
    } catch (error) {
      console.error(`Error al obtener la venta: ${error}`);
      throw new Error('Error al obtener la venta');
    }
  }

  @Get('bills/:id')
  @ApiOperation({
    summary: 'Obtener Facuturas de venta por ID de cliente',
    description: 'Obtener Facuturas de venta por cliente',
  })
  @ApiResponse({ status: 200, description: 'Facuturas encontradas con éxito' })
  @ApiResponse({ status: 404, description: 'Facuturas no encontradas' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findAllBills(@Param('id', ParseIntPipe) id: number): Promise<Venta> {
    try {
      return await this.ventasService.findAllBills(+id);
    } catch (error) {
      console.error(`Error al obtener la venta: ${error}`);
      throw new Error('Error al obtener la venta');
    }
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar una Venta',
    description: 'Actualiza una venta',
  })
  @ApiResponse({ status: 200, description: 'Venta actualizada con éxito' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateVentaDto: UpdateVentaDto,
  ): Promise<Venta> {
    try {
      return await this.ventasService.update(+id, updateVentaDto);
    } catch (error) {
      console.error(`Error al actualizar la venta: ${error}`);
      throw new Error('Error al actualizar la venta');
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar una Venta',
    description: 'Elimina una venta',
  })
  @ApiResponse({ status: 200, description: 'Venta eliminada con éxito' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async remove(@Param('id', ParseIntPipe) id: string): Promise<void> {
    try {
      return await this.ventasService.remove(+id);
    } catch (error) {
      console.error(`Error al eliminar la venta: ${error}`);
      throw new Error('Error al eliminar la venta');
    }
  }
}
