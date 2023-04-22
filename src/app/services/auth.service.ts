import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = 'login'
  private registerPath = 'register'
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any>{
    return this.http.post(this.loginPath,data)
  }

  register(data: any): Observable<any>{
    return this.http.post(this.registerPath,data)
  }
}
