import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DrinksService } from '../../services/drinks.service';
import { ReviewActions } from './review.actions';

export const loadReviews$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(ReviewActions.loadReviews),
      switchMap(({ drinkId, offset, length }) =>
        drinksService.getReviews(drinkId, offset, length).pipe(
          map((response) => ReviewActions.loadReviewsSuccess({ reviews: response.items, total: response.total })),
          catchError((error) => of(ReviewActions.loadReviewsFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);

export const loadMoreReviews$ = createEffect(
  (actions$ = inject(Actions), drinksService = inject(DrinksService)) =>
    actions$.pipe(
      ofType(ReviewActions.loadMoreReviews),
      switchMap(({ drinkId, offset, length }) =>
        drinksService.getReviews(drinkId, offset, length).pipe(
          map((response) => ReviewActions.loadMoreReviewsSuccess({ reviews: response.items, total: response.total })),
          catchError((error) => of(ReviewActions.loadReviewsFailure({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
