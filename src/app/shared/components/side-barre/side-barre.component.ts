import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CreateBonsaiComponent } from '../../../views/protected/profil/profil-bonsai/components/create-bonsai/create-bonsai.component';
import { Observable } from 'rxjs';
import { BonsaiStateService } from '../../../views/protected/profil/profil-bonsai/services/bonsai-state-service.service';

@Component({
  selector: 'app-side-barre',
  standalone: true,
  imports: [CreateBonsaiComponent, RouterLink],
  templateUrl: './side-barre.component.html',
  styleUrl: './side-barre.component.scss'
})
export class SideBarreComponent {

  @Input() logoHome   : string = ''
  @Input() logoAdd    : string = ''
  @Input() logoUpdate : string = ''
  @Input() logoDelete : string = ''

  @Input() altHome   : string = ''
  @Input() altAdd    : string = ''
  @Input() altUpdate : string = ''
  @Input() altDelete : string = ''

  @Input() isHomeButtonAsClicked   : Function = () => {}
  @Input() isAddButtonAsClicked    : Function = () => {}
  @Input() isUpdateButtonAsClicked : Function = () => {}
  @Input() isDeleteButtonAsClicked : Function = () => {}

  isCreateBonsai$: Observable<boolean>
  isUpdateBonsai$: Observable<boolean>
  isDeleteBonsai$: Observable<boolean>


  constructor(private stateService : BonsaiStateService) 
  {
    this.isCreateBonsai$ = this.stateService.getIsCreateBonsai()
    this.isUpdateBonsai$ = this.stateService.getIsUpdateBonsai()
    this.isDeleteBonsai$ = this.stateService.getIsDeleteBonsai()
  }


  executeHomeFunction(){
      this.isHomeButtonAsClicked()
  }

  executeAddFunction(){
      this.isAddButtonAsClicked()
  }

  executeUpdateFunction(){
      this.isUpdateButtonAsClicked()
  }

  executeDeleteFunction(){
      this.isDeleteButtonAsClicked()
  }

}
