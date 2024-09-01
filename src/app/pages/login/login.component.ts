import { Component, ViewChild } from '@angular/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { FormatInputDirective } from '../../directives/format-input.directive'
import { VariaveisAmbiente } from '../../config/ambiente'
import { ModalComponent } from "../../componentes/modal/modal.component"
import { ModalResponseService } from '../../services/modal/modal-response.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormatInputDirective, HttpClientModule, FormsModule, ModalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private responseService: ModalResponseService
  ) { }

  @ViewChild('Modal') Modal!: ModalComponent

  url = `${VariaveisAmbiente.urlApi}/usuarios/login`

  nomeEquipe = ''
  cpf = ''

  login(): void {
    this.Modal.openModal('#ffd042', 'Aguarde...', 'Estamos confirmando seus dados!', 'fa-spinner fa-spin', false, '', false, '', '', '')

    const body = {
      equipe: this.nomeEquipe,
      cpf: this.cpf
    }

    this.http.post(this.url, body).subscribe(
      (res: any) => {
        localStorage.setItem('ccf', res.token)
        window.location.href = '/inscricao/status'
      },
      (err) => {
        this.Modal.openModal('#FF0000', 'Erro', 'Não encontramos nenhum usuário inscrito com esses dados.', 'fa-exclamation-triangle', true, 'Ok', false, '', '', '')
      }
    )
  }
}