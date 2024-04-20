import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { BonsaiRepository } from '../../../API/repository/bonsai.repository';
import { BonsaiData } from '../../../API/models/blogModels/BonsaiData';
import { BonsaiModel } from '../../../API/models/bonsaiModels/bonsaiCreateModel';
import { HandlerErrorService } from '../handler-error-service/handler-error.service';



@Injectable({
  providedIn: 'root'
})
export class BonsaiServiceService {


  constructor(
    private bonsaiRepo : BonsaiRepository,
    private serviceHandlerError : HandlerErrorService
  ) { }


  public getBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.get()
  }


  public getOwnBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.getById()
  }


  public createBonsai(bonsai : BonsaiModel) : Observable<BonsaiModel>{
    return this.bonsaiRepo.post(bonsai).pipe(
      catchError((error) => this.serviceHandlerError.handleValidationErrors(error))
    )
  }

}