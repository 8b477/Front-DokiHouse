import { Component } from '@angular/core';
import { CardBonsaiComponent } from "../components/card-bonsai/view/card-bonsai.component";


@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CardBonsaiComponent]
})
export class GalleryComponent {


 
}
