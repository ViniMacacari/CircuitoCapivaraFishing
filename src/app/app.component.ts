import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { PreviewModalidadeComponent } from './componentes/preview-modalidade/preview-modalidade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, PreviewModalidadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CCF';
}
