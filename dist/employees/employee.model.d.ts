export declare enum Role {
    INTERN = "INTERN",
    ENGINEER = "ENGINEER",
    ADMIN = "ADMIN"
}
export declare class CreateEmployee {
    name: string;
    email: string;
    role: Role;
}
export declare class UpdateEmployee {
    name?: string;
    email?: string;
    role?: Role;
}
export interface Employee {
    id?: string;
    name: string;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
