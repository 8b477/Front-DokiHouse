import { Component } from '@angular/core';

@Component({
  selector: 'app-profil-account',
  standalone: true,
  imports: [],
  templateUrl: './profil-account.component.html',
  styleUrl: './profil-account.component.scss'
})
export class ProfilAccountComponent {

  //VARIABLES
  name : string = 'Nom de test'
  email : string = 'email@test.be'
  role : string = 'larbin'

}
