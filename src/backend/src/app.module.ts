import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TerapeutasModule } from './terapeutas/terapeutas.module';

@Module({
  imports: [PrismaModule, TerapeutasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
