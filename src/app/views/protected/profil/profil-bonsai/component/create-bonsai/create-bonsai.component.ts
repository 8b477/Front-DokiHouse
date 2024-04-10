import { Component, OnInit } from '@angular/core';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bonsai',
  standalone: true,
  imports: [],
  templateUrl: './create-bonsai.component.html',
  styleUrl: './create-bonsai.component.scss'
})
export class CreateBonsaiComponent implements OnInit{
  loginForm: any;
  formBuilder: any;

  constructor(private bonsaiService : BonsaiServiceService){}
  ngOnInit(): void {
    this.buildFormAndValidator()
  }

  newBonsai : BonsaiModel | undefined = undefined;

 private buildFormAndValidator() : void 
  {
    this.loginForm = this.formBuilder.group
    ({ 
        'title'   : ['', [Validators.required]],
        'description' : ['', [Validators.required]]
    });
  }


  private createNewBonsai(bonsai : BonsaiModel){
    this.bonsaiService.createBonsai(bonsai).subscribe(({
      next : (data) => { console.log(data); }
    }))
  }

  sendModel(){
    const title  = this.loginForm.controls['title'].value
    const description = this.loginForm.controls['description'].value

    this.newBonsai = { name : title, description : description}

      if(this.newBonsai.name == undefined || this.newBonsai.description == undefined)
      {
        console.error('userModel is not defined')
      }
  this.createNewBonsai(this.newBonsai);
  }

}

