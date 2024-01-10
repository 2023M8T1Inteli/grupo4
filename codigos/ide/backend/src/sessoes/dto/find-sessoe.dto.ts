import { ApiProperty } from "@nestjs/swagger";

export class FindSessaoDto {	
	@ApiProperty()
	email: string;
}