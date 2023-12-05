"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerapeutasModule = void 0;
const common_1 = require("@nestjs/common");
const terapeutas_service_1 = require("./terapeutas.service");
const terapeutas_controller_1 = require("./terapeutas.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_service_1 = require("../prisma/prisma.service");
let TerapeutasModule = class TerapeutasModule {
};
exports.TerapeutasModule = TerapeutasModule;
exports.TerapeutasModule = TerapeutasModule = __decorate([
    (0, common_1.Module)({
        controllers: [terapeutas_controller_1.TerapeutasController],
        providers: [terapeutas_service_1.TerapeutasService, prisma_service_1.PrismaService],
        imports: [prisma_module_1.PrismaModule],
    })
], TerapeutasModule);
//# sourceMappingURL=terapeutas.module.js.map