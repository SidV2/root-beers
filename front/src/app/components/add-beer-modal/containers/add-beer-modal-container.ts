import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../dashboard/store/drinks.actions';
import { AddBeerModalPresenter } from '../presenters/add-beer-modal-presenter';
import { AddBeerFormValue } from '../presenters/add-beer.config';

@Component({
  selector: 'app-add-beer-container',
  imports: [AddBeerModalPresenter],
  templateUrl: './add-beer-modal-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBeerModalContainer {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  onCancel(): void {
    this.router.navigate(['/']);
  }

  onSubmit(value: AddBeerFormValue): void {
    this.store.dispatch(DrinksActions.addDrink({ drink: value }));
    this.router.navigate(['/']);
  }
}
