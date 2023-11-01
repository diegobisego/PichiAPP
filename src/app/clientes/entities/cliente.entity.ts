import { Entity, Column , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente: number
    @Column()
    nombreCliente: string
    @Column()
    direccion: string;
    @Column()
    ciudad: number;
    @Column()
    pais: number;
    @Column()
    telefono: string;
    @Column()
    dniCuit: string;
    @Column()
    email: string;
    @Column()
    razonSocial: string;
    @Column()
    infoAdicional: string;


}
