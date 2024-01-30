import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { userCreateModels } from '../mocks/userModels/create/userCreateModel';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  baseUrl : string = "https://localhost:7043/api/User";
  httpClient = inject(HttpClient);

  constructor() { }

  CreateUser(model : userCreateModels)
  {
    this.httpClient.post(this.baseUrl, model).subscribe(
    (result) => { console.log(result) },
    (error) => { console.log(error) }
    )
  }
}
