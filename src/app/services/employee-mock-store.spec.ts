import { TestBed } from '@angular/core/testing';
import { EmployeeMockStore } from './employee-mock-store';

describe('EmployeeMockStore', () => {
  let service: EmployeeMockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
