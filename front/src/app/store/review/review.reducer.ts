import { createFeature, createReducer, on } from '@ngrx/store';
import { Review } from '../../models/drink.model';
import { ReviewActions } from './review.actions';


export interface ReviewState {
  reviews: Review[];
  reviewsTotal: number;
  reviewsLoading: boolean;
  error: string | null;
}

export const initialState: ReviewState = {
  reviews: [],
  reviewsTotal: 0,
  reviewsLoading: false,
  error: null,
};

export const reviewFeature = createFeature({
  name: 'review',
  reducer: createReducer(
    initialState,
    on(ReviewActions.loadReviews, (state) => ({
      ...state,
      reviews: [],
      reviewsLoading: true,
    })),
    on(ReviewActions.loadReviewsSuccess, (state, { reviews, total }) => ({
      ...state,
      reviews,
      reviewsTotal: total,
      reviewsLoading: false,
    })),
    on(ReviewActions.loadReviewsFailure, (state, { error }) => ({
      ...state,
      reviewsLoading: false,
      error,
    })),
    on(ReviewActions.loadMoreReviews, (state) => ({
      ...state,
      error: null,
    })),
    on(ReviewActions.loadMoreReviewsSuccess, (state, { reviews, total }) => ({
      ...state,
      reviews: [...state.reviews, ...reviews],
      reviewsTotal: total,
    }))
  ),
});
