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
    on(DrinksActions.addDrinkSuccess, (state, { drink }) => ({
      ...state,
      drinks: [...state.drinks, drink],
      total: state.total + 1,
    })),
    on(DrinksActions.addDrinkFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(DrinksActions.addReviewSuccess, (state, { drinkId }) => ({
      ...state,
      drinks: state.drinks.map((d) =>
        d.id === drinkId
          ? { ...d, reviewCount: d.reviewCount + 1 }
          : d,
      ),
    })),
    on(DrinksActions.addReviewFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(DrinksActions.uploadPictureSuccess, (state, { drinkId, picture }) => ({
      ...state,
      drinks: state.drinks.map((d) =>
        d.id === drinkId
          ? { ...d, Pictures: [...d.Pictures, picture] }
          : d,
      ),
    })),
    on(DrinksActions.uploadPictureFailure, (state, { error }) => ({
      ...state,
      error,
    })),
  ),
});
