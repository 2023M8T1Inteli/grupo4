import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(createPacienteDto: CreatePacienteDto): import(".prisma/client").Prisma.Prisma__PacienteClient<{
        id: string;
        nome_completo: string;
        data_de_nascimento: string;
        nome_responsavel: string;
        contato_responsavel: string;
        ficha_medica: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        sessoes: {
            id: string;
            paciente_id: string;
            terapeuta_email: string;
            data: string;
            jogos_id: number;
        }[];
    } & {
        id: string;
        nome_completo: string;
        data_de_nascimento: string;
        nome_responsavel: string;
        contato_responsavel: string;
        ficha_medica: string;
    })[]>;
    findOne(id: string): Promise<string | {
        idade: number;
        id: string;
        nome_completo: string;
        data_de_nascimento: string;
        nome_responsavel: string;
        contato_responsavel: string;
        ficha_medica: string;
    }>;
}
