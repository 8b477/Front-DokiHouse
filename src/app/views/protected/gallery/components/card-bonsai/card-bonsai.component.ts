import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';
import { BonsaiData } from '../../../../../core/models/blogModels/BonsaiData';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent {


    // VARIABLE
    dataFromAPI: BonsaiData[] = []
    currentIndex: { [key: number]: number } = {};


    // CONSTRUCTOR
    constructor(private http: HttpClient) { }


    // STATE
    ngOnInit(): void {
        this.getTest()
    }


    // METHODS
    prevSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
    }

    nextSlide(bonsaiId: number, pictureLength: number) {
        this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
    }


    trackByFn(index : any,item : any) {
        return `${index}-${item.id}`; // Utilise un identifiant unique pour chaque élément
    }


   private getTest(){
    this.http.get<BonsaiData[]>("https://localhost:7043/api/Bonsai/GetTest").subscribe({
        next : (data : BonsaiData[]) =>{
        this.dataFromAPI = data,
        // Pour chaque bonsaï, initialise l'index actif à zéro
        this.dataFromAPI.forEach(bonsai => {
        this.currentIndex[bonsai.idBonsai] = 0;
        });
        },
        error : (error) => console.log(error)
    })
    }

}