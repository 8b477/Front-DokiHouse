import { Routes } from '@angular/router';

import { BlogComponent } from './views/protected/blog/blog.component';
import { GalleryComponent } from './views/protected/gallery/gallery.component';
import { ProfilComponent } from './views/protected/profil/profil.component';
import { HomeComponent } from './views/public/home/home.component';
import { LoginComponent } from './views/public/login/login.component';
import { NotFoundComponent } from './views/public/not-found/not-found.component';
import { SignUpComponent } from './views/public/sign-up/sign-up.component';
import { SupportComponent } from './views/public/support/support.component';


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
