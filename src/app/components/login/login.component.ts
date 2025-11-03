import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private authService: AuthService) {
  }

  login(){
    this.authService.login();
  }
}
