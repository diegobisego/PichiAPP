import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('metodo_pago')
export class MetodoPago {
    @PrimaryGeneratedColumn()
    idMetodoPago: number

    @Column()
    descripcion: string
}