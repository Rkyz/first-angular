import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { bootstrapCart3, bootstrapBell, bootstrapChevronDown, bootstrapEnvelopePaperHeartFill } from '@ng-icons/bootstrap-icons';
import {ionSearch} from '@ng-icons/ionicons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [RouterModule, NgIconComponent, CommonModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css',
  viewProviders: [provideIcons({ ionSearch, bootstrapCart3 })]
})

export class TopnavComponent {
  @Input() merek?: string;

  Carts = [
    'Racun Tikus',
    'Anak Ayam',
    'Iphone',
    'Samsung',
    'Hp'
  ]
}
