import { createFeature, createReducer, on } from '@ngrx/store';
import { Drink } from '../../../models/drink.model';
import { DrinksActions } from './drinks.actions';

export interface DrinksState {
  drinks: Drink[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: DrinksState = {
  drinks: [],
  total: 0,
  loading: false,
  error: null,
};

export const drinksFeature = createFeature({
  name: 'drinks',
  reducer: createReducer(
    initialState,
    on(DrinksActions.loadDrinks, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(DrinksActions.loadDrinksSuccess, (state, { drinks, total }) => ({
      ...state,
      drinks,
      total,
      loading: false,
    })),
    on(DrinksActions.loadDrinksFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
  ),
});
