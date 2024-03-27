import { Component } from '@angular/core';
import { CardBonsaiComponent } from "../../../gallery/components/card-bonsai/view/card-bonsai.component";
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../../shared/services/bonsai-service/bonsai-service.service';

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent]
})
export class ProfilBonsaiComponent {


    data : BonsaiData[] | undefined
    fakeData : BonsaiData[] = MOCKUP_DATA
    currentIndex : { [key: number]: number } = {}

    constructor(private service : BonsaiServiceService) {}

//    private getData(){
//     this.serviceGallery.getAllBonsaiAndPicture().subscribe
//         ({
//             next : (data : BonsaiData[]) =>
//             {
//                 this.data = data,
//                 this.data.forEach(bonsai => 
//                 {
//                     this.currentIndex[bonsai.idBonsai] = 0 // On s'assure que l'index commence à zéro pour le slider
//                 });
//             },
//             error : (err) => console.error(err) 
//         })
//     }
public getBonsai(){
    this.data = this.service.getBonsaiUser()
}
}
