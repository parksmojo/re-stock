import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'grocery',
        loadComponent: () =>
          import('../../pages/grocery-list/grocery-list.page').then(
            (m) => m.GroceryListPage
          ),
      },
      {
        path: 'recipes',
        loadComponent: () =>
          import('../../pages/recipes/recipes.page').then((m) => m.RecipesPage),
      },
      {
        path: 'pantry',
        loadComponent: () =>
          import('../../pages/pantry/pantry.page').then((m) => m.PantryPage),
      },
      {
        path: '',
        redirectTo: '/main/grocery',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/main/grocery',
    pathMatch: 'full',
  },
];
