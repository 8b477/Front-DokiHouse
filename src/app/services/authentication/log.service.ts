import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../mocks/models/user/login/UserLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  private baseUrl : string = "https://localhost:7043/api/Log";

  constructor(private http : HttpClient) { }

  login(model : UserLogin) : Observable<any>
  {
    return this.http.post(this.baseUrl, model)
  }

}