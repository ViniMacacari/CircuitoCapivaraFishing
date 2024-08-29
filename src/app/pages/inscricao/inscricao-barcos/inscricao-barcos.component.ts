import { Component, ViewChild } from '@angular/core'
import { ModalComponent } from '../../../componentes/modal/modal.component'

@Component({
  selector: 'app-inscricao-barcos',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './inscricao-barcos.component.html',
  styleUrl: './inscricao-barcos.component.css'
})
export class InscricaoBarcosComponent {
  @ViewChild('Modal') Modal!: ModalComponent

  openModal() {
    this.Modal.openModal('#ffd042', 'Confirmação', 'Deseja realizar a inscrição da sua equipe com os dados selecionados?', 'fa-download', true, 'Sim', true, '', 'sim', 'nao')
  }

  modalFechado() {
    console.log('eu fechei o modal')
  }
}
