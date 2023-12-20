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
const find_jogo_dto_1 = require("./dto/find-jogo.dto");
const update_jogo_dto_1 = require("./dto/update-jogo.dto");
const platform_express_1 = require("@nestjs/platform-express");
let JogosController = class JogosController {
    constructor(jogosService, s3service) {
        this.jogosService = jogosService;
        this.s3service = s3service;
    }
    async create(files, body) {
        let urlPython = "";
        let urlJson = "";
        if (files && files.length) {
            let filePython, fileJson;
            files.forEach(file => {
                if (file.originalname.endsWith('.py')) {
                    filePython = file;
                }
                else if (file.originalname.endsWith('.json')) {
                    fileJson = file;
                }
            });
            if (filePython) {
                urlPython = await this.s3service.uploadFile(filePython, "tapete-magico-aladdin");
            }
            if (fileJson) {
                urlJson = await this.s3service.uploadFile(fileJson, "tapete-magico-aladdin");
            }
        }
        const data = {
            nomeJogo: body.nomeJogo,
            emailCriador: body.emailCriador,
            publico: body.publico.toLowerCase(),
            url: urlPython,
            urlJson: urlJson
        };
        return this.jogosService.create(data, body.emailCriador);
    }
    findAll(body) {
        console.log(body.email);
        return this.jogosService.findAll(body.email);
    }
    findOne(id) {
        return this.jogosService.findOne(+id);
    }
    async downloadFile(bucket, key, res) {
        try {
            const file = await this.s3service.getFileStream(bucket, key);
            res.setHeader('Content-Type', file.ContentType);
            res.setHeader('Content-Disposition', `attachment; filename=${key}`);
            res.setHeader('Content-Length', file.ContentLength.toString());
            res.send(file.Body);
        }
        catch (error) {
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
    async update(id, updateJogoDto) {
        return this.jogosService.update(+id, updateJogoDto);
    }
};
exports.JogosController = JogosController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_jogo_dto_1.FindJogoDto]),
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
    (0, common_1.Get)(':bucket/:key'),
    __param(0, (0, common_1.Param)('bucket')),
    __param(1, (0, common_1.Param)('key')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "downloadFile", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jogo_dto_1.UpdateJogoDto]),
    __metadata("design:returntype", Promise)
], JogosController.prototype, "update", null);
exports.JogosController = JogosController = __decorate([
    (0, common_1.Controller)('jogos'),
    __metadata("design:paramtypes", [jogos_service_1.JogosService, s3_service_1.S3Service])
], JogosController);
//# sourceMappingURL=jogos.controller.js.map