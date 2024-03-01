import { Routes } from '@angular/router';

import { BlogComponent } from './views/protected/blog/view/blog.component';
import { ProfilComponent } from './views/protected/profil/view/profil.component';
import { HomeComponent } from './views/public/home/view/home.component';
import { LoginComponent } from './views/public/login/view/login.component';
import { NotFoundComponent } from './views/public/not-found/view/not-found.component';
import { SignUpComponent } from './views/public/sign-up/view/sign-up.component';
import { SupportComponent } from './views/public/support/view/support.component';
import { GalleryComponent } from './views/protected/gallery/view/gallery.component';


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
     loadComponent : () => ProfilComponent
    },
    {
     title : 'NotFound',
     'path' : '**',
     loadComponent : () => NotFoundComponent
    },
];
