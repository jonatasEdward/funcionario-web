import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    console.warn('Acesso negado. Redirecionando para login...');
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url } // Salva a URL original para redirecionar após login
    });
    return false;
  }

  return true;
};
