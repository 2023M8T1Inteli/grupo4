import { ApiProperty } from "@nestjs/swagger";

export class CreateTerapeutaDto {
	@ApiProperty()
	nome_completo: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	senha: string; 
}
