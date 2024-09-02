import { Component, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ModalComponent } from '../../../componentes/modal/modal.component'
import { ModalResponseService } from '../../../services/modal/modal-response.service'
import { VariaveisAmbiente } from '../../../config/ambiente'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormatInputDirective } from '../../../directives/format-input.directive'

@Component({
  selector: 'app-inscricao-barcos',
  standalone: true,
  imports: [ModalComponent, FormsModule, HttpClientModule, FormatInputDirective],
  templateUrl: './inscricao-barcos.component.html',
  styleUrls: ['./inscricao-barcos.component.css']
})
export class InscricaoBarcosComponent {

  nomeEquipe: string = ''
  emailContato: string = ''
  numeroArrais: string = ''
  barcoAlugado: boolean = false
  nomeEmbarcacao: string = ''
  capitania: string = ''
  motorizacaoAlugada: boolean = false
  motorizacao: string = ''

  nomeCapitao: string = ''
  cpfCapitao: string = ''
  celularCapitao: string = ''
  cidadeCapitao: string = ''

  nomePescador2: string = ''
  cpfPescador2: string = ''
  celularPescador2: string = ''
  cidadePescador2: string = ''

  nomePescador3: string = ''
  cpfPescador3: string = ''
  celularPescador3: string = ''
  cidadePescador3: string = ''

  constructor(
    private http: HttpClient,
    private responseService: ModalResponseService,
  ) {}

  @ViewChild('Modal') Modal!: ModalComponent

  openModal() {
    this.Modal.openModal('#ffd042', 'Finalizar Inscrição', 'Deseja realizar a inscrição da sua equipe com os dados selecionados?', 'fa-question', true, 'Confirmar', true, '', 'sim', 'nao')
  }

  modalFechado() {
    const resposta = this.responseService.getResposta()

    if (resposta === 'sim') {
      this.inscreverEquipe()
    }
  }

  inscreverEquipe(): void {
    this.Modal.openModal('#ffd042', 'Aguarde...', 'Estamos confirmando seus dados!', 'fa-spinner fa-spin', false, '', false, '', '', '')

    const url = `${VariaveisAmbiente.urlApi}/equipes/criar-equipe`

    const data = new Date()

    const ano = data.getFullYear()

    const equipe = {
      nome: this.nomeEquipe,
      arrais: this.numeroArrais,
      nomeEmbarcacao: this.nomeEmbarcacao,
      capitania: this.capitania,
      motorizacao: this.motorizacao,
      etapa: 1,
      ano: ano,
      nomeCapitao: this.nomeCapitao,
      CPFCapitao: this.cpfCapitao,
      celularCapitao: this.celularCapitao,
      cidadeCapitao: this.cidadeCapitao,
      emailCapitao: this.emailContato,
      nomeP1: this.nomePescador2,
      CPFP1: this.cpfPescador2,
      celularP1: this.celularPescador2,
      cidadeP1: this.cidadePescador2,
      emailP1: '',
      nomeP2: this.nomePescador3,
      CPFP2: this.cpfPescador3,
      celularP2: this.celularPescador3,
      cidadeP2: this.cidadePescador3,
      emailP2: '',
    }

    this.http.post(url, equipe).subscribe(
      response => {
        this.Modal.openModal('#008000', 'Sucesso', 'Seu cadastro foi concluído com sucesso!', 'fa-check', true, 'Fechar', false, '/login', '', '')
      },
      error => {
        this.Modal.openModal('#FF0000', 'Erro', `Ocorreu um erro ao tentar realizar a inscrição: ${error.error.message}`, 'fa-times', true, 'Fechar', false, '', '', '')
        console.error(error.error.message)
      }
    )
  }

  onBarcoAlugadoChange() {
    if (this.barcoAlugado) {
      this.nomeEmbarcacao = 'ALUGADO'
      this.capitania = 'ALUGADO'
    } else {
      this.nomeEmbarcacao = ''
      this.capitania = ''
    }
  }

  onMotorizacaoAlugadaChange() {
    if (this.motorizacaoAlugada) {
      this.motorizacao = 'ALUGADO'
    } else {
      this.motorizacao = ''
    }
  }
}