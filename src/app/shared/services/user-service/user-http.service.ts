import { UserRepository } from '../../../core/repository/user.repository';
import { UserCreateModel } from '../../../core/models/userModels/userCreateModel/UserCreateModel';

import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  userRepo = inject(UserRepository)


  CreateUser(model : UserCreateModel)
  {
    return this.userRepo.create(model).subscribe({
      next : (data) => { console.log(data) },
      error : (error) => { console.log(error) },
      complete : () => { console.log('Task CreateUser is finished !') },
    })
  }

}


