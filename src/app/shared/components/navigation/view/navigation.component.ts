import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication-service/authentication.service';


@Component({
  selector    : 'app-navigation',
  standalone  : true,
  imports     : [RouterLink],
  templateUrl : './navigation.component.html',
  styleUrl    : './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  // SERVICES
  authenticationService : AuthenticationService = inject(AuthenticationService)
  route                 : Router                = inject(Router)

  // VARIABLE  
  isConnectedUser : boolean = false


  // PRIVATE METHODS
  private subScribeOnStatusUser(){
    this.authenticationService.connectedUserSubject.subscribe(
      (value : boolean) => { this.isConnectedUser = value }
    )
  }


  // STATE OF COMPONENT
  ngOnInit(): void {   
    this.subScribeOnStatusUser()
    console.log(this.isConnectedUser);
  }


  // PUBLIC METHODS
  deconnection(){
    localStorage.clear()
    this.isConnectedUser = false
    this.authenticationService.emitValueSubjectUser()
    this.route.navigate(['/'])
  }


}