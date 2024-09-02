import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { VariaveisAmbiente } from '../../../config/ambiente'

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  constructor(
    private http: HttpClient
  ) { }

  ngAfterViewInit(): void {
    this.buscarStatus()
  }

  status: string = ''

  buscarStatus(): void {

    const token = window.localStorage.getItem('ccf')
    const headers = new HttpHeaders({ 'ccf': token || '' })

    this.http.get(VariaveisAmbiente.urlApi + '/equipes/minha-equipe/status', { headers }).subscribe(
      (res: any) => {
        this.status = res.status
        console.log(res)
      }
    )
  }

  cancelarInscricao(): void {
    this.http.post(VariaveisAmbiente.urlApi + '/equipes/cancelar-inscricao', {}, { headers: { 'ccf': window.localStorage.getItem('ccf') || '' } }).subscribe(
      (res: any) => {
        window.location.href = '/login'
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
