import { AuthenticationService } from './../../services/authentication/authentication.service';

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'navigation',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{


  isConnectedUser : boolean = false


  constructor(private authenticationService : AuthenticationService) 
  {}

//subscribe dans le init !! bordell
  ngOnInit(): void {   
      this.authenticationService.connectedUserSubject.subscribe(
      {
        next : (value) => {
          this.isConnectedUser = value
          console.log('valeur de value dans le init ' + value);
        }
      }
    )
  }



  deconnection(){
    localStorage.clear()
    this.isConnectedUser = false
  }


}