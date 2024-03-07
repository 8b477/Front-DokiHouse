import { Component } from '@angular/core';


@Component({
  selector: 'app-profil-account',
  standalone: true,
  imports: [],
  templateUrl: './profil-account.component.html',
  styleUrl: './profil-account.component.scss'
})
export class ProfilAccountComponent {

  //VARIABLES
  name : string = 'mark';
  email : string = 'email@test.be';
  role : string = 'larbin';
  avatar : string = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.name}`;
  passwd : string = '****';


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


}

