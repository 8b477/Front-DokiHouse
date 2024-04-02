import { Component, OnInit } from '@angular/core';
import { CardBonsaiComponent } from "../../../gallery/components/card-bonsai/view/card-bonsai.component";
import { BonsaiData } from '../../../../../API/models/blogModels/BonsaiData';
import { MOCKUP_DATA } from '../../../../../mocks/fakeDataGallery/DATAGALLERY';
import { BonsaiServiceService } from '../../../../../shared/services/bonsai-service/bonsai-service.service';

@Component({
    selector: 'app-profil-bonsai',
    standalone: true,
    templateUrl: './profil-bonsai.component.html',
    styleUrl: './profil-bonsai.component.scss',
    imports: [CardBonsaiComponent]
})
export class ProfilBonsaiComponent implements OnInit{


    data : BonsaiData[] | [] = []
    fakeData : BonsaiData[] = MOCKUP_DATA
    currentIndex : { [key: number]: number } = {}

    constructor(private service : BonsaiServiceService) {}
    ngOnInit(): void {
        this.getBonsai()
        console.log('dans le init : ' + this.data)
    }


    public getBonsai(){
       this.service.getOwnBonsaiUser().subscribe((
        {
            next : (data : BonsaiData[] | []) => this.data = data,
            error : (err) => console.error(err)
        }
       ))
    }

public debug(){
    console.log(this.data)
}

}
