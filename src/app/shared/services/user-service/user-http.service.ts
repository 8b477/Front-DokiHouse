import { UserModel } from './../../../core/models/userModels/UserModel';
import { UserRepository } from '../../../core/repository/user.repository';
import { UserCreateModel } from '../../../core/models/userModels/userCreateModel/UserCreateModel';

import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  userRepo = inject(UserRepository)
  serviceLog = inject(AuthenticationService)
  route = inject(Router)

  createUser(model : UserCreateModel)
  {
    return this.userRepo.create(model).subscribe({
      next : () => { this.route.navigate(['/login']) },
      error : (error) => { console.log(error) },
      complete : () => { console.log('Task CreateUser is finished !') },
    })
  }

    getProfil() : Observable<UserModel>{
      return this.userRepo.getById()
  }
}


