import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TerapeutasModule } from './terapeutas/terapeutas.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [PrismaModule, TerapeutasModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
