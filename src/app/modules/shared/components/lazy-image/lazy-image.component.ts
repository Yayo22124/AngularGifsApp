import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: ``,
})
export class LazyImageComponent {
  @Input({alias: "image-url", required: true })
  public imageUrl!: string;

  @Input({ alias: 'alt-text', required: false })
  public altText: string = '';

  public hasLoaded: boolean = false;

  onLoad() {
    console.log("Image Loaded");
    this.hasLoaded = true;
  }
}
