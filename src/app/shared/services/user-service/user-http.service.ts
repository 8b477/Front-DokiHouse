
import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepository } from '../../../API/Repository/user.repository';
import { UserModel } from '../../../API/models/userModels/UserModel';
import { UserCreateModel } from '../../../API/models/userModels/userCreateModel/UserCreateModel';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  // INJECTION
  userRepo   = inject(UserRepository)
  serviceLog = inject(AuthenticationService)
  route      = inject(Router)


  // PUBLIC METHODS
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


