import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { Observable } from 'rxjs';
import { BonsaiStateService } from '../../../profil/profil-bonsai/services/bonsai-state-service.service';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent implements OnInit{

    // INPUT
    @Input() dataFromAPI : BonsaiData[] | [] = []


    // OUTPUT
    @Output() cardClicked = new EventEmitter<BonsaiData>();


    // VARIABLE
    dataFromMockup : BonsaiData[]              = MOCKUP_DATA
    currentIndex   : { [key: number]: number } = {}


    // OBSERVABLE
    isUpdateBonsai$ : Observable<boolean>


    // INJECTION
    constructor(private bonsaiStateService : BonsaiStateService){
            this.isUpdateBonsai$ = this.bonsaiStateService.getIsUpdateBonsai()
    }


    // STATE
    ngOnInit(): void {
        if(this.dataFromAPI.length === 0)
        {
            this.dataFromMockup.forEach(bonsai => { this.currentIndex[bonsai.idBonsai] = 0 });
        }
        if(this.dataFromAPI.length !== 0)
        {
            this.dataFromAPI.forEach(bonsai => { this.currentIndex[bonsai.idBonsai] = 0 });
        }
    }


    // METHODS PUBLIC
    // Manage index image for slider
    public prevSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
    }

    public nextSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
    }

    public onClickCard(bonsai : BonsaiData){
        this.cardClicked.emit(bonsai);

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
