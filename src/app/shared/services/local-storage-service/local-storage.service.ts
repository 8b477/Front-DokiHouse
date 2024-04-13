import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  setLocalStorageToken(token : string, tokenId : string, tokenName : string, tokenRole : string) : void{
    localStorage.setItem('token', token)
    localStorage.setItem('tokenId', tokenId)
    localStorage.setItem('tokenName', tokenName)
    localStorage.setItem('tokenRole', tokenRole)
  }

  getLocalStorageToken() : string | null{
  return localStorage.getItem('token');
  }

  getLocalStorageTokenId() : string | null{
    return localStorage.getItem('tokenId');
  }

  getLocalStorageTokenName() : string | null{
    return localStorage.getItem('tokenName');
  }

  getLocalStorageTokenRole() : string | null{
  return localStorage.getItem('tokenRole');
  }


}
