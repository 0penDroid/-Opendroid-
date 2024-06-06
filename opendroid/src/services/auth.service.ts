import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { CredsDTO } from '../models/creds.dto';
import { JWT_DTO } from '../models/jwt.dto';
import { LocalStorage } from '../models/utils/local.storage';
import { StorageService } from './storage.service';
import { UserDTO } from '../models/user.dto';

@Injectable()
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  private userAuthenticated: boolean = false;

  constructor(private http: HttpClient, private storage: StorageService) {}

  authenticate(creds: CredsDTO): Observable<HttpResponse<JWT_DTO>> {
    return this.http.post<JWT_DTO>(`http://localhost:8080/auth/login`, creds, {
      observe: 'response',
      responseType: 'json',
    });
  }

  successfulLogin(authorizationValue: JWT_DTO): LocalStorage {
    let tok = authorizationValue.token;
    let user: LocalStorage = {
      token: tok,
      email: `${this.jwtHelper.decodeToken(tok).sub}`,
    };
    this.storage.setLocalStorage(user);
    return user;
  }

  getUsuarioAutenticado(): boolean {
    return this.userAuthenticated;
  }

  setUsuarioAutenticado(auth: boolean) {
    this.userAuthenticated = auth;
  }

  register(user: UserDTO) {
    return this.http.post(`http://localhost:8080/user/insert`, user, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
