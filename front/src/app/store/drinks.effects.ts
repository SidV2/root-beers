import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DrinksService } from '../services/drinks.service';
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

export const loadMoreDrinks$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DrinksActions.loadMoreDrinks),
      switchMap(({ query }) =>
        drinksService.getDrinks(query).pipe(
          map((response) =>
            DrinksActions.loadMoreDrinksSuccess({ drinks: response.items, total: response.total }),
          ),
          catchError((error) => of(DrinksActions.loadDrinksFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const addDrink$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DrinksActions.addDrink),
      switchMap(({ drink }) =>
        drinksService.createDrink(drink).pipe(
          map((newDrink) => DrinksActions.addDrinkSuccess({ drink: newDrink })),
          catchError((error) => of(DrinksActions.addDrinkFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const addReview$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DrinksActions.addReview),
      switchMap(({ drinkId, review }) =>
        drinksService.createReview(drinkId, review).pipe(
          map((newReview) => DrinksActions.addReviewSuccess({ drinkId, review: newReview })),
          catchError((error) => of(DrinksActions.addReviewFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const uploadPicture$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(DrinksActions.uploadPicture),
      switchMap(({ drinkId, file }) =>
        drinksService.uploadPicture(drinkId, file).pipe(
          map((picture) => DrinksActions.uploadPictureSuccess({ drinkId, picture })),
          catchError((error) => of(DrinksActions.uploadPictureFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
