import { Observable } from "rxjs";
import { BonsaiGateway } from "../interfaces/bonsai.getaway";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BonsaiData } from "../models/blogModels/BonsaiData";
import { BonsaiModel } from "../models/bonsaiModels/bonsaiCreateModel";
import { BonsaiAsCreated } from "../models/bonsaiModels/bonsaiAsCreatedModel";

export class BonsaiRepository extends BonsaiGateway{

    //VARIABLES
    private baseUrl = environment.apiUrl

    // INJECTION
    private httpClient = inject(HttpClient)
    private handler = inject(HttpBackend)
    private httpClientback = new HttpClient(this.handler) // --> For call endpoint AllowAnonymous

    // PUBLIC METHODS
    override get(): Observable<BonsaiData[]> {
        return this.httpClientback.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetAllBonsaiAndPicture`);
    }

    override getById(): Observable<BonsaiData[]> {
        return this.httpClient.get<BonsaiData[]>(`${this.baseUrl}Bonsai/GetOwnBonsaiAndPicture`);
    }

    override post(bonsai : BonsaiModel): Observable<BonsaiAsCreated> {
        return this.httpClient.post<BonsaiAsCreated>(`${this.baseUrl}Bonsai`,bonsai);
    }

    override update(idBonsai : number, bonsaiToUpdate : BonsaiModel): Observable<any> {
        return this.httpClient.put(this.baseUrl + "Bonsai/" + idBonsai, bonsaiToUpdate);
    }

    override delete(): Observable<any> {
        throw new Error("Method not implemented.");
    }


}
