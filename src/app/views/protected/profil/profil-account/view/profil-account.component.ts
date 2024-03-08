import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorInfoComponent } from "../../../../../shared/components/form-error-info/view/form-error-info.component";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-profil-account',
    standalone: true,
    templateUrl: './profil-account.component.html',
    styleUrl: './profil-account.component.scss',
    imports: [ReactiveFormsModule, FormErrorInfoComponent]
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
controlPasswd! : FormControl
controlEmail! : FormControl
ngOnInit(): void {
  this.controlName = new FormControl('', [Validators.minLength(3), Validators.required])
  this.controlPasswd = new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'), Validators.required])
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


// IN PROGRESS
checkActualPasswd(){
  this.http.post()
}


// updatePass(){
// const passwd = this.controlPasswd.value
//   this.http.put('https://localhost:7043/api/User/Pass', {passwd}).subscribe(({
//     next : (responce) => console.log(responce)
//   }))
// }

debug(){
console.log(this.controlName.value)
}


}

