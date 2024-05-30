import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
  viewProviders: [provideIcons({ ionCheckmarkOutline })]

})
export class ItemsComponent {

}
