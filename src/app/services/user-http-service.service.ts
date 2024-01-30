import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userCreateModels } from '../mocks/userModels/create/userCreateModel';


@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

baseUrl : string = "https://localhost:7043/api/User"

  constructor(private httpService : HttpClient) { }


  //Post
  CreateUser(model : userCreateModels)
  {
    this.httpService.post(this.baseUrl, model)
                    .subscribe
                    (
                      (item) => { console.log(item) },
                      (error) => { console.log(error)}
                    );
  }

}
