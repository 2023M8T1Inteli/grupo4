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
exports.SessoesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SessoesService = class SessoesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createSessoeDto) {
        return this.prismaService.sessoes.create({
            data: {
                Paciente: {
                    connect: { id: createSessoeDto.paciente_id },
                },
                Terapeuta: {
                    connect: { email: createSessoeDto.terapeuta_email },
                },
                data: createSessoeDto.data,
                Jogos: {
                    connect: { id: createSessoeDto.jogo_id },
                },
            },
        });
    }
    findAll(email) {
        return this.prismaService.sessoes.findMany({
            where: {
                terapeuta_email: email,
            },
            include: {
                Paciente: true,
                Jogos: true,
            },
        });
    }
    findOne(id) {
        return this.prismaService.sessoes.findUnique({
            where: { id: id },
            include: {
                Paciente: true,
                Jogos: true,
            },
        });
    }
    update(id, updateSessoeDto) {
        return `This action updates a #${id} sessoe`;
    }
    remove(id) {
        return `This action removes a #${id} sessoe`;
    }
};
exports.SessoesService = SessoesService;
exports.SessoesService = SessoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SessoesService);
//# sourceMappingURL=sessoes.service.js.map