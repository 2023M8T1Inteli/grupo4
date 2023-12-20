import { ApiProperty } from "@nestjs/swagger";

export class FindJogoDto {
	@ApiProperty()
	email: string;
}