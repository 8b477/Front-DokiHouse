import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../../gallery/components/card-bonsai/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "./components/create-bonsai/create-bonsai.component";
import { SideBarreComponent } from "../../../../shared/components/side-barre/side-barre.component";
import { Observable } from 'rxjs';
import { BonsaiStateService } from './services/bonsai-state-service.service';
import { AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent, CreateBonsaiComponent, SideBarreComponent, AsyncPipe]
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

    isCreateBonsai$ : Observable<boolean>
    isUpdateBonsai$ : Observable<boolean>
    isDeleteBonsai$ : Observable<boolean>

    // INJECTION
    constructor
    (
        private service      : BonsaiServiceService,
        private stateService : BonsaiStateService,
        private routeService : Router
    ) 
    {
        this.isCreateBonsai$ = this.stateService.getIsCreateBonsai()
        this.isUpdateBonsai$ = this.stateService.getIsUpdateBonsai()
        this.isDeleteBonsai$ = this.stateService.getIsDeleteBonsai()
    }


    // STATE
    ngOnInit(): void {
        this.getBonsai()
    }

    // PUBLIC METHODS
    public getBonsai(){
       this.service.getOwnBonsaiUser().subscribe((data : BonsaiData[] | []) => this.dataToDisplay = data )
    }

    public callRedirectToHome(){
        this.routeService.navigateByUrl('/profil')
    }

    public callAddBonsaiComponent(){
        this.stateService.setIsCreateBonsai(!this.stateService.getIsCreateBonsai().value);
    }

    public callUpdateBonsaiComponent(){
        this.stateService.setIsUpdateBonsai(!this.stateService.getIsUpdateBonsai().value);
    }

    public callDeleteBonsaiComponent(){
        this.stateService.setIsDeleteBonsai(!this.stateService.getIsDeleteBonsai().value);
    }


}
