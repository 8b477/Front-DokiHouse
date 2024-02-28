import { Injectable, inject } from '@angular/core';
import { BonsaiRepository } from '../../../../core/repository/bonsai.repository';
import { BonsaiData } from '../../../../core/models/blogModels/BonsaiData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  // INJECTION
  private bonsaiRepo   = inject(BonsaiRepository)


  // PUBLIC METHODS
  getAllBonsaiAndPicture() :Observable<BonsaiData[]>
  {
    return this.bonsaiRepo.getAll()
  }


}
