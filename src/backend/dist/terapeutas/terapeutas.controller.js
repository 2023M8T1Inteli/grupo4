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
exports.TerapeutasController = void 0;
const common_1 = require("@nestjs/common");
const terapeutas_service_1 = require("./terapeutas.service");
const create_terapeuta_dto_1 = require("./dto/create-terapeuta.dto");
const update_terapeuta_dto_1 = require("./dto/update-terapeuta.dto");
let TerapeutasController = class TerapeutasController {
    constructor(terapeutasService) {
        this.terapeutasService = terapeutasService;
    }
    create(createTerapeutaDto) {
        return this.terapeutasService.create(createTerapeutaDto);
    }
    findAll() {
        return this.terapeutasService.findAll();
    }
    findOne(id) {
        return this.terapeutasService.findOne(id);
    }
    update(id, updateTerapeutaDto) {
        return this.terapeutasService.update(id, updateTerapeutaDto);
    }
    remove(id) {
        return this.terapeutasService.remove(id);
    }
};
exports.TerapeutasController = TerapeutasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_terapeuta_dto_1.CreateTerapeutaDto]),
    __metadata("design:returntype", void 0)
], TerapeutasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TerapeutasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TerapeutasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_terapeuta_dto_1.UpdateTerapeutaDto]),
    __metadata("design:returntype", void 0)
], TerapeutasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TerapeutasController.prototype, "remove", null);
exports.TerapeutasController = TerapeutasController = __decorate([
    (0, common_1.Controller)('terapeutas'),
    __metadata("design:paramtypes", [terapeutas_service_1.TerapeutasService])
], TerapeutasController);
//# sourceMappingURL=terapeutas.controller.js.map