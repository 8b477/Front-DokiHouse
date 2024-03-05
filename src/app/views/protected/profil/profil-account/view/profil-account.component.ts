import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-profil-account',
  standalone: true,
  imports: [],
  templateUrl: './profil-account.component.html',
  styleUrl: './profil-account.component.scss'
})
export class ProfilAccountComponent {

  //VARIABLES
  name : string = 'mark'
  email : string = 'email@test.be'
  role : string = 'larbin'
  avatar : string = `https://api.dicebear.com/7.x/adventurer/svg?seed=${this.name}`



 
}
