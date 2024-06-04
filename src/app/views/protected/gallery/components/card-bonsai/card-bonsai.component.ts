import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf, AsyncPipe } from '@angular/common';
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { Observable } from 'rxjs';
import { BonsaiStateService } from '../../../profil/profil-bonsai/services/bonsai-state-service.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteHoverDirective } from '../../../profil/profil-bonsai/directives/delete-hover.directive';
import { UpdateHoverDirective } from '../../../profil/profil-bonsai/directives/update-hover.directive';



@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass, NgbCarouselModule, AsyncPipe, DeleteHoverDirective, UpdateHoverDirective]
})
export class CardBonsaiComponent {

    // VARIABLE
    mockup : BonsaiData[] = MOCKUP_DATA

    // INPUT
    @Input() dataToDisplay : BonsaiData[] | [] = []


    // OUTPUT
    @Output() cardClicked = new EventEmitter<BonsaiData>();

    // VARIABLE
    dataFromMockup : BonsaiData[] = MOCKUP_DATA
    currentIndex   : {[key :number] : number} = []

    // OBSERVABLE
    isUpdateBonsai$ : Observable<boolean>
    isDeleteBonsai$ : Observable<boolean>


    // INJECTION
    constructor(private bonsaiStateService : BonsaiStateService){
        this.isUpdateBonsai$ = this.bonsaiStateService.getIsUpdateBonsai()
        this.isDeleteBonsai$ = this.bonsaiStateService.getIsDeleteBonsai()
    }


    public onClickCard(bonsai : BonsaiData){
        this.cardClicked.emit(bonsai);
        //If STATE OF UPDATEBONSAI IS TRUE
        if(this.bonsaiStateService.getIsUpdateBonsai().value){
        const modal = document.getElementById("myModal");
            if(modal){
                modal.style.display = "block";
            }

        window.onclick = function(event) {
            if (event.target == modal && modal !== null) {
                modal.style.display = "none";
                }
            }
        }
    }

}
