import { Component } from '@angular/core';
import { PreviewModalidadeComponent } from '../../componentes/preview-modalidade/preview-modalidade.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PreviewModalidadeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
