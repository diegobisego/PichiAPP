import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from '../../ventas/entities/venta.entity';
import { Producto } from 'src/app/productos/entities/producto.entity';


@Entity('venta_detalle')
export class VentaDetalle {
  @PrimaryGeneratedColumn()
  idVentaDetalle: number;

  @ManyToOne(() => Venta, {eager: true} )
  @JoinColumn({ name: 'idVenta' }) 
  idVenta: number;

  @ManyToOne(() => Producto, {eager: true} )
  @JoinColumn({ name: 'idProducto' }) 
  idProducto: number;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subTotalUnit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  impuestoUnit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  descuentoUnit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalUnit: number;
}
