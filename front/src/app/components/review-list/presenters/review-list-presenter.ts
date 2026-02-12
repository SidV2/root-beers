import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Review } from '../../../models/drink.model';

@Component({
  selector: 'app-review-list-presenter',
  imports: [DatePipe, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './review-list-presenter.html',
  styleUrl: './review-list-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListPresenter {
  reviews = input<Review[]>([]);
  total = input<number>(0);
  loading = input<boolean>(true);
  pageNumber = input<number>(1);

  fetchMoreReviewsEvent = output<void>();
}
