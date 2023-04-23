import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = 'https://localhost:7101/identity/login'
  private registerPath = 'https://localhost:7101/identity/register'

  private router = inject(Router);

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(this.loginPath,data)
  }

  register(data: any): Observable<any>{
    return this.http.post(this.registerPath, data)
  }
  saveToken(token: string) {
    localStorage.setItem('token', token)
  }
  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;

  }
}
