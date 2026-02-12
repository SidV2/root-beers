import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddImageFormValue } from './add-image-config';

@Component({
  selector: 'app-add-image-modal-presenter',
  imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './add-image-modal-presenter.html',
  styleUrl: './add-image-modal-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddImageModalPresenter {
  private readonly fb = inject(FormBuilder);

  cancel = output<void>();
  submitImage = output<File>();

  selectedFile = signal<File | null>(null);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile.set(input.files[0]);
    }
  }

  removeFile(): void {
    this.selectedFile.set(null);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    const file = this.selectedFile();
    if (file) {
      this.submitImage.emit(file);
    }
  }
}
