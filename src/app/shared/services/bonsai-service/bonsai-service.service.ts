import { Observable, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { BonsaiRepository } from '../../../API/repository/bonsai.repository';
import { BonsaiData } from '../../../API/models/blogModels/BonsaiData';
import { BonsaiModel } from '../../../API/models/bonsaiModels/bonsaiCreateModel';
import { HandlerErrorService } from '../handler-error-service/handler-error.service';
import { BonsaiAsCreated } from '../../../API/models/bonsaiModels/bonsaiAsCreatedModel';
import { PictureRepository } from '../../../API/repository/picture.repository';



@Injectable({
  providedIn: 'root'
})
export class BonsaiServiceService {


  constructor(
    private bonsaiRepo : BonsaiRepository,
    private pictureRepo : PictureRepository,
    private serviceHandlerError : HandlerErrorService
  ) { }


  public getBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.get()
  }


  public getOwnBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.getById()
  }


  public createBonsai(bonsai : BonsaiModel) : Observable<BonsaiAsCreated>{
    return this.bonsaiRepo.post(bonsai).pipe(
      catchError((error) => this.serviceHandlerError.handleValidationErrors(error))
    )
  }


  public addPicture(picture: File, idBonsai: number): Observable<any> {
    return this.pictureRepo.post(picture, idBonsai).pipe(
      catchError((error) => this.serviceHandlerError.handleValidationErrors(error))
    )
  }


  public updateBonsai(bonsaiId : number, bonsaiToUpdate : BonsaiModel){
    return this.bonsaiRepo.update(bonsaiId, bonsaiToUpdate).pipe(
      catchError((error) => this.serviceHandlerError.handleValidationErrors(error))
    )
  }

}
  
