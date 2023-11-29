import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pais } from 'src/app/shared/entities/pais.entity';
import { Ciudad } from 'src/app/shared/entities/ciudad.entity';
import { CondicionFiscal } from './condicionFiscal.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column()
  nombreCliente: string;

  @ManyToOne(() => CondicionFiscal, { eager: true })
  @JoinColumn({ name: 'idCondicionFiscal' })
  idCondicionFiscal: number;

  @Column()
  direccion: string;

  @ManyToOne(() => Ciudad, { eager: true })
  @JoinColumn({ name: 'idCiudad' })
  idCiudad: number;

  @ManyToOne(() => Pais, { eager: true })
  @JoinColumn({ name: 'idPais' })
  idPais: number;

  @Column()
  telefono: string;
  @Column()
  dniCuit: string;
  @Column()
  email: string;
  @Column()
  razonSocial: string;
  @Column()
  infoAdicional: string;
}
