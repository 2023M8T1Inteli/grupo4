import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerapeutasService } from './terapeutas.service';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';

@Controller('terapeutas')
export class TerapeutasController {
  constructor(private readonly terapeutasService: TerapeutasService) {}

  @Post()
  create(@Body() createTerapeutaDto: CreateTerapeutaDto) {
    return this.terapeutasService.create(createTerapeutaDto);
  }

  @Get()
  findAll() {
    return this.terapeutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terapeutasService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTerapeutaDto: UpdateTerapeutaDto) {
  //   return this.terapeutasService.update(id, updateTerapeutaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.terapeutasService.remove(id);
  // }
}
