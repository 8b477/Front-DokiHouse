import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BonsaiData } from '../../../API/Models/blogModels/BonsaiData';
import { BonsaiServiceService } from '../../../shared/services/bonsai-service/bonsai-service.service';
import { CardBonsaiComponent } from "./components/card-bonsai/card-bonsai.component";


@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CardBonsaiComponent, CardModule]
})
export class GalleryComponent implements OnInit{

    dataFromAPI : BonsaiData[] | [] = []

    constructor(private bonsaiService : BonsaiServiceService) {}
    
    ngOnInit(): void {
        this.getData()
    }

   private getData(){
    this.bonsaiService.getBonsaiUser().subscribe(({
        next : (data : BonsaiData[] | []) => { this.dataFromAPI  = data; }
    }))
}

    public debugg(){
        console.log(this.dataFromAPI[0].bonsaiPicture[0].fileName);
    }

}