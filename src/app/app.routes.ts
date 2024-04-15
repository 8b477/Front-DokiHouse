import { Routes } from '@angular/router';

import { HomeComponent } from './views/public/home/view/home.component';
import { BlogComponent } from './views/protected/blog/view/blog.component';
import { LoginComponent } from './views/public/login/view/login.component';
import { NotFoundComponent } from './views/public/not-found/view/not-found.component';
import { SignUpComponent } from './views/public/sign-up/view/sign-up.component';
import { SupportComponent } from './views/public/support/view/support.component';
import { GalleryComponent } from './views/protected/gallery/view/gallery.component';
import { ProfilComponent } from './views/protected/profil/profil-menu/view/profil.component';
import { ProfilAccountComponent } from './views/protected/profil/profil-account/view/profil-account.component';
import { ProfilBonsaiComponent } from './views/protected/profil/profil-bonsai/view/profil-bonsai.component';
import { ProfilPostComponent } from './views/protected/profil/profil-post/view/profil-post.component';
import { ProfilNotificationComponent } from './views/protected/profil/profil-notification/view/profil-notification.component';
import { authenticationGuard } from './shared/guard/authentication.guard';



export const routes: Routes = 
[
    {
     title : 'Home',
     'path' : '',
     component : HomeComponent
    },
    {
     title : 'Login',
    'path' : 'login',
     loadComponent : () => LoginComponent
    },
    {
     title : 'SignUp',
     'path' : 'signup',
     loadComponent : () => SignUpComponent
    },
    {
     title : 'Support',
     'path' : 'support',
     loadComponent : () => SupportComponent
     },
    { 
     title : 'Blog',
    'path' : 'blog',
      loadComponent : () => BlogComponent 
    },
    {
     title : 'Gallery',
    'path' : 'gallery',
      loadComponent : () => GalleryComponent
    },
    {
     title : 'Profil',
     'path' : 'profil',
     canActivate : [authenticationGuard],
     loadComponent : () => ProfilComponent
    },

    { path: 'profil', children:[
      { path : 'account', loadComponent : () => ProfilAccountComponent },
      { path : 'bonsai', loadComponent : () => ProfilBonsaiComponent },
      { path : 'post', loadComponent : () => ProfilPostComponent },
      { path : 'notification', loadComponent : () => ProfilNotificationComponent },
    ] },



    {
     title : 'NotFound',
     'path' : '**',
     loadComponent : () => NotFoundComponent
    },
];
