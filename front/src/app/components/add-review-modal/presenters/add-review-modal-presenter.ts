import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface AddReviewFormValue {
  user_name: string;
  description: string;
  rating: number;
}

@Component({
  selector: 'app-add-review-modal-presenter',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-review-modal-presenter.html',
  styleUrl: './add-review-modal-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddReviewModalPresenter {
  private readonly fb = inject(FormBuilder);

  cancel = output<void>();
  submitReview = output<AddReviewFormValue>();

  form = this.fb.group({
    user_name: ['', Validators.required],
    description: ['', Validators.required],
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitReview.emit(this.form.getRawValue() as AddReviewFormValue);
    }
  }
}
