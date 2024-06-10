import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AchievementDTO } from '../models/achievement.dto';

@Injectable()
export class AchievementService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<HttpResponse<AchievementDTO[]>> {
    return this.http.get<AchievementDTO[]>(
      'http://localhost:8080/achievement/findAll',
      {
        observe: 'response',
        responseType: 'json',
      }
    );
  }
}
