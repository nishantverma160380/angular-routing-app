import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeModel } from '../models/employeeModel';

@Component({
    selector: 'app-employee-card',
    standalone: true,
    imports: [CurrencyPipe, FormsModule],
    templateUrl: './employee-card.html',
    styleUrl: './employee-card.scss',
})
export class EmployeeCard {
    @Input() employeeChildList?: EmployeeModel;
    @Input() showAddForm = false;
    @Output() employeeAdded = new EventEmitter<Omit<EmployeeModel, 'id'>>();

    newEmployee: Omit<EmployeeModel, 'id'> = this.emptyEmployee();

    addEmployee(): void {
        this.employeeAdded.emit(this.newEmployee);
        this.newEmployee = this.emptyEmployee();
    }

    private emptyEmployee(): Omit<EmployeeModel, 'id'> {
        return {
            name: '',
            department: '',
            email: '',
            salary: 0,
        };
    }
}
