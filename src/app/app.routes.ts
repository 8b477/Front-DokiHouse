import { SignUpComponent } from './pages/general/sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';

import { AboutComponent } from './pages/general/about/about.component';
import { ExperienceComponent } from './pages/general/about/experience/experience.component';
import { SkillComponent } from './pages/general/about/skill/skill.component';

import { ContactComponent } from './pages/general/contact/contact.component';
import { MailingComponent } from './pages/general/contact/mailing/mailing.component';
import { MappingComponent } from './pages/general/contact/mapping/mapping.component';

import { NotFoundComponent } from './pages/general/not-found/not-found.component';


export const routes: Routes = 
[
    {'path' : '', component : HomeComponent},
    {'path' : 'login', component : LoginComponent},
    {'path' : 'signup', component : SignUpComponent},

// --> ABOUT + CHILD
    { 'path' : 'about', component : AboutComponent},

    { 'path' : 'about', children : [
            { path : 'experience', component : ExperienceComponent },
            { path : 'skill', component : SkillComponent }
        ]
    },
    
    
// --> CONTACT + CHILD
    { 'path' : 'contact', component : ContactComponent },
    { 'path' : 'contact', children : [
            { path : 'mailing', component : MailingComponent},
            { path : 'mapping', component : MappingComponent}
        ]
    },


// --> ERROR
    {'path' : '**', component : NotFoundComponent},
];
