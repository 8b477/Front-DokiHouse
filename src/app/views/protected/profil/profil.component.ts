
import { Component, OnInit, inject } from '@angular/core';
import { UserHttpService } from '../../../shared/services/user-service/user-http.service';
import { UserModel } from '../../../API/models/userModels/UserModel';


@Component({
  selector    : 'app-profil',
  standalone  : true,
  imports     : [],
  templateUrl : './profil.component.html',
  styleUrl    : './profil.component.scss'
})
export class ProfilComponent implements OnInit{

  // VARIABLES
  userModel! : UserModel

  // INJECTION
  userService = inject(UserHttpService)

  // STATE
  ngOnInit(): void {
    this.userService.getProfil().subscribe({
      next : (data) => this.userModel = data,
      error : (error) => console.error(error)
    })
  }


}