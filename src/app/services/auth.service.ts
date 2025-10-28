import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

interface TokenPayload {
  sub: string;
  exp: number;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';
  private authState = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$: Observable<boolean> = this.authState.asObservable();

  constructor(private router: Router) {}

  /**
   * Gera um token JWT mock para fins didáticos.
   * Em produção real, este token viria do backend após autenticação.
   */
  private generateMockJWT(): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: 'user123',
      exp: Date.now() + 3600000, // Expira em 1 hora
      role: 'USER'
    }));
    const signature = 'mock_signature_for_educational_purposes';
    return `${header}.${payload}.${signature}`;
  }

  /**
   * Decodifica o payload do token JWT.
   * ATENÇÃO: Em produção, a validação real deve ocorrer no backend.
   */
  private decodeToken(token: string): TokenPayload | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return null;
    }
  }

  /**
   * Verifica se existe um token válido (não expirado).
   */
  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;

    const payload = this.decodeToken(token);
    if (!payload) return false;

    // Verifica se o token não expirou
    return payload.exp > Date.now();
  }

  /**
   * Simula o processo de login.
   * Em produção real, isso enviaria credenciais para o backend.
   */
  login(): void {
    const token = this.generateMockJWT();
    localStorage.setItem(this.TOKEN_KEY, token);
    this.authState.next(true);
    this.router.navigate(['/funcionarios']);
  }

  /**
   * Realiza logout removendo o token.
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Verifica se o usuário está autenticado.
   */
  isAuthenticated(): boolean {
    return this.hasValidToken();
  }

  /**
   * Obtém a role do usuário a partir do token.
   */
  getUserRole(): string {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return 'GUEST';

    const payload = this.decodeToken(token);
    return payload?.role || 'GUEST';
  }

  /**
   * Simula validação assíncrona de token no backend.
   * Em produção real, isso faria uma chamada HTTP para validar o token.
   */
  async validateToken(): Promise<boolean> {
    return new Promise((resolve) => {
      // Simula delay de rede
      setTimeout(() => {
        resolve(this.hasValidToken());
      }, 500);
    });
  }
}
