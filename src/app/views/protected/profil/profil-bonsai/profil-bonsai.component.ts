import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardBonsaiComponent } from "../../gallery/components/card-bonsai/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "./components/create-bonsai/create-bonsai.component";
import { SideBarreComponent } from "../../../../shared/components/side-barre/side-barre.component";
import { Observable } from 'rxjs';
import { BonsaiStateService } from './services/bonsai-state-service.service';
import { AsyncPipe } from '@angular/common';
import { ToastComponent } from "../../../../shared/components/toast/toast.component";
import { UpdateBonsaiComponent } from "./components/update-bonsai/update-bonsai.component";
import { BonsaiPicture } from '../../../../API/models/blogModels/BonsaiPicture';


@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent, CreateBonsaiComponent, SideBarreComponent, AsyncPipe, ToastComponent, UpdateBonsaiComponent]
})
export class ProfilBonsaiComponent implements OnInit{

    // VARIABLE
    dataToDisplay : BonsaiData[] | []         = []
    currentIndex  : { [key: number]: number } = {}

    pathLogoHome   : string = "/assets/img/profil/bonsai/home.svg"
    pathLogoAdd    : string = "/assets/img/profil/bonsai/plus.svg"
    pathLogoUpdate : string = "/assets/img/profil/bonsai/update.svg"
    pathLogoDelete : string = "/assets/img/profil/bonsai/delete.svg"

    altLogoHome   : string = "logo d'une maison"
    altLogoAdd    : string = "logo d'un plus"
    altLogoUpdate : string = "logo update"
    altLogoDelete : string = "logo d'une poubelle"

    titleBonsai       : string          = ""
    descriptionBonsai : string          = ""
    idBonsai          : number          = 0
    imageArray        : BonsaiPicture[] = []

    @Output() redirectHome: EventEmitter<void> = new EventEmitter<void>()
    @Output() addBonsai   : EventEmitter<void> = new EventEmitter<void>()
    @Output() updateBonsai: EventEmitter<void> = new EventEmitter<void>()
    @Output() deleteBonsai: EventEmitter<void> = new EventEmitter<void>()

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


    // PRIVATE METHODS
    private getBonsai(){
       this.service.getOwnBonsaiUser().subscribe((data : BonsaiData[] | []) => {
            this.dataToDisplay = data
       } )
    }


    // PUBLIC METHODS
    public callRedirectToHome(){
        this.routeService.navigateByUrl('/profil/bonsai')
    }

    public callAddBonsaiComponent(){
        this.stateService.setIsCreateBonsai(!this.stateService.getIsCreateBonsai().value)
    }

    public callUpdateBonsaiComponent(){
        this.stateService.setIsUpdateBonsai(!this.stateService.getIsUpdateBonsai().value)
    }

    public callDeleteBonsaiComponent(){
        this.stateService.setIsDeleteBonsai(!this.stateService.getIsDeleteBonsai().value)
        }

    public onCardClicked(event : BonsaiData){ 
        this.titleBonsai = event.bonsaiName
        this.descriptionBonsai = event.bonsaiDescription
        this.idBonsai = event.idBonsai
        if(this.imageArray)
            this.imageArray = event.bonsaiPicture
    }

    public debuggerTools(){
        console.log(this.stateService.getIsUpdateBonsai().value);
    }

}
