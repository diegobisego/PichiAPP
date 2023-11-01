import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";


@Entity()
export class TipoComprobante {
    @PrimaryGeneratedColumn()
    idTipoComprobante: number

    @Column()
    descripcion: string

}