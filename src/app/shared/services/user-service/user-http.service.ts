
import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepository } from '../../../API/repository/user.repository';
import { UserModel } from '../../../API/models/userModels/UserModel';
import { UserCreateModel } from '../../../API/models/userModels/userCreateModel/UserCreateModel';
import { UserUpdateName } from '../../../API/models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { UpdatePasswd } from '../../../API/models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { UserCheckMail } from '../../../API/models/userModels/userCheckMailModel/UserCheckMail';
import { UserUpdateMail } from '../../../API/models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  // INJECTION
  userRepo   = inject(UserRepository)
  serviceLog = inject(AuthenticationService)
  route      = inject(Router)


// GET
  getProfil(){
      return this.userRepo.getById()
  }


// POST
  createUser(model : UserCreateModel)
  {
    return this.userRepo.create(model).subscribe({
      next : () => { this.route.navigate(['/login']) }
    })
  }

  checkPasswd(passwd : string){
    return this.userRepo.checkPasswd(passwd)
  }

  checkMail(mail : UserCheckMail){
    return this.userRepo.checkMail(mail)
  }


// PUT
  updateUserName(name: UserUpdateName){
    return this.userRepo.updateName(name)
  }

  updateUserPasswd(model: UpdatePasswd){
    return this.userRepo.updatePasswd(model)
  }

  updateUserMail(mail: UserUpdateMail){
    return this.userRepo.updateEmail(mail)
  }

// DELETE


}


