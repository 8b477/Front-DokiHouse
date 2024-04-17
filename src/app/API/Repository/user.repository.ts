import { Observable } from "rxjs";

import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { UserGateway } from "../interfaces/user.getaway";
import { UserModel } from "../models/userModels/UserModel";
import { UserUpdateName } from "../models/userModels/userUpdateModels/userUpdateName/UserUpdateName";
import { UpdatePasswd } from "../models/userModels/userUpdateModels/userUpdatePasswd/UserUpdatePasswd";
import { UserCheckMail } from "../models/userModels/userCheckMailModel/UserCheckMail";
import { UserUpdateMail } from "../models/userModels/userUpdateModels/userUpdateMail/UserUpdateMail";


export class UserRepository implements UserGateway{


// VARIABLES
    baseUrl = environment.apiUrl


// INJECTION
    httpClient = inject(HttpClient)
    handler = inject(HttpBackend)
    httpClientback = new HttpClient(this.handler) // --> For call endpoint AllowAnonymous


//GET
    getById(): Observable<UserModel> {
        return this.httpClient.get<UserModel>(`${this.baseUrl}User/Profil`)
    }

    getAll(): Observable<any> {
        throw new Error("Method not implemented.");
    }


// POST
    create(model : UserCreateModel): Observable<UserModel> {
        return this.httpClientback.post<UserModel>(`${this.baseUrl}User`, model)
    }

    checkPasswd(passwd : string) : Observable<boolean>{
        return this.httpClient.post<boolean>(this.baseUrl + 'User/CheckPasswd', { passwd })
    }

    checkMail(mail : UserCheckMail) : Observable<boolean>{
        return this.httpClient.post<boolean>(this.baseUrl + 'User/CheckMail', mail)
    }



// PUT
    updateName(name : UserUpdateName): Observable<UserUpdateName> {
        return this.httpClient.put<UserUpdateName>(`${this.baseUrl}User/Name`, {name})
    }

    updatePasswd(model : UpdatePasswd ): Observable<boolean> {
        return this.httpClient.put<boolean>(this.baseUrl + 'User/Pass', model)
    }

    updateEmail(mail : UserUpdateMail): Observable<UserUpdateMail> {
        return this.httpClient.put<UserUpdateMail>(this.baseUrl + 'User/Mail', mail)
    }



// DELETE
    delete(): Observable<any> {
        throw new Error("Method not implemented.")
    }



}