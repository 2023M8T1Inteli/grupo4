import { Module } from '@nestjs/common';
import { TerapeutasService } from './terapeutas.service';
import { TerapeutasController } from './terapeutas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TerapeutasController],
  providers: [TerapeutasService, PrismaService],
  imports: [PrismaModule],
})

export class TerapeutasModule {}
