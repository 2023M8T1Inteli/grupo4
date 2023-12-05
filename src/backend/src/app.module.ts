import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TerapeutasModule } from './terapeutas/terapeutas.module';
import { JogosModule } from './jogos/jogos.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { PacientesModule } from './pacientes/pacientes.module';

@Module({
  imports: [PrismaModule, TerapeutasModule, JogosModule, SessoesModule, PacientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
