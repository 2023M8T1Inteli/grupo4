import { ApiProperty } from "@nestjs/swagger";

export class CreatePacienteDto {
	@ApiProperty()
	nome_completo: string;

	@ApiProperty()
	data_de_nascimento: string;

	@ApiProperty()
	nome_responsavel: string;

	@ApiProperty()
	contato_responsavel: string; 

	@ApiProperty()
	ficha_medica: string; 
}
