import { Routes } from '@angular/router';

import { BlogComponent } from './pages/protected/blog/view/blog.component';
import { GalleryComponent } from './pages/protected/gallery/gallery.component';
import { ProfilComponent } from './pages/protected/profil/profil.component';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { SignUpComponent } from './pages/public/sign-up/sign-up.component';
import { SupportComponent } from './pages/public/support/support.component';




export const routes: Routes = 
[
    {'path' : '', component : HomeComponent},
    {'path' : 'login', loadComponent : () => LoginComponent},
    {'path' : 'signup', loadComponent : () => SignUpComponent},

// --> SUPPORT
    { 'path' : 'support', loadComponent : () => SupportComponent},

// --> BLOG
    { 'path' : 'blog', loadComponent : () => BlogComponent },
// ADD ---> https://apprendre.bonjour-angular.com/tips/guard-routes-with-can-match/


    // ---> GALLERY
    {'path' : 'gallery', loadComponent : () => GalleryComponent},

    // --- PROFIL
    {'path' : 'profil', loadComponent : () => ProfilComponent},

// --> ERROR
    {'path' : '**', loadComponent : () => NotFoundComponent},
];


/*
        ----> ROUTE PROFIL + CHILDREN

    { 'path' : 'profil', component : AboutComponent},

    { 'path' : 'profil', children : [
            { path : 'user', component :  },
            { path : 'bonsai', component :  }
        ]
    },
*/