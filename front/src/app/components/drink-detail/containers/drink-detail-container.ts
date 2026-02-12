import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../dashboard/store/drinks.actions';
import { selectSelectedDrink, selectDetailLoading } from '../../dashboard/store/drinks.selectors';
import { DrinkDetailPresenter } from '../presenters/drink-detail-presenter';

@Component({
  selector: 'app-drink-detail-container',
  imports: [AsyncPipe, DrinkDetailPresenter],
  templateUrl: './drink-detail-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinkDetailContainer implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly store = inject(Store);

  drink$ = this.store.select(selectSelectedDrink);
  loading$ = this.store.select(selectDetailLoading);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(DrinksActions.loadDrinkDetail({ id }));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
