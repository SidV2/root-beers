import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Drink } from '../../../models/drink.model';
import { BeerCard } from './beer-card/beer-card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard-presenter',
  imports: [MatProgressSpinnerModule, BeerCard, CommonModule, MatButtonModule],
  templateUrl: './dashboard-presenter.html',
  styleUrl: './dashboard-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPresenter {
  drinks = input<Drink[] | null>([]);
  total = input<number | null>(0);
  loading = input<boolean | null>(false);
  error = input<string | null>(null);
  pageNumber = input<number>(1);

  openAddBeerDialogEvent = output<void>();
  addReviewEvent = output<number>();
  addImageEvent = output<number>();
  viewDetailEvent = output<number>();
  fetchMoreResultsEvent = output<void>();

  openAddBeerDialog() {
    this.openAddBeerDialogEvent.emit();
  }

  addReview(drinkId: number) {
    this.addReviewEvent.emit(drinkId);
  }

  addImage(drinkId: number) {
    this.addImageEvent.emit(drinkId);
  }

  viewDetail(drinkId: number) {
    this.viewDetailEvent.emit(drinkId);
  }

  fetchMoreResults() {
    this.fetchMoreResultsEvent.emit();
  }
}
