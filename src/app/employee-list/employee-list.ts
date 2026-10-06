import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeCard } from '../employee-card/employee-card';
import { EmployeeModel } from '../models/employeeModel';
import { EmployeeService } from '../services/employeeService';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [CommonModule, EmployeeCard, RouterLink],
    templateUrl: './employee-list.html',
    styleUrl: './employee-list.scss',
})

export class EmployeeList {
    private employeeService = inject(EmployeeService);
    newemployeelist = signal<EmployeeModel[]>([]);

    constructor() {
        this.employeeService.getEmployeeData().subscribe((data) => {
            console.log('Employee data received:', data);
            this.newemployeelist.set(data);
        });
    }

    onEmployeeAdded(employee: Omit<EmployeeModel, 'id'>): void {
        this.newemployeelist.update((employees) => {
            const nextId = employees.reduce(
                (highestId, currentEmployee) => Math.max(highestId, currentEmployee.id),
                0,
            ) + 1;

            return [...employees, { id: nextId, ...employee }];
        });
    }
}