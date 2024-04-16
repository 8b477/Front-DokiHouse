import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';



@Component({
    selector    : 'app-root',
    standalone  : true,
    templateUrl : './app.component.html',
    styleUrl    : './app.component.scss',
    imports     : [CommonModule, RouterOutlet, RouterLink, NavigationComponent]
})
export class AppComponent{ title = 'DokiHouse' }
