import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPhone } from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topinfo',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './topinfo.component.html',
  styleUrl: './topinfo.component.css',
  viewProviders: [provideIcons({ bootstrapPhone })]
})
export class TopinfoComponent {
  @Input() merek!: string;

  setBurger: boolean = false;  
  openBurger(): void {
    this.setBurger = !this.setBurger;
  }
  constructor() {
    console.log(this.setBurger); 
  }
}
