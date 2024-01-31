import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  setContextToken(tokenId : string, tokenName : string, tokenRole : string) : void{
    localStorage.setItem('tokenId', tokenId)
    localStorage.setItem('tokenName', tokenName)
    localStorage.setItem('tokenRole', tokenRole)
  }

  getContextTokenId() : string | null{
    return localStorage.getItem('tokenId');
  }

  getContextTokenName() : string | null{
    return localStorage.getItem('tokenName');
  }


  getContextTokenRole() : string | null{
  return localStorage.getItem('tokenRole');
  }


}
