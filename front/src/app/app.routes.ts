import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { drinksFeature } from './components/dashboard/store/drinks.reducer';
import * as DrinksEffects from './components/dashboard/store/drinks.effects';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/dashboard/containers/dashboard-container').then(
        (m) => m.DashboardContainer,
      ),
    providers: [provideState(drinksFeature), provideEffects(DrinksEffects)],
  },
];
