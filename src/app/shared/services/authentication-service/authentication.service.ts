import { jwtDecode } from 'jwt-decode';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { UserLoginModel } from '../../../API/models/userModels/userLoginModel/UserLoginModel';
import { UserConnectedModel } from '../../../API/models/userModels/userConnectedModel/UserConnectedModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private http: HttpClient;

  // INJECTION
  constructor(private handler: HttpBackend)
  { 
    this.http = new HttpClient(handler)
  }


  // PRIVATE VARIABLE
  private baseUrl : string = "https://localhost:7043/api/Log";


  // PUBLIC VARIABLE
  connectedUserSubject : Subject<boolean | undefined> = new Subject<boolean | undefined>()



  // PUBLIC METHODS
    get isConnectedTest() :boolean{
      return localStorage.getItem('userInfo') != undefined     
    }

    emitValueSubjectUser(){
      this.connectedUserSubject.next(this.isConnectedTest)
  }


  login(model : UserLoginModel) :Observable<boolean>
  {

    return this.http.post(this.baseUrl, model, {responseType : 'text'})
          .pipe(
            map((token) => {
              let decodeToken : any = jwtDecode(token)

              let connectedUser : UserConnectedModel = {
                id   : decodeToken['nameid'],
                name : decodeToken['name'],
                role : decodeToken['role'],
              }

            localStorage.setItem('userInfo', JSON.stringify(connectedUser))
            localStorage.setItem('token',token)
            this.emitValueSubjectUser()
            
            return true;
            })
          )
  }




}
