import { JogosService } from './jogos.service';
import { S3Service } from '../s3/s3.service';
import { FindJogoDto } from './dto/find-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosController {
    private readonly jogosService;
    private readonly s3service;
    constructor(jogosService: JogosService, s3service: S3Service);
    create(files: any, body: any): Promise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    } | "Usuário não tem permissão para editar esse jogo!">;
    findAll(body: FindJogoDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__JogosClient<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    downloadFile(bucket: string, key: string, res: any): Promise<void>;
    update(id: string, updateJogoDto: UpdateJogoDto): Promise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        json: string;
        criadorEmail: string;
    } | "Usuário não tem permissão para editar esse jogo!">;
}
