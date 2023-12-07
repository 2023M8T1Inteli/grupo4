import { Controller, Post, Body, Param, HttpStatus, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() credentials: { email: string; senha: string }, @Res() res): Promise<void> {
    const { email, senha } = credentials;

    const terapeuta = await this.loginService.validateTerapeuta(email, senha);

    if (!terapeuta) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ mensagem: 'e-mail ou senha incorreto' });
    }

    return res.status(HttpStatus.OK).json({ id: terapeuta.id, email: terapeuta.email, senha: terapeuta.senha});
  }
}
