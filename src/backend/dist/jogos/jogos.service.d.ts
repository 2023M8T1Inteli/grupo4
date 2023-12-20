import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class JogosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createJogoDto: CreateJogoDto, email: string): Promise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    } | "Usuário não tem permissão para editar esse jogo!">;
    findAll(email: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__JogosClient<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateJogoDto: UpdateJogoDto): Promise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    } | "Usuário não tem permissão para editar esse jogo!">;
    remove(id: number): string;
}
