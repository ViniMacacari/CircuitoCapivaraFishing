import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { InscricaoBarcosComponent } from './pages/inscricao/inscricao-barcos/inscricao-barcos.component'
import { LoginComponent } from './pages/login/login.component'

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: HomeComponent},
    {path: 'inscricao/barcos', component: InscricaoBarcosComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'home'}
]