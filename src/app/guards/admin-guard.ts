import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/authService';

export const adminGuard: CanMatchFn = () => {

  const authService = inject(AuthService);

  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  }
  return router.createUrlTree(['/home']);
};
