import { Injectable } from '@nestjs/common';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TerapeutasService {
  constructor(private prisma: PrismaService) {}

  create(createTerapeutaDto: CreateTerapeutaDto) {
    console.log(createTerapeutaDto);
  }

  findAll() {
    // return this.prisma.terapeuta.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} terapeuta`;
  }

  update(id: number, updateTerapeutaDto: UpdateTerapeutaDto) {
    return `This action updates a #${id} terapeuta`;
  }

  remove(id: number) {
    return `This action removes a #${id} terapeuta`;
  }
}
