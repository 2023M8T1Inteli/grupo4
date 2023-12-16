import { ApiProperty } from "@nestjs/swagger";

export class CreateSessoeDto {
	@ApiProperty()
	paciente_id: string; 

	@ApiProperty()
	terapeuta_email: string; 

	@ApiProperty()
	data: Date;

	@ApiProperty()
	jogo_id: number;

}
