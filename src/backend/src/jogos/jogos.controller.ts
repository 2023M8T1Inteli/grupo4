import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, Req, Res, HttpStatus } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { S3Service } from '../s3/s3.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('jogos')
export class JogosController {

  constructor(private readonly jogosService: JogosService, private readonly s3service: S3Service) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file, @Body() body) {
    console.log(file); // Aqui você acessa o arquivo Python
    console.log(body.nome); // Aqui você acessa o JSON enviado pelo front-end
    const url = await this.s3service.uploadFile(file, "tapete-magico-aladdin");

    const data = {
      nomeJogo: body.nomeJogo,
      emailCriador: body.emailCriador,
      publico: body.publico.toLowerCase(),
      url: url,
    }
    
    return this.jogosService.create(data);
  }

  @Post()
  findAll(@Body() body) {
    console.log(body.email)
    return this.jogosService.findAll(body.email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jogosService.findOne(+id);
  }

  @Get(':bucket/:key')
  async downloadFile(@Param('bucket') bucket: string, @Param('key') key: string, @Res() res) {
    try {
      const file = await this.s3service.getFileStream(bucket, key);

      res.setHeader('Content-Type', file.ContentType);
      res.setHeader('Content-Disposition', `attachment; filename=${key}`);
      res.setHeader('Content-Length', file.ContentLength.toString());

      res.send(file.Body);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogosService.update(+id, updateJogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jogosService.remove(+id);
  }
}
