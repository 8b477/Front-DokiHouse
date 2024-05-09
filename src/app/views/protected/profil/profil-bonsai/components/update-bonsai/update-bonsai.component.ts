import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { BonsaiAsCreated } from '../../../../../../API/models/bonsaiModels/bonsaiAsCreatedModel';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { HandlerErrorService } from '../../../../../../shared/services/handler-error-service/handler-error.service';
import { BonsaiPicture } from '../../../../../../API/models/blogModels/BonsaiPicture';

@Component({
  selector: 'app-update-bonsai',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-bonsai.component.html',
  styleUrl: './update-bonsai.component.scss'
})
export class UpdateBonsaiComponent {

//OUTPUT
 @Input() title       : string = ""
 @Input() description : string = ""
 @Input() idBonsai    : number = 0
 @Input() imgArray    : BonsaiPicture[] = []

// VARIABLE
  updateForm!           : FormGroup
  formBuilder!          : FormBuilder
  newBonsai             : BonsaiModel | undefined = undefined;
  createNewBonsaiErrors : string []               = []

// INJECTION
  constructor(
    private bonsaiService        : BonsaiServiceService,
    private serviceHandlerErrors : HandlerErrorService
  ){}

// STATE
  ngOnInit(): void {
    this.buildFormAndValidator()
  }

// PRIVATE METHODS
 private buildFormAndValidator() : void 
  {
    this.updateForm = new FormGroup({
      title       : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
    })
  }


  private updateBonsai(bonsaiId : number, bonsai : BonsaiModel){
    this.bonsaiService.updateBonsai(bonsaiId, bonsai).subscribe(({
      next : (data : BonsaiAsCreated) => { },
      error : (err) => this.serviceHandlerErrors.displayErrors(err, this.createNewBonsaiErrors)
    }))
  }


 public sendModel(){
    const title = this.updateForm.controls['title'].value
    const description = this.updateForm.controls['description'].value
    this.newBonsai = { name : title, description : description }
    this.updateBonsai(this.idBonsai, this.newBonsai)
  }

}
