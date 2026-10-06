import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule, FormBuilder, Validators
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-employee-form',
  styleUrl: './employee-form.scss',
  templateUrl: './employee-form.html',
})

export class EmployeeForm {

  private readonly fb = inject(FormBuilder).nonNullable;

  employeeForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
    age: [18, [Validators.required, Validators.min(18)]],
    salary: [0, [Validators.required, Validators.min(0)]],
    department: ['Engineering'],
    address: this.fb.group({
      street: [''],
      city: [''],
      postcode: ['']
    }),
    skills: this.fb.array([
      this.fb.control('')
    ])
  });

  get skills() {
    return this.employeeForm.controls.skills;
  }
  addSkill(): void {
    this.skills.push(
      this.fb.control('')
    );
  }
  removeSkill(index: number): void {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    const employee = this.employeeForm.getRawValue();
    console.log('Employee submitted:', employee
    );

    console.log(
      this.employeeForm.valid
    );
    console.log(
      this.employeeForm.dirty
    );
    console.log(
      this.employeeForm.touched
    );
  }

  resetForm(): void {
    this.employeeForm.reset();
    this.skills.clear();
    this.skills.push(
      this.fb.control('')
    );

  }

  // employeeName = new FormControl('',
  //   [Validators.required, Validators.minLength(3)]);

  showFormValue(): void {
    console.log(
      'Employee form:',
      this.employeeForm.value
    );
    console.log(
      'Name:',
      this.employeeForm.controls.firstName.value
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
      'Age:',
      this.employeeForm.controls.age.value
    );
  }

  showName(): void {
    console.log(
      'Name:',
      this.employeeForm.controls.firstName.value
    );
  }
}