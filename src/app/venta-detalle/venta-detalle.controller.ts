import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentaDetalleService } from './venta-detalle.service';
import { CreateVentaDetalleDto } from './dto/create-venta-detalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-venta-detalle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Venta-Detalle')
@Controller('salesDetails')
export class VentaDetalleController {
  constructor(private readonly ventaDetalleService: VentaDetalleService) {}

  @Post()
  create(@Body() createVentaDetalleDto: CreateVentaDetalleDto[]) {
    return this.ventaDetalleService.create(createVentaDetalleDto);
  }

  @Get()
  findAll() {
    return this.ventaDetalleService.findAll();
  }

  @Get('accountResume')
  findMovimientosDeCliente() {
    return this.ventaDetalleService.findMovimientosDeClientes();
  }

  @Get('accountStaiment')
  findaccountStaiment() {
    return this.ventaDetalleService.findAccountStaiment();

  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventaDetalleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentaDetalleDto: UpdateVentaDetalleDto) {
    return this.ventaDetalleService.update(+id, updateVentaDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventaDetalleService.remove(+id);
  }
}
