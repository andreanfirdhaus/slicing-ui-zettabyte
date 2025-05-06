import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-features',
  templateUrl: './cards-features.component.html',
})
export class CardsFeaturesComponent {
  @Input() feature: any;
}