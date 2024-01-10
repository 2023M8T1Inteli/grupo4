import { TerapeutasService } from './terapeutas.service';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
export declare class TerapeutasController {
    private readonly terapeutasService;
    constructor(terapeutasService: TerapeutasService);
    create(createTerapeutaDto: CreateTerapeutaDto): Promise<{
        id: string;
        nome_completo: string;
        email: string;
        senha: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome_completo: string;
        email: string;
        senha: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__TerapeutaClient<{
        id: string;
        nome_completo: string;
        email: string;
        senha: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
