import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocDTO } from '../models/doc.dto';

@Injectable()
export class DocService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<DocDTO[]>> {
    return this.http.get<DocDTO[]>('http://localhost:8080/doc/findAll', {
      observe: 'response',
      responseType: 'json',
    });
  }
}
