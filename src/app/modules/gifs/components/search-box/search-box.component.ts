import { Component, ElementRef, ViewChild, inject } from '@angular/core';

import { GifsService } from '../../services/GifsService/gifs-service.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input #txtSearchInput (keyup.enter)="onSearch()" type="text" class="form-control" placeholder="Buscar gifs...">
  `,
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  private gifsService = inject(GifsService);

  @ViewChild("txtSearchInput")
  public tagInput!:ElementRef<HTMLInputElement>;

  onSearch( ) {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";
  }
}
