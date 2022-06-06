import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BuildComponent } from './pages/build/build.component';
import { StyleSelectorComponent } from './components/style-selector/style-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildComponent,
    StyleSelectorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
