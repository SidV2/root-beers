import { createActionGroup, props } from '@ngrx/store';
import { Drink, DrinkQueryParams, Review, Picture } from '../models/drink.model';

export const DrinksActions = createActionGroup({
  source: 'Drinks',
  events: {
    'Load Drinks': props<{ query?: DrinkQueryParams }>(),
    'Load Drinks Success': props<{ drinks: Drink[]; total: number }>(),
    'Load Drinks Failure': props<{ error: string }>(),
    'Load More Drinks': props<{ query?: DrinkQueryParams }>(),
    'Load More Drinks Success': props<{ drinks: Drink[]; total: number }>(),

    'Add Drink': props<{ drink: Partial<Drink> }>(),
    'Add Drink Success': props<{ drink: Drink }>(),
    'Add Drink Failure': props<{ error: string }>(),

    'Add Review': props<{ drinkId: number; review: Partial<Review> }>(),
    'Add Review Success': props<{ drinkId: number; review: Review }>(),
    'Add Review Failure': props<{ error: string }>(),

    'Upload Picture': props<{ drinkId: number; file: File }>(),
    'Upload Picture Success': props<{ drinkId: number; picture: Picture }>(),
    'Upload Picture Failure': props<{ error: string }>(),
  },
});
