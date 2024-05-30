import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { One } from '../../../type';

@Component({
  selector: 'app-kategori',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kategori.component.html',
  styleUrl: './kategori.component.css'
})
export class KategoriComponent {
  @Input() ones: One[] = []; 
  @Input() imgs: string[] = [];
}
