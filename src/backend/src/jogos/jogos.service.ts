import { Injectable } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JogosService {
  constructor (private prisma: PrismaService) {}
  async create(createJogoDto: CreateJogoDto, email: string) {
    const jogo = await this.prisma.jogos.findUnique({
      where: { nome_jogo: createJogoDto.nomeJogo },
    });
    
    if (jogo) {
      if (jogo.criadorEmail != email) {
        return "Usuário não tem permissão para editar esse jogo!";
      }
      
      return this.prisma.jogos.update({
        where: { nome_jogo: createJogoDto.nomeJogo },
        data: {
          nome_jogo: createJogoDto.nomeJogo,
          publico: createJogoDto.publico == "true" ? true : false,
          arquivo: createJogoDto.url,
          criador : { connect: { email: createJogoDto.emailCriador } }
        } 
      }) ;
    }

    return this.prisma.jogos.create({
      data: {
        nome_jogo: createJogoDto.nomeJogo,
        publico: createJogoDto.publico == "true" ? true : false,
        arquivo: createJogoDto.url,
        criador : { connect: { email: createJogoDto.emailCriador } }
      }
    }) ;
  }

  findAll(email: string) {
    return this.prisma.jogos.findMany({
      where: {
        OR: [
          { publico: true },
          { criador: { email: email} }
        ]
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} jogo`;
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    return `This action updates a #${id} jogo`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogo`;
  }
}
