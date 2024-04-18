import { Injectable, inject } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { UserRepository } from '../../../API/repository/user.repository';
import { UserCreateModel } from '../../../API/models/userModels/userCreateModel/UserCreateModel';
import { UserUpdateName } from '../../../API/models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { UpdatePasswd } from '../../../API/models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { UserCheckMail } from '../../../API/models/userModels/userCheckMailModel/UserCheckMail';
import { UserUpdateMail } from '../../../API/models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail';
import { HandlerErrorService } from '../authentication-service/handler-error.service';

@Injectable({
  providedIn: 'any'
})
export class UserHttpService {

  // INJECTION
  route         = inject(Router)
  userRepo      = inject(UserRepository)
  handlerErrors = inject(HandlerErrorService)
  serviceLog    = inject(AuthenticationService)


  // GET
  getProfil() {
    return this.userRepo.getById()
  }


  // POST
  createUser(model: UserCreateModel) {
    return this.userRepo.create(model).subscribe({
      next: () => { this.route.navigate(['/login']) }
    })
  }

  checkPasswd(passwd: string) {
    return this.userRepo.checkPasswd(passwd).pipe(
      catchError((error) => this.handlerErrors.handleValidationErrors(error)))
  }

  checkMail(mail: UserCheckMail) {
    return this.userRepo.checkMail(mail).pipe(
      catchError((error) => this.handlerErrors.handleValidationErrors(error)))
  }


  // PUT
  updateUserName(name: UserUpdateName): Observable<any> {
    return this.userRepo.updateName(name).pipe(
      catchError((error) => this.handlerErrors.handleValidationErrors(error)))
  }


  updateUserPasswd(model: UpdatePasswd) {
    return this.userRepo.updatePasswd(model).pipe(
      catchError(error => this.handlerErrors.handleValidationErrors(error)))
  }

  updateUserMail(mail: UserUpdateMail) {
    return this.userRepo.updateEmail(mail).pipe(
      catchError((error) => this.handlerErrors.handleValidationErrors(error)))
  }

  // DELETE

}


