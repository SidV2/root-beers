import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel-presenter',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './carousel-presenter.html',
  styleUrl: './carousel-presenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselPresenter {
  images = input.required<{ src: string; alt: string }[]>();

  currentIndex = signal(0);

  currentImage = computed(() => this.images()[this.currentIndex()]);
  hasPrev = computed(() => this.currentIndex() > 0);
  hasNext = computed(() => this.currentIndex() < this.images().length - 1);

  prev(): void {
    if (this.hasPrev()) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  next(): void {
    if (this.hasNext()) {
      this.currentIndex.update((i) => i + 1);
    }
  }
}
