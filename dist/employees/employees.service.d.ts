import { DatabaseService } from '../database/database.service';
import { CreateEmployee, UpdateEmployee, Employee, Role } from './employee.model';
export declare class EmployeesService {
    private readonly db;
    private readonly COLLECTION;
    constructor(db: DatabaseService);
    create(data: CreateEmployee): Promise<Employee>;
    findAll(role?: Role): Promise<Employee[]>;
    findOne(id: string): Promise<Employee | null>;
    update(id: string, data: UpdateEmployee): Promise<Employee>;
    remove(id: string): Promise<void>;
}
