import { Component, Input, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private router: Router) { }

  @Input() backgroundColor: string = '#f6f6f6'
  @Input() title: string = ''
  @Input() content: string = ''
  isOpen = false
  canClose = true
  button2 = false
  icon = 'fa-download'
  redirectRoute: string | null = null
  messageButton: string = 'Fechar'

  openModal(backgroundColor: string, title: string, content: string, icone: string, canCloseB: boolean, redirectRoute: string | null = null, messageButton: string | null = null, button2: boolean = false) {
    this.backgroundColor = backgroundColor
    this.title = title
    this.content = content
    this.isOpen = true
    this.canClose = canCloseB
    this.icon = icone || 'fa-download'
    this.redirectRoute = redirectRoute
    this.messageButton = messageButton || 'Fechar'
    this.button2 = button2

    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.height = '100%'
  }

  closeModal() {
    this.isOpen = false

    if (this.redirectRoute) {
      this.router.navigate([this.redirectRoute])
    }

    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.height = ''
  }
}