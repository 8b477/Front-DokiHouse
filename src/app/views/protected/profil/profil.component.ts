
import { Component, OnInit, inject } from '@angular/core';
import { UserHttpService } from '../../../shared/services/user-service/user-http.service';
import { UserModel } from '../../../API/models/userModels/UserModel';
import { CardProfilComponent } from "./component/card-profil/card-profil.component";


@Component({
    selector: 'app-profil',
    standalone: true,
    templateUrl: './profil.component.html',
    styleUrl: './profil.component.scss',
    imports: [CardProfilComponent]
})
export class ProfilComponent implements OnInit{

  // VARIABLES
  userModel!               : UserModel
  // Compte
  compteName               : string     = "Compte"                           
  compteDesciption         : string     = "Options du compte"                
  compteImage              : string     = "/assets/img/profil/img-compte.svg"
  // Bonsai
  bonsaiName               : string     = "bonsai"                           
  bonsaiDesciption         : string     = "Options du bonsai"                
  bonsaiImage              : string     = "/assets/img/profil/img-bonsai.svg"
  // Bonsai
  postAndCommentName       : string     = "Post & Comment"                         
  postAndCommentDesciption : string     = "Options du postAndComment"              
  postAndCommentImage      : string     = "/assets/img/profil/img-post-comment.svg"
  // Notification
  notificationName         : string     = "Notifications"                         
  notificationDesciption   : string     = "Options du notification"              
  notificationImage        : string     = "/assets/img/profil/img-notification.svg"

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