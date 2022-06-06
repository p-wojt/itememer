import { Component } from "@angular/core";

@Component({
  selector: 'app-style-selector',
  templateUrl: './style-selector.component.html',
  styleUrls: ['./style-selector.component.scss']
})
export class StyleSelectorComponent {
  styles: string[] = [
    'Minecraft',
    'World of Warcraft'
  ];
}
