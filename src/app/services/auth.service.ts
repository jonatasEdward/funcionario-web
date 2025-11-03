import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN_KEY: string = 'token'

  constructor(private router: Router) { }

  login() {
    const token = '123456789011111111aaFAGDAEG';//Simula a requisição HTTP de login
    localStorage.setItem(this.TOKEN_KEY, token);
    this.router.navigate(['/funcionarios']);
  }

  getIsAuhenticated(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  sair() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
