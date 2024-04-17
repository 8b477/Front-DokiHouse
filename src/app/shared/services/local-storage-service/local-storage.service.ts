import { Injectable } from '@angular/core';
import { UserConnectedModel } from '../../../API/models/userModels/userConnectedModel/UserConnectedModel';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


// PRIVATE METHODS
  private getAllInfosOfUserInLocalStorage(){
  if(typeof localStorage !== undefined && typeof localStorage !== null && typeof localStorage !== 'undefined'){
    const data = localStorage.getItem("userInfo")

    if(data !== null){
      return JSON.parse(data)
    }
  return null;
  }
}


// SET
  setNameOfUserInLocalStorage(userName : string){
    const user = this.getAllInfosOfUserInLocalStorage()
    user.name = userName
    localStorage.setItem('userInfo', JSON.stringify(user))
  }


// GET
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

  getIdOfUserInLocalStorage() : string{
    return this.getAllInfosOfUserInLocalStorage().id
  }

  getNameOfUserInLocalStorage() : string{
    return this.getAllInfosOfUserInLocalStorage().name
  }


  getRoleOfUserInLocalStorage() : string{
    return this.getAllInfosOfUserInLocalStorage().role
  }

}

            

