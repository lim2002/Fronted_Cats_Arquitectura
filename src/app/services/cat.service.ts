import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Fact } from '../components/models/fact';
import { NewFact } from '../components/models/newFact';

interface PagedResponse {
  code: number;
  data: {
    content: Fact[];
    totalElements: number;
    // ...otros campos
  };
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) {}

  getCats(page: number, size: number): Observable<PagedResponse> {
    return this.http.get<PagedResponse>(`http://localhost:8080/api/v1/datos/user/?page=${page}&size=${size}`);
  }
  

  addCat(newFact: NewFact): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/datos/admin/add', newFact);
  }

  editCat(id: number, updatedFact: NewFact): Observable<any> {
    return this.http.put(`http://localhost:8080/api/v1/datos/admin/edit/${id}`, updatedFact);
  }

  deleteCat(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/datos/admin/delete/${id}`);
  }

}
