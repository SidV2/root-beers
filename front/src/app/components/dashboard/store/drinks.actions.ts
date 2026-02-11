import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Drink, DrinkQueryParams } from '../../../models/drink.model';

export const DrinksActions = createActionGroup({
  source: 'Drinks',
  events: {
    'Load Drinks': props<{ query?: DrinkQueryParams }>(),
    'Load Drinks Success': props<{ drinks: Drink[]; total: number }>(),
    'Load Drinks Failure': props<{ error: string }>(),
  },
});
