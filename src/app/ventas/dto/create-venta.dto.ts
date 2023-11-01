import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { TipoComprobante } from "../entities/tipoComprobante.entity"; 
import { Cliente } from "src/app/clientes/entities/cliente.entity"; 
import { Vendedor } from "../entities/vendedor.entity"; 
import { MetodoPago } from "../entities/metodoPago.entity"; 

@Entity()
export class CreateVentaDto {
    @PrimaryGeneratedColumn()
    idVenta: number;

    @ManyToOne(() => TipoComprobante)
    @JoinColumn({ name: 'idTipoComprobante' }) // Nombre de la columna de la clave foránea
    idTipoComprobante: TipoComprobante;

    @Column()
    noDocumento: string;

    @Column({ type: "date" })
    fecha: Date;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'idCliente' }) // Nombre de la columna de la clave foránea
    idCliente: Cliente;

    @ManyToOne(() => Vendedor)
    @JoinColumn({ name: 'idVendedor' }) // Nombre de la columna de la clave foránea
    idVendedor: Vendedor;

    @ManyToOne(() => MetodoPago)
    @JoinColumn({ name: 'idMetodoPago' }) // Nombre de la columna de la clave foránea
    idMetodoPago: MetodoPago;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    subTotal: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    impuestos: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    descuentos: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    total: number;
}
