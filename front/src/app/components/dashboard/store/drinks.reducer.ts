import { createFeature, createReducer, on } from '@ngrx/store';
import { Drink } from '../../../models/drink.model';
import { DrinksActions } from './drinks.actions';

export interface DrinksState {
  drinks: Drink[];
  total: number;
  loading: boolean;
  error: string | null;
  selectedDrink: Drink | null;
  detailLoading: boolean;
}

export const initialState: DrinksState = {
  drinks: [],
  total: 0,
  loading: false,
  error: null,
  selectedDrink: null,
  detailLoading: false,
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
    on(DrinksActions.loadDrinkDetail, (state) => ({
      ...state,
      selectedDrink: null,
      detailLoading: true,
      error: null,
    })),
    on(DrinksActions.loadDrinkDetailSuccess, (state, { drink }) => ({
      ...state,
      selectedDrink: drink,
      detailLoading: false,
    })),
    on(DrinksActions.loadDrinkDetailFailure, (state, { error }) => ({
      ...state,
      detailLoading: false,
      error,
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
