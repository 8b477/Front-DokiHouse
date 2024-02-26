import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { UserConnectedModel } from '../../../core/models/userModels/userConnectedModel/UserConnectedModel';
import { UserLoginModel } from '../../../core/models/userModels/userLoginModel/UserLoginModel';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //PRIVATE VARIABLE
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
    const http : HttpClient = inject(HttpClient)

    return http.post(this.baseUrl, model, {responseType : 'text'})
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
              let displayError : any = JSON.stringify(error)
              console.log('Error trigger in LOGIN method => \n' + displayError)

              return of(false)
            })
          )
  }




}
