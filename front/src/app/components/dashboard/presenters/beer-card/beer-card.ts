import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Drink } from '../../../../models/drink.model';
import { baseUrl } from '../../../../constants/common.constants';

@Component({
  selector: 'app-beer-card',
  imports: [DecimalPipe, MatCardModule],
  templateUrl: './beer-card.html',
  styleUrl: './beer-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerCard {
  drink = input.required<Drink | undefined>();

  readonly baseUrl: string = baseUrl;
}
