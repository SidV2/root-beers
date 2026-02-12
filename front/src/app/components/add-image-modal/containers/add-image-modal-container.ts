import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DrinksActions } from '../../../store/drinks.actions';
import { AddImageModalPresenter } from '../presenters/add-image-modal-presenter';
import { AddImageFormValue } from '../presenters/add-image-config';

export interface AddImageDialogData {
  drinkId: number;
}

@Component({
  selector: 'app-add-image-modal-container',
  imports: [AddImageModalPresenter],
  templateUrl: './add-image-modal-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddImageModalContainer {
  private readonly dialogRef = inject(MatDialogRef<AddImageModalContainer>);
  private readonly store = inject(Store);
  readonly data = inject<AddImageDialogData>(MAT_DIALOG_DATA);

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(value: AddImageFormValue): void {
    this.store.dispatch(DrinksActions.uploadPicture({ drinkId: this.data.drinkId, file: value.file }));
    this.dialogRef.close();
  }
}
