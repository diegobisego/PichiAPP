import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CategoriaProducto } from "./categoria-producto.entity"; // Suponiendo que tienes una entidad para la categoría de productos
import { UnidadMedidaProducto } from "./unidad-medida-producto.entity"; // Suponiendo que tienes una entidad para la unidad de medida

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    idProducto: number;
    
    @Column()
    nombreProducto: string;

    @ManyToOne(() => CategoriaProducto, { eager: true }) // Relación Many-to-One con la entidad CategoriaProducto
    @JoinColumn({ name: 'idCategoriaProducto' }) // Nombre de la columna de clave foránea
    idCategoriaProducto: CategoriaProducto;

    @Column()
    idPesoCantidadProducto: number

    @ManyToOne(() => UnidadMedidaProducto, { eager: true }) // Relación Many-to-One con la entidad UnidadMedidaProducto
    @JoinColumn({ name: 'idUnidadMedidaProducto' }) // Nombre de la columna de clave foránea
    idUnidadMedidaProducto: UnidadMedidaProducto;

    @Column({ nullable: true })
    stockProducto: number;
}
