import { Observable } from "rxjs";

import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserGateway } from "../interfaces/user.getaway";
import { UserModel } from "../models/userModels/UserModel";


export class UserRepository implements UserGateway{


    //VARIABLES
    baseUrl = environment.apiUrl


    // INJECTION
    httpClient = inject(HttpClient)
    handler = inject(HttpBackend)
    httpClientback = new HttpClient(this.handler) // --> For call endpoint AllowAnonymous

    // PUBLIC METHODS
    create(model : UserCreateModel): Observable<UserModel> {
        return this.httpClientback.post<UserModel>(`${this.baseUrl}User`, model)
    }


    getById(): Observable<UserModel> {
        return this.httpClient.get<UserModel>(`${this.baseUrl}User/Profil`)
    }


    getAll(): Observable<any> {
        throw new Error("Method not implemented.");
    }


    updateName(): Observable<any> {
        throw new Error("Method not implemented.");
    }


    updatePasswd(): Observable<any> {
        throw new Error("Method not implemented.");
    }


    updateEmail(): Observable<any> {
        throw new Error("Method not implemented.");
    }


    delete(): Observable<any> {
        throw new Error("Method not implemented.");
    }


}