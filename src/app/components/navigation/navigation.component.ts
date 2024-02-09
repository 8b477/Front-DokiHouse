import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  // SERVICES
  authenticationService : AuthenticationService = inject(AuthenticationService)

  // VARIABLE  
  isConnectedUser : boolean = false


  // PRIVATE METHODS
  private subScribeOnStatusUser(){
    this.authenticationService.connectedUserSubject.subscribe(
    {
      next : (value) => { this.isConnectedUser = value }
    })
  }


 // STATE OF COMPONENT
  ngOnInit(): void {   
    this.subScribeOnStatusUser()
  }

  // PUBLIC METHODS
  deconnection(){
    localStorage.clear()
    this.isConnectedUser = false
  }


}