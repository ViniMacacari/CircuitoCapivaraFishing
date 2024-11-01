import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { InscricaoBarcosComponent } from './pages/inscricao/inscricao-barcos/inscricao-barcos.component'

import { StatusComponent } from './pages/inscricao/status/status.component'
import { LoginComponent } from './pages/login/login.component'

import { LoginAdminComponent } from './pages/admin/login-admin/login-admin.component'
import { AdminComponent } from './pages/admin/admin.component'

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'inscricao/barcos', component: InscricaoBarcosComponent },
    { path: 'inscricao/status', component: StatusComponent },
    { path: 'login', component: LoginComponent },

    { path: 'admin/login', component: LoginAdminComponent},
    { path: 'admin/inicio', component: AdminComponent },

    { path: '**', redirectTo: '' }
]