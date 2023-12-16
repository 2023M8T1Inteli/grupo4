"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const terapeutas_module_1 = require("./terapeutas/terapeutas.module");
const login_module_1 = require("./login/login.module");
const jogos_module_1 = require("./jogos/jogos.module");
const s3_service_1 = require("./s3/s3.service");
const pacientes_module_1 = require("./pacientes/pacientes.module");
const sessoes_module_1 = require("./sessoes/sessoes.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, terapeutas_module_1.TerapeutasModule, login_module_1.LoginModule, jogos_module_1.JogosModule, pacientes_module_1.PacientesModule, sessoes_module_1.SessoesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, s3_service_1.S3Service],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map