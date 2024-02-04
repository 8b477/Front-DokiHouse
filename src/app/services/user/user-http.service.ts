import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { userCreateModels } from '../../mocks/models/user/create/userCreateModel';
import { Observable } from 'rxjs';
import { User } from '../../mocks/models/user/generic/User';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  private baseUrl : string = "https://localhost:7043/api/User";

  httpClient = inject(HttpClient);

  constructor() { }

  CreateUser(model : userCreateModels) : Observable<User>
  {
    return this.httpClient.post<User>(this.baseUrl, model) 
  }
}


