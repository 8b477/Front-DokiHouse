import { Observable } from "rxjs";
import { UserGateway } from "../interfaces/user.getaway"
import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { UserModel } from "../models/userModels/UserModel";

export class UserRepository implements UserGateway{


    //VARIABLES
    baseUrl = environment.apiUrl


    // INJECTION
    httpClient = inject(HttpClient)


    // PUBLIC METHODS
    create(model : UserCreateModel): Observable<UserModel> {
        return this.httpClient.post<UserModel>(`${this.baseUrl}User`, model)
    }


    getById(): Observable<UserModel> {
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        const requestOption = { headers : headers }

        return this.httpClient.get<UserModel>(`${this.baseUrl}User/Profil`, requestOption)
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