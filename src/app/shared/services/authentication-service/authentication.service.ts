import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { UserLoginModel } from '../../../API/Models/userModels/userLoginModel/UserLoginModel';
import { UserConnectedModel } from '../../../API/Models/userModels/userConnectedModel/UserConnectedModel';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // INJECTION
  constructor(private http : HttpClient){ }


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
            }),
            catchError(error => {
              console.error(error)
              return of(false)
            })
          )
  }




}
