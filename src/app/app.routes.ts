import { Routes } from '@angular/router';

import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { UserList } from './user-list/user-list';
import { EmployeeList } from './employee-list/employee-list';
import { CategoryParent } from './category-parent/category-parent';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // { path: 'categories', component: CategoryParent },
  { path: 'categories', 
    loadComponent: () => 
      import('./category-parent/category-parent').then(m => m.CategoryParent) },
  // { path: 'user', component: UserList },
  {
    path: 'user',
    loadComponent: () =>
      import('./user-list/user-list').then(m => m.UserList)
  },
  // { path: 'employees', component: EmployeeList },
  {
    path: 'employees/:id',
    loadComponent: () =>
      import('./employee-detail/employee-detail').then(m => m.EmployeeDetail)
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./employee-list/employee-list').then(m => m.EmployeeList)
  },
  { path: '**', component: PageNotFound },
];