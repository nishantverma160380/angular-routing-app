import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { EmployeeModel } from '../models/employeeModel';
import { EmployeeService } from '../services/employeeService';

@Component({
    selector: 'app-employee-detail',
    standalone: true,
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './employee-detail.html',
    styleUrl: './employee-detail.scss',
})
export class EmployeeDetail {
    private route = inject(ActivatedRoute);
    private employeeService = inject(EmployeeService);

    employee = signal<EmployeeModel | undefined>(undefined);
    loading = signal(true);
    notFound = signal(false);

    constructor() {
        const employeeId = Number(this.route.snapshot.paramMap.get('id'));

        this.employeeService.getEmployeeData()
            .pipe(
                map((employees) => employees.find((currentEmployee) =>
                    currentEmployee.id === employeeId)),
            )
            .subscribe({
                next: (employee) => {
                    this.employee.set(employee);
                    this.notFound.set(!employee);
                    this.loading.set(false);
                },
                error: () => {
                    this.loading.set(false);
                    this.notFound.set(true);
                },
            });
    }
}
