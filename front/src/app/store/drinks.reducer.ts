import { createFeature, createReducer, on } from '@ngrx/store';
import { Drink } from '../models/drink.model';
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
    on(DrinksActions.loadMoreDrinks, (state) => ({
      ...state,
      error: null,
    })),
    on(DrinksActions.loadMoreDrinksSuccess, (state, { drinks, total }) => ({
      ...state,
      drinks: [...state.drinks, ...drinks],
      total,
      loading: false,
    })),
    on(DrinksActions.addDrinkFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(DrinksActions.addReviewSuccess, (state, { drinkId }) => ({
      ...state,
      drinks: state.drinks.map((drink) =>
        drink.id === drinkId
          ? { ...drink, reviewCount: drink.reviewCount + 1 }
          : drink,
      ),
    })),
    on(DrinksActions.addReviewFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(DrinksActions.uploadPictureSuccess, (state, { drinkId, picture }) => ({
      ...state,
      drinks: state.drinks.map((drink) =>
        drink.id === drinkId
          ? { ...drink, Pictures: [...drink.Pictures, picture] }
          : drink,
      ),
    })),
    on(DrinksActions.uploadPictureFailure, (state, { error }) => ({
      ...state,
      error,
    })),
  ),
});
