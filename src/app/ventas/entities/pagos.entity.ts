import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import { Cliente } from 'src/app/clientes/entities/cliente.entity';
import { Vendedor } from '../entities/vendedor.entity';
import { MetodoPago } from '../../shared/entities/metodoPago.entity';

@Entity()
export class Pago {
  @PrimaryGeneratedColumn()
  idPago: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({type: 'varchar', length: 10})
  nroComprobante: string;

  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn({ name: 'idCliente' })
  idCliente: number;

  @ManyToOne(() => Vendedor, { eager: true })
  @JoinColumn({ name: 'idVendedor' }) // Nombre de la columna de la clave foránea
  idVendedor: number;

  @ManyToOne(() => MetodoPago, { eager: true })
  @JoinColumn({ name: 'idMetodoPago' }) // Nombre de la columna de la clave foránea
  idMetodoPago: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @BeforeInsert()
  setDefaultValues() {
    // Establecer la fecha y hora actual antes de insertar el registro
    this.fecha = new Date();
  }
}
