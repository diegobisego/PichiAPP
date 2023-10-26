import { Entity, Column , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Articulo {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column({unique:true})
    producto: string  // nombre del producuto ej: aceitunas verdes

    @Column()
    categoria: number  // cateogria del producto ej: 0 , 2 , Grandes, Blancos

    @Column()
    pesoCantidad: number   // cantidad en numero ej: 2 , 3 , 5 , 10

    @Column()
    unidadMedida: number // unidad ej: kg , g, L 
        
    @Column({nullable:true})
    stock: number // stock del producto

}
