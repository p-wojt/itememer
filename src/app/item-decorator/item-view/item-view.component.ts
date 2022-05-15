import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ItemTier } from '../../shared/item-tier.model';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css'],
})
export class ItemViewComponent {
  @Input() itemLevelEnabled!: boolean;
  @Input() damageEnabled!: boolean;
  @Input() armorEnabled!: boolean;
  @Input() strengthEnabled!: boolean;
  @Input() agilityEnabled!: boolean;
  @Input() staminaEnabled!: boolean;
  @Input() intellectEnabled!: boolean;
  @Input() requiresLevelEnabled!: boolean;
  @Input() loreEnabled!: boolean;

  @Input() name!: string;
  @Input() tier!: ItemTier;
  @Input() itemLevel!: number;
  @Input() minDamage!: number;
  @Input() maxDamage!: number;
  @Input() armor!: number;
  @Input() strength!: string;
  @Input() agility!: string;
  @Input() stamina!: string;
  @Input() intellect!: string;
  @Input() requiresLevel!: number;
  @Input() description!: string;
  @Input() lore!: string;

  @Input() selectedImage!: { url: string; alt: string };
  constructor() {}
}
