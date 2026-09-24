import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { BonsaiRepository } from './API/Repository/bonsai.repository';
import { PictureRepository } from './API/Repository/picture.repository';
import { UserRepository } from './API/Repository/user.repository';
import { routes } from './app.routes';
import { ToastComponent } from './shared/components/toast/toast.component';
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
    provideAnimations(),
    NgModel,
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationService,
    UserRepository,
    BonsaiRepository,
    PictureRepository,
    ToastComponent,
    MessageService
  ]
}

