import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../store/drinks.actions';
import {
  selectDrinks,
  selectDrinksLoading,
  selectDrinksError,
  selectDrinksTotal,
} from '../store/drinks.selectors';
import { DashboardPresenter } from '../presenters/dashboard-presenter';

@Component({
  selector: 'app-dashboard-container',
  imports: [AsyncPipe, DashboardPresenter],
  templateUrl: './dashboard-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer implements OnInit {
  private readonly store = inject(Store);

  drinks$ = this.store.select(selectDrinks);
  total$ = this.store.select(selectDrinksTotal);
  loading$ = this.store.select(selectDrinksLoading);
  error$ = this.store.select(selectDrinksError);

  ngOnInit(): void {
    this.store.dispatch(
      DrinksActions.loadDrinks({ query: { offset: 0, length: 10, sort: 'id', desc: 'true' } }),
    );
  }
}
