import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  // SERVICES
  authenticationService : AuthenticationService = inject(AuthenticationService)


  // VARIABLE  
  isConnectedUser : boolean | undefined


  // PRIVATE METHODS
  private subScribeOnStatusUser(){
    this.authenticationService.connectedUserSubject.subscribe(
      (value) => { this.isConnectedUser = value }
    )
  }


  // STATE OF COMPONENT
  ngOnInit(): void {   
    this.subScribeOnStatusUser()
  }


  // PUBLIC METHODS
  deconnection(){
    localStorage.clear()
    this.isConnectedUser = false
    this.authenticationService.emitValueSubjectUser()
  }


}