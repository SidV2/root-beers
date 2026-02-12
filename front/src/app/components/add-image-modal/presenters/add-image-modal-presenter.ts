import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-image-modal-presenter',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './add-image-modal-presenter.html',
  styleUrl: './add-image-modal-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddImageModalPresenter {
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
