import { Component, OnInit } from '@angular/core';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HandlerErrorService } from '../../../../../../shared/services/handler-error-service/handler-error.service';
import { BonsaiAsCreated } from '../../../../../../API/models/bonsaiModels/bonsaiAsCreatedModel';

@Component({
  selector: 'app-create-bonsai',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bonsai.component.html',
  styleUrl: './create-bonsai.component.scss'
})
export class CreateBonsaiComponent implements OnInit{

// VARIABLE
  loginForm!            : FormGroup
  formBuilder!          : FormBuilder
  newBonsai             : BonsaiModel | undefined = undefined;
  createNewBonsaiErrors : string []               = []
  idBonsai              : number                  = 0

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
    this.loginForm = new FormGroup({
      title       : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      fileToAdd   : new FormControl('', Validators.required)
    })
  }


  private createNewBonsai(bonsai : BonsaiModel){
    this.bonsaiService.createBonsai(bonsai).subscribe(({
      next : (data : BonsaiAsCreated) => {
        if(data.id)
          this.idBonsai = data.id
          this.sendImg()
      },
      error : (err) => {
      this.serviceHandlerErrors.displayErrors(err, this.createNewBonsaiErrors)
      }
    }))
  }


// PUBLIC METHODS
  public sendImg(){
    const imgInput = document.getElementById('fileInput') as HTMLInputElement;
    const imgFile  = imgInput.files ? imgInput.files[0] : null;

    if (imgFile) {
      this.bonsaiService.addPicture(imgFile, this.idBonsai).subscribe()
    }
  }


 public sendModel(){
    const title = this.loginForm.controls['title'].value
    const description = this.loginForm.controls['description'].value

    this.newBonsai = { name : title, description : description }

    this.createNewBonsai((this.newBonsai))
  }


// Display img to upload by User
  previewImage(event: any): void {
    const previewImage: HTMLImageElement = document.getElementById('previewImage') as HTMLImageElement;
    const file: File | undefined = event.target.files?.[0];

    if (file) {
      previewImage.style.display = 'block';
      const reader: FileReader = new FileReader()
      reader.onload = function(e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
          previewImage.setAttribute('src', e.target.result.toString())
        }
      }
      reader.readAsDataURL(file)
    } else {
      previewImage.style.display = 'none'
    }
  }

}


