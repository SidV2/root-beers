import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../../store/drinks.actions';
import { AddReviewModalPresenter, AddReviewFormValue } from '../presenters/add-review-modal-presenter';

export interface AddReviewDialogData {
  drinkId: number;
}

@Component({
  selector: 'app-add-review-modal-container',
  imports: [AddReviewModalPresenter],
  templateUrl: './add-review-modal-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewModalContainer {
  private readonly dialogRef = inject(MatDialogRef<AddReviewModalContainer>);
  private readonly store = inject(Store);
  readonly data = inject<AddReviewDialogData>(MAT_DIALOG_DATA);

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(value: AddReviewFormValue): void {
    this.store.dispatch(DrinksActions.addReview({ drinkId: this.data.drinkId, review: value }));
    this.dialogRef.close();
  }
}
