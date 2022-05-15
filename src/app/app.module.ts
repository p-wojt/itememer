import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemViewComponent } from './item-decorator/item-view/item-view.component';
import { ItemDecoratorComponent } from './item-decorator/item-decorator.component';
import { FormsModule } from '@angular/forms';
import { ImageSelectorComponent } from './item-decorator/image-selector/image-selector.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemViewComponent,
    ItemDecoratorComponent,
    ImageSelectorComponent,
    PlaceholderDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
