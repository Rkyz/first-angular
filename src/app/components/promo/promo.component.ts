import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.css',
  viewProviders: [provideIcons({ ionCheckmarkOutline })]
})
export class PromoComponent {
}
