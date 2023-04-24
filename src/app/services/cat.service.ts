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
    return this.http.post<Cat>(this.catPath, data);
  }

  getCats(): Observable<Array<Cat>> {
    return this.http.get<Array<Cat>>(this.catPath)
  }

  getCat(id: string):Observable<Cat> {
    return this.http.get<Cat>(this.catPath + '/' + id)
  }

  deleteCat(id: number) {
    return this.http.delete(this.catPath + '/' + id)
  }
}
