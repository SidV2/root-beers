import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../store/drinks.actions';
import {
  selectDrinks,
  selectDrinksLoading,
  selectDrinksError,
  selectDrinksTotal,
} from '../store/drinks.selectors';
import { AddBeerModalContainer } from '../../add-beer-modal/containers/add-beer-modal-container';
import { AddReviewModalContainer } from '../../add-review-modal/containers/add-review-modal-container';
import { AddImageModalContainer } from '../../add-image-modal/containers/add-image-modal-container';
import { DashboardPresenter } from '../presenters/dashboard-presenter';

@Component({
  selector: 'app-dashboard-container',
  imports: [AsyncPipe, DashboardPresenter],
  templateUrl: './dashboard-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer implements OnInit {
  private readonly store = inject(Store);
  private readonly dialog = inject(MatDialog);

  drinks$ = this.store.select(selectDrinks);
  total$ = this.store.select(selectDrinksTotal);
  loading$ = this.store.select(selectDrinksLoading);
  error$ = this.store.select(selectDrinksError);

  ngOnInit(): void {
    this.store.dispatch(
      DrinksActions.loadDrinks({ query: { offset: 0, length: 10 } }),
    );
  }

  openAddBeerDialog(): void {
    this.dialog.open(AddBeerModalContainer, {
      height: '500px',
      width: '700px',
    });
  }

  openAddReviewDialog(drinkId: number): void {
    this.dialog.open(AddReviewModalContainer, {
      data: { drinkId },
      height: '500px',
      width: '700px',
    });
  }

  openAddImageDialog(drinkId: number): void {
    this.dialog.open(AddImageModalContainer, {
      data: { drinkId },
      height: '500px',
      width: '700px',
    });
  }
}
