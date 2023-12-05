import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TerapeutasService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(id: string, updateTerapeutaDto: UpdateTerapeutaDto): string;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TerapeutaClient<{
        id: string;
        nome_completo: string;
        email: string;
        senha: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
