import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../dashboard/store/drinks.actions';
import { AddBeerModalPresenter } from '../presenters/add-beer-modal-presenter';
import { AddBeerFormValue } from '../presenters/add-beer.config';

@Component({
  selector: 'app-add-beer-modal-container',
  imports: [AddBeerModalPresenter],
  templateUrl: './add-beer-modal-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBeerModalContainer {
  private readonly dialogRef = inject(MatDialogRef<AddBeerModalContainer>);
  private readonly store = inject(Store);

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(value: AddBeerFormValue): void {
    this.store.dispatch(DrinksActions.addDrink({ drink: value }));
    this.dialogRef.close();
  }
}
