import { PartialType } from '@nestjs/swagger';
import { CreateTerapeutaDto } from './create-terapeuta.dto';

export class UpdateTerapeutaDto extends PartialType(CreateTerapeutaDto) {}
