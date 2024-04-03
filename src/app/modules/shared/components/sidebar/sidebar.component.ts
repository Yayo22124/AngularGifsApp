import { Component, Input, inject } from '@angular/core';

import { GifsService } from '../../../gifs/services/GifsService/gifs-service.service';

@Component({
  selector: 'gifs-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private gifsService = inject(GifsService);

  get tags() {
    return this.gifsService.tagsHistory;
  }
}
