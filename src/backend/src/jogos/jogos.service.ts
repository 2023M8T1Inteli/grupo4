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
    console.log(jogo)
    if (jogo) {
      if (jogo.criadorEmail != email) {
        console.log(jogo.criadorEmail, email)
        return "Usuário não tem permissão para editar esse jogo!";
      }
      
      return this.prisma.jogos.update({
        where: { nome_jogo: createJogoDto.nomeJogo },
        data: {
          nome_jogo: createJogoDto.nomeJogo,
          publico: createJogoDto.publico == "true" ? true : false,
          arquivo: createJogoDto.url,
          json: createJogoDto.urlJson,
          criador : { connect: { email: createJogoDto.emailCriador } }
        } 
      });
    }

    return this.prisma.jogos.create({
      data: {
        nome_jogo: createJogoDto.nomeJogo,
        publico: createJogoDto.publico == "true" ? true : false,
        arquivo: createJogoDto.url,
        criador : { connect: { email: createJogoDto.emailCriador } }
      }
    });
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
    return this.prisma.jogos.findUnique({
      where: { id: id },
      });
  }

  async update(id: number, updateJogoDto: UpdateJogoDto) {
    const jogo = await this.prisma.jogos.findUnique({where: { id: id }});
    if (jogo.criadorEmail != updateJogoDto.email) {
      return "Usuário não tem permissão para editar esse jogo!";
    }

    if (updateJogoDto.nomeJogo) {
      return this.prisma.jogos.update({
        where: { id: id },
        data: { nome_jogo: updateJogoDto.nomeJogo }
      });
    }

    return this.prisma.jogos.update({
      where: { id: id },
      data: { publico: updateJogoDto.publico == "true" ? true : false }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} jogo`;
  }
}
