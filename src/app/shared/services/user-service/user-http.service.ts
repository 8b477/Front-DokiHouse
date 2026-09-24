import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { UserCheckMail } from '../../../API/Models/userModels/userCheckMailModel/UserCheckMail';
import { UserCreateModel } from '../../../API/Models/userModels/userCreateModel/UserCreateModel';
import { UserUpdateMail } from '../../../API/Models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail';
import { UserUpdateName } from '../../../API/Models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { UpdatePasswd } from '../../../API/Models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { UserRepository } from '../../../API/Repository/user.repository';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { HandlerErrorService } from '../handler-error-service/handler-error.service';

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


