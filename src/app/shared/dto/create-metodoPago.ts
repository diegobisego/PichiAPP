import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator'

export class CreateMetodoPago {
    @IsString({message: 'El campo descripcion debe ser un String'})
    @ApiProperty({example: 'Efectivo'})
    descripcion:string
}