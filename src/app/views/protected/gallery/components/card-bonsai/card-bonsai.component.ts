import { Component } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';
import { BonsaiData } from '../../../../../core/models/blogModels/BonsaiData';
import { GalleryServiceService } from '../../service/gallery-service.service';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent {


    // VARIABLE
    dataFromAPI  : BonsaiData[]              = [];
    currentIndex : { [key: number]: number } = {};


    // CONSTRUCTOR
    constructor(private serviceBonsai :GalleryServiceService){ }


    // STATE
    ngOnInit(): void {
        this.getData()
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

