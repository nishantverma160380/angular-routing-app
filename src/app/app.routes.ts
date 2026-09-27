import { Routes } from '@angular/router';

import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { UserList } from './user-list/user-list';
import { EmployeeList } from './employee-list/employee-list';
import { CategoryParent } from './category-parent/category-parent';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'categories', component: CategoryParent },
  { path: 'user', component: UserList },
  { path: 'employees', component: EmployeeList },
  { path: '**', component: PageNotFound },
];