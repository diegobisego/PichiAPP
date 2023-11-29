import { Producto } from "src/app/productos/entities/producto.entity";
import { Venta } from "src/app/ventas/entities/venta.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class DetalleVenta {

    @PrimaryGeneratedColumn()
    idDetalleVenta: number;

    @Column()
    fecha: Date;

    @ManyToOne(() => Venta, { eager: true }) 
    @JoinColumn({ name: 'idVenta' }) 
    idVenta: number;

    @ManyToOne(() => Producto, { eager: true })
    @JoinColumn({ name: 'idProducto' }) 
    idProducto: number;

    @Column()
    cantidad: number;

    @Column()    
    importeUnit: number;

    @Column()
    total: number;
}