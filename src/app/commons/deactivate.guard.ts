import { CanDeactivateFn } from '@angular/router';
import {FuncionarioFormComponent} from "../components/funcionario/funcionario-form/funcionario-form.component";

export const deactivateGuard: CanDeactivateFn<FuncionarioFormComponent> = (component, currentRoute, currentState, nextState) => {
  if (!component.isSalvo){
    return confirm("Seus dados não foram salvos. Deseja continuar?")
  }
  return true;
};
