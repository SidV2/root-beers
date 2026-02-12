import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReviewState } from './review.reducer';

export const selectReviewState = createFeatureSelector<ReviewState>('review');

export const selectReviews = createSelector(selectReviewState, (state) => state.reviews);

export const selectReviewsTotal = createSelector(selectReviewState, (state) => state.reviewsTotal);

export const selectReviewsLoading = createSelector(selectReviewState, (state) => state.reviewsLoading);

export const selectReviewError = createSelector(selectReviewState, (state) => state.error);
