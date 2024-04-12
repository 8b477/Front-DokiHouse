import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../components/card-bonsai/view/card-bonsai.component";
import { BonsaiData } from '../../../../API/models/blogModels/BonsaiData';
import { BonsaiServiceService } from '../../../../shared/services/bonsai-service/bonsai-service.service';


@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CardBonsaiComponent]
})
export class GalleryComponent implements OnInit{

    dataFromAPI : BonsaiData[] | [] = []


    constructor(private bonsaiService : BonsaiServiceService) {}
ngOnInit(): void {
    this.getData()
}

   private getData(){
    this.bonsaiService.getBonsaiUser().subscribe(({
        next : (data : BonsaiData[] | []) => {this.dataFromAPI  = data; console.log(JSON.stringify(data))}
    }))
}

}