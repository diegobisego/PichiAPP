import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column()
  ciudad: string;
  

  @Column()
  provincia: string;

  @Column()
  pais: string;

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
