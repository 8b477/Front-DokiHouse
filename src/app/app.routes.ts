import { Routes } from '@angular/router';

import { SignUpComponent } from './pages/general/sign-up/sign-up.component';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { BlogComponent } from './pages/application/blog/blog.component';
import { SupportComponent } from './pages/general/support/support.component';


export const routes: Routes = 
[
    {'path' : '', component : HomeComponent},
    {'path' : 'login', component : LoginComponent},
    {'path' : 'signup', component : SignUpComponent},

// --> SUPPORT
    { 'path' : 'support', component : SupportComponent},

// --> BLOG
    { 'path' : 'blog', component : BlogComponent },


// --> ERROR
    {'path' : '**', component : NotFoundComponent},
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