import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catPath = 'https://localhost:7101/cats';

  constructor(private http: HttpClient, private authService: AuthService) {}

  create(data: any): Observable<Cat> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post<Cat>(this.catPath, data, { headers });
  }
}
