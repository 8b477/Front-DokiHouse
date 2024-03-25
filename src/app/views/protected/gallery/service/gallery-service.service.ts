import { Injectable, inject } from "@angular/core"
import { Observable } from "rxjs"
import { BonsaiRepository } from "../../../../API/repository/bonsai.repository"
import { BonsaiData } from "../../../../API/models/blogModels/BonsaiData"

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
