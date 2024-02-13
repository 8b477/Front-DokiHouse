import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { userCreateModels } from '../../models/userModels/userCreateModel/userCreateModel';
import { User } from '../../models/userModels/UserModel';

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


