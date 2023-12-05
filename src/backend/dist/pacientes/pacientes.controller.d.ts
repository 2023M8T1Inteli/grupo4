import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacientesController {
    private readonly pacientesService;
    constructor(pacientesService: PacientesService);
    create(createPacienteDto: CreatePacienteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: string): string;
}
