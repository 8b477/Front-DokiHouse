import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
debugger;
return true;
  //return inject(AuthenticationService).isConnectedTest;
};

