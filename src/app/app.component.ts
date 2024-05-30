import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './layouts/topnav/topnav.component';
import { TopinfoComponent } from './layouts/topinfo/topinfo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopnavComponent, TopinfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'belajar';
  merek = "Tokopedia";
}
