import { JogosService } from './jogos.service';
import { S3Service } from '../s3/s3.service';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosController {
    private readonly jogosService;
    private readonly s3service;
    constructor(jogosService: JogosService, s3service: S3Service);
    create(file: any, body: any): Promise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        criadorEmail: string;
    } | "Usuário não tem permissão para editar esse jogo!">;
    findAll(body: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome_jogo: string;
        data_criacao: Date;
        data_edicao: Date;
        publico: boolean;
        arquivo: string;
        criadorEmail: string;
    }[]>;
    findOne(id: string): string;
    downloadFile(bucket: string, key: string, res: any): Promise<void>;
    update(id: string, updateJogoDto: UpdateJogoDto): string;
    remove(id: string): string;
}
