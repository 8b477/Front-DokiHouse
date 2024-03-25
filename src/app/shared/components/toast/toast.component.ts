import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {


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
