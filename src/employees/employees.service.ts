import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateEmployee, UpdateEmployee, Employee, Role } from './employee.model';

@Injectable()
export class EmployeesService {
  private readonly COLLECTION = 'employees';

  constructor(private readonly db: DatabaseService) {}

  async create(data: CreateEmployee): Promise<Employee> {
    const now = new Date();
    const employee = { ...data, createdAt: now, updatedAt: now };
    const docRef = await this.db.collection(this.COLLECTION).add(employee);
    return { id: docRef.id, ...employee };
  }

  async findAll(role?: Role): Promise<Employee[]> {
    const ref = this.db.collection(this.COLLECTION);
    const snapshot = await (role ? ref.where('role', '==', role) : ref).get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Employee));
  }

  async findOne(id: string): Promise<Employee | null> {
    const doc = await this.db.collection(this.COLLECTION).doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Employee;
  }

  async update(id: string, data: UpdateEmployee): Promise<Employee> {
    const ref = this.db.collection(this.COLLECTION).doc(id);
    await ref.update({ ...data, updatedAt: new Date() });
    const updated = await ref.get();
    return { id: updated.id, ...updated.data() } as Employee;
  }

  async remove(id: string): Promise<void> {
    await this.db.collection(this.COLLECTION).doc(id).delete();
  }
}