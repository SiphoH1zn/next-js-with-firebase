import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployee, UpdateEmployee, Role } from './employee.model';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() body: CreateEmployee) {
    return this.employeesService.create(body);
  }

  @Get()
  findAll(@Query('role') role?: Role) {
    return this.employeesService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateEmployee) {
    return this.employeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}