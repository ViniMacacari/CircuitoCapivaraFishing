import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private router: Router
  ) { }

  mostrar: boolean = true

  ngAfterViewInit(): void {
    this.esconderMenu()
  }

  esconderMenu(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrar = !event.url.includes('/admin')
      }
    })
  }
}