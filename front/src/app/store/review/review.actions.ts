import { createActionGroup, props } from '@ngrx/store';
import { Review } from '../../models/drink.model';

export const ReviewActions = createActionGroup({
  source: 'Review',
  events: {
    'Load Reviews': props<{ drinkId: number; offset: number; length: number }>(),
    'Load Reviews Success': props<{ reviews: Review[]; total: number }>(),
    'Load Reviews Failure': props<{ error: string }>(),
    'Load More Reviews': props<{ drinkId: number; offset: number; length: number }>(),
    'Load More Reviews Success': props<{ reviews: Review[]; total: number }>(),
  },
});
