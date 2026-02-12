import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Review } from '../../../models/drink.model';

@Component({
  selector: 'app-review-list-presenter',
  imports: [DatePipe, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './review-list-presenter.html',
  styleUrl: './review-list-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListPresenter {
  reviews = input<Review[]>([]);
  loading = input<boolean>(true);
}
