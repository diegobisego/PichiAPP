import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ciudad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;
}
