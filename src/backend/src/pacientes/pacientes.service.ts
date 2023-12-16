import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PacientesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPacienteDto: CreatePacienteDto) {
    return this.prismaService.paciente.create({ data: createPacienteDto });
  }

  findAll() {
    return this.prismaService.paciente.findMany({
      include: {
        sessoes: true, 
      },
    });
  }

  async findOne(id: string) {
    const paciente = await this.prismaService.paciente.findUnique({
      where: { id: id },
    });

    console.log(paciente)
    if (!paciente) {
      return (`Paciente #${id} não encontrado`);
    }

    const idade = await this.calculateAge(paciente.data_de_nascimento);
    return { ...paciente, idade: idade };
  }

  private calculateAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
  }
}

