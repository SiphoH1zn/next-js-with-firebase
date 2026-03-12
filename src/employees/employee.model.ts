import { IsString, IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export enum Role {
  INTERN = 'INTERN',
  ENGINEER = 'ENGINEER',
  ADMIN = 'ADMIN',
}

export class CreateEmployee {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;
}

export class UpdateEmployee {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @IsOptional()
  @MinLength(1)
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsEnum(Role)
  @IsOptional()
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