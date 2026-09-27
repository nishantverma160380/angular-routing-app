import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/userModel';

@Service()
export class UserService {
  private http = inject(HttpClient);
  private readonly url = '/data/users.json';

  getUserData(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
