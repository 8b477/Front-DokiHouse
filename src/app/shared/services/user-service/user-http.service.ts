import { UserRepository } from '../../../core/repository/user.repository';
import { UserCreateModel } from '../../../core/models/userModels/userCreateModel/UserCreateModel';

import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  userRepo = inject(UserRepository)
  serviceLog = inject(AuthenticationService)
  route = inject(Router)

  CreateUser(model : UserCreateModel)
  {
    return this.userRepo.create(model).subscribe({
      next : () => { this.route.navigate(['/login']) },
      error : (error) => { console.log(error) },
      complete : () => { console.log('Task CreateUser is finished !') },
    })
  }

}


