import { Component, effect, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/authService';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App { 
  readonly authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const isAdmin = this.authService.isAdmin();
      const currentUrl = this.router.url;

      if (!isAdmin && currentUrl.startsWith('/employees')) {
        void this.router.navigateByUrl('/home');
      }
    });
  }
}