import { Controller } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}
}
