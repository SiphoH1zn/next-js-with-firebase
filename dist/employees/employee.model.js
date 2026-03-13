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
exports.UpdateEmployee = exports.CreateEmployee = exports.Role = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var Role;
(function (Role) {
    Role["INTERN"] = "INTERN";
    Role["ENGINEER"] = "ENGINEER";
    Role["ADMIN"] = "ADMIN";
})(Role || (exports.Role = Role = {}));
class CreateEmployee {
    name;
    email;
    role;
}
exports.CreateEmployee = CreateEmployee;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateEmployee.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmployee.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Role),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmployee.prototype, "role", void 0);
class UpdateEmployee {
    name;
    email;
    role;
}
exports.UpdateEmployee = UpdateEmployee;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], UpdateEmployee.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEmployee.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Role),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEmployee.prototype, "role", void 0);
//# sourceMappingURL=employee.model.js.map