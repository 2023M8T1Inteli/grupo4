import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TerapeutasModule } from './terapeutas/terapeutas.module';
import { LoginModule } from './login/login.module';
import { JogosModule } from './jogos/jogos.module';
import { S3Service } from './s3/s3.service';
import { PacientesModule } from './pacientes/pacientes.module';
import { SessoesModule } from './sessoes/sessoes.module';

@Module({
  imports: [PrismaModule, TerapeutasModule, LoginModule, JogosModule, PacientesModule, SessoesModule],
  controllers: [AppController],
  providers: [AppService, S3Service],
})
export class AppModule {}
