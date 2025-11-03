import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: 'app-funcionario-v2',
  standalone: true,
  imports: [
    FormsModule,
    ChipsModule,
    NgIf,
    Button
  ],
  templateUrl: './funcionario-v2.component.html',
  styleUrl: './funcionario-v2.component.css'
})
export class FuncionarioV2Component {

  usuario = {
    nome: '',
    email: '',
    senha: '',
  }

  onSubt(formulario: NgForm) {
    if (formulario.valid){
      console.log('Dados do formulario:', this.usuario)
      console.log('Formulario Valido:', formulario.valid)
    }
  }
}
