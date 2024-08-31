import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FormatadoresService {

  constructor() { }

  formatarCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Adiciona o traço
    return cpf
  }

  formatarCelular(celular: string): string {
    celular = celular.replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
    celular = celular.replace(/(\d{2})(\d)/, '($1) $2') // Adiciona os parênteses
    celular = celular.replace(/(\d{5})(\d{4})$/, '$1-$2') // Adiciona o traço
    return celular
  }
}
