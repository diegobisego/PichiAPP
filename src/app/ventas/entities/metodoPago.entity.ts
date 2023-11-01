import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class MetodoPago {
    @PrimaryGeneratedColumn()
    idMetodoPago: number

    @Column()
    descripcion: string
}