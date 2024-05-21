import { Component, OnInit, inject } from '@angular/core';
import { UserHttpService } from '../../../../shared/services/user-service/user-http.service';
import { CardProfilComponent } from "./components/card-profil/card-profil.component";
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
  compteName               : string     = "Compte"                           
  compteImage              : string     = "/assets/img/profil/img-compte.svg"
  // Bonsai
  bonsaiName               : string     = "Bonsais"                           
  bonsaiImage              : string     = "/assets/img/profil/img-bonsai.svg"
  // Post
  postAndCommentName       : string     = "Posts"                         
  postAndCommentImage      : string     = "/assets/img/profil/img-post-comment.svg"
  // Notification
  notificationName         : string     = "Notifications"                         
  notificationImage        : string     = "/assets/img/profil/img-notification.svg"


  // INJECTION
  userService = inject(UserHttpService)


  // STATE
  ngOnInit(): void {}


}