import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Categoria_Producto {

    @PrimaryGeneratedColumn()
    idCategoriaProducto: number;

    @Column()
    descripcion: string;
}
