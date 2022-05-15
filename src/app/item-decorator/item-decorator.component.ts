import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemImage } from '../shared/item-image.model';
import { ItemTier } from '../shared/item-tier.model';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { ImageSelectorComponent } from './image-selector/image-selector.component';

@Component({
  selector: 'app-item-decorator',
  templateUrl: './item-decorator.component.html',
  styleUrls: ['./item-decorator.component.css'],
})
export class ItemDecoratorComponent implements OnInit, OnDestroy {
  tiers: ItemTier[] = [
    { name: 'Poor', rgbColor: 'rgb(157, 157, 157)' },
    { name: 'Common', rgbColor: 'rgb(255, 255, 255)' },
    { name: 'Uncommon', rgbColor: 'rgb(30, 255, 0)' },
    { name: 'Rare', rgbColor: 'rgb(0, 112, 221)' },
    { name: 'Epic', rgbColor: 'rgb(163, 53, 238)' },
    { name: 'Legendary', rgbColor: 'rgb(255, 128, 0)' },
    { name: 'Artifact', rgbColor: 'rgb(203, 204, 128)' },
    { name: 'Heirloom', rgbColor: 'rgb(0, 204, 255)' },
    { name: 'WoW Token', rgbColor: 'rgb(0, 204, 255)' },
  ];

  @ViewChild(PlaceholderDirective, { static: false })
  imageSelectorHost!: PlaceholderDirective;

  selecting: boolean = false;

  itemLevelEnabled: boolean = true;
  damageEnabled: boolean = true;
  armorEnabled: boolean = true;
  strengthEnabled: boolean = true;
  agilityEnabled: boolean = true;
  staminaEnabled: boolean = true;
  intellectEnabled: boolean = true;
  requiresLevelEnabled: boolean = true;
  loreEnabled: boolean = true;

  name!: string;
  tier!: ItemTier;
  itemLevel!: number;
  minDamage!: number;
  maxDamage!: number;
  armor!: number;
  strength!: string;
  agility!: string;
  stamina!: string;
  intellect!: string;
  requiresLevel!: number;
  description!: string;
  lore!: string;

  selectedImage!: ItemImage;

  descriptionsEls: HTMLLIElement[] = [];

  imageSelectorCloseSub!: Subscription;
  imageSelectSub!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.initializeExampleItem();
  }

  changeImage() {
    if (!this.selecting) {
      this.selecting = true;
      const hostViewContainerRef = this.imageSelectorHost.viewContainerRef;

      const componentRef = hostViewContainerRef.createComponent(
        ImageSelectorComponent
      );

      this.imageSelectorCloseSub =
        componentRef.instance.closeImageSelector.subscribe((selecting) => {
          this.imageSelectorCloseSub.unsubscribe();
          this.selecting = selecting;
          hostViewContainerRef.clear();
        });

      this.imageSelectSub = componentRef.instance.imageSelect.subscribe(
        (data: ItemImage) => {
          this.selectedImage = data;
          this.selecting = false;
        }
      );
    }
  }

  onTierChange(eventTarget: any) {
    const itemTier = this.tiers.find(
      (tier) => tier.name === eventTarget.value
    )!;
    this.tier = itemTier;
  }

  changeItemLevelOption() {
    this.itemLevelEnabled = !this.itemLevelEnabled;
  }

  changeDamageOption() {
    this.damageEnabled = !this.damageEnabled;
  }

  changeArmorOption() {
    this.armorEnabled = !this.armorEnabled;
  }

  changeStrengthOption() {
    this.strengthEnabled = !this.strengthEnabled;
  }

  changeAgilityOption() {
    this.agilityEnabled = !this.agilityEnabled;
  }

  changeStaminaOption() {
    this.staminaEnabled = !this.staminaEnabled;
  }

  changeIntellectOption() {
    this.intellectEnabled = !this.intellectEnabled;
  }

  changeRequiresLevelOption() {
    this.requiresLevelEnabled = !this.requiresLevelEnabled;
  }

  changeLoreOption() {
    this.loreEnabled = !this.loreEnabled;
  }

  initializeExampleItem() {
    this.name = 'Short Sword';
    this.tier = { name: 'Poor', rgbColor: 'rgb(157, 157, 157)' };
    this.itemLevel = 58;
    this.minDamage = 16;
    this.maxDamage = 28;
    this.armor = 22;
    this.strength = '+2';
    this.agility = '+3';
    this.stamina = '+1';
    this.intellect = '+1';
    this.requiresLevel = 60;
    this.description = `Chance on hit: Grant 2 extra attacks on your next swing`;
    this.lore = 'Is too short to be long';
    this.selectedImage = { url: 'assets/images/sword.png', alt: 'axe' };
  }

  ngOnDestroy(): void {
    this.imageSelectSub.unsubscribe();
  }
}
