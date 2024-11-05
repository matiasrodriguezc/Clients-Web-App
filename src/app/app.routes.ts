import { Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginGuardianService } from './servicios/login-guardian.service';

export const routes: Routes = [
    {path: '', component: TableroComponent, canActivate:[LoginGuardianService]},
    {path: 'login', component: LoginComponent},
    {path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate:[LoginGuardianService]},
    {path: '**', component: NoEncontradoComponent}
];
