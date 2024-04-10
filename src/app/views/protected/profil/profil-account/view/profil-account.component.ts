import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../../shared/components/form-error-info/view/form-error-info.component";
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { UpdatePasswd } from '../../../../../API/models/userModels/userUpdatePasswd/UserUpdatePasswd';


@Component({
    selector: 'app-profil-account',
    standalone: true,
    templateUrl: './profil-account.component.html',
    styleUrl: './profil-account.component.scss',
    imports: [ReactiveFormsModule, FormErrorInfoComponent, NgClass]
})
export class ProfilAccountComponent implements OnInit {

  //VARIABLES
  name : string = 'mark';
  email : string = 'email@test.be';
  role : string = 'larbin';
  avatar : string = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.name}`;
  passwd : string = '****';
  http : HttpClient = inject(HttpClient)

  IsValidActualPasswd : boolean = false

  controlName! : FormControl
  controlPasswdActual! : FormControl
  controlPasswdNew! : FormControl
  controlEmailActual! : FormControl
  controlEmailNew! : FormControl

  passwordActualVisible : boolean = false
  passwordNewVisible : boolean = false

  emailIsValid : boolean = false;

  userUpdatePass: UpdatePasswd | undefined 
  ngOnInit(): void {
    this.controlName = new FormControl('', [Validators.minLength(3), Validators.required])
    this.controlPasswdActual = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlPasswdNew = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
    this.controlEmailActual = new FormControl('', [Validators.email, Validators.required])
    this.controlEmailNew = new FormControl('', [Validators.email, Validators.required])

    console.log(this.emailIsValid)
  }


  activeFocusInput(): void{
    document.getElementById('change-name')?.focus();
  }
  
  
  updateName(){
  const name = this.controlName.value
    this.http.put('https://localhost:7043/api/User/Name', {name}).subscribe()
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

