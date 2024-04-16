import { UserConnectedModel } from '../../../../API/models/userModels/userConnectedModel/UserConnectedModel';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../shared/components/form-error-info/form-error-info.component";
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { UpdatePasswd } from '../../../../API/models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd';
import { UserUpdateName } from '../../../../API/models/userModels/userUpdateModels/userUpdateName/UserUpdateName';
import { LocalStorageService } from '../../../../shared/services/local-storage-service/local-storage.service';


@Component({
    selector: 'app-profil-account',
    standalone: true,
    templateUrl: './profil-account.component.html',
    styleUrl: './profil-account.component.scss',
    imports: [ReactiveFormsModule, FormErrorInfoComponent, NgClass]
})
export class ProfilAccountComponent implements OnInit {


  //VARIABLES
  userUpdatePass!: UpdatePasswd
  userInfo! : UserConnectedModel
  name : string = this.userInfo.name
  role : string = this.userInfo.role;
  avatar : string = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.name}`;

  passwordActualVisible : boolean = false
  passwordNewVisible : boolean = false
  emailIsValid : boolean = false;
  IsValidActualPasswd : boolean = false;
  //SERVICES
  http : HttpClient = inject(HttpClient)
  service : LocalStorageService = inject(LocalStorageService);



  //CONTROL BIND
  controlName! : FormControl
  controlPasswdActual! : FormControl
  controlPasswdNew! : FormControl
  controlEmailActual! : FormControl
  controlEmailNew! : FormControl




  ngOnInit(): void {
    this.controlName = new FormControl('', [Validators.minLength(3), Validators.required])
    this.controlPasswdActual = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlPasswdNew = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlEmailActual = new FormControl('', [Validators.email, Validators.required])
    this.controlEmailNew = new FormControl('', [Validators.email, Validators.required])

//Recover info in LocalStorage
    const idOfUserInLocalStorage = this.service.getIdOfUserInLocalStorage();
    const nameOfUserInLocalStorage = this.service.getNameOfUserInLocalStorage();
    const roleOfUserInLocalStorage = this.service.getRoleOfUserInLocalStorage();

//Build User with Infos in LocalStorage
    this.userInfo = new UserConnectedModel(idOfUserInLocalStorage,nameOfUserInLocalStorage,roleOfUserInLocalStorage);

  }


  activeFocusInput(): void{
    document.getElementById('change-name')?.focus();
  }
  
  
  updateName(){
  const name = this.controlName.value
    this.http.put<UserUpdateName>('https://localhost:7043/api/User/Name', {name}).subscribe(({
      next : (data : UserUpdateName) => this.name = data.name
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
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.http.post<boolean>('https://localhost:7043/api/User/CheckMail', JSON.stringify(data), options)
      .subscribe(result => {
        this.emailIsValid = result;
      });
  }


  togglePasswordActualVisibility(){
    this.passwordActualVisible = !this.passwordActualVisible
  }

  togglePasswordNewVisibility(){
    this.passwordNewVisible = !this.passwordNewVisible
  }

}

