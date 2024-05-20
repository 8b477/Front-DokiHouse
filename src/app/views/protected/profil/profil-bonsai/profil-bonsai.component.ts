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
import { HandlerErrorService } from '../../../../shared/services/handler-error-service/handler-error.service';
import { HttpResponse } from '@angular/common/http';


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
    errorBonsai       : string[]        = []

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
        private stateService : BonsaiStateService  ,
        private errorService : HandlerErrorService ,
        private bonsaiService: BonsaiServiceService,
        private routeService : Router              ,
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

        if(this.stateService.getIsCreateBonsai().value){
            this.stateService.setIsUpdateBonsai(false)
            this.stateService.setIsDeleteBonsai(false)
        }
    }

    public callUpdateBonsaiComponent(){
        this.stateService.setIsUpdateBonsai(!this.stateService.getIsUpdateBonsai().value)

        if(this.stateService.getIsUpdateBonsai().value){
            this.stateService.setIsCreateBonsai(false)
            this.stateService.setIsDeleteBonsai(false)
        }
    }

    public callDeleteBonsaiComponent(){
        this.stateService.setIsDeleteBonsai(!this.stateService.getIsDeleteBonsai().value)

        if(this.stateService.getIsDeleteBonsai().value){
            this.stateService.setIsCreateBonsai(false)
            this.stateService.setIsUpdateBonsai(false)
        }
    }

    public onCardClicked(event : BonsaiData){ 
        this.titleBonsai = event.bonsaiName
        this.descriptionBonsai = event.bonsaiDescription
        this.idBonsai = event.idBonsai
        if(this.imageArray)
            this.imageArray = event.bonsaiPicture

        if (this.stateService.getIsDeleteBonsai().value) {
        //Remove to display but not call DB
            const indexToDelete = this.dataToDisplay.findIndex(item => item.idBonsai === this.idBonsai);
            if (indexToDelete !== -1) {
                this.dataToDisplay.splice(indexToDelete, 1);
            }      
        }
        //---------------------------------
        //If STATE OF DELETEBONSAI IS TRUE
        if(this.stateService.getIsDeleteBonsai().value){
            this.bonsaiService.deleteBonsai(this.idBonsai).subscribe(
                (err) => this.errorService.displayErrors(err, this.errorBonsai)
            )
        } 
        console.log(event)
    }

    public debuggerTools(){
        console.log(this.stateService.getIsUpdateBonsai().value);
    }

}
