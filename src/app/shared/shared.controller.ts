import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SharedService } from './shared.service';
import { MetodoPago } from './entities/metodoPago.entity';
import { Pais } from './entities/pais.entity';
import { Ciudad } from './entities/ciudad.entity';

@ApiTags('Shared')
@Controller('shared')
export class SharedController {
  constructor(private readonly sharedService: SharedService) {}

  @Get('pay-methods')
  @ApiOperation({
    summary: 'Obtener Metodos de Pagos',
    description: 'Se obtiene la lista de Métodos de Pagos',
  })
  async findAllPayMethod(): Promise<MetodoPago[]> {
    try {
      const methods = await this.sharedService.getAllPayMethod(); 
      return methods;
    } catch (error) {
      console.error('Error al obtener metodos: ', error);
    }
  }

  @Get('countries')
  @ApiOperation({
    summary: 'Obtener Paises',
    description: 'Se obtiene la lista de Paises',
  })
  async findAllCountries(): Promise<Pais[]> {
    try {
      const countries = await this.sharedService.getAllCountries(); 
      return countries;
    } catch (error) {
      console.error('Error al obtener paises: ', error);
    }
  }


  @Get('cities')
  @ApiOperation({
    summary: 'Obtener Ciudades',
    description: 'Se obtiene la lista de Ciudades',
  })
  async findAllCities(): Promise<Ciudad[]> {
    try {
      const cities = await this.sharedService.getAllCities(); 
      return cities;
    } catch (error) {
      console.error('Error al obtener paises: ', error);
    }
  }


}
