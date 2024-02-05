import { Routes } from '@angular/router';

import { SignUpComponent } from './pages/general/sign-up/sign-up.component';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { BlogComponent } from './pages/application/blog/blog.component';
import { SupportComponent } from './pages/general/support/support.component';
import { BonsaiComponent } from './pages/application/bonsai/bonsai.component';
import { ProfilComponent } from './pages/application/profil/profil.component';


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


    // ---> BONSAI
    {'path' : 'bonsai', loadComponent : () => BonsaiComponent},

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