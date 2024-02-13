import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { UserConnectedModel } from '../../../core/models/userModels/userConnectedModel/userConnectedModel';
import { UserLogin } from '../../../core/models/userModels/userLoginModel/userLoginModel';



@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  //PRIVATE VARIABLE
  private baseUrl : string = "https://localhost:7043/api/Log";


  // PUBLIC VARIABLE
  connectedUserSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  // SERVICES
  http : HttpClient = inject(HttpClient)


  // PUBLIC METHODS
  login(model : UserLogin) :Observable<boolean>
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
