import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { UserRepository } from './core/repository/user.repository';
import { AuthenticationService } from './shared/services/authentication-service/authentication.service';



export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    UserRepository,
    AuthenticationService
]

}
