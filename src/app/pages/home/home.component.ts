import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmarkOutline } from '@ng-icons/ionicons';
import { KategoriComponent } from '../../components/kategori/kategori.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { PromoComponent } from '../../components/promo/promo.component';
import { SecondkategoriComponent } from '../../components/secondkategori/secondkategori.component';
import { ItemsComponent } from '../../components/items/items.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIconComponent, KategoriComponent, TrendingComponent, PromoComponent, SecondkategoriComponent, ItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  viewProviders: [provideIcons({ ionCheckmarkOutline })]

})
export class HomeComponent {
  color: string = '#00000';
  size: string = "120px";

  ones = [
    {
      name : 'Belanja 2 Jam Tiba',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name :  'Kategori',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Handphone & Table',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Top-Up & Tagihan',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Elektronik',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Peralatan Hewan',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Traveling',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Keuangan',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },
    {
      name : 'Laptop',
      img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png'
    },  
  
  ]

  imgs = [
    'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg',
    'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg',
    'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg',
    'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg',
    'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg',
  ]

  ionCheckmarkOutline = ionCheckmarkOutline;
}
