import { createActionGroup, props } from '@ngrx/store';
import { Drink } from '../../models/drink.model';

export const DetailActions = createActionGroup({
  source: 'Detail',
  events: {
    'Load Drink Detail': props<{ id: number }>(),
    'Load Drink Detail Success': props<{ drink: Drink }>(),
    'Load Drink Detail Failure': props<{ error: string }>(),
  },
});
