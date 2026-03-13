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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let EmployeesService = class EmployeesService {
    db;
    COLLECTION = 'employees';
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        const now = new Date();
        const employee = { ...data, createdAt: now, updatedAt: now };
        const docRef = await this.db.collection(this.COLLECTION).add(employee);
        return { id: docRef.id, ...employee };
    }
    async findAll(role) {
        const ref = this.db.collection(this.COLLECTION);
        const snapshot = await (role ? ref.where('role', '==', role) : ref).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    async findOne(id) {
        const doc = await this.db.collection(this.COLLECTION).doc(id).get();
        if (!doc.exists)
            return null;
        return { id: doc.id, ...doc.data() };
    }
    async update(id, data) {
        const ref = this.db.collection(this.COLLECTION).doc(id);
        await ref.update({ ...data, updatedAt: new Date() });
        const updated = await ref.get();
        return { id: updated.id, ...updated.data() };
    }
    async remove(id) {
        await this.db.collection(this.COLLECTION).doc(id).delete();
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map