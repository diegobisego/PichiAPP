import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';



@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    try {
      // Crear instancias de las entidades
      const nuevaVenta = this.ventaRepository.create(createVentaDto);

      // Guardar la venta principal
      const ventaGuardada = await this.ventaRepository.save(nuevaVenta);

      // Devolver un objeto con las instancias guardadas
      return ventaGuardada

    } catch (error) {
      console.error(`Se produjo un error al intentar crear una venta: ${error}`);
      throw new Error('Error al crear la venta');
    }
  }

  async findAll(): Promise<Venta[]> {
    return await this.ventaRepository.find();
  }

  async findAllBills(idCliente: number): Promise<any> {
    const result = await this.ventaRepository
      .createQueryBuilder('venta')
      .select(['venta.nroComprobante','venta.total'])
      .where('venta.idCliente = :idCliente', { idCliente })
      .getMany();

    return result;
  }

  async findOne(idVenta: number): Promise<Venta> {
    const venta = await this.ventaRepository.findOne({
      where: { idVenta },
    });
    if (!venta) {
      throw new NotFoundException(`Venta con ID ${idVenta} no encontrada.`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);

    if (!venta) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada.`);
    }

    Object.keys(updateVentaDto).forEach((key) => {
      if (updateVentaDto[key] !== undefined) {
        venta[key] = updateVentaDto[key];
      }
    });

    const updatedVenta = await this.ventaRepository.save(venta);

    return updatedVenta;
  }

  async remove(id: number): Promise<void> {
    const deleteResult = await this.ventaRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Venta con ID ${id} no encontrada.`);
    }
  }
}
