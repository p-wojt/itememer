import { Component, EventEmitter, Output } from '@angular/core';
import { ItemImage } from 'src/app/shared/item-image.model';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent {
  @Output() closeImageSelector = new EventEmitter<boolean>();
  @Output() imageSelect = new EventEmitter<ItemImage>();

  images: { url: string; alt: string }[] = [
    { url: 'assets/images/axe.png', alt: 'axe' },
    { url: 'assets/images/crossbow.png', alt: 'crossbow' },
    { url: 'assets/images/cape.png', alt: 'cape' },
    { url: 'assets/images/elixir.png', alt: 'elixir' },
    { url: 'assets/images/gift.png', alt: 'gift' },
    { url: 'assets/images/hat.png', alt: 'hat' },
    { url: 'assets/images/mace.png', alt: 'mace' },
    { url: 'assets/images/rifle.png', alt: 'rifle' },
    { url: 'assets/images/scroll.png', alt: 'scroll' },
    { url: 'assets/images/sword.png', alt: 'sword' },
  ];


  onImageSelected(event: Event): void {
    const imageEl = <HTMLImageElement>event.target;
    const selectedImage = { url: imageEl.src, alt: imageEl.alt };
    this.imageSelect.emit(selectedImage);
    this.closeImageSelector.emit(false);
  }

  onClick(url: string) {
    if(url){
      const newImage = {
        url,
        alt: `image-${this.images.length}`
      };
      this.images.push(newImage);
    }
  }
}
