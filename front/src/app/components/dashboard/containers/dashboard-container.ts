import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../store/drinks.actions';
import {
  selectDrinks,
  selectDrinksLoading,
  selectDrinksError,
  selectDrinksTotal,
} from '../store/drinks.selectors';
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
  private readonly router = inject(Router);

  drinks$ = this.store.select(selectDrinks);
  total$ = this.store.select(selectDrinksTotal);
  loading$ = this.store.select(selectDrinksLoading);
  error$ = this.store.select(selectDrinksError);

  pageNumber = 1;

  ngOnInit(): void {
    this.store.dispatch(
      DrinksActions.loadDrinks({ query: { offset: 0, length: 10 } }),
    );
  }

  navigateToDetail(drinkId: number): void {
    this.router.navigate(['/drink', drinkId]);
  }

  openAddBeerPage(): void {
    this.router.navigate(['/add']);
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

  fetchMoreResults() {
    this.pageNumber++;
    const offset = (this.pageNumber - 1) * 10;
    this.store.dispatch(DrinksActions.loadMoreDrinks({ query: { offset, length: 10 } }));
  }
}
