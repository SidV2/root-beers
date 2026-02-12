import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../dashboard/store/drinks.actions';
import { selectReviews, selectReviewsLoading } from '../../dashboard/store/drinks.selectors';
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
  loading$ = this.store.select(selectReviewsLoading);

  ngOnInit(): void {
    this.store.dispatch(DrinksActions.loadReviews({ drinkId: this.drinkId() }));
  }
}
