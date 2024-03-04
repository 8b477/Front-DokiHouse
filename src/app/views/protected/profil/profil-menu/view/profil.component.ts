import { Component, OnInit, inject } from '@angular/core';
import { UserHttpService } from '../../../../../shared/services/user-service/user-http.service';
import { CardProfilComponent } from "../component/card-profil/view/card-profil.component";
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-profil',
    standalone: true,
    templateUrl: './profil.component.html',
    styleUrl: './profil.component.scss',
    imports: [CardProfilComponent, RouterLink]
})
export class ProfilComponent implements OnInit{

  // VARIABLES
  // Compte
  compteName               : string     = "Ton compte"                           
  compteDesciption         : string     = "Personnalise ton compte"                
  compteImage              : string     = "/assets/img/profil/img-compte.svg"
  // Bonsai
  bonsaiName               : string     = "Tes Bonsai"                           
  bonsaiDesciption         : string     = "Crée-Modifie-Partage"                
  bonsaiImage              : string     = "/assets/img/profil/img-bonsai.svg"
  // Post
  postAndCommentName       : string     = "Tes Posts"                         
  postAndCommentDesciption : string     = "Consulte-Crée"              
  postAndCommentImage      : string     = "/assets/img/profil/img-post-comment.svg"
  // Notification
  notificationName         : string     = "Notifications"                         
  notificationDesciption   : string     = "Retrouve ici toute tes notifications"              
  notificationImage        : string     = "/assets/img/profil/img-notification.svg"


  // INJECTION
  userService = inject(UserHttpService)


  // STATE
  ngOnInit(): void {}


}