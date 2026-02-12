import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailState } from './detail.reducer';

export const selectDetailState = createFeatureSelector<DetailState>('detail');

export const selectSelectedDrink = createSelector(selectDetailState, (state) => state.selectedDrink);

export const selectDetailLoading = createSelector(selectDetailState, (state) => state.detailLoading);

export const selectDetailError = createSelector(selectDetailState, (state) => state.error);
