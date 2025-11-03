import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";

@Component({
  selector: 'app-funcionario-v3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ChipsModule,
    NgIf,
    Button
  ],
  templateUrl: './funcionario-v3.component.html',
  styleUrl: './funcionario-v3.component.css'
})
export class FuncionarioV3Component {

  nome = new FormControl('Fulano da Silva')

  formulario: FormGroup;


  constructor(private  fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
    })
  }

  onSubt() {
    if (this.formulario.valid){
      console.log('Dados do formulario:', this.formulario.value)
      console.log('Formulario Valido:', this.formulario.valid)
    }
  }
}
