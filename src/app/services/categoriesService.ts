import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/categoryModel';

@Service()
export class CategoriesService {
  private http = inject(HttpClient);
  private readonly url = '/data/categories.json';

  getCategoryData(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }
}
