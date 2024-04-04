import { Component, Input } from '@angular/core';

import { Gif } from '../../../shared/interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list-item',
  template: `
    <div class="col-md-3 col-sm-6">
      <div class="card mb-2 text-center bg-dark">
        <img
          class="card-img-top"
          [src]="gif.images.downsized_medium.url"
          [alt]="gif.title"
        />

        <div class="card-body text-light">
          <p class="card-text">
            {{ gif.title }}
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './card-list-item.component.scss',
})
export class CardListItemComponent {
  @Input({required: true})
  public gif!: Gif;
}
