import { Component, OnInit } from '@angular/core';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BonsaiAsCreated } from '../../../../../../API/models/bonsaiModels/bonsaiAsCreatedModel';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';


@Component({
    selector: 'app-create-bonsai',
    standalone: true,
    templateUrl: './create-bonsai.component.html',
    styleUrl: './create-bonsai.component.scss',
    imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, ToastModule]
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
    private messageService       : MessageService
  ){}

// STATE
  ngOnInit(): void {
    this.buildFormAndValidator()
  }

// PRIVATE METHODS
 private buildFormAndValidator() : void 
  {
    this.loginForm = new FormGroup({
      title        : new FormControl('', Validators.required),
      description  : new FormControl('', Validators.required),
      fileToAdd    : new FormControl('', Validators.required)
    })
  }


  private createNewBonsai(bonsai : BonsaiModel){
    this.bonsaiService.createBonsai(bonsai).subscribe(({
      next : (data : BonsaiAsCreated) => {
        if(data.id)
          this.idBonsai = data.id //recover id for add picture
          this.sendImg()
          this.messageService.add({ severity : 'success', summary : 'Bonsai ajouter !', detail : 'Un nouveau bonsai à été ajouter à ta collection' })
      },
      error : () => this.messageService.add({ severity: 'error', summary : 'Une erreur s\'est produite', detail : 'Le titre doit avoir une longueur mini de 3 et les extensions d\'image pris en charge sont : .jpg, .jpeg, .png' })
    }))
  }


// PUBLIC METHODS
  private sendImg(){
    const imgInput = document.getElementById('fileInput') as HTMLInputElement;
    const imgFile  = imgInput.files ? imgInput.files[0] : null;

    if (imgFile) {
      this.bonsaiService.addPicture(imgFile, this.idBonsai).subscribe()
    }
    else{
        const defaultImgFile = new File([], 'bonsai-1.png', { type: 'image/png' });
        this.bonsaiService.addPicture(defaultImgFile, this.idBonsai).subscribe()
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


