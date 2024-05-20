import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector    : 'app-root',
    standalone  : true,
    templateUrl : './app.component.html',
    styleUrl    : './app.component.scss',
    imports     : [CommonModule, RouterOutlet, RouterLink, NavigationComponent]
})
export class AppComponent implements OnInit{

    title = 'DokiHouse'


    constructor(private primeNG : PrimeNGConfig){}

    public ngOnInit(): void {
        this.primeNG.ripple = true;
    }

}
