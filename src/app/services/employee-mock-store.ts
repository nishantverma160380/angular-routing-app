import { Injectable, inject } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';

import {
    EmployeeModel,
    EmployeeRequest,
} from '../models/employeeModel';

@Injectable({ providedIn: 'root' })
export class EmployeeMockStore {
    // Load the seed directly, bypassing our mock API interceptor.
    private readonly seedHttp = new HttpClient(inject(HttpBackend));

    private employees: EmployeeModel[] = [];
    private nextId = 1;

    // Load the JSON once for this application instance.
    private readonly ready$ = this.seedHttp
        .get<EmployeeModel[]>('/data/employees-data.json')
        .pipe(
            map((employees) => {
                this.employees = structuredClone(employees);

                this.nextId =
                    Math.max(0, ...employees.map((employee) => employee.id)) + 1;
            }),
            shareReplay({ bufferSize: 1, refCount: false }),
        );

    getAll(): Observable<EmployeeModel[]> {
        return this.ready$.pipe(
            map(() => structuredClone(this.employees)),
        );
    }

    create(request: EmployeeRequest): Observable<EmployeeModel> {
        return this.ready$.pipe(
            map(() => {
                const employee: EmployeeModel = {
                    ...structuredClone(request),
                    id: this.nextId++,
                };

                this.employees.push(employee);

                return structuredClone(employee);
            }),
        );
    }
}