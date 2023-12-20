import { PartialType } from '@nestjs/swagger';
import { CreateJogoDto } from './create-jogo.dto';

export class UpdateJogoDto extends PartialType(CreateJogoDto) {
	nomeJogo?: string;
	publico?: string;
	email?: string;
}
