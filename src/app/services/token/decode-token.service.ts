import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { GetToken } from '../../mocks/token/GetToken';

@Injectable({
  providedIn: 'root'
})
export class DecodeTokenService {

  constructor() { }

  decodeToken(token : string) : GetToken {
    return jwtDecode(token)
  }

}
