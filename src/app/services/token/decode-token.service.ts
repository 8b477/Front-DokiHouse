import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { TokenDecryptedModel } from '../../mocks/models/token/TokenDecryptedModel';
import { TokenModel } from '../../mocks/models/token/TokenModel';


@Injectable({
  providedIn: 'root'
})
export class DecodeTokenService {

  constructor() { }


  decodeToken(token : TokenModel) : TokenDecryptedModel {
    const decodedToken = jwtDecode(token.token);
    return decodedToken as TokenDecryptedModel;
  }
}
