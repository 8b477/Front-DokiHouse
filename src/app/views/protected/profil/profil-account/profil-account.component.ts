import { UserConnectedModel } from '../../../../API/models/userModels/userConnectedModel/UserConnectedModel';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../shared/components/form-error-info/form-error-info.component";
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { UpdatePasswd } from '../../../../API/models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { UserUpdateName } from '../../../../API/models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { LocalStorageService } from '../../../../shared/services/local-storage-service/local-storage.service';
import { UserCheckMail } from '../../../../API/models/userModels/userCheckMailModel/UserCheckMail';
import { UserUpdateMail } from '../../../../API/models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail';


@Component({
    selector: 'app-profil-account',
    standalone: true,
    templateUrl: './profil-account.component.html',
    styleUrl: './profil-account.component.scss',
    imports: [ReactiveFormsModule, FormErrorInfoComponent, NgClass]
})
export class ProfilAccountComponent implements OnInit {


  //VARIABLES
  userUpdateMail ! : UserUpdateMail
  userCheckMail  ! : UserCheckMail
  userUpdatePass ! : UpdatePasswd
  userInfo       ! : UserConnectedModel


  avatar                : string  = ""
  passwordActualVisible : boolean = false
  passwordNewVisible    : boolean = false
  emailIsValid          : boolean = false
  IsValidActualPasswd   : boolean = false


  //SERVICES
  http    : HttpClient          = inject(HttpClient)
  service : LocalStorageService = inject(LocalStorageService)


  //CONTROL BIND
  controlName         ! : FormControl
  controlPasswdActual ! : FormControl
  controlPasswdNew    ! : FormControl
  controlEmailActual  ! : FormControl
  controlEmailNew     ! : FormControl


  ngOnInit(): void {
  //Validators
    this.controlName         = new FormControl('', [Validators.minLength(3), Validators.required])
    this.controlPasswdActual = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlPasswdNew    = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlEmailActual  = new FormControl('', [Validators.email, Validators.required])
    this.controlEmailNew     = new FormControl('', [Validators.email, Validators.required])

  //Recover info in LocalStorage
    const idOfUserInLocalStorage   = this.service.getIdOfUserInLocalStorage()
    const nameOfUserInLocalStorage = this.service.getNameOfUserInLocalStorage()
    const roleOfUserInLocalStorage = this.service.getRoleOfUserInLocalStorage()

  //Build User with Infos in LocalStorage
    this.userInfo = new UserConnectedModel(idOfUserInLocalStorage,nameOfUserInLocalStorage,roleOfUserInLocalStorage);

  //Build avatar with API DICEBEAR
    this.avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.userInfo.name}`;
  }


  activeFocusInput(): void{
    document.getElementById('change-name')?.focus();
  }
  
  
  updateName(){
  const name = this.controlName.value
    this.http.put<UserUpdateName>('https://localhost:7043/api/User/Name', {name}).subscribe(({
      next : (data : UserUpdateName) => this.userInfo.name = data.name
    }))
  }


  checkActualPasswd() {
    const passwd = this.controlPasswdActual.value;

    this.http.post<boolean>('https://localhost:7043/api/User/CheckPasswd', { passwd }
    ).subscribe({
      next: (data) => 
        this.IsValidActualPasswd = data
    });
  }

  updatePass() {
    const passwdNew = this.controlPasswdNew.value;
    this.userUpdatePass = {passwd : passwdNew, passConfirm : passwdNew}

    this.http.put('https://localhost:7043/api/User/Pass', this.userUpdatePass).subscribe()
  }


  checkMail() {
    const data = this.controlEmailActual.value

    this.userCheckMail = {value : data}

    this.http.post<boolean>('https://localhost:7043/api/User/CheckMail', this.userCheckMail)
      .subscribe(result => {
        this.emailIsValid = result;
      });
      console.log(this.userCheckMail);
   }


  updateActualMail(){
    this.userUpdateMail = new UserUpdateMail(this.controlEmailNew.value)
    this.http.put<UserUpdateMail>('https://localhost:7043/api/User/Mail', this.userUpdateMail).subscribe(({
      next : (data : UserUpdateMail) => console.log(data)
    }))
  }


  togglePasswordActualVisibility(){
    this.passwordActualVisible = !this.passwordActualVisible
  }

  togglePasswordNewVisibility(){
    this.passwordNewVisible = !this.passwordNewVisible
  }

}

