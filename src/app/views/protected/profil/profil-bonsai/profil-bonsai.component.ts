import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../../gallery/components/card-bonsai/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "./components/create-bonsai/create-bonsai.component";

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent, CreateBonsaiComponent]
})
export class ProfilBonsaiComponent implements OnInit{

    // VARIABLE
    dataToDisplay : BonsaiData[] | []         = []
    fakeData      : BonsaiData[]              = MOCKUP_DATA
    currentIndex  : { [key: number]: number } = {}
    createActive  : boolean                   = false

    // INJECTION
    constructor(private service : BonsaiServiceService) {}


    // STATE
    ngOnInit(): void {
        this.getBonsai()
    }

    // PUBLIC METHODS
    public getBonsai(){
       this.service.getOwnBonsaiUser().subscribe((data : BonsaiData[] | []) => this.dataToDisplay = data )
    }

    public createNewBonsai(){
        this.createActive = true;
    }

}
