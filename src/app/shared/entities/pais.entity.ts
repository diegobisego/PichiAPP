import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    idPais: number;

    @Column()
    descripcion: string;
}
