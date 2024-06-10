import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubcategoryDTO } from '../models/subcategory.dto';

@Injectable()
export class SubcategoryService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<SubcategoryDTO[]>> {
    return this.http.get<SubcategoryDTO[]>(
      'http://localhost:8080/subcategory/findAll',
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
