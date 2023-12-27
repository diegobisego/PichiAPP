import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { TipoComprobanteFiscal } from "../../shared/entities/tipoComprobanteFiscal.entity"; 
import { Cliente } from "src/app/clientes/entities/cliente.entity"; 
import { Vendedor } from "../entities/vendedor.entity"; 
import { MetodoPago } from "../../shared/entities/metodoPago.entity"; 

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    idVenta: number;

    @ManyToOne(() => TipoComprobanteFiscal,  { eager: true })
    @JoinColumn({ name: 'idCodigoComprobante' }) // Nombre de la columna de la clave foránea
    idCodigoComprobante: number;

    @Column()
    nroComprobante: string; // nro comprobante es el numero de factura

    @Column()
    sucursal: number; 

    @Column({ type: 'timestamp'})
    fecha: Date;

    @ManyToOne(() => Cliente, { eager: true })
    @JoinColumn({ name: 'idCliente' })
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

    @BeforeInsert()
    setDefaultValues() {
      // Establecer la fecha y hora actual antes de insertar el registro
      this.fecha = new Date();
    }
}
