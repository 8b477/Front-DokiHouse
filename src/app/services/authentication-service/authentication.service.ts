import { ConnectedUser } from '../../models/userModels/userConnectedModel/userConnectedModel';
import { UserLogin } from '../../models/userModels/userLoginModel/userLoginModel';


import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  //PRIVATE VARIABLE
  private baseUrl : string = "https://localhost:7043/api/Log";


  // PUBLIC VARIABLE
  connectedUserSubject : BehaviorSubject<boolean>


  // SERVICES
  http   : HttpClient = inject(HttpClient)

  //CONSTRUCTOR
  constructor()
  {
    this.connectedUserSubject = new BehaviorSubject<boolean>(false) 
  }


  // PUBLIC METHODS
  login(model : UserLogin) :Observable<boolean>
  {
    return this.http.post(this.baseUrl, model, {responseType : 'text'})
                    .pipe(
                     map((token) => {
                        let decodeToken : any = jwtDecode(token)

                        let connectedUser : ConnectedUser = {
                          id   : decodeToken['nameid'],
                          name : decodeToken['name'],
                          role : decodeToken['role'],
                        }

                      localStorage.setItem('userInfo', JSON.stringify(connectedUser))
                      this.updateValueSubjectUser(true)
                      
                      return true;
                      }),
                      catchError(error => {
                        let displayError : any = JSON.stringify(error)
                        console.log('Error trigger in LOGIN method => \n' + displayError)

                        return of(false)
                      })
                    )
  }


  updateValueSubjectUser(value : boolean){
    this.connectedUserSubject.next(value)
  }

}
