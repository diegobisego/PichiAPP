import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class CondicionFiscal {
  @PrimaryColumn()
  idCondicionFiscal: number;

  @Column()
  nombreCorto: string;

  @Column()
  descripcion: string;
}
