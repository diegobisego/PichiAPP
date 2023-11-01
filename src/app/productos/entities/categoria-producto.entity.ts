import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CategoriaProducto {

    @PrimaryGeneratedColumn()
    idCategoriaProducto: number;

    @Column()
    descripcion: string;
}
