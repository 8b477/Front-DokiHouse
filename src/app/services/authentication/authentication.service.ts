import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../mocks/models/user/login/UserLogin';
import { Observable } from 'rxjs';
import { TokenModel } from '../../mocks/models/token/TokenModel';

@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  private baseUrl : string = "https://localhost:7043/api/Log";
  private userAuthorize : boolean = false


  constructor(private http : HttpClient) { }

  login(model : UserLogin) : Observable<TokenModel>
  {
    return this.http.post<TokenModel>(this.baseUrl, model)
  }

  isAuthenticate() : boolean{
    return this.userAuthorize
  }

}