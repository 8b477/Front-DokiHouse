import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../../../gallery/components/card-bonsai/view/card-bonsai.component";
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "../component/create-bonsai/create-bonsai.component";

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent, CreateBonsaiComponent]
})
export class ProfilBonsaiComponent implements OnInit{


    dataToDisplay : BonsaiData[] | [] = []
    fakeData : BonsaiData[] = MOCKUP_DATA
    currentIndex : { [key: number]: number } = {}
    createActive : boolean = false

    constructor(private service : BonsaiServiceService) {}
    ngOnInit(): void {
        this.getBonsai()
    }


    public getBonsai(){
       this.service.getOwnBonsaiUser().subscribe((
        {
            next : (data : BonsaiData[] | []) =>{ this.dataToDisplay = data; console.log(JSON.stringify(data))}
        }
       ))
    }

}
