import { Routes } from '@angular/router';

import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },

  // { path: 'categories', component: CategoryParent },
  {
    path: 'categories',
    loadComponent: () =>
      import('./category-parent/category-parent').then(m => m.CategoryParent)
  },

  // { path: 'user', component: UserList },
  {
    path: 'user',
    loadComponent: () =>
      import('./user-list/user-list').then(m => m.UserList)
  },

  // { path: 'employees', component: EmployeeList },
  {
    path: 'employees/add',
    loadComponent: () =>
      import('./employee-form/employee-form')
        .then(m => m.EmployeeForm),
    canMatch: [adminGuard]
  },
  {
    path: 'employees/:id',
    loadComponent: () =>
      import('./employee-detail/employee-detail')
        .then(m => m.EmployeeDetail),
    canMatch: [adminGuard]
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./employee-list/employee-list')
        .then(m => m.EmployeeList),
    canMatch: [adminGuard]
  },

  {
    path: 'settings', loadChildren: () =>
      import('./settings/settings.routes').then(m => m.SETTINGS_ROUTES),
  },

  { path: '**', component: PageNotFound },
];