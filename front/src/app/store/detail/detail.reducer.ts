import { createFeature, createReducer, on } from '@ngrx/store';
import { Drink } from '../../models/drink.model';
import { DetailActions } from './detail.actions';


export interface DetailState {
  selectedDrink: Drink | null;
  detailLoading: boolean;
  error: string | null;
}

export const initialState: DetailState = {
  selectedDrink: null,
  detailLoading: false,
  error: null,
};

export const detailFeature = createFeature({
  name: 'detail',
  reducer: createReducer(
    initialState,
    on(DetailActions.loadDrinkDetail, (state) => ({
      ...state,
      selectedDrink: null,
      detailLoading: true,
      error: null,
    })),
    on(DetailActions.loadDrinkDetailSuccess, (state, { drink }) => ({
      ...state,
      selectedDrink: drink,
      detailLoading: false,
    })),
    on(DetailActions.loadDrinkDetailFailure, (state, { error }) => ({
      ...state,
      detailLoading: false,
      error,
    }))
  ),
});
