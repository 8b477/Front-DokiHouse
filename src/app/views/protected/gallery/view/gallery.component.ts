import { Component } from '@angular/core';
import { CardBonsaiComponent } from "../components/card-bonsai/view/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { GalleryServiceService } from '../service/gallery-service.service';
import { MOCKUP_DATA } from '../../../../mocks/fakeDataGallery/DATAGALLERY';


@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CardBonsaiComponent]
})
export class GalleryComponent {

 data : BonsaiData[] = []
 fakeData : BonsaiData[]   = MOCKUP_DATA
    currentIndex   : { [key: number]: number } = {}

    constructor(private serviceGallery : GalleryServiceService) {}

   private getData(){
    this.serviceGallery.getAllBonsaiAndPicture().subscribe
        ({
            next : (data : BonsaiData[]) =>
            {
                this.data = data,
                this.data.forEach(bonsai => 
                {
                    this.currentIndex[bonsai.idBonsai] = 0 // On s'assure que l'index commence à zéro pour le slider
                });
            },
            error : (err) => console.error(err) 
        })
    }
 
}
