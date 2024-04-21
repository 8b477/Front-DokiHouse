import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../../gallery/components/card-bonsai/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "./components/create-bonsai/create-bonsai.component";
import { SideBarreComponent } from "../../../../shared/components/side-barre/side-barre.component";

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent, CreateBonsaiComponent, SideBarreComponent]
})
export class ProfilBonsaiComponent implements OnInit{

    // VARIABLE
    dataToDisplay : BonsaiData[] | []         = []
    fakeData      : BonsaiData[]              = MOCKUP_DATA
    currentIndex  : { [key: number]: number } = {}

    pathLogoHome   : string = "/assets/img/profil/bonsai/home.svg"
    pathLogoAdd    : string = "/assets/img/profil/bonsai/plus.svg"
    pathLogoUpdate : string = "/assets/img/profil/bonsai/update.svg"
    pathLogoDelete : string = "/assets/img/profil/bonsai/delete.svg"


    altLogoHome   : string = "logo d'une maison"
    altLogoAdd    : string = "logo d'un plus"
    altLogoUpdate : string = "logo update"
    altLogoDelete : string = "logo d'une poubelle"


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

    public callRedirectToHome(){
        console.log('Welcome back home');
    }

    public callAddBonsaiComponent(){
        console.log('component add bonsai');
    }

    public callUpdateBonsaiComponent(){
        console.log('component update bonsai');
    }

    public callDeleteBonsaiComponent(){
        console.log('component delete bonsai');
    }



}
