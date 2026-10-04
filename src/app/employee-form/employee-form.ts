import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.scss',
  templateUrl: './employee-form.html',
})
export class EmployeeForm {
  employeeForm = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    department: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',
      [Validators.required, Validators.minLength(3)]),
    salary: new FormControl(0,
      [Validators.required, Validators.minLength(3)])
  });

  employeeName = new FormControl('',
    [Validators.required, Validators.minLength(3)]);

  showFormValue(): void {
    console.log(
      'Employee form:',
      this.employeeForm.value
    );
    console.log(
      'Name:',
      this.employeeForm.controls.name.value
    );
    console.log(
      'Department:',
      this.employeeForm.controls.department.value
    );
    console.log(
      'Email:',
      this.employeeForm.controls.email.value
    );
    console.log(
      'Salary:',
      this.employeeForm.controls.salary.value
    );
  }

  showName(): void {
    console.log(
      'FormControl value:',
      this.employeeName.value
    );
  }
}