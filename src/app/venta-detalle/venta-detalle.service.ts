import { Injectable } from '@nestjs/common';
import { CreateVentaDetalleDto } from './dto/create-venta-detalle.dto';
import { UpdateVentaDetalleDto } from './dto/update-venta-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../clientes/entities/cliente.entity';
import { VentaDetalle } from './entities/venta-detalle.entity';
import { Venta } from '../ventas/entities/venta.entity';

@Injectable()
export class VentaDetalleService {
  constructor(
    @InjectRepository(VentaDetalle)
    private ventaDetalleRepository: Repository<VentaDetalle>,
  ) {}

  async create(
    createVentaDetalleDtoArray: CreateVentaDetalleDto[],
  ): Promise<VentaDetalle[]> {
    try {
      // Procesar y guardar cada objeto del array
      const ventasDetalleGuardadas = await Promise.all(
        createVentaDetalleDtoArray.map(async (createVentaDetalleDto) => {
          const nuevaVentaDetalle = this.ventaDetalleRepository.create(
            createVentaDetalleDto,
          );
          return await this.ventaDetalleRepository.save(nuevaVentaDetalle);
        }),
      );

      return ventasDetalleGuardadas;
    } catch (error) {
      console.error(
        `Se produjo un error al intentar crear una venta: ${error}`,
      );
      throw new Error('Error al crear la venta');
    }
  }

  findAll() {
    return `This action returns all ventaDetalle`;
  }

  async findMovimientosDeClientes(): Promise<VentaDetalle[]> {
    const result = await this.ventaDetalleRepository
      .createQueryBuilder('ventaDetalle')
      .leftJoinAndSelect('ventaDetalle.idVenta', 'venta')
      .leftJoinAndSelect('venta.idCliente', 'cliente')
      .leftJoinAndSelect('venta.idCodigoComprobante', 'TipoComprobanteFiscal')
      .leftJoinAndSelect('cliente.idCondicionFiscal', 'condicionFiscal')
      .leftJoinAndSelect('ventaDetalle.idProducto', 'producto')
      .select(['ventaDetalle.idVentaDetalle', 'ventaDetalle.subTotalUnit'])
      .addSelect(['cliente'])
      .addSelect(['venta'])
      .addSelect(['producto'])
      .addSelect(['TipoComprobanteFiscal'])
      .orderBy('venta.fecha', 'DESC')
      .getRawMany();

     return result;
  }

  async findAccountStaiment(): Promise<VentaDetalle[]> {
    const result = await this.ventaDetalleRepository
      .createQueryBuilder('ventaDetalle')
      .leftJoinAndSelect('ventaDetalle.idVenta', 'venta')
      .leftJoinAndSelect('venta.idCliente', 'cliente')
      .leftJoinAndSelect('venta.idCodigoComprobante', 'TipoComprobanteFiscal')
      .select([
        'SUM(CASE WHEN venta.idCodigoComprobante IN (:...comprobantesFacturaOptions) THEN venta.total ELSE 0 END) AS TotalVentaFacturas',
      ])
      .addSelect([
        'SUM(CASE WHEN venta.idCodigoComprobante IN (:...comprobanteRecibosOptions) THEN venta.total ELSE 0 END) AS TotalVentaRecibos',
      ])
      .addSelect('cliente.idCliente')
      .addSelect('cliente.nombreCliente')
      .where('venta.idCodigoComprobante IN (:...comprobantesFacturaOptions)', {
        comprobantesFacturaOptions: [1, 2, 6, 7],
      })
      .orWhere('venta.idCodigoComprobante IN (:...comprobanteRecibosOptions)', {
        comprobanteRecibosOptions: [3,4,8,9],
      })
      .groupBy('cliente.idCliente')  // Añadir esta línea si es necesario
      .getRawMany();
  
    console.log(result);
  
    return result;
  }
  

  findOne(id: number) {
    return `This action returns a #${id} ventaDetalle`;
  }

  update(id: number, updateVentaDetalleDto: UpdateVentaDetalleDto) {
    return `This action updates a #${id} ventaDetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} ventaDetalle`;
  }
}
