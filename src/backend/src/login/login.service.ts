import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Terapeuta } from '@prisma/client';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async validateTerapeuta(email: string, senha: string): Promise<Terapeuta | null> {
    const terapeuta = await this.prisma.terapeuta.findUnique({
      where: { email },
    });

    if (!terapeuta) {
      return null; 
    }

    const passwordMatch = await this.comparePasswords(senha, terapeuta.senha);

    if (!passwordMatch) {
      return null; 
    }

    return terapeuta;
  }

  private async comparePasswords(senha: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(senha, hashedPassword);
  }

}
