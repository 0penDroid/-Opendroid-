import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDTO } from '../models/comment.dto';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<CommentDTO[]>> {
    return this.http.get<CommentDTO[]>(
      'http://localhost:8080/comment/findAll',
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }

  insert(comment: CommentDTO): Observable<HttpResponse<CommentDTO[]>> {
    return this.http.post<CommentDTO[]>(
      'http://localhost:8080/comment/insert',
      comment,
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
