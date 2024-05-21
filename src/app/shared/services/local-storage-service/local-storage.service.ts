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

  getIdOfUserInLocalStorage(): string | null {
    const userInfo = this.getAllInfosOfUserInLocalStorage();
    return userInfo && userInfo.id ? userInfo.id : null;
  }

  getNameOfUserInLocalStorage(): string {
    const userInfo = this.getAllInfosOfUserInLocalStorage();
    return userInfo && userInfo.name ? userInfo.name : '';
  }

  getRoleOfUserInLocalStorage(): string {
    const userInfo = this.getAllInfosOfUserInLocalStorage();
    return userInfo && userInfo.role ? userInfo.role : '';
  }

}

            

