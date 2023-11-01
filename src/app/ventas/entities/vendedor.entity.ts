import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Vendedor {
    @PrimaryGeneratedColumn()
    idVendedor: number

    @Column()
    nombreVendedor: string

}