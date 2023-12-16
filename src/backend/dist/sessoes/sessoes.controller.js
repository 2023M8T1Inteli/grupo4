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
exports.SessoesController = void 0;
const common_1 = require("@nestjs/common");
const sessoes_service_1 = require("./sessoes.service");
const create_sessoe_dto_1 = require("./dto/create-sessoe.dto");
const find_sessoe_dto_1 = require("./dto/find-sessoe.dto");
let SessoesController = class SessoesController {
    constructor(sessoesService) {
        this.sessoesService = sessoesService;
    }
    create(createSessoeDto) {
        return this.sessoesService.create(createSessoeDto);
    }
    findAll(body) {
        return this.sessoesService.findAll(body.email);
    }
    findOne(id) {
        return this.sessoesService.findOne(id);
    }
};
exports.SessoesController = SessoesController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sessoe_dto_1.CreateSessoeDto]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_sessoe_dto_1.FindSessaoDto]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "findOne", null);
exports.SessoesController = SessoesController = __decorate([
    (0, common_1.Controller)('sessoes'),
    __metadata("design:paramtypes", [sessoes_service_1.SessoesService])
], SessoesController);
//# sourceMappingURL=sessoes.controller.js.map