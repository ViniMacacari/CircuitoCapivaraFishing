import { Component } from '@angular/core'
import { FormatInputDirective } from '../../directives/format-input.directive'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormatInputDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
