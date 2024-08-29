import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalResponseService {

  constructor() { }

  resposta: string = ''

  setResposta(resposta: string) {
    this.resposta = resposta
  }

  getResposta() {
    return this.resposta
  }
}
