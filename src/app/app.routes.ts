import { Routes } from '@angular/router';
import {FuncionarioListComponent} from "./components/funcionario-list/funcionario-list.component";
import {FuncionarioFormComponent} from "./components/funcionario-form/funcionario-form.component";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'funcionarios',component: FuncionarioListComponent, canActivate: [authGuard] },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent, canActivate: [authGuard] },
  { path: 'funcionarios/:id', component: FuncionarioFormComponent, canActivate: [authGuard]  }
];
