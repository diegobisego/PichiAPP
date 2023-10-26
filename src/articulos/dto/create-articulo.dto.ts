import { ApiProperty } from "@nestjs/swagger";

export class CreateArticuloDto {
    @ApiProperty()
    producto: string
    @ApiProperty()
    categoria: number  
    @ApiProperty()
    pesoCantidad: number 
    @ApiProperty()
    unidadMedida: number
    @ApiProperty()
    stock: number
}
