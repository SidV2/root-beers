import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Picture } from '../../../models/drink.model';
import { baseUrl } from '../../../constants/common.constants';
import { CarouselPresenter } from '../presenters/carousel-presenter';

@Component({
  selector: 'app-carousel',
  imports: [CarouselPresenter],
  templateUrl: './carousel-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselContainer {
  pictures = input.required<Picture[]>();

  images = computed(() =>
    this.pictures().map((pic) => ({
      src: baseUrl + pic.path,
      alt: pic.name,
    })),
  );
}
