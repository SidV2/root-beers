import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Drink } from '../../../models/drink.model';
import { CarouselContainer } from '../../carousel/containers/carousel-container';
import { ReviewListContainer } from '../../review-list/containers/review-list-container';

@Component({
  selector: 'app-drink-detail-presenter',
  imports: [DecimalPipe, MatButtonModule, MatIconModule, MatProgressSpinnerModule, CarouselContainer, ReviewListContainer],
  templateUrl: './drink-detail-presenter.html',
  styleUrl: './drink-detail-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinkDetailPresenter {
  drink = input<Drink | null>(null);
  loading = input<boolean>(true);

  goBack = output<void>();

  goBackHandler() {
    this.goBack.emit()
  }
}
