import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe, NgClass, NgFor, NgIf, AsyncPipe } from '@angular/common';
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { Observable, Subject } from 'rxjs';
import { BonsaiStateService } from '../../../profil/profil-bonsai/services/bonsai-state-service.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { BonsaiPicture } from '../../../../../API/models/blogModels/BonsaiPicture';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass, NgbCarouselModule, AsyncPipe]
})
export class CardBonsaiComponent implements OnInit{

    // INPUT
    @Input() dataFromAPI : BonsaiData[] | [] = []


    // OUTPUT
    @Output() cardClicked = new EventEmitter<BonsaiData>();


    // VARIABLE
    dataFromMockup : BonsaiData[] = MOCKUP_DATA
    currentIndex   : {[key :number] : number} = []

    // OBSERVABLE
    isUpdateBonsai$ : Observable<boolean>



//-------------------------------

    dataPicture : BonsaiPicture[] = []

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.fillDataPicture();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private fillDataPicture(): void {
    if (this.dataFromAPI.length > 0) {
      this.dataFromAPI.forEach((bonsai) => {
        if (bonsai.bonsaiPicture && bonsai.bonsaiPicture.length > 0) {
          this.dataPicture.push(...bonsai.bonsaiPicture);
        }
      });
    }
  }

  onDataReady(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (this.dataPicture.length > 0) {
        observer.next(true);
        observer.complete();
      } else {
        const interval = setInterval(() => {
          if (this.dataPicture.length > 0) {
            clearInterval(interval);
            observer.next(true);
            observer.complete();
          }
        }, 100);
      }
    });
  }
  
debuggerTest(){
    console.log(this.dataPicture);
}

forceForeach(){
    this.dataFromAPI.forEach((bonsai) => {
            if(bonsai.bonsaiPicture.length > 0 && typeof(bonsai.bonsaiPicture) !== undefined){
                this.dataPicture.push(...bonsai.bonsaiPicture)
            }
        })
}
//-------------------------------









    // INJECTION
    constructor(private bonsaiStateService : BonsaiStateService){
        this.isUpdateBonsai$ = this.bonsaiStateService.getIsUpdateBonsai()
    }


    // STATE
    // ngOnInit(): void {
    //     if(this.dataFromAPI.length === 0)
    //     {
    //         this.dataFromMockup.forEach(bonsai => { this.currentIndex[bonsai.idBonsai] = 0 });
    //     }
    //     if(this.dataFromAPI.length !== 0)
    //     {
    //         this.dataFromAPI.forEach(bonsai => { this.currentIndex[bonsai.idBonsai] = 0 });
    //     }

    // }


    // METHODS PUBLIC
    // Manage index image for slider
    public prevSlide(bonsaiId: number) {
        if (this.dataFromAPI !== undefined && this.dataFromAPI.length > 0) {
            const bonsai = this.dataFromAPI.find(b => b.idBonsai === bonsaiId);
            if (bonsai) {
                const pictureLength = bonsai.bonsaiPicture?.length || 0;
                this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
            }
        } 
    }


public nextSlide(bonsaiId: number) {
    const bonsai = this.dataFromAPI.find(b => b.idBonsai === bonsaiId)
    if(bonsai){
        const pictureLength = bonsai.bonsaiPicture?.length || 0;
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
    }
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
