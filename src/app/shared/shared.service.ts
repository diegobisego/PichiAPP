import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodoPago.entity';


@Injectable()
export class SharedService {
  constructor(
    @InjectRepository(MetodoPago)
    private payMethodRepository: Repository<MetodoPago>,

  ) {}

  getAllPayMethod = async (): Promise<MetodoPago[]> => {
    const methods = await this.payMethodRepository.find();
    return methods;
  };

}
