import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodoPago.entity';
import { Pais } from './entities/pais.entity';
import { Ciudad } from './entities/ciudad.entity';

@Injectable()
export class SharedService {
  constructor(
    @InjectRepository(MetodoPago)
    private payMethodRepository: Repository<MetodoPago>,
    @InjectRepository(Pais)
    private countriesRepository: Repository<Pais>,
    @InjectRepository(Ciudad)
    private citiesRepository: Repository<Ciudad>,
  ) {}

  getAllPayMethod = async (): Promise<MetodoPago[]> => {
    const methods = await this.payMethodRepository.find();
    return methods;
  };

  getAllCountries = async (): Promise<Pais[]> => {
    const countries = await this.countriesRepository.find();
    return countries;


  };

  getAllCities = async (): Promise<Ciudad[]> => {
    const cities = await this.citiesRepository.find();
    return cities;
  };
}
