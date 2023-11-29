import { ApiProperty } from '@nestjs/swagger';

export class CreateMetodoPago {
    @ApiProperty({example: 'Efectivo'})
    descripcion:string
}