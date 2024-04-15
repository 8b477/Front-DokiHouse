import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service/authentication.service';



export const authenticationGuard: CanActivateFn = (route, state) => {

const routage = inject(Router)

  if(!inject(AuthenticationService).isConnectedTest){
    routage.navigateByUrl('/login');
    return false;
  }
  return true;
}


// add in futur a setting of subject for information of user to why is redirect of login page