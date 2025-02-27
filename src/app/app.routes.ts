import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'choose-pantry',
    loadComponent: () =>
      import('./pages/choose-pantry/choose-pantry.page').then(
        (m) => m.ChoosePantryPage
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
