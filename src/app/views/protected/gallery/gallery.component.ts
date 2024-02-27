import { Component } from '@angular/core';
import { CardBonsaiComponent, MOCKUP_DATA } from "./components/card-bonsai/card-bonsai.component";

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CardBonsaiComponent]
})
export class GalleryComponent {

data : any[] = MOCKUP_DATA
 
}
