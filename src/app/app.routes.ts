import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'choose-pantry',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/choose-pantry/choose-pantry.page').then(
        (m) => m.ChoosePantryPage,
      ),
  },
  {
    path: 'main',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
