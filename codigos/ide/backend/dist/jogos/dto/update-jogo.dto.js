"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJogoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_jogo_dto_1 = require("./create-jogo.dto");
class UpdateJogoDto extends (0, swagger_1.PartialType)(create_jogo_dto_1.CreateJogoDto) {
}
exports.UpdateJogoDto = UpdateJogoDto;
//# sourceMappingURL=update-jogo.dto.js.map