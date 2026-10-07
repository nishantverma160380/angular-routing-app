import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { EmployeeModel } from '../models/employeeModel';

@Component({
    selector: 'app-employee-card',
    standalone: true,
    imports: [CurrencyPipe, FormsModule, RouterLink, ReactiveFormsModule],
    templateUrl: './employee-card.html',
    styleUrl: './employee-card.scss',
})
export class EmployeeCard {
    @Input() employeeChildList?: EmployeeModel;
    @Input() showAddForm = false;
    @Input() detailLink: unknown[] | null = null;
    @Output() employeeAdded = new EventEmitter<Omit<EmployeeModel, 'id'>>();

    newEmployee: Omit<EmployeeModel, 'id'> = this.emptyEmployee();

    addEmployee(): void {
        this.employeeAdded.emit(this.newEmployee);
        this.newEmployee = this.emptyEmployee();
    }

    employeeForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
    });

    private emptyEmployee(): Omit<EmployeeModel, 'id'> {
        return {
            firstName: '',
            lastName: '',
            age: 0,
            address: {} as EmployeeModel['address'],
            skills: [],
            department: '',
            email: '',
            salary: 0,
        };
    }
}
