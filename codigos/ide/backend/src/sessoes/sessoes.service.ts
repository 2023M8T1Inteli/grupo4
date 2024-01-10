import { Injectable } from '@nestjs/common';
import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { integer } from 'aws-sdk/clients/cloudfront';

@Injectable()
export class SessoesService {
  constructor(private prismaService: PrismaService) {}

  create(createSessoeDto: CreateSessoeDto) {
    return this.prismaService.sessoes.create({
      data: {
        Paciente: {
          connect: { id: createSessoeDto.paciente_id as string },
        },
        Terapeuta: {
          connect: { email: createSessoeDto.terapeuta_email },
        },
        data: createSessoeDto.data,
        Jogos: {
          connect: { id: createSessoeDto.jogo_id as number },
        },
      },
    });
  }

  findAll(email: string) {
    return this.prismaService.sessoes.findMany({
      where: {
        terapeuta_email: email,
      }, 
      include: {
        Paciente: true,
        Jogos: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.sessoes.findUnique({
      where: { id: id },
      include: {
        Paciente: true,
        Jogos: true,
      },
    });
  }

  update(id: number, updateSessoeDto: UpdateSessoeDto) {
    return `This action updates a #${id} sessoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessoe`;
  }
}
