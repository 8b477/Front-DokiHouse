import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardBonsaiComponent } from "../../gallery/components/card-bonsai/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';
import { CreateBonsaiComponent } from "./components/create-bonsai/create-bonsai.component";
import { SideBarreComponent } from "../../../../shared/components/side-barre/side-barre.component";
import { Observable, Subject } from 'rxjs';
import { BonsaiStateService } from './services/bonsai-state-service.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { UpdateBonsaiComponent } from "./components/update-bonsai/update-bonsai.component";
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteHoverDirective } from './directives/delete-hover.directive';
import {ToastModule} from 'primeng/toast';


@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [
                AsyncPipe,
                DatePipe,
                CardBonsaiComponent,
                CreateBonsaiComponent,
                SideBarreComponent,
                UpdateBonsaiComponent,
                DialogModule,
                CardModule,
                DeleteHoverDirective,
                ToastModule,
            ]
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
    img               : string          = ""
    defaultPath       : string          = "/assets/img/bonsai-1.png"

    confirmedDelete : boolean = false

    isCreateBonsai$       : Observable<boolean>
    isUpdateBonsai$       : Observable<boolean>
    isDeleteBonsai$       : Observable<boolean>
    isDeleteConfirmation$ : Observable<boolean>


    // INJECTION
    constructor
    (
        private bonsaiService  : BonsaiServiceService,
        private stateService   : BonsaiStateService  ,
        private messageService : MessageService      ,
    ) 
    {
        this.isCreateBonsai$ = this.stateService.getIsCreateBonsai()
        this.isUpdateBonsai$ = this.stateService.getIsUpdateBonsai()
        this.isDeleteBonsai$ = this.stateService.getIsDeleteBonsai()
        this.isDeleteConfirmation$ = this.stateService.getIsDeleteConfirmation()
    }


    // STATE
    ngOnInit(): void {
        this.getBonsai()
    }


    // PRIVATE METHODS
    private getBonsai(){
       this.bonsaiService.getOwnBonsaiUser().subscribe((data : BonsaiData[] | []) => {
            this.dataToDisplay = data
       } )
    }

    private checkIfContainPictureAndBind(arrayToCheck : BonsaiData, bind : string, defaultPath : string){
        if(arrayToCheck.bonsaiPicture.length > 0){
            bind = arrayToCheck.bonsaiPicture[0].fileName
        }
        else{
            bind = defaultPath
        }
    }

    private showDeleteConfirmation() {   
            this.messageService.add({
                key: 'delete',
                sticky: true,
                severity:'warn',
                summary:'Are you sure?',
                detail:'Confirm to proceed'
            })
            return this.isDeleteConfirmation$
    }

    private showModalUpdate(){
        const modalToShow = document.getElementById("modal-update-bonsai")
        if(modalToShow){
            modalToShow.style.display = 'block'
        }
    }

    // PUBLIC METHODS
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
        //BUILD OBJET BONSAI WITH DATA RECOVER IN EVENT
        this.titleBonsai = event.bonsaiName
        this.descriptionBonsai = event.bonsaiDescription
        this.idBonsai = event.idBonsai

        this.checkIfContainPictureAndBind(event, this.img, this.defaultPath)


        if(this.stateService.getIsDeleteBonsai().value){
        //ADD POPUP FOR DELETE CONFIRM 
        this.showDeleteConfirmation().subscribe((confirmed) => {
            if (confirmed) {
          // Remove to display but not call DB
          const indexToDelete = this.dataToDisplay.findIndex(item => item.idBonsai === this.idBonsai)
          if (indexToDelete !== -1) {
            this.dataToDisplay.splice(indexToDelete, 1);
          }
          // Call API for delete item
          this.bonsaiService.deleteBonsai(this.idBonsai).subscribe({
            next: () => this.messageService.add({ severity: 'success', summary: 'Suppression réussie', detail: 'Le bonsaï a été supprimé.' }),
            error: (err: HttpErrorResponse) => this.messageService.add({ severity: 'error', summary: 'Une erreur s\'est produite', detail: err.error })
            })

        this.stateService.setIsDeleteConfirmation(false)

        }
        })               
    }
        // MANAGE UPDATE
        if(this.stateService.getIsUpdateBonsai().value){
            this.showModalUpdate()
        }
    }

    public showModalCreate(){
        const modalToShow = document.getElementById("modal-create-bonsai")
        if(modalToShow){
            modalToShow.style.display = 'block'
        }
    }

    public hiddeModalCreate(event : any){
        const modalToShow = document.getElementById("modal-create-bonsai")
        if(modalToShow){
            modalToShow.style.display = 'none'
        }
    }

    public hiddeModalUpdate(event : any){
        const modalToShow = document.getElementById("modal-update-bonsai")
        if(modalToShow){
            modalToShow.style.display = 'none'
        }
    }
  
    public onConfirm() {
        this.stateService.setIsDeleteConfirmation(true)
        this.messageService.clear('delete');
    }

    public onReject() {
        this.stateService.setIsDeleteConfirmation(false)
        this.messageService.clear('delete');
    }

}