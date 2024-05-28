import { TestComponent } from './shared/test/test.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './views/public/home/home.component';
import { BlogComponent } from './views/protected/blog/blog.component';
import { LoginComponent } from './views/public/login/login.component';
import { NotFoundComponent } from './views/public/not-found/not-found.component';
import { SignUpComponent } from './views/public/sign-up/sign-up.component';
import { SupportComponent } from './views/public/support/support.component';
import { GalleryComponent } from './views/protected/gallery/gallery.component';
import { ProfilComponent } from './views/protected/profil/profil-menu/profil.component';
import { ProfilAccountComponent } from './views/protected/profil/profil-account/profil-account.component';
import { ProfilBonsaiComponent } from './views/protected/profil/profil-bonsai/profil-bonsai.component';
import { ProfilPostComponent } from './views/protected/profil/profil-post/profil-post.component';
import { ProfilNotificationComponent } from './views/protected/profil/profil-notification/profil-notification.component';
import { authenticationGuard } from './shared/guard/authentication.guard';



export const routes: Routes = 
[
    {
     title : 'Home',
     path : '',
     component : HomeComponent
    },
    {
     title : 'Login',
     path : 'login',
     loadComponent : () => LoginComponent
    },
    {
     title : 'SignUp',
     path : 'signup',
     loadComponent : () => SignUpComponent
    },
    {
     title : 'Support',
    path : 'support',
     loadComponent : () => SupportComponent
     },
    { 
     title : 'Blog',
     path : 'blog',
      loadComponent : () => BlogComponent 
    },
    {
     title : 'Gallery',
     path : 'gallery',
      loadComponent : () => GalleryComponent
    },
    {
     title : 'Profil',
     path : 'profil',
     canActivate : [authenticationGuard],
     canActivateChild : [authenticationGuard],
     loadComponent : () => ProfilComponent,
     children:[
        { path : 'account', loadComponent : () => ProfilAccountComponent },
        { path : 'bonsai', loadComponent : () => ProfilBonsaiComponent },
        { path : 'post', loadComponent : () => ProfilPostComponent },
        { path : 'notification', loadComponent : () => ProfilNotificationComponent },
      ] 
    },
    {
      title : 'test',
      path : 'test',
      component : TestComponent 
    },

    {
     title : 'NotFound',
     path : '**',
     loadComponent : () => NotFoundComponent
    },


];
