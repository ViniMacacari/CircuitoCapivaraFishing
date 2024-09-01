import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { InscricaoBarcosComponent } from './pages/inscricao/inscricao-barcos/inscricao-barcos.component'
import { StatusComponent } from './pages/inscricao/status/status.component'
import { LoginComponent } from './pages/login/login.component'

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: HomeComponent},
    {path: 'inscricao/barcos', component: InscricaoBarcosComponent},
    {path: 'inscricao/status', component: StatusComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'home'}
]