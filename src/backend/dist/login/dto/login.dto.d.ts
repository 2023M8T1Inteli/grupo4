import { CreateTerapeutaDto } from '../../terapeutas/dto/create-terapeuta.dto';
declare const LoginDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTerapeutaDto>>;
export declare class LoginDto extends LoginDto_base {
    email: string;
    senha: string;
}
export {};
