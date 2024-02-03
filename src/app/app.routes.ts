import { Routes } from '@angular/router';

import { SignUpComponent } from './pages/general/sign-up/sign-up.component';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ExperienceComponent } from './pages/general/about/experience/experience.component';
import { SkillComponent } from './pages/general/about/skill/skill.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { BlogComponent } from './pages/application/blog/blog.component';


export const routes: Routes = 
[
    {'path' : '', component : HomeComponent},
    {'path' : 'login', component : LoginComponent},
    {'path' : 'signup', component : SignUpComponent},

// --> ABOUT + CHILD ->SUPPORT
    { 'path' : 'about', component : AboutComponent},

    { 'path' : 'about', children : [
            { path : 'experience', component : ExperienceComponent },
            { path : 'skill', component : SkillComponent }
        ]
    },
    
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