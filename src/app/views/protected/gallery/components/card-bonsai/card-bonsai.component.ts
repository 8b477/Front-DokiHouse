import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DATE_PIPE_DEFAULT_TIMEZONE, DatePipe,  NgClass,  NgFor, NgIf } from '@angular/common';


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
  dataFromAPI: BonsaiData[] = MOCKUP_DATA;


currentIndex: { [key: number]: number } = {};

prevSlide(bonsaiId: number, pictureLength: number) {
    this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] - 1 + pictureLength) % pictureLength;
}

nextSlide(bonsaiId: number, pictureLength: number) {
    this.currentIndex[bonsaiId] = (this.currentIndex[bonsaiId] + 1) % pictureLength;
}


trackByFn(index : any,item : any) {
    return `${index}-${item.id}`; // Utilise un identifiant unique pour chaque élément
}


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getTest()
    // Pour chaque bonsaï, initialise l'index actif à zéro
    this.dataFromAPI.forEach(bonsai => {
    this.currentIndex[bonsai.idBonsai] = 0;
});

  }


getTest(){
  this.http.get<BonsaiData[]>("https://localhost:7043/api/Bonsai/GetTest").subscribe({
    next : (data : BonsaiData[]) => this.dataFromAPI = data,
    error : (error) => console.log(error)
  })
}

debug(){
  console.log(this.dataFromAPI[0]);
  console.log(this.dataFromAPI[1]);

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

export const MOCKUP_DATA: BonsaiData[] = [
    {
        idBonsai: 1,
        idUser: 1,
        bonsaiName: "Bonsaï Zen",
        bonsaiDescription: "Un magnifique bonsaï pour apporter la paix intérieure.",
        createAt: "2024-02-26T12:39:47.79",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 1,
                fileName: "/assets/img/symbole.png",
                createAt: "2024-02-26T13:02:11.8",
                modifiedAt: null,
                idBonsai: 1
            },
            {
                idPicture: 2,
                fileName: "/assets/img/bonsai-1.png",
                createAt: "2024-02-26T13:02:12.8",
                modifiedAt: null,
                idBonsai: 1
            },
            {
                idPicture: 3,
                fileName: "/assets/img/lotus.png",
                createAt: "2024-02-26T13:02:13.8",
                modifiedAt: null,
                idBonsai: 1
            }
        ]
    },

    {
        idBonsai: 2,
        idUser: 1,
        bonsaiName: "Bonsaï Sakura",
        bonsaiDescription: "Un magnifique bonsaï de cerisier en fleurs.",
        createAt: "2024-02-26T14:15:38.693",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 3,
                fileName: "/assets/img/fleur.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            },
            {
                idPicture: 4,
                fileName: "/assets/img/geisha.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            }
        ]
    }
    ,

    {
        idBonsai: 2,
        idUser: 1,
        bonsaiName: "Bonsaï Sakura",
        bonsaiDescription: "Un magnifique bonsaï de cerisier en fleurs.",
        createAt: "2024-02-26T14:15:38.693",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 3,
                fileName: "/assets/img/fleur.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            },
            {
                idPicture: 4,
                fileName: "/assets/img/geisha.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            }
        ]
    }
    ,

    {
        idBonsai: 2,
        idUser: 1,
        bonsaiName: "Bonsaï Sakura",
        bonsaiDescription: "Un magnifique bonsaï de cerisier en fleurs.",
        createAt: "2024-02-26T14:15:38.693",
        modifiedAt: "0001-01-01T00:00:00",
        bonsaiPicture: [
            {
                idPicture: 3,
                fileName: "/assets/img/fleur.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            },
            {
                idPicture: 4,
                fileName: "/assets/img/geisha.png",
                createAt: "2024-02-26T14:34:33.55",
                modifiedAt: null,
                idBonsai: 2
            }
        ]
    }
];