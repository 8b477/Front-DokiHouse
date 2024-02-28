import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { BonsaiRepository } from './API/Repository/bonsai.repository';
import { UserRepository } from './API/Repository/user.repository';
import { authInterceptor } from './shared/interceptors/auth-interceptor/auth.interceptor';
import { AuthenticationService } from './shared/services/authentication-service/authentication.service';



export const appConfig: ApplicationConfig = 
{
  providers: 
  [
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    AuthenticationService,
    UserRepository,
    BonsaiRepository
  ]
}

