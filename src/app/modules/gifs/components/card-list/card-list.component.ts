import { Component, Input } from '@angular/core';

import { Gif } from '../../../shared/interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input({ required: true })
  public gifs: Gif[] = [];
}
