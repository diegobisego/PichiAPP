import { Entity, Column , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    idVenta: number
    @Column()
    idTipoComprobante: number;
    @Column()
    noDocumento: string;
    @Column()
    fecha: Date;
    @Column()
    idCliente: number;
    @Column()
    idVendedor: number;
    @Column()
    idMetodoPago: number;
    @Column()
    subTotal: number;
    @Column()
    impuestos: number;
    @Column()
    descuentos: number;
    @Column()
    total: number;
}
