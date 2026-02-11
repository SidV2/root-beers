import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddBeerFormValue } from './add-beer.config';

@Component({
  selector: 'app-add-beer-modal-presenter',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-beer-modal-presenter.html',
  styleUrl: './add-beer-modal-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBeerModalPresenter {
  private readonly fb = inject(FormBuilder);

  cancel = output<void>();
  submitBeer = output<AddBeerFormValue>();

  addBeerForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    if (this.addBeerForm.valid) {
      const { name, description } = this.addBeerForm.getRawValue();
      this.submitBeer.emit({ name: name!, description: description! });
    }
  }
}
