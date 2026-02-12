import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DrinksState } from './drinks.reducer';

export const selectDrinksState = createFeatureSelector<DrinksState>('drinks');

export const selectDrinks = createSelector(selectDrinksState, (state) => state.drinks);

export const selectDrinksTotal = createSelector(selectDrinksState, (state) => state.total);

export const selectDrinksLoading = createSelector(selectDrinksState, (state) => state.loading);

export const selectDrinksError = createSelector(selectDrinksState, (state) => state.error);

export const selectSelectedDrink = createSelector(selectDrinksState, (state) => state.selectedDrink);

export const selectDetailLoading = createSelector(selectDrinksState, (state) => state.detailLoading);

export const selectReviews = createSelector(selectDrinksState, (state) => state.reviews);

export const selectReviewsTotal = createSelector(selectDrinksState, (state) => state.reviewsTotal);

export const selectReviewsLoading = createSelector(selectDrinksState, (state) => state.reviewsLoading);
