import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/dashboard/containers/dashboard-container').then(
        (m) => m.DashboardContainer,
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./components/add-beer-modal/containers/add-beer-modal-container').then(
        (m) => m.AddBeerModalContainer,
      ),
  },
];
