import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../../shared/components/form-error-info/view/form-error-info.component";
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';


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
controlEmail! : FormControl

passwordVisible : boolean = false

ngOnInit(): void {
  this.controlName = new FormControl('', [Validators.minLength(3), Validators.required])
  this.controlPasswdActual = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
  this.controlPasswdNew = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
  this.controlEmail = new FormControl('', [Validators.email, Validators.required])
}


 activeFocusInput(): void{
  document.getElementById('change-name')?.focus();
 }
 


  sendChangement()
  {
        const toastLiveExample  = document.getElementById('toast-wrapper')

        if(toastLiveExample !== null)
        {
          toastLiveExample.style.display = 'block'
          toastLiveExample.style.opacity = '1'
        }
  }

closeToast(){
  const toastLiveExample  = document.getElementById('toast-wrapper')

        if(toastLiveExample !== null)
        {
          toastLiveExample.style.opacity = '0'
          setTimeout(()=>{
            toastLiveExample.style.display = 'none'
          },500)

        }
}



updateName(){
const name = this.controlName.value
  this.http.put('https://localhost:7043/api/User/Name', {name}).subscribe(({
    next : (responce) => console.log(responce)
  }))
}


checkActualPasswd() {
  const passwd = this.controlPasswdActual.value;

  this.http.post<boolean>('https://localhost:7043/api/User/CheckPasswd', { passwd }
  ).subscribe({
    next: (data) => 
    {
      this.IsValidActualPasswd = data
      console.log(data);
    },
    error: (err) =>{
    console.log("***********");
     console.error(err)
    console.log("***********");
    }
  });
}


updatePass() {
  const passwdNew = this.controlPasswdNew.value;

  this.http.put('https://localhost:7043/api/User/Pass', { passwdNew }
  ).subscribe({
    next: (responce) => console.log(responce),
    error: (err) => console.error(err)
  });
}



debug(){
console.log(this.controlName.value)
}


togglePasswordVisibility(){
  this.passwordVisible = !this.passwordVisible
}


}

