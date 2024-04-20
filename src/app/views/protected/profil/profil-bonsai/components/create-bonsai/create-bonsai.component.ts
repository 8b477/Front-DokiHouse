import { Component, OnInit } from '@angular/core';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HandlerErrorService } from '../../../../../../shared/services/handler-error-service/handler-error.service';

@Component({
  selector: 'app-create-bonsai',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bonsai.component.html',
  styleUrl: './create-bonsai.component.scss'
})
export class CreateBonsaiComponent implements OnInit{

  loginForm!  : FormGroup
  formBuilder!: FormBuilder
  newBonsai   : BonsaiModel | undefined = undefined;
  createNewBonsaiErrors : string [] = []

  constructor(
    private bonsaiService : BonsaiServiceService,
    private serviceHandlerErrors : HandlerErrorService
  ){}


  ngOnInit(): void {
    this.buildFormAndValidator()
  }


 private buildFormAndValidator() : void 
  {
    this.loginForm = new FormGroup({
      title : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required)
    })
  }

  private createNewBonsai(bonsai : BonsaiModel){
    this.bonsaiService.createBonsai(bonsai).subscribe(({
      next : (data) => console.log(data),
      error : (err) => this.serviceHandlerErrors.displayErrors(err, this.createNewBonsaiErrors)
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
    this.createNewBonsai((this.newBonsai))
  }

}
