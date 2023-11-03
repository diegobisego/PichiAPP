import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TipoComprobante } from "../entities/tipoComprobante.entity"; 
import { Cliente } from "src/app/clientes/entities/cliente.entity"; 
import { Vendedor } from "../entities/vendedor.entity"; 
import { MetodoPago } from "../entities/metodoPago.entity"; 

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    idVenta: number;

    @ManyToOne(() => TipoComprobante,  { eager: true })
    @JoinColumn({ name: 'idTipoComprobante' }) // Nombre de la columna de la clave foránea
    idTipoComprobante: number;

    @Column()
    nroDocumento: string;

    @Column({ type: "date" })
    fecha: Date;

    @ManyToOne(() => Cliente,  { eager: true })
    @JoinColumn({ name: 'idCliente' }) // Nombre de la columna de la clave foránea
    idCliente: number;

    @ManyToOne(() => Vendedor,  { eager: true })
    @JoinColumn({ name: 'idVendedor' }) // Nombre de la columna de la clave foránea
    idVendedor: number;

    @ManyToOne(() => MetodoPago,  { eager: true })
    @JoinColumn({ name: 'idMetodoPago' }) // Nombre de la columna de la clave foránea
    idMetodoPago: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    subTotal: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    impuestos: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    descuentos: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    total: number;
}
