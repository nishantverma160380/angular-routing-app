export interface EmployeeAddress {
  street: string;
  city: string;
  postcode: string;
}

export interface EmployeeModel {
  id: number;

  firstName: string;
  lastName: string;

  email: string;
  age: number;
  salary: number;

  department: string;

  address: EmployeeAddress;

  skills: string[];
}

export type EmployeeRequest = Omit<EmployeeModel, 'id'>;