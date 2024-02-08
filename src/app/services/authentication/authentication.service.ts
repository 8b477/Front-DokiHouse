import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../mocks/models/user/login/UserLogin';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  private baseUrl : string = "https://localhost:7043/api/Log";
  connectedUserSubject : Subject<boolean> = new Subject<boolean>() 

  constructor(private http : HttpClient, private router : Router) { }

  login(model : UserLogin)
  {
    this.http.post(this.baseUrl, model, { responseType : "text" })
    .subscribe({
      next : (token : string) => {

          let decodeToken : any = jwtDecode(token)

          let cn : ConnectedUser = 
          {
            id   : decodeToken["nameid"],
            name : decodeToken['name'],
            role : decodeToken["role"]
          }
          localStorage.setItem('userInfo', JSON.stringify(cn))
      },
      error : (error) => console.log(error),
      complete : () => console.log("task post log finish")
    })
  }


  updateValueSubjectUser(value : boolean){
    this.connectedUserSubject.next(value)
  }


}

export class ConnectedUser{
  id : number
  name : string
  role : string

  constructor(id : number, name : string, role : string){
    this.id = id
    this.name = name
    this.role = role
  }
}
