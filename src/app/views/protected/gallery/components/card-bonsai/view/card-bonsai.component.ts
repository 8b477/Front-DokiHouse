import { Component, Input } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';

import { BonsaiData } from '../../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../../mocks/fakeDataGallery/DATAGALLERY';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent {

    @Input() dataFromAPI : BonsaiData[] | [] = []

    // VARIABLE
    dataFromMockup : BonsaiData[] = MOCKUP_DATA
    currentIndex   : { [key: number]: number } = {}


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
    public prevSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
    }

    public nextSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
    }

}

