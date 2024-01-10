import { SessoesService } from './sessoes.service';
import { CreateSessoeDto } from './dto/create-sessoe.dto';
import { FindSessaoDto } from './dto/find-sessoe.dto';
export declare class SessoesController {
    private readonly sessoesService;
    constructor(sessoesService: SessoesService);
    create(createSessoeDto: CreateSessoeDto): import(".prisma/client").Prisma.Prisma__SessoesClient<{
        id: string;
        paciente_id: string;
        terapeuta_email: string;
        data: string;
        jogos_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(body: FindSessaoDto): import(".prisma/client").Prisma.PrismaPromise<({
        Jogos: {
            id: number;
            nome_jogo: string;
            data_criacao: Date;
            data_edicao: Date;
            publico: boolean;
            arquivo: string;
            json: string;
            criadorEmail: string;
        };
        Paciente: {
            id: string;
            nome_completo: string;
            data_de_nascimento: string;
            nome_responsavel: string;
            contato_responsavel: string;
            ficha_medica: string;
        };
    } & {
        id: string;
        paciente_id: string;
        terapeuta_email: string;
        data: string;
        jogos_id: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SessoesClient<{
        Jogos: {
            id: number;
            nome_jogo: string;
            data_criacao: Date;
            data_edicao: Date;
            publico: boolean;
            arquivo: string;
            json: string;
            criadorEmail: string;
        };
        Paciente: {
            id: string;
            nome_completo: string;
            data_de_nascimento: string;
            nome_responsavel: string;
            contato_responsavel: string;
            ficha_medica: string;
        };
    } & {
        id: string;
        paciente_id: string;
        terapeuta_email: string;
        data: string;
        jogos_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
