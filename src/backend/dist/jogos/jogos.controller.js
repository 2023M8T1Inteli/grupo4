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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogosController = void 0;
const common_1 = require("@nestjs/common");
const jogos_service_1 = require("./jogos.service");
const s3_service_1 = require("../s3/s3.service");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
const platform_express_1 = require("@nestjs/platform-express");
let JogosController = class JogosController {
    constructor(jogosService, s3service) {
        this.jogosService = jogosService;
        this.s3service = s3service;
    }
    create(file, body) {
        console.log(file);
        console.log(body.nome);
        return this.s3service.uploadFile(file, 'jogos');
    }
    findAll() {
        return this.jogosService.findAll();
    }
    findOne(id) {
        return this.jogosService.findOne(+id);
    }
    update(id, updateJogoDto) {
        return this.jogosService.update(+id, updateJogoDto);
    }
    remove(id) {
        return this.jogosService.remove(+id);
    }
};
exports.JogosController = JogosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jogo_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogosController.prototype, "remove", null);
exports.JogosController = JogosController = __decorate([
    (0, common_1.Controller)('jogos'),
    __metadata("design:paramtypes", [jogos_service_1.JogosService, s3_service_1.S3Service])
], JogosController);
//# sourceMappingURL=jogos.controller.js.map