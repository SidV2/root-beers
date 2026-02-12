import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReviewActions } from '../../../store/review/review.actions';
import { selectReviews, selectReviewsLoading, selectReviewsTotal, selectReviewError } from '../../../store/review/review.selectors';
import { ReviewListPresenter } from '../presenters/review-list-presenter';

@Component({
  selector: 'app-review-list',
  imports: [AsyncPipe, ReviewListPresenter],
  templateUrl: './review-list-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListContainer implements OnInit {
  private readonly store = inject(Store);

  drinkId = input.required<number>();

  reviews$ = this.store.select(selectReviews);
  total$ = this.store.select(selectReviewsTotal);
  loading$ = this.store.select(selectReviewsLoading);
  error$ = this.store.select(selectReviewError);

  pageNumber = 1;
  private readonly pageSize = 5;

  ngOnInit(): void {
    this.store.dispatch(ReviewActions.loadReviews({ drinkId: this.drinkId(), offset: 0, length: this.pageSize }));
  }

  fetchMoreReviews(): void {
    this.pageNumber++;
    const offset = (this.pageNumber - 1) * this.pageSize;
    this.store.dispatch(ReviewActions.loadMoreReviews({ drinkId: this.drinkId(), offset, length: this.pageSize }));
  }
}
