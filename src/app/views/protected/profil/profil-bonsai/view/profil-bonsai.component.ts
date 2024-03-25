import { Component } from '@angular/core';
import { CardBonsaiComponent } from "../../../gallery/components/card-bonsai/view/card-bonsai.component";

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent]
})
export class ProfilBonsaiComponent {

}
