import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';


@Component({
  standalone  : true,
  selector    : 'app-card-bonsai',
  templateUrl : './card-bonsai.component.html',
  styleUrls   : ['./card-bonsai.component.scss'],
  imports     : [DatePipe, NgIf, NgFor, NgClass]
})
export class CardBonsaiComponent {


  // @Input() cardBonsaiDescription : string        = '';
  // @Input() cardBonsaiModifiedAt  : string | null = null;
  // @Input() cardBonsaiCreateAt    : Date   | undefined;
  dataFromAPI!: any[];
  currentIndex: number = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.dataFromAPI.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.dataFromAPI.length - 1) ? 0 : this.currentIndex + 1;
  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTest()
  }


getTest(){
  this.http.get<BonsaiData[]>("https://localhost:7043/api/Bonsai/GetTest").subscribe({
    next : (data : BonsaiData[]) => this.dataFromAPI = data,
    error : (error) => console.log(error)
  })
}

debugger(){
console.log(this.dataFromAPI.length);

}

}

//console.log(this.dataFromAPI[0].bonsaiName);

interface BonsaiData {
    idBonsai: number;
    idUser: number;
    bonsaiName: string;
    bonsaiDescription: string;
    createAt: string;
    modifiedAt: string;
    bonsaiPicture: BonsaiPicture[];
}

interface BonsaiPicture {
    idPicture: number;
    fileName: string;
    createAt: string;
    modifiedAt: string | null;
    idBonsai: number;
}
