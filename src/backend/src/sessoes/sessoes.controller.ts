import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessoesService } from './sessoes.service';
import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { UpdateSessoeDto } from './dto/update-sessoe.dto';
import { FindSessaoDto } from './dto/find-sessoe.dto';

@Controller('sessoes')
export class SessoesController {
  constructor(private readonly sessoesService: SessoesService) {}

  @Post('create')
  create(@Body() createSessoeDto: CreateSessoeDto) {
    return this.sessoesService.create(createSessoeDto);
  }

  @Post()
  findAll(@Body() body: FindSessaoDto) {
    return this.sessoesService.findAll(body.email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessoesService.findOne(id);
  }

}
