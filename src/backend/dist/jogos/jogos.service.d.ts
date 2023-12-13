import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class JogosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createJogoDto: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogosClient<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        criadorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(email: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        criadorId: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateJogoDto: UpdateJogoDto): string;
    remove(id: number): string;
}
