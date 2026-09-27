import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { EmployeeCard } from '../employee-card/employee-card';
import { EmployeeModel } from '../models/employeeModel';
import { EmployeeService } from '../services/employeeService';

@Component({
    selector: 'app-employee-list',
    standalone: true,
    imports: [CommonModule, EmployeeCard],
    templateUrl: './employee-list.html',
    styleUrl: './employee-list.scss',
})

export class EmployeeList {
    private employeeService = inject(EmployeeService);
    newemployeelist: EmployeeModel[] = [];

    constructor() {
        this.employeeService.getEmployeeData().subscribe((data) => {
            console.log('Employee data received:', data);
            this.newemployeelist = data;
        });
    }

    onEmployeeAdded(employee: Omit<EmployeeModel, 'id'>): void {
        const nextId = this.newemployeelist.reduce(
            (highestId, currentEmployee) => Math.max(highestId, currentEmployee.id),
            0,
        ) + 1;
        
        this.newemployeelist = [
            ...this.newemployeelist,
            { id: nextId, ...employee },
        ];
    }
}