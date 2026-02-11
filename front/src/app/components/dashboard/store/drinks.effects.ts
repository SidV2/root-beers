import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DrinksService } from '../../../services/drinks.service';
import { DrinksActions } from './drinks.actions';

export const loadDrinks$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DrinksActions.loadDrinks),
      switchMap(({ query }) =>
        drinksService.getDrinks(query).pipe(
          map((response) =>
            DrinksActions.loadDrinksSuccess({ drinks: response.items, total: response.total }),
          ),
          catchError((error) => of(DrinksActions.loadDrinksFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
