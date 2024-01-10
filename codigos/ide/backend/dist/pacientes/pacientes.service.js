"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PacientesService = class PacientesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createPacienteDto) {
        return this.prismaService.paciente.create({ data: createPacienteDto });
    }
    findAll() {
        return this.prismaService.paciente.findMany({
            include: {
                sessoes: true,
            },
        });
    }
    async findOne(id) {
        const paciente = await this.prismaService.paciente.findUnique({
            where: { id: id },
        });
        console.log(paciente);
        if (!paciente) {
            return (`Paciente #${id} não encontrado`);
        }
        const idade = await this.calculateAge(paciente.data_de_nascimento);
        return { ...paciente, idade: idade };
    }
    calculateAge(birthDateString) {
        const birthDate = new Date(birthDateString);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
};
exports.PacientesService = PacientesService;
exports.PacientesService = PacientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PacientesService);
//# sourceMappingURL=pacientes.service.js.map