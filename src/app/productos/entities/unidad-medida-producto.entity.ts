import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UnidadMedidaProducto {

    @PrimaryGeneratedColumn()
    idUnidadMedidaProducto: number;

    @Column()
    descripcion: string;
}
