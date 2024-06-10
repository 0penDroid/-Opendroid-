import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/category.dto';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<CategoryDTO[]>> {
    return this.http.get<CategoryDTO[]>(
      'http://localhost:8080/category/findAll',
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
