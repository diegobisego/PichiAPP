import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SharedService } from './shared.service';
import { MetodoPago } from './entities/metodoPago.entity';


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



}
