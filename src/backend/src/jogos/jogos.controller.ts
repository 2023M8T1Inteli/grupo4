import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, Req, Res, HttpStatus } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { S3Service } from '../s3/s3.service';
import { FindJogoDto } from './dto/find-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('jogos')
export class JogosController {

  constructor(private readonly jogosService: JogosService, private readonly s3service: S3Service) {}

  @Post('create')
  @UseInterceptors(FilesInterceptor('files', 2))
  async create(@UploadedFiles() files, @Body() body) {
    console.log(files[0]); // Primeiro arquivo
    console.log(files[1]); // Segundo arquivo

    // Decidir qual arquivo é o Python e qual é o JSON, por exemplo, pela extensão
    let filePython, fileJson;
    files.forEach(file => {
        if (file.originalname.endsWith('.py')) {
            filePython = file;
        } else if (file.originalname.endsWith('.json')) {
            fileJson = file;
        }
    });

    if (!filePython || !fileJson) {
        // Tratar erro, caso um dos arquivos não esteja presente
    }

    const urlPython = await this.s3service.uploadFile(filePython, "tapete-magico-aladdin");
    const urlJson = await this.s3service.uploadFile(fileJson, "tapete-magico-aladdin");

    const data = {
      nomeJogo: body.nomeJogo,
      emailCriador: body.emailCriador,
      publico: body.publico.toLowerCase(),
      url: urlPython,
    }
    
    return this.jogosService.create(data, body.email);
  }

  @Post()
  findAll(@Body() body: FindJogoDto) {
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
  async update(@Param('id') id: string, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogosService.update(+id, updateJogoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jogosService.remove(+id);
  // }
}
