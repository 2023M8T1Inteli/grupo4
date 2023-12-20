import { CreateJogoDto } from './create-jogo.dto';
declare const UpdateJogoDto_base: import("@nestjs/common").Type<Partial<CreateJogoDto>>;
export declare class UpdateJogoDto extends UpdateJogoDto_base {
    nomeJogo?: string;
    publico?: string;
    email?: string;
}
export {};
