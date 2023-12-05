import { Injectable } from '@nestjs/common';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashSync } from 'bcrypt';

@Injectable()
export class TerapeutasService {
  constructor(private prisma: PrismaService) {}

  async create(createTerapeutaDto: CreateTerapeutaDto) {
    const { nome_completo, email, senha } = createTerapeutaDto;

    const hashedPassword = hashSync(senha, 10)

    const terapeuta = await this.prisma.terapeuta.create({
      data: {
        nome_completo,
        email,
        senha: hashedPassword
      },
    });

    terapeuta.senha = undefined;
    // const token = login();

    return terapeuta;
  }

  findAll() {
    const terapeuta = this.prisma.terapeuta.findMany();
    return terapeuta;
  }

  findOne(id: string) {
    return this.prisma.terapeuta.findUnique({ 
      where: { id: id }
    })
  }

  update(id: string, updateTerapeutaDto: UpdateTerapeutaDto) {
    return `This action updates a #${id} terapeuta`;
  }

  remove(id: string) {
    return this.prisma.terapeuta.delete({
      where: { id: id}
    })
  }
}
