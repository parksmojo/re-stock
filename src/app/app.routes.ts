import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'pantry',
    loadComponent: () =>
      import('./pages/pantry/pantry.page').then((m) => m.PantryPage),
  },
];
