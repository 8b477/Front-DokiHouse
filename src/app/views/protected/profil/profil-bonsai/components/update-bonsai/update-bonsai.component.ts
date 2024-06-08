import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { BonsaiModel } from '../../../../../../API/models/bonsaiModels/bonsaiCreateModel';
import { BonsaiServiceService } from '../../../../../../shared/services/bonsai-service/bonsai-service.service';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-update-bonsai',
  standalone: true,
  imports: [ReactiveFormsModule, ToastModule],
  templateUrl: './update-bonsai.component.html',
  styleUrl: './update-bonsai.component.scss'
})
export class UpdateBonsaiComponent implements OnInit, OnChanges{

//OUTPUT
 @Input() title       : string = ""
 @Input() description : string = ""
 @Input() img         : string = ""
 @Input() idBonsai    : number = 0


// VARIABLE
  newBonsai   : BonsaiModel | undefined = undefined;
  updateForm! : FormGroup

// INJECTION
  constructor(
    private bonsaiService  : BonsaiServiceService,
    private messageService : MessageService
  ){}

// STATE
  ngOnInit(): void { this.buildForm() } 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title'] || changes['description']) {
      if (this.updateForm) {
        this.updateForm.patchValue({
          title: this.title,
          description: this.description
        });
      }
    }
  }

  private buildForm(): void {
    this.updateForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  private updateBonsai(bonsaiId : number, bonsai : BonsaiModel){
    this.bonsaiService.updateBonsai(bonsaiId, bonsai).subscribe(({
      next : () => { this.messageService.add({ severity : 'success', summary : 'Changement validé !', detail : 'la mise à jour du bonsai à été correctement éffectuer' }) },
      error : (err : string) => this.messageService.add({ severity : 'error', summary : 'Une erreur s\'est produite !', detail : err })
    }))
  }


 public sendModel(){
    const title = this.updateForm.controls['title'].value
    const description = this.updateForm.controls['description'].value
    this.newBonsai = { name : title, description : description }
    this.updateBonsai(this.idBonsai, this.newBonsai)
  }

}
