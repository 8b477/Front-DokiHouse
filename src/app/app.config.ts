import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { BonsaiRepository } from './API/repository/bonsai.repository';
import { UserRepository } from './API/repository/user.repository';
import { authInterceptor } from './shared/interceptors/auth-interceptor/auth.interceptor';
import { AuthenticationService } from './shared/services/authentication-service/authentication.service';
import { ToastComponent } from './shared/components/toast/toast.component';
import { PictureRepository } from './API/repository/picture.repository';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgModel } from '@angular/forms';



export const appConfig: ApplicationConfig = 
{
  providers: 
  [
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideAnimations(),
    NgModel,
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationService,
    UserRepository,
    BonsaiRepository,
    PictureRepository,
    ToastComponent
  ]
}

