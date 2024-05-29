import { UserConnectedModel } from '../../../../API/models/userModels/userConnectedModel/UserConnectedModel';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../shared/components/form-error-info/form-error-info.component";
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { UpdatePasswd } from '../../../../API/models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { LocalStorageService } from '../../../../shared/services/local-storage-service/local-storage.service';
import { UserCheckMail } from '../../../../API/models/userModels/userCheckMailModel/UserCheckMail';
import { UserUpdateMail } from '../../../../API/models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail';
import { UserHttpService } from '../../../../shared/services/user-service/user-http.service';
import { ToastComponent } from "../../../../shared/components/toast/toast.component";
import { UserUpdateName } from '../../../../API/models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { HandlerErrorService } from '../../../../shared/services/handler-error-service/handler-error.service';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import {ImageModule} from 'primeng/image';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-profil-account',
    standalone: true,
    templateUrl: './profil-account.component.html',
    styleUrl: './profil-account.component.scss',
    imports: [
              ReactiveFormsModule,
              FormsModule,
              FormErrorInfoComponent,
              NgClass,
              ToastComponent,
              InputTextModule,
              ButtonModule,
              PasswordModule,
              ImageModule,
              ToastModule,
              ]
})
export class ProfilAccountComponent implements OnInit {


  // VARIABLES
  userUpdateMail ! : UserUpdateMail
  userCheckMail  ! : UserCheckMail
  userUpdatePass ! : UpdatePasswd
  userInfo       ! : UserConnectedModel


  avatar                : string  = ""
  passwordActualVisible : boolean = false
  passwordNewVisible    : boolean = false
  passwordUpdateSuccess : boolean = false
  nameUpdateSuccess     : boolean = false
  emailUpdateSuccess    : boolean = false
  emailIsValid          : boolean = false
  IsValidActualPasswd   : boolean = false


  // CONTROL BIND
  controlName         ! : FormControl
  controlPasswdActual ! : FormControl
  controlPasswdNew    ! : FormControl
  controlEmailActual  ! : FormControl
  controlEmailNew     ! : FormControl


  // SERVICES
  http                 : HttpClient          = inject(HttpClient)
  toast                : ToastComponent      = inject(ToastComponent)
  serviceUser          : UserHttpService     = inject(UserHttpService)
  serviceLocalStorage  : LocalStorageService = inject(LocalStorageService)
  serviceHandlerErrors : HandlerErrorService = inject(HandlerErrorService)
  messageService       : MessageService      = inject(MessageService)
  
  // ERROR
  errorUpdateName   : string[] = []
  errorCheckMail    : string[] = []
  errorUpdateMail   : string[] = []
  errorCheckPasswd  : string[] = []
  errorUpdatePasswd : string[] = []

  ngOnInit(): void {
  // Validators
    this.controlName         = new FormControl(null, [Validators.minLength(1), Validators.required])
    this.controlPasswdActual = new FormControl(null, [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlPasswdNew    = new FormControl(null, [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlEmailActual  = new FormControl(null, [Validators.email, Validators.required])
    this.controlEmailNew     = new FormControl(null, [Validators.email, Validators.required])

  // Recover info in LocalStorage
    const idOfUserInLocalStorage   = this.serviceLocalStorage.getIdOfUserInLocalStorage()
    const nameOfUserInLocalStorage = this.serviceLocalStorage.getNameOfUserInLocalStorage()
    const roleOfUserInLocalStorage = this.serviceLocalStorage.getRoleOfUserInLocalStorage()

    if (idOfUserInLocalStorage && nameOfUserInLocalStorage && roleOfUserInLocalStorage) {
      // Build User with Infos in LocalStorage
      this.userInfo = new UserConnectedModel(idOfUserInLocalStorage, nameOfUserInLocalStorage, roleOfUserInLocalStorage);

      // Build avatar with API DICEBEAR
      this.avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.userInfo.name}`;
    } else {
      console.error('User information is incomplete in local storage');
    }
  }



 // Utils
  activeFocusInput(): void{
    document.getElementById('new-name')?.focus();
  }
  
  togglePasswordActualVisibility(){
    this.passwordActualVisible = !this.passwordActualVisible
  }

  togglePasswordNewVisibility(){
    this.passwordNewVisible = !this.passwordNewVisible
  }


  // UPDATE
  updateName(){
    const name = this.controlName.value
    
    this.serviceUser.updateUserName(name).subscribe({
      next : (data : UserUpdateName) => {
          this.userInfo.name = data.name
          this.serviceLocalStorage.setNameOfUserInLocalStorage(data.name)
          this.nameUpdateSuccess = true
          this.messageService.add({severity:'success', summary:'Succès', detail:'Mise à jour réussi'})
        },
      error : (err : string[]) => this.messageService.add({severity : 'error', summary : 'Une erreur s\'est produite', detail : err[0]})
      })
  }

  updatePass() {
    const passwdNew = this.controlPasswdNew.value
    this.userUpdatePass = {passwd : passwdNew, passConfirm : passwdNew}

    this.serviceUser.updateUserPasswd(this.userUpdatePass).subscribe({
      next : (result) => this.passwordUpdateSuccess = result,
      error : (err) => this.serviceHandlerErrors.displayErrors(err, this.errorUpdatePasswd) 
    })
}

  updateActualMail(){
    this.userUpdateMail = new UserUpdateMail(this.controlEmailNew.value)

    this.serviceUser.updateUserMail(this.userUpdateMail).subscribe({
      next : (result) => this.emailUpdateSuccess = true,
      error : (err) => this.serviceHandlerErrors.displayErrors(err, this.errorUpdateMail)
      
    })
  }


  // CHECK
  checkActualPasswd() {
    const passwd = this.controlPasswdActual.value;

    this.serviceUser.checkPasswd(passwd).subscribe(
      {
        next : (data) => this.IsValidActualPasswd = data,
        error : (err : string[]) => this.serviceHandlerErrors.displayErrors(err, this.errorCheckPasswd)
      })
  }



  checkMail() {
    const data = this.controlEmailActual.value
    this.userCheckMail = {mail : data}

    this.serviceUser.checkMail(this.userCheckMail).subscribe({
      next : (result) => this.emailIsValid = result,
      error : (err) => this.serviceHandlerErrors.displayErrors(err, this.errorCheckMail)
    })
   }


}

