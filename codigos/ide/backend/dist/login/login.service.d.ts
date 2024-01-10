import { PrismaService } from 'src/prisma/prisma.service';
import { Terapeuta } from '@prisma/client';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    validateTerapeuta(email: string, senha: string): Promise<Terapeuta | null>;
    private comparePasswords;
}
