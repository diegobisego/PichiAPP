import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ciudad {
    @PrimaryGeneratedColumn()
    idCiudad: number;

    @Column()
    descripcion: string;
}
