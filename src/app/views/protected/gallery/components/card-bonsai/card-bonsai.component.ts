import { Component } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';

import { GalleryServiceService } from '../../service/gallery-service.service';
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent {


    // VARIABLE
    dataFromAPI    : BonsaiData[] | undefined
    dataFromMockup : BonsaiData[]              = MOCKUP_DATA
    currentIndex   : { [key: number]: number } = {}


    // CONSTRUCTOR
    constructor(private serviceBonsai :GalleryServiceService){ }


    // STATE
    ngOnInit(): void {
        this.getData()
        if(typeof this.dataFromAPI === 'undefined'){
            this.dataFromMockup.forEach(bonsai => 
            {
                this.currentIndex[bonsai.idBonsai] = 0 // On s'assure que l'index commence à zéro pour le slider
            });
        }
    }


    // METHODS PUBLIC
    prevSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
    }

    nextSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
    }


    // METHODS PRIVATE
   private getData(){
    this.serviceBonsai.getAllBonsaiAndPicture().subscribe
        ({
            next : (data : BonsaiData[]) =>
            {
                this.dataFromAPI = data,
                this.dataFromAPI.forEach(bonsai => 
                {
                    this.currentIndex[bonsai.idBonsai] = 0 // On s'assure que l'index commence à zéro pour le slider
                });
            },
            error : (err) => console.error(err) 
        })
    }

}

