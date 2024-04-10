import { Component, OnInit } from '@angular/core';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';

@Component({
  selector: 'app-create-bonsai',
  standalone: true,
  imports: [],
  templateUrl: './create-bonsai.component.html',
  styleUrl: './create-bonsai.component.scss'
})
export class CreateBonsaiComponent{

  constructor(private bonsaiService : BonsaiServiceService){}

  newBonsai : BonsaiModel | undefined = undefined;
  public createNewBonsai(bonsai : BonsaiModel){

    this.bonsaiService.createBonsai(bonsai).subscribe(({
      next : (data) => { console.log(data); }
    }))

  }

}
