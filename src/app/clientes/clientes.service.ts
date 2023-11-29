import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const nuevoCliente = this.clienteRepository.create(createClienteDto);
    const clienteGuardado = await this.clienteRepository.save(nuevoCliente);
    if (clienteGuardado) {
      return clienteGuardado;
    } else {
      throw new BadRequestException('Error al intentar crear el cliente');
    }
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne(idCliente: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({
      where: { idCliente },
    });
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${idCliente} no encontrado.`);
    }
    return cliente;
  }

  async update(idCliente: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(idCliente);
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${idCliente} no encontrado.`);
    }
    Object.keys(updateClienteDto).forEach((key) => {
      if (updateClienteDto[key] !== undefined) {
        cliente[key] = updateClienteDto[key];
      }
    });
    const updatedCliente = await this.clienteRepository.save(cliente);
    return updatedCliente;
  }

  async remove(idCliente: number): Promise<void>  {
    const deleteResult = await this.clienteRepository.delete(idCliente);
    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Cliente con ID ${idCliente} no encontrado.`);
    }
  }
}
