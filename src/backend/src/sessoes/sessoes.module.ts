import { Module } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { SessoesController } from './sessoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SessoesController],
  providers: [SessoesService, PrismaService],
  imports: [PrismaModule]
})
export class SessoesModule {}
