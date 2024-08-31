import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[appFormatInput]',
  standalone: true
})
export class FormatInputDirective {

  @Input('appFormatInput') formatType!: string

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {

    let value = this.el.nativeElement.value.replace(/\D/g, '')

    if (this.formatType === 'cpf') {
      value = value.substring(0, 11)
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d)/, '$1.$2')
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else if (this.formatType === 'celular') {
      value = value.substring(0, 11)
      value = value.replace(/(\d{2})(\d)/, '($1) $2')
      value = value.replace(/(\d{5})(\d{4})$/, '$1-$2')
    }

    this.el.nativeElement.value = value
  }
}
