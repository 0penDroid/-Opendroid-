import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDTO } from '../models/post.dto';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<PostDTO[]>> {
    return this.http.get<PostDTO[]>('http://localhost:8080/post/findAll', {
      observe: 'response',
      responseType: 'json',
    });
  }
}
