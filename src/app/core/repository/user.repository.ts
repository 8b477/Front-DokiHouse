import { Observable } from "rxjs";
import { UserGateway } from "../interfaces/user.getaway"
import { UserCreateModel } from "../models/userModels/userCreateModel/UserCreateModel";
import { HttpClient, HttpContext } from "@angular/common/http";
import { inject } from "@angular/core";

export class UserRepository implements UserGateway{

// INJECTION
httpClient = inject(HttpClient)
url : string = "https://localhost:7043/api/User"
// ICI JE VAIS FAIRE LA REQUETE VERS LE BACK
// JE GERE PAS D ERREUR ICI SI LA REQUETE NE FONCTIONNE PAS JE RETOURNE UNDEFINED
    getAll(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    getById(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    create(model : UserCreateModel): Observable<any> {
        return this.httpClient.post(this.url, model)
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