"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTerapeutaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_terapeuta_dto_1 = require("./create-terapeuta.dto");
class UpdateTerapeutaDto extends (0, swagger_1.PartialType)(create_terapeuta_dto_1.CreateTerapeutaDto) {
}
exports.UpdateTerapeutaDto = UpdateTerapeutaDto;
//# sourceMappingURL=update-terapeuta.dto.js.map