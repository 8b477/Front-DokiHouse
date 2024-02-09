import { ConnectedUser } from '../../mocks/models/user/connectedUser/ConnectedUser';
import { UserLogin } from '../../mocks/models/user/login/UserLogin';

import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'any'
})
export class AuthenticationService {

  //PRIVATE VARIABLE
  private baseUrl : string = "https://localhost:7043/api/Log";


  // PUBLIC VARIABLE
  connectedUserSubject : BehaviorSubject<boolean>


  // SERVICES
  private http : HttpClient = inject(HttpClient)
  private router : Router = inject(Router)


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
                      return true;
                      }),
                      catchError(error => {
                        console.log('Error trigger in LOGIN method => \n' + error);
                        return of(false)
                      })
                    )
  }


  updateValueSubjectUser(value : boolean){
    this.connectedUserSubject.next(value)
  }

}

// IF LOGIN METHOD RETURN TRUE WE NEED TO REDIRECTE USER TO OWN PROFIL