import { inject, PLATFORM_ID, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { EmployeeModel } from '../models/employeeModel';
import { Observable } from 'rxjs';

@Service()
export class EmployeeService {
    private http = inject(HttpClient);
    private platformId = inject(PLATFORM_ID);

    private readonly _url: string = '/data/employees-data.json';
    private readonly storageKey = 'employees';

    getEmployeeData(): Observable<EmployeeModel[]> {
        return this.http.get<EmployeeModel[]>(this._url);
    }

}