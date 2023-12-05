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
exports.TerapeutasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt_1 = require("bcrypt");
let TerapeutasService = class TerapeutasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTerapeutaDto) {
        const { nome_completo, email, senha } = createTerapeutaDto;
        const hashedPassword = (0, bcrypt_1.hashSync)(senha, 10);
        const terapeuta = await this.prisma.terapeuta.create({
            data: {
                nome_completo,
                email,
                senha: hashedPassword
            },
        });
        terapeuta.senha = undefined;
        return terapeuta;
    }
    findAll() {
        const terapeuta = this.prisma.terapeuta.findMany();
        return terapeuta;
    }
    findOne(id) {
        return this.prisma.terapeuta.findUnique({
            where: { id: id }
        });
    }
    update(id, updateTerapeutaDto) {
        return `This action updates a #${id} terapeuta`;
    }
    remove(id) {
        return this.prisma.terapeuta.delete({
            where: { id: id }
        });
    }
};
exports.TerapeutasService = TerapeutasService;
exports.TerapeutasService = TerapeutasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TerapeutasService);
//# sourceMappingURL=terapeutas.service.js.map