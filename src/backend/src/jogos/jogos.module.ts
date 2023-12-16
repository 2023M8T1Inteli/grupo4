import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { S3Service } from 'src/s3/s3.service';
import  { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [JogosController],
  providers: [JogosService, S3Service, PrismaService],
})
export class JogosModule {}
