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

  public getBonsaiUser() : BonsaiData[] | undefined{
    
  this.bonsaiRepo.getAllBonsaiUser().subscribe((
  {
    next : (data : BonsaiData[] | undefined) => 
    {
      if(typeof data === 'undefined') return
      return data;
    },
    error : (err) => console.error(err)
  }
  ))  
  return undefined
  }
}
