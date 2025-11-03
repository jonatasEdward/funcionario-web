import { Routes } from '@angular/router';
import {FuncionarioListComponent} from "./components/funcionario/funcionario-list/funcionario-list.component";
import {FuncionarioFormComponent} from "./components/funcionario/funcionario-form/funcionario-form.component";
import {LoginComponent} from "./components/login/login.component";
import {authGuard} from "./commons/auth.guard";
import {deactivateGuard} from "./commons/deactivate.guard";
import {FuncionarioSimplesComponent} from "./components/teste/funcionario-simples/funcionario-simples.component";
import {FuncionarioReactiveComponent} from "./components/teste/funcionario-reactive/funcionario-reactive.component";
import {FuncionarioV2Component} from "./components/funcionario/funcionario-v2/funcionario-v2.component";
import {FuncionarioV3Component} from "./components/funcionario/funcionario-v3/funcionario-v3.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',component: LoginComponent },
  {
    path: 'funcionarios',
    component: FuncionarioListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'funcionarios/novo',
    component: FuncionarioFormComponent,
    canActivate: [authGuard],
    canDeactivate: [deactivateGuard]
  },
  { path: 'funcionarios/:id', component: FuncionarioFormComponent, canActivate: [authGuard]  },
  {path: 'funcionarios-v2', component: FuncionarioV2Component},
  {path: 'funcionarios-v3', component: FuncionarioV3Component}
];
