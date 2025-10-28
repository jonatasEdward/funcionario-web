import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Button} from "primeng/button";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    Button
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.login();
  }
}
