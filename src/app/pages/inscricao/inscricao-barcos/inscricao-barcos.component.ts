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
    this.Modal.openModal('#f6f6f6', 'Inscricão de Pescadores', 'teste', 'fa-download', true, 'inscricao-barcos', 'Sim', true)
  }
}
