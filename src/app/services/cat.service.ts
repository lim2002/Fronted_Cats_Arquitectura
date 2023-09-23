import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fact } from '../components/models/fact';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) {}

  getCats(): Observable<Fact[]> {
    return this.http.get<Fact[]>('http://localhost:8080/api/v1/datos/user/');
  }

}
