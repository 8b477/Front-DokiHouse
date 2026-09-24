import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { BonsaiData } from '../../../API/Models/blogModels/BonsaiData';
import { BonsaiAsCreated } from '../../../API/Models/bonsaiModels/bonsaiAsCreatedModel';
import { BonsaiModel } from '../../../API/Models/bonsaiModels/bonsaiCreateModel';
import { BonsaiRepository } from '../../../API/Repository/bonsai.repository';
import { PictureRepository } from '../../../API/Repository/picture.repository';
import { HandlerErrorService } from '../handler-error-service/handler-error.service';



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

  public deleteBonsai(idBonsai :number){
    return this.bonsaiRepo.delete(idBonsai).pipe(
      catchError((error) => this.serviceHandlerError.handleValidationErrors(error))
    )
  }


}
  
