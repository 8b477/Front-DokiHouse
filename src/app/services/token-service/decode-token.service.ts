import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { TokenDecryptedModel } from '../../mocks/models/tokenModels/TokenDecryptedModel';
import { TokenModel } from '../../mocks/models/tokenModels/TokenModel';


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