import { EmployeesService } from './employees.service';
import { CreateEmployee, UpdateEmployee, Role } from './employee.model';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(body: CreateEmployee): Promise<import("./employee.model").Employee>;
    findAll(role?: Role): Promise<import("./employee.model").Employee[]>;
    findOne(id: string): Promise<import("./employee.model").Employee | null>;
    update(id: string, body: UpdateEmployee): Promise<import("./employee.model").Employee>;
    remove(id: string): Promise<void>;
}
