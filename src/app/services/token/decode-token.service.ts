import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { TokenModel } from '../../mocks/token/TokenModel';


@Injectable({
  providedIn: 'root'
})
export class DecodeTokenService {

  constructor() { }


  decodeToken(token : string) : TokenModel {
    const decodedToken = jwtDecode(token);
    return decodedToken as TokenModel;
  }
}
