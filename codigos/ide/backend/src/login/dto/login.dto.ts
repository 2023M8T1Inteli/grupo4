import { PartialType } from '@nestjs/mapped-types';
import { CreateTerapeutaDto } from '../../terapeutas/dto/create-terapeuta.dto';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto extends PartialType(CreateTerapeutaDto) {
    @ApiProperty()
    email: string;
    @ApiProperty()
    senha: string;
}
