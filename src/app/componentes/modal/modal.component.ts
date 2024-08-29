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
export class ModalComponent implements OnDestroy {
  constructor(private router: Router) { }

  @Input() backgroundColor: string = '#f6f6f6'
  @Input() title: string = ''
  @Input() content: string = ''
  isOpen = false
  canClose = true
  icon = 'fa-download'
  redirectRoute: string | null = null
  messageButton: string = 'Fechar'

  openModal(backgroundColor: string, title: string, content: string, icone: string, canCloseB: boolean, redirectRoute: string | null = null, messageButton: string | null = null) {
    this.backgroundColor = backgroundColor
    this.title = title
    this.content = content
    this.isOpen = true
    this.canClose = canCloseB
    this.icon = icone || 'fa-download'
    this.redirectRoute = redirectRoute
    this.messageButton = messageButton || 'Fechar'

    window.scrollTo({ top: 0, behavior: 'smooth' })

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.height = '100%'

    document.addEventListener('wheel', this.preventDefault, { passive: false })
    document.addEventListener('touchmove', this.preventDefault, { passive: false })
    document.addEventListener('keydown', this.preventDefaultForScrollKeys, { passive: false })
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

    document.removeEventListener('wheel', this.preventDefault)
    document.removeEventListener('touchmove', this.preventDefault)
    document.addEventListener('keydown', this.preventDefaultForScrollKeys, { passive: false })
  }

  ngOnDestroy() {
    document.removeEventListener('wheel', this.preventDefault)
    document.removeEventListener('touchmove', this.preventDefault)
    document.removeEventListener('keydown', this.preventDefaultForScrollKeys)
  }

  preventDefault(e: Event) {
    // e.preventDefault()
  }

  preventDefaultForScrollKeys(e: KeyboardEvent) {
    // if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) {
    //   e.preventDefault()
    // }
  }
}