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
exports.JogosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let JogosService = class JogosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createJogoDto, email) {
        const jogo = await this.prisma.jogos.findUnique({
            where: { nome_jogo: createJogoDto.nomeJogo },
        });
        console.log(jogo);
        if (jogo) {
            if (jogo.criadorEmail != email) {
                console.log(jogo.criadorEmail, email);
                return "Usuário não tem permissão para editar esse jogo!";
            }
            return this.prisma.jogos.update({
                where: { nome_jogo: createJogoDto.nomeJogo },
                data: {
                    nome_jogo: createJogoDto.nomeJogo,
                    publico: createJogoDto.publico == "true" ? true : false,
                    arquivo: createJogoDto.url,
                    json: createJogoDto.urlJson,
                    criador: { connect: { email: createJogoDto.emailCriador } }
                }
            });
        }
        return this.prisma.jogos.create({
            data: {
                nome_jogo: createJogoDto.nomeJogo,
                publico: createJogoDto.publico == "true" ? true : false,
                arquivo: createJogoDto.url,
                criador: { connect: { email: createJogoDto.emailCriador } }
            }
        });
    }
    findAll(email) {
        return this.prisma.jogos.findMany({
            where: {
                OR: [
                    { publico: true },
                    { criador: { email: email } }
                ]
            },
        });
    }
    findOne(id) {
        return this.prisma.jogos.findUnique({
            where: { id: id },
        });
    }
    async update(id, updateJogoDto) {
        const jogo = await this.prisma.jogos.findUnique({ where: { id: id } });
        if (jogo.criadorEmail != updateJogoDto.email) {
            return "Usuário não tem permissão para editar esse jogo!";
        }
        if (updateJogoDto.nomeJogo) {
            return this.prisma.jogos.update({
                where: { id: id },
                data: { nome_jogo: updateJogoDto.nomeJogo }
            });
        }
        return this.prisma.jogos.update({
            where: { id: id },
            data: { publico: updateJogoDto.publico == "true" ? true : false }
        });
    }
    remove(id) {
        return `This action removes a #${id} jogo`;
    }
};
exports.JogosService = JogosService;
exports.JogosService = JogosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JogosService);
//# sourceMappingURL=jogos.service.js.map