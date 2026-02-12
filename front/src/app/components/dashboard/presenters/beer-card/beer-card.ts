import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Drink } from '../../../../models/drink.model';
import { baseUrl } from '../../../../constants/common.constants';

@Component({
  selector: 'app-beer-card',
  imports: [DecimalPipe, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './beer-card.html',
  styleUrl: './beer-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerCard {
  drink = input.required<Drink | undefined>();

  addReview = output<number>();
  addImage = output<number>();
  viewDetail = output<number>();

  readonly baseUrl: string = baseUrl;

  onAddReview(): void {
    const drinkItem = this.drink();
    if (drinkItem) this.addReview.emit(drinkItem.id);
  }

  onAddImage(): void {
    const drinkItem = this.drink();
    if (drinkItem) this.addImage.emit(drinkItem.id);
  }

  onViewDetail(): void {
    const drinkItem = this.drink();
    if (drinkItem) this.viewDetail.emit(drinkItem.id);
  }
}
