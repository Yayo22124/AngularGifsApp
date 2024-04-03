import { Component, inject } from '@angular/core';

import { Gif } from '../../../shared/interfaces/gifs.interface';
import { GifsService } from '../../services/GifsService/gifs-service.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // ! Injects
  private gifsService: GifsService = inject(GifsService);
  // * Properties
  public get gifsList(): Gif[]  {
    return this.gifsService.gifsList;
  };
}
