import { PartialType } from '@nestjs/swagger';
import { CreateSessoeDto } from './create-sessoe.dto';

export class UpdateSessoeDto extends PartialType(CreateSessoeDto) {}
