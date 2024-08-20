import { Routes } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DespesaComponent } from './pages/despesa/despesa.component';
import { LoginComponent } from './pages/login/login.component';
import { SistemaComponent } from './pages/sistema/sistema.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'sistema',
        component: SistemaComponent
    },
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'despesa',
        component: DespesaComponent
    }
];
