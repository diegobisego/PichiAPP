import { Entity, Column, PrimaryColumn } from "typeorm";


@Entity()
export class TipoComprobanteFiscal {

    @PrimaryColumn()
    idCodigoComprobante: number

    @Column()
    descripcion: string

}