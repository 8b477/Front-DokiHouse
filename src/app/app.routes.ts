import { SignUpComponent } from './pages/general/sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { LoginComponent } from './pages/general/login/login.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = 
[
    {'path' : '', component : HomeComponent},
    {'path' : 'login', component : LoginComponent},
    {'path' : 'signup', component : SignUpComponent},
    {'path' : 'about', component : AboutComponent},
    {'path' : 'contact', component : ContactComponent},
    {'path' : '**', component : NotFoundComponent},
];
