import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DrinksService } from '../../services/drinks.service';
import { DetailActions } from './detail.actions';

export const loadDrinkDetail$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DetailActions.loadDrinkDetail),
      switchMap(({ id }) =>
        drinksService.getDrink(id).pipe(
          map((drink) => DetailActions.loadDrinkDetailSuccess({ drink })),
          catchError((error) => of(DetailActions.loadDrinkDetailFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
