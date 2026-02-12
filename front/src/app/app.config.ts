import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { drinksFeature } from './store/drinks.reducer';
import { detailFeature } from './store/detail/detail.reducer';
import { reviewFeature } from './store/review/review.reducer';
import * as DrinksEffects from './store/drinks.effects';
import * as DetailEffects from './store/detail/detail.effects';
import * as ReviewEffects from './store/review/review.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
      [drinksFeature.name]: drinksFeature.reducer,
      [detailFeature.name]: detailFeature.reducer,
      [reviewFeature.name]: reviewFeature.reducer,
    }),
    provideEffects(DrinksEffects, DetailEffects, ReviewEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
