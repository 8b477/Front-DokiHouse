import { Observable, catchError, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { BonsaiRepository } from '../../../API/repository/bonsai.repository';
import { BonsaiData } from '../../../API/models/blogModels/BonsaiData';



@Injectable({
  providedIn: 'root'
})
export class BonsaiServiceService {

  constructor(
    private bonsaiRepo : BonsaiRepository,
  ) { }

  public getBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.get().pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    )
  }

  public getOwnBonsaiUser() : Observable<BonsaiData[] | []> {
    return this.bonsaiRepo.getById().pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    )
  }



}