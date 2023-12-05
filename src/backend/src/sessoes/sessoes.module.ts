import { Module } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { SessoesController } from './sessoes.controller';

@Module({
  controllers: [SessoesController],
  providers: [SessoesService],
})
export class SessoesModule {}
