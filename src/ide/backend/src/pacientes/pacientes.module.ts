import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';

import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PacientesController],
  providers: [PacientesService, PrismaService],
  imports: [PrismaModule],
})
export class PacientesModule {}
