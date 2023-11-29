import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Categoria_Producto } from "./categoria-producto.entity"; // Suponiendo que tienes una entidad para la categoría de productos
import { UnidadMedidaProducto } from "./unidad-medida-producto.entity"; // Suponiendo que tienes una entidad para la unidad de medida

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    idProducto: number;
    
    @Column()
    nombreProducto: string;

    @Column()
    precioProducto: number;

    @ManyToOne(() => Categoria_Producto, { eager: true }) // Relación Many-to-One con la entidad CategoriaProducto
    @JoinColumn({ name: 'idCategoriaProducto' }) // Nombre de la columna de clave foránea
    idCategoriaProducto: number;

    @Column()
    pesoCantidadProducto: number // cuanto pesa o cuanta cantidad tiene en numero

    @ManyToOne(() => UnidadMedidaProducto, { eager: true }) // Relación Many-to-One con la entidad UnidadMedidaProducto
    @JoinColumn({ name: 'idUnidadMedidaProducto' }) // Nombre de la columna de clave foránea
    idUnidadMedidaProducto: number;

    @Column({ nullable: true })
    stockProducto: number;

    @Column()
    nombreCompleto: string

    @Column({default:'Activo'})
    estado: string
}
