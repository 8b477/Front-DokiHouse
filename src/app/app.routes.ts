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
    {'path' : '', title : 'Home', component : HomeComponent},
    {'path' : 'login', title : 'Login', loadComponent : () => LoginComponent},
    {'path' : 'signup', title : 'SignUp', loadComponent : () => SignUpComponent},

// --> SUPPORT
    { 'path' : 'support', title : 'Support', loadComponent : () => SupportComponent},

// --> BLOG
    { 'path' : 'blog', title : 'Blog', loadComponent : () => BlogComponent },

    // ---> GALLERY
    {'path' : 'gallery', title : 'Gallery', loadComponent : () => GalleryComponent},

    // --- PROFIL
    {'path' : 'profil', title : 'Profil', loadComponent : () => ProfilComponent},

// --> ERROR
    {'path' : '**', title : 'NotFound', loadComponent : () => NotFoundComponent},
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